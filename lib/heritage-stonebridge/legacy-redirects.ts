/**
 * Single source of truth for heritagestonebridge.com legacy URL → canonical path.
 * Middleware applies these in one hop (apex + trailing slash + legacy path).
 */

export const CANONICAL_HOST = "www.heritagestonebridge.com";

const SCHEMA_PAGES = [
  "community",
  "amenities",
  "selling-guide",
  "lifestyle",
  "location",
  "summerlin-55-plus",
  "floor-plans",
  "faq",
  "guard-gated-living",
  "homes-for-sale",
  "about",
  "buying-guide",
  "downsizing",
  "market-update",
  "vs-sun-city-summerlin",
  "vs-trilogy-summerlin",
  "downtown-summerlin",
  "hoa-fees",
] as const;

export const LEGACY_PATH_REDIRECTS: Record<string, string> = {
  // GSC "Redirect error" URLs (Jul 2026)
  "/testimonials": "/google-business",
  "/sun-city-del-webb-real-estate": "/55-plus-communities/del-webb-lake-las-vegas",
  "/blog": "/market-update",
  "/sitemap": "/sitemap.xml",
  "/mountain-view-homes": "/red-rock-canyon-communities",
  "/heritage-at-stonebridge-homes-for-sale": "/homes-for-sale",
  "/summerlin-55-plus-communities": "/summerlin-55-plus",
  "/55-plus-communities-las-vegas-for-sale": "/55-plus-communities-las-vegas",
  "/luxury-homes": "/homes-for-sale",
  "/boulder-city-homes": "/las-vegas-real-estate",
  "/golf-course-homes": "/vs-sun-city-summerlin",
  "/luxury-retirement-communities-las-vegas": "/best-55-plus-communities-las-vegas",
  "/homes-for-sale-stonebridge-summerlin": "/homes-for-sale",
  "/real-estate": "/las-vegas-real-estate",
  "/55-and-over-communities-las-vegas-for-rent": "/55-plus-communities-las-vegas",
  "/55-plus-communities-red-rock-canyon": "/red-rock-canyon-communities",
  "/affordable-55-plus-communities-las-vegas": "/55-plus-communities-las-vegas",

  // Prior GSC 404 fixes & site consolidation
  "/55-plus-communities/heritage-stonebridge": "/community",
  "/55-plus-communities": "/summerlin-55-plus",
  "/listings": "/homes-for-sale",
  "/market-report": "/market-update",
  "/market-insights": "/market-update",
  "/new-construction": "/floor-plans",
  "/why-berkshire-hathaway": "/about",
  "/relocation": "/downsizing",
  "/services": "/contact",
  "/investment-properties": "/homes-for-sale",
  "/showing": "/contact",
  "/home": "/",
  ...Object.fromEntries(SCHEMA_PAGES.map((page) => [`/${page}-schema`, `/${page}`])),
};

export const PREFIX_PATH_REDIRECTS = [
  { prefix: "/neighborhoods", destination: "/location" },
  { prefix: "/buyers", destination: "/buying-guide" },
  { prefix: "/sellers", destination: "/selling-guide" },
] as const;

export function resolveLegacyRedirect(pathname: string): string | null {
  const exact = LEGACY_PATH_REDIRECTS[pathname];
  if (exact) return exact;

  for (const { prefix, destination } of PREFIX_PATH_REDIRECTS) {
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      return destination;
    }
  }

  return null;
}
