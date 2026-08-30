#!/usr/bin/env node
/**
 * Sync git-backup images to Cloudflare Images (the optimizer/holder).
 *
 * Custom IDs = git paths relative to `public/` (no leading slash), e.g.
 * `images/dr-jan-duffy.jpg` and `Image/hero_bg_1.jpg`.
 *
 * Usage:
 *   CLOUDFLARE_ACCOUNT_ID=... CLOUDFLARE_API_TOKEN=... npm run cloudflare:upload-images
 *
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const API = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`;

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
};

function walk(dir) {
  /** @type {{ file: string, id: string }[]} */
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const abs = path.join(dir, name);
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      out.push(...walk(abs));
      continue;
    }
    const ext = path.extname(name).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;
    const id = path.relative(PUBLIC_DIR, abs).split(path.sep).join("/");
    out.push({ file: abs, id });
  }
  return out;
}

function hashFromVariants(variants) {
  const url = Array.isArray(variants) ? variants[0] : undefined;
  if (typeof url !== "string") return null;
  const match = url.match(/^https:\/\/imagedelivery\.net\/([^/]+)\//i);
  return match?.[1] ?? null;
}

async function cfJson(url, init) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      ...(init?.headers ?? {}),
    },
  });
  const json = await res.json().catch(() => ({}));
  return { res, json };
}

async function verifyAccount() {
  const { res, json } = await cfJson(`${API}?per_page=1`);
  if (!res.ok || json.success === false) {
    const errors = JSON.stringify(json.errors ?? json);
    throw new Error(
      `Cloudflare Images API rejected the credentials (${res.status}): ${errors}\n` +
        "Token needs Account → Cloudflare Images → Edit. Account ID must match the Images account.",
    );
  }
  return hashFromVariants(json.result?.images?.[0]?.variants);
}

function sha256File(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function storedGitHash(result) {
  const meta = result?.meta ?? result?.metadata ?? {};
  return typeof meta.gitSha256 === "string" ? meta.gitSha256 : null;
}

async function getImage(id) {
  const { res, json } = await cfJson(`${API}/${encodeURIComponent(id)}`);
  if (res.status === 404 || json.success === false) return null;
  return json.result ?? null;
}

async function deleteImage(id) {
  const { res, json } = await cfJson(`${API}/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  if (!res.ok || json.success === false) {
    const body = JSON.stringify(json);
    if (res.status === 404) return;
    throw new Error(`Delete failed for ${id}: ${body}`);
  }
}

async function upload({ file, id }) {
  const gitSha256 = sha256File(file);
  const existing = await getImage(id);
  if (existing && storedGitHash(existing) === gitSha256) {
    console.log(`unchanged ${id}`);
    return { result: existing };
  }
  if (existing) {
    await deleteImage(id);
    console.log(`replacing ${id}`);
  }

  const ext = path.extname(file).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  const buffer = fs.readFileSync(file);
  const blob = new Blob([buffer], { type });
  const form = new FormData();
  form.append("file", blob, path.basename(file));
  form.append("id", id);
  form.append("requireSignedURLs", "false");
  form.append(
    "metadata",
    JSON.stringify({
      source: "git-backup",
      path: `public/${id}`,
      gitSha256,
    }),
  );

  const { res, json } = await cfJson(API, { method: "POST", body: form });
  if (!res.ok || json.success === false) {
    const body = JSON.stringify(json);
    if (
      body.includes("Duplicate") ||
      body.includes("already exists") ||
      json.errors?.some((e) =>
        /already exists|duplicate/i.test(e.message ?? ""),
      )
    ) {
      console.log(`exists  ${id}`);
      return json;
    }
    throw new Error(`Upload failed for ${id}: ${body}`);
  }
  console.log(`uploaded ${id}`);
  return json;
}

function writeOutputs(hash) {
  if (hash) {
    console.log(`CLOUDFLARE_ACCOUNT_HASH=${hash}`);
    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `account_hash=${hash}\n`);
    }
    if (process.env.GITHUB_STEP_SUMMARY) {
      fs.appendFileSync(
        process.env.GITHUB_STEP_SUMMARY,
        `## Cloudflare Images\n\nAccount hash: \`${hash}\`\n\nSet on Vercel:\n\n` +
          `\`NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true\`\n` +
          `\`NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH=${hash}\`\n`,
      );
    }
  }
}

async function main() {
  if (!ACCOUNT_ID || !TOKEN) {
    console.error(
      "CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN are required.\n" +
        "Cloudflare Images is the optimizer; git files under public/ are backup.",
    );
    process.exit(1);
  }

  const listedHash = await verifyAccount();
  const assets = walk(PUBLIC_DIR);
  if (assets.length === 0) {
    throw new Error(`No git-backup images found under ${PUBLIC_DIR}`);
  }

  console.log(
    `Syncing ${assets.length} git-backup images to Cloudflare Images…`,
  );
  let uploadedHash = listedHash;
  for (const asset of assets) {
    const json = await upload(asset);
    uploadedHash = hashFromVariants(json.result?.variants) || uploadedHash;
  }

  writeOutputs(uploadedHash);
  console.log(
    "Done. Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true and NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH on Vercel.",
  );
  if (!uploadedHash) {
    console.warn(
      "Could not read the account hash from the API. Copy it from Images → Developer Resources.",
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
