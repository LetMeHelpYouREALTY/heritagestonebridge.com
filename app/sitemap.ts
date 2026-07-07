import { MetadataRoute } from "next";
import { SITE_BUILD_DATE } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import { HERITAGE_SITE_ROUTES } from "@/lib/heritage-stonebridge/routes";
import { HERITAGE_INDEXABLE_ROUTES } from "@/lib/heritage-stonebridge/indexable-routes";

const COMMUNITY_COMPARISON_ROUTES = [
  "/55-plus-communities/sun-city-summerlin",
  "/55-plus-communities/sun-city-anthem",
  "/55-plus-communities/sun-city-aliante",
  "/55-plus-communities/solera-anthem",
  "/55-plus-communities/trilogy-summerlin",
  "/55-plus-communities/del-webb-lake-las-vegas",
] as const;

function toSitemapEntries(
  routes: { href: string; priority?: number; changeFrequency?: string }[],
  baseUrl: string,
  lastModified: Date,
) {
  return routes.map((route) => ({
    url: route.href === "/" ? baseUrl : `${baseUrl}${route.href}`,
    lastModified,
    changeFrequency: (route.changeFrequency ?? "monthly") as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: route.priority ?? 0.8,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = SITE_BUILD_DATE;

  const routeMap = new Map<string, (typeof HERITAGE_SITE_ROUTES)[0]>();
  for (const route of [
    ...HERITAGE_SITE_ROUTES,
    ...HERITAGE_INDEXABLE_ROUTES,
  ]) {
    routeMap.set(route.href, route);
  }

  const heritageEntries = toSitemapEntries(
    Array.from(routeMap.values()),
    baseUrl,
    lastModified,
  );

  const comparisonEntries = COMMUNITY_COMPARISON_ROUTES.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...heritageEntries, ...comparisonEntries];
}
