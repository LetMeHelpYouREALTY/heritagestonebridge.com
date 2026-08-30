#!/usr/bin/env node
/**
 * Upload git-backed originals from public/images to Cloudflare Images
 * and create named device variants (phone / tablet / desktop / card / og).
 *
 * Git remains the backup. Cloudflare Images stores and serves the
 * device-specific files a homebuyer or homeseller loads.
 *
 * Required env:
 *   CLOUDFLARE_API_TOKEN     Images Write
 *   CLOUDFLARE_ACCOUNT_ID
 *
 * Optional:
 *   CLOUDFLARE_IMAGES_FORCE=true   replace existing custom IDs
 *
 * After a successful run, set on Vercel:
 *   NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true
 *   NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH=<hash printed below>
 *
 * Usage: npm run images:upload
 */

import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");
const API = "https://api.cloudflare.com/client/v4";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const FORCE = process.env.CLOUDFLARE_IMAGES_FORCE === "true";

const VARIANTS = {
  phone: { width: 640, fit: "cover", metadata: "none" },
  tablet: { width: 1024, fit: "cover", metadata: "none" },
  desktop: { width: 1920, fit: "cover", metadata: "none" },
  card: { width: 800, fit: "cover", metadata: "none" },
  og: { width: 1200, height: 630, fit: "cover", metadata: "none" },
};

const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif", ".gif"]);

function fail(message) {
  console.error(message);
  process.exit(1);
}

async function cf(pathname, init = {}) {
  const response = await fetch(`${API}${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      ...(init.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...(init.headers ?? {}),
    },
  });
  const json = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, json };
}

async function walkFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(full)));
    } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function customIdFor(filePath) {
  const relative = path.relative(path.join(ROOT, "public"), filePath);
  return relative.replace(/\.(webp|avif|jpe?g|png|gif)$/i, "").replaceAll("\\", "/");
}

async function ensureVariants() {
  const listed = await cf(`/accounts/${ACCOUNT_ID}/images/v1/variants`);
  const existing = new Set(
    Object.keys(listed.json?.result?.variants ?? listed.json?.result ?? {}),
  );
  // API shape: result.variants is a map keyed by variant id
  if (listed.json?.result?.variants && typeof listed.json.result.variants === "object") {
    for (const key of Object.keys(listed.json.result.variants)) {
      existing.add(key);
    }
  }

  for (const [id, options] of Object.entries(VARIANTS)) {
    if (existing.has(id)) {
      console.log(`variant exists: ${id}`);
      continue;
    }
    const created = await cf(`/accounts/${ACCOUNT_ID}/images/v1/variants`, {
      method: "POST",
      body: JSON.stringify({
        id,
        options,
        neverRequireSignedURLs: true,
      }),
    });
    if (!created.ok) {
      const message = created.json?.errors?.[0]?.message ?? JSON.stringify(created.json);
      if (/already exists/i.test(message)) {
        console.log(`variant exists: ${id}`);
        continue;
      }
      fail(`Failed to create variant ${id}: ${message}`);
    }
    console.log(`variant created: ${id}`);
  }
}

async function imageExists(id) {
  const result = await cf(`/accounts/${ACCOUNT_ID}/images/v1/${encodeURIComponent(id)}`);
  return result.ok;
}

async function deleteImage(id) {
  const result = await cf(`/accounts/${ACCOUNT_ID}/images/v1/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  if (!result.ok) {
    const message = result.json?.errors?.[0]?.message ?? JSON.stringify(result.json);
    fail(`Failed to delete ${id}: ${message}`);
  }
}

function mimeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".webp") return "image/webp";
  if (ext === ".png") return "image/png";
  if (ext === ".avif") return "image/avif";
  if (ext === ".gif") return "image/gif";
  return "image/jpeg";
}

async function uploadFile(filePath) {
  const id = customIdFor(filePath);
  if (await imageExists(id)) {
    if (!FORCE) {
      console.log(`skip (exists): ${id}`);
      return { id, skipped: true };
    }
    await deleteImage(id);
    console.log(`replaced: ${id}`);
  }

  const bytes = await readFile(filePath);
  const form = new FormData();
  form.append(
    "file",
    new File([bytes], path.basename(filePath), { type: mimeFor(filePath) }),
  );
  form.append("id", id);
  form.append("requireSignedURLs", "false");
  form.append(
    "metadata",
    JSON.stringify({ source: "git", path: path.relative(ROOT, filePath) }),
  );

  const uploaded = await cf(`/accounts/${ACCOUNT_ID}/images/v1`, {
    method: "POST",
    body: form,
  });
  if (!uploaded.ok) {
    const message = uploaded.json?.errors?.[0]?.message ?? JSON.stringify(uploaded.json);
    fail(`Failed to upload ${id}: ${message}`);
  }

  const variants = uploaded.json?.result?.variants ?? [];
  console.log(`uploaded: ${id}`);
  return { id, variants, skipped: false };
}

async function main() {
  if (!ACCOUNT_ID || !TOKEN) {
    fail(
      "Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN (Images Write) before uploading.",
    );
  }

  const dir = await stat(IMAGES_DIR).catch(() => null);
  if (!dir?.isDirectory()) {
    fail(`Missing ${IMAGES_DIR}`);
  }

  console.log("Creating named device variants (phone / tablet / desktop / card / og)…");
  await ensureVariants();

  const files = await walkFiles(IMAGES_DIR);
  if (files.length === 0) {
    fail("No image files found under public/images");
  }

  console.log(`Uploading ${files.length} git originals to Cloudflare Images…`);
  let accountHash = "";
  let uploaded = 0;
  let skipped = 0;

  for (const file of files) {
    const result = await uploadFile(file);
    if (result.skipped) {
      skipped += 1;
    } else {
      uploaded += 1;
      const sample = result.variants?.[0];
      if (!accountHash && typeof sample === "string") {
        const match = sample.match(/^https:\/\/imagedelivery\.net\/([^/]+)\//);
        if (match) accountHash = match[1];
      }
    }
  }

  console.log(`Done. uploaded=${uploaded} skipped=${skipped}`);
  if (accountHash) {
    console.log(`
Set these on Vercel (Production + Preview):
  NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true
  NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH=${accountHash}

Hero example:
  https://imagedelivery.net/${accountHash}/images/hero/hero-heritage-stonebridge/phone
  https://imagedelivery.net/${accountHash}/images/hero/hero-heritage-stonebridge/tablet
  https://imagedelivery.net/${accountHash}/images/hero/hero-heritage-stonebridge/desktop
`);
  } else {
    console.log(`
If this was a skip-only run, copy NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH from
Cloudflare Dashboard → Images → Developer Resources.
`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
