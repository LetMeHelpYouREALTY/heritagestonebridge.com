/**
 * Redirects for GSC "Not found (404)" URLs — heritagestonebridge.com
 * @type {import('next').Redirect[]}
 */
export const HERITAGE_SCHEMA_REDIRECTS = [
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
].map((page) => ({
  source: `/${page}-schema`,
  destination: `/${page}`,
  permanent: true,
}));

/** Malformed crawl URLs from embeds, tel links, and legacy paths */
export const HERITAGE_LEGACY_REDIRECTS = [
  { source: "/showing", destination: "/contact", permanent: true },
  { source: "/\\+17025001942", destination: "/contact", permanent: true },
  { source: "/market-insights", destination: "/market-update", permanent: true },
];

export const HERITAGE_ALL_EXTRA_REDIRECTS = [
  ...HERITAGE_SCHEMA_REDIRECTS,
  ...HERITAGE_LEGACY_REDIRECTS,
];
