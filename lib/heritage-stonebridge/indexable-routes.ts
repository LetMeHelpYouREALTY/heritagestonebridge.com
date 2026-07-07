import type { HeritageNavItem } from "./routes";

/** Routes with dedicated page.tsx that must stay indexable (no middleware redirects). */
export const HERITAGE_INDEXABLE_ROUTES: HeritageNavItem[] = [
  {
    href: "/55-plus-communities",
    label: "55+ Communities",
    priority: 0.92,
    changeFrequency: "weekly",
  },
  {
    href: "/55-plus-communities/heritage-stonebridge",
    label: "Heritage at Stonebridge",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/55-and-over-communities-summerlin-las-vegas",
    label: "55+ Summerlin Las Vegas",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods",
    label: "Las Vegas Neighborhoods",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/summerlin",
    label: "Summerlin",
    priority: 0.88,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/henderson",
    label: "Henderson",
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/green-valley",
    label: "Green Valley",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/the-ridges",
    label: "The Ridges",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/southern-highlands",
    label: "Southern Highlands",
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/centennial-hills",
    label: "Centennial Hills",
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/mountains-edge",
    label: "Mountains Edge",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/skye-canyon",
    label: "Skye Canyon",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/inspirada",
    label: "Inspirada",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/neighborhoods/north-las-vegas",
    label: "North Las Vegas",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    href: "/sellers",
    label: "Sell Your Home",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/sellers/downsizing",
    label: "Seller Downsizing",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/sellers/relocation",
    label: "Seller Relocation",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    href: "/sellers/move-up",
    label: "Move-Up Sellers",
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    href: "/sellers/divorce-probate",
    label: "Divorce & Probate Sales",
    priority: 0.8,
    changeFrequency: "monthly",
  },
];
