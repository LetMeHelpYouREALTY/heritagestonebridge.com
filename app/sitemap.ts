import { MetadataRoute } from "next";
import { SITE_BUILD_DATE } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import { HERITAGE_SITE_ROUTES } from "@/lib/heritage-stonebridge/routes";

const COMMUNITY_COMPARISON_ROUTES = [
  "/55-plus-communities/sun-city-summerlin",
  "/55-plus-communities/sun-city-anthem",
  "/55-plus-communities/sun-city-aliante",
  "/55-plus-communities/solera-anthem",
  "/55-plus-communities/trilogy-summerlin",
  "/55-plus-communities/del-webb-lake-las-vegas",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = SITE_BUILD_DATE;

  const heritageEntries = HERITAGE_SITE_ROUTES.map((route) => ({
    url: route.href === "/" ? baseUrl : `${baseUrl}${route.href}`,
    lastModified,
    changeFrequency: route.changeFrequency ?? "monthly",
    priority: route.priority ?? 0.8,
  }));

  const comparisonEntries = COMMUNITY_COMPARISON_ROUTES.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...heritageEntries, ...comparisonEntries];
}
