/**
 * Canonical information architecture for heritagestonebridge.com
 */
export type HeritageNavItem = {
  href: string;
  label: string;
  description?: string;
  priority?: number;
  changeFrequency?: "daily" | "weekly" | "monthly" | "yearly";
};

export const HERITAGE_SITE_ROUTES: HeritageNavItem[] = [
  { href: "/", label: "Home", priority: 1.0, changeFrequency: "weekly" },
  {
    href: "/homes-for-sale",
    label: "Homes for Sale",
    priority: 0.95,
    changeFrequency: "daily",
  },
  {
    href: "/community",
    label: "Community",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    href: "/amenities",
    label: "Amenities",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/floor-plans",
    label: "Floor Plans",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/hoa-fees",
    label: "HOA & Fees",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/location",
    label: "Location",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/buying-guide",
    label: "Buying Guide",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/selling-guide",
    label: "Selling Guide",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/downsizing",
    label: "Downsizing",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/market-update",
    label: "Market Update",
    priority: 0.85,
    changeFrequency: "weekly",
  },
  { href: "/faq", label: "FAQ", priority: 0.8, changeFrequency: "monthly" },
  { href: "/about", label: "About", priority: 0.85, changeFrequency: "monthly" },
  {
    href: "/contact",
    label: "Contact",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/google-business",
    label: "Google Business",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/vs-sun-city-summerlin",
    label: "vs Sun City Summerlin",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/vs-trilogy-summerlin",
    label: "vs Trilogy Summerlin",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/lifestyle",
    label: "55+ Lifestyle",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/guard-gated-living",
    label: "Guard-Gated Living",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/downtown-summerlin",
    label: "Downtown Summerlin",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/home-valuation",
    label: "Home Valuation",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/summerlin-55-plus",
    label: "Summerlin 55+ Guide",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/market-analysis",
    label: "Market Analysis",
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    href: "/market-reports",
    label: "Market Reports",
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    href: "/55-plus-communities-las-vegas",
    label: "55+ Communities Las Vegas",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  {
    href: "/active-adult-communities",
    label: "Active Adult Communities",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  {
    href: "/best-55-plus-communities-las-vegas",
    label: "Best 55+ Communities",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  {
    href: "/northwest-las-vegas",
    label: "Northwest Las Vegas",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/las-vegas-real-estate",
    label: "Las Vegas Real Estate",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    href: "/red-rock-canyon-communities",
    label: "Red Rock Canyon Area",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/summerlin-homes",
    label: "Summerlin Homes",
    priority: 0.92,
    changeFrequency: "daily",
  },
  {
    href: "/active-adult-lifestyle-communities",
    label: "Lifestyle Communities",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/new-55-plus-communities-las-vegas",
    label: "New 55+ Communities",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  {
    href: "/55-plus-condos-las-vegas",
    label: "55+ Condos Las Vegas",
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    href: "/55-and-over-communities-summerlin-las-vegas",
    label: "55+ Summerlin Las Vegas",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/55-plus-communities",
    label: "55+ Communities Hub",
    priority: 0.92,
    changeFrequency: "weekly",
  },
  {
    href: "/sellers",
    label: "Sell at Heritage Stonebridge",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods",
    label: "Summerlin Area Neighborhoods",
    priority: 0.85,
    changeFrequency: "monthly",
  },
];

export const HERITAGE_PRIMARY_NAV = HERITAGE_SITE_ROUTES.filter((r) =>
  [
    "/",
    "/homes-for-sale",
    "/community",
    "/amenities",
    "/buying-guide",
    "/contact",
  ].includes(r.href)
);

export const HERITAGE_COMMUNITY_NAV = HERITAGE_SITE_ROUTES.filter((r) =>
  [
    "/community",
    "/floor-plans",
    "/hoa-fees",
    "/location",
    "/guard-gated-living",
    "/downtown-summerlin",
    "/lifestyle",
  ].includes(r.href)
);

export const HERITAGE_BUYER_NAV = HERITAGE_SITE_ROUTES.filter((r) =>
  [
    "/buying-guide",
    "/downsizing",
    "/vs-sun-city-summerlin",
    "/vs-trilogy-summerlin",
    "/summerlin-55-plus",
    "/market-update",
    "/market-analysis",
    "/market-reports",
    "/summerlin-homes",
    "/home-valuation",
  ].includes(r.href)
);
