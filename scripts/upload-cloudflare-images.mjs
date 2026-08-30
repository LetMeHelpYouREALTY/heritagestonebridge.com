#!/usr/bin/env node
/**
 * Upload git-backup portraits to Cloudflare Images (the holder).
 *
 * Git keeps copies under public/images/. Cloudflare Images is what the site
 * serves when NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=true.
 *
 * Usage:
 *   CLOUDFLARE_ACCOUNT_ID=... CLOUDFLARE_API_TOKEN=... node scripts/upload-cloudflare-images.mjs
 *
 * Custom IDs match git paths (no leading slash) per
 * https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 */

import fs from "node:fs";
import path from "node:path";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;

const ASSETS = [
  {
    file: "public/images/dr-jan-duffy.jpg",
    id: "images/dr-jan-duffy.jpg",
  },
  {
    file: "public/images/og-dr-jan-duffy.jpg",
    id: "images/og-dr-jan-duffy.jpg",
  },
];

async function upload({ file, id }) {
  const abs = path.resolve(file);
  const buffer = fs.readFileSync(abs);
  const blob = new Blob([buffer], { type: "image/jpeg" });
  const form = new FormData();
  form.append("file", blob, path.basename(file));
  form.append("id", id);
  form.append("requireSignedURLs", "false");
  form.append(
    "metadata",
    JSON.stringify({ source: "git-backup", path: file }),
  );

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${TOKEN}` },
      body: form,
    },
  );
  const json = await res.json();
  if (!res.ok || !json.success) {
    const body = JSON.stringify(json);
    if (body.includes("Duplicate") || body.includes("already exists")) {
      console.log(`exists: ${id}`);
      return json;
    }
    throw new Error(`Upload failed for ${id}: ${body}`);
  }
  console.log(`uploaded: ${id}`);
  console.log(`  variants: ${(json.result?.variants || []).join(", ")}`);
  return json;
}

async function main() {
  if (!ACCOUNT_ID || !TOKEN) {
    console.error(
      "CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN are required.\n" +
        "Cloudflare Images is the holder; git files are backup only.",
    );
    process.exit(1);
  }
  for (const asset of ASSETS) {
    if (!fs.existsSync(asset.file)) {
      throw new Error(`Git backup missing: ${asset.file}`);
    }
    await upload(asset);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
