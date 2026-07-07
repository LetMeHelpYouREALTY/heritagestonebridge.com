import { MetadataRoute } from "next";
import { SITE_BUILD_DATE, parseContentLastUpdated } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import { HERITAGE_SITE_ROUTES } from "@/lib/heritage-stonebridge/routes";
import { HERITAGE_INDEXABLE_ROUTES } from "@/lib/heritage-stonebridge/indexable-routes";
import { HERITAGE_SEO_LANDING_PAGES } from "@/lib/heritage-stonebridge/seo-landing-pages";

const COMMUNITY_COMPARISON_ROUTES = [
  "/55-plus-communities/sun-city-summerlin",
  "/55-plus-communities/sun-city-anthem",
  "/55-plus-communities/sun-city-aliante",
  "/55-plus-communities/solera-anthem",
  "/55-plus-communities/trilogy-summerlin",
  "/55-plus-communities/del-webb-lake-las-vegas",
] as const;

type RouteEntry = {
  href: string;
  priority?: number;
  changeFrequency?: string;
  lastUpdated?: string;
};

function lastModForPath(path: string, explicit?: string): Date {
  if (explicit) return parseContentLastUpdated(explicit);
  const seoPage = HERITAGE_SEO_LANDING_PAGES.find((p) => p.slug === path);
  if (seoPage?.lastUpdated) return parseContentLastUpdated(seoPage.lastUpdated);
  return SITE_BUILD_DATE;
}

function toSitemapEntries(
  routes: RouteEntry[],
  baseUrl: string,
) {
  return routes.map((route) => ({
    url: route.href === "/" ? baseUrl : `${baseUrl}${route.href}`,
    lastModified: lastModForPath(route.href, route.lastUpdated),
    changeFrequency: (route.changeFrequency ?? "monthly") as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: route.priority ?? 0.8,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const routeMap = new Map<string, RouteEntry>();
  for (const route of [
    ...HERITAGE_SITE_ROUTES,
    ...HERITAGE_INDEXABLE_ROUTES,
  ]) {
    routeMap.set(route.href, route);
  }

  const heritageEntries = toSitemapEntries(Array.from(routeMap.values()), baseUrl);

  const comparisonEntries = COMMUNITY_COMPARISON_ROUTES.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: SITE_BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...heritageEntries, ...comparisonEntries];
}
