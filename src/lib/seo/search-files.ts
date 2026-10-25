import {
  HERO_IMAGE,
  communityAmenities,
  communityImage,
  communityPhoto,
  communityPhotos,
} from "~/config/community";

/**
 * Files Google Search Console fetches are the copies in public/.
 * The route handlers serve the same strings so a server render cannot drift.
 * Regenerate public/ with: node --experimental-strip-types scripts/write-search-files.ts
 */

export const SITE_ORIGIN = "https://heritagestonebridge.com";

/** Date these search files were rebuilt. Not a per-page content date. */
const SITEMAP_INDEX_LASTMOD = "2026-10-25";

/**
 * Footer and header portrait. Must match DR_JAN_PORTRAIT in AgentPortrait.tsx.
 * The tablet variant is a different URL and is not the img src.
 */
const PORTRAIT_IMAGE =
  "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/fc4911a4-7842-470b-a54d-4589039a2a00/w=192";

/** Indexable pages. sitemap-test is noindex and stays out. */
export const INDEXABLE_PATHS = [
  "/",
  "/55-and-over-communities-las-vegas-for-rent/",
  "/55-and-over-communities-summerlin-las-vegas/",
  "/55-plus-communities/",
  "/55-plus-communities-las-vegas/",
  "/55-plus-communities-las-vegas-for-sale/",
  "/55-plus-communities-red-rock-canyon/",
  "/55-plus-condos-las-vegas/",
  "/about/",
  "/active-adult-communities/",
  "/active-adult-lifestyle-communities/",
  "/affordable-55-plus-communities-las-vegas/",
  "/amenities/",
  "/best-55-plus-communities-las-vegas/",
  "/blog/",
  "/boulder-city-homes/",
  "/buy-heritage-at-stonebridge/",
  "/community/",
  "/community-comparison/",
  "/community-guides/",
  "/contact/",
  "/first-time-buyers/",
  "/floor-plans/",
  "/gated-communities/",
  "/golf-course-homes/",
  "/henderson-active-adult-communities/",
  "/henderson-real-estate/",
  "/heritage-at-stonebridge-homes-for-sale/",
  "/hoa-fees/",
  "/home-selling-guide/",
  "/homes-for-sale-stonebridge-summerlin/",
  "/las-vegas-real-estate/",
  "/luxury-homes/",
  "/luxury-living-guide/",
  "/luxury-retirement-communities-las-vegas/",
  "/market-analysis/",
  "/market-reports/",
  "/mountain-view-homes/",
  "/nearby/",
  "/neighborhood-insights/",
  "/new-55-plus-communities-las-vegas/",
  "/new-listing-heritage-at-stonebridge/",
  "/northwest-las-vegas/",
  "/privacy-policy/",
  "/questions/",
  "/real-estate/",
  "/red-rock-canyon-communities/",
  "/retirement-communities-las-vegas/",
  "/sell-heritage-at-stonebridge/",
  "/sitemap/",
  "/summerlin-55-plus-communities/",
  "/summerlin-homes/",
  "/sun-city-del-webb-real-estate/",
  "/terms-of-service/",
  "/testimonials/",
  "/what-is-heritage-at-stonebridge/",
] as const;

const NO_HERO = new Set(["/privacy-policy/", "/terms-of-service/", "/sitemap/"]);

const GALLERY_PATHS = new Set(["/", "/amenities/"]);

const AMENITY_GRID_PATHS = new Set(["/amenities/", "/buy-heritage-at-stonebridge/"]);

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pageUrl(path: string): string {
  return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

type ImageEntry = { loc: string; title: string };

function imagesFor(path: string): ImageEntry[] {
  const images: ImageEntry[] = [
    { loc: PORTRAIT_IMAGE, title: "Dr. Jan Duffy" },
  ];
  if (!NO_HERO.has(path)) {
    images.push({
      loc: HERO_IMAGE.mobile,
      title: communityPhoto("clubhouse-exterior").alt,
    });
  }
  if (GALLERY_PATHS.has(path)) {
    for (const photo of communityPhotos) {
      images.push({ loc: communityImage(photo.id), title: photo.alt });
    }
  } else if (AMENITY_GRID_PATHS.has(path)) {
    for (const amenity of communityAmenities) {
      if (!amenity.photo) continue;
      const photo = communityPhoto(amenity.photo);
      images.push({ loc: communityImage(photo.id), title: photo.alt });
    }
  }
  const seen = new Set<string>();
  return images.filter((image) => {
    if (seen.has(image.loc)) return false;
    seen.add(image.loc);
    return true;
  });
}

export function pagesSitemapXml(): string {
  const urls = INDEXABLE_PATHS.map(
    (path) => `  <url>\n    <loc>${pageUrl(path)}</loc>\n  </url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function imagesSitemapXml(): string {
  const urls = INDEXABLE_PATHS.map((path) => {
    const images = imagesFor(path)
      .map(
        (image) => `    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
    </image:image>`,
      )
      .join("\n");
    return `  <url>\n    <loc>${pageUrl(path)}</loc>\n${images}\n  </url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

export function sitemapIndexXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_ORIGIN}/sitemap-pages.xml</loc>
    <lastmod>${SITEMAP_INDEX_LASTMOD}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_ORIGIN}/sitemap-images.xml</loc>
    <lastmod>${SITEMAP_INDEX_LASTMOD}</lastmod>
  </sitemap>
</sitemapindex>
`;
}

export function robotsTxt(): string {
  return `# https://heritagestonebridge.com/
User-agent: *
Allow: /
Disallow: /sitemap-test/

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
}
