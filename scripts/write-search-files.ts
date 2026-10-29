import { readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  INDEXABLE_PATHS,
  imagesSitemapXml,
  pagesSitemapXml,
  robotsTxt,
  sitemapIndexXml,
} from "../src/lib/seo/search-files.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const routesDir = join(root, "src", "routes");

const routePaths = new Set<string>();
for (const entry of readdirSync(routesDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  if (entry.name === "sitemap-test") continue;
  routePaths.add(`/${entry.name}/`);
}
routePaths.add("/");

const listed = new Set<string>(INDEXABLE_PATHS);
const missing = [...routePaths].filter((path) => !listed.has(path)).sort();
const extra = [...listed].filter((path) => !routePaths.has(path)).sort();
if (missing.length > 0 || extra.length > 0) {
  throw new Error(
    `Sitemap paths do not match src/routes. Missing: ${missing.join(", ") || "none"}. Extra: ${extra.join(", ") || "none"}.`,
  );
}

const files: Record<string, string> = {
  "sitemap.xml": sitemapIndexXml(),
  "sitemap-pages.xml": pagesSitemapXml(),
  "sitemap-images.xml": imagesSitemapXml(),
  "robots.txt": robotsTxt(),
};

for (const [name, body] of Object.entries(files)) {
  writeFileSync(join(publicDir, name), body);
}

console.log(`Wrote ${Object.keys(files).join(", ")} (${INDEXABLE_PATHS.length} pages).`);
