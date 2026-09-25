import { MetadataRoute } from "next";
import { SITE_BUILD_DATE, parseContentLastUpdated } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import { HERITAGE_SITE_ROUTES } from "@/lib/heritage-stonebridge/routes";
import { HERITAGE_INDEXABLE_ROUTES } from "@/lib/heritage-stonebridge/indexable-routes";
import { HERITAGE_SEO_LANDING_PAGES } from "@/lib/heritage-stonebridge/seo-landing-pages";
import { LEGACY_PATH_REDIRECTS } from "@/lib/heritage-stonebridge/legacy-redirects";

const COMMUNITY_COMPARISON_ROUTES = [
  "/55-plus-communities/sun-city-summerlin",
  "/55-plus-communities/sun-city-anthem",
  "/55-plus-communities/sun-city-aliante",
  "/55-plus-communities/solera-anthem",
  "/55-plus-communities/trilogy-summerlin",
  "/55-plus-communities/del-webb-lake-las-vegas",
] as const;

/**
 * Shared layout, NAP, and schema changed on 2026-09-25.
 * Google uses lastmod only when it matches a real edit, so this is a floor
 * and a later explicit date still wins.
 */
const CONTENT_REFRESHED_ON = new Date("2026-09-25T00:00:00.000Z");

type RouteEntry = {
  href: string;
  priority?: number;
  changeFrequency?: string;
  lastUpdated?: string;
};

/** Google flags a sitemap URL that 301s or is noindex. */
function isSitemapPath(href: string): boolean {
  if (LEGACY_PATH_REDIRECTS[href]) return false;
  if (href === "/listings" || href.startsWith("/listings/")) return false;
  return true;
}

function lastModForPath(path: string, explicit?: string): Date {
  const dates = [SITE_BUILD_DATE, CONTENT_REFRESHED_ON];
  if (explicit) dates.push(parseContentLastUpdated(explicit));
  const seoPage = HERITAGE_SEO_LANDING_PAGES.find((p) => p.slug === path);
  if (seoPage?.lastUpdated) dates.push(parseContentLastUpdated(seoPage.lastUpdated));
  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

function toSitemapEntries(routes: RouteEntry[], baseUrl: string) {
  return routes.filter((route) => isSitemapPath(route.href)).map((route) => ({
    url: route.href === "/" ? baseUrl : `${baseUrl}${route.href}`,
    lastModified: lastModForPath(route.href, route.lastUpdated),
    changeFrequency: (route.changeFrequency ??
      "monthly") as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: route.priority ?? 0.8,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const routeMap = new Map<string, RouteEntry>();
  for (const route of [
    ...HERITAGE_SITE_ROUTES,
    ...HERITAGE_INDEXABLE_ROUTES,
    ...COMMUNITY_COMPARISON_ROUTES.map((href) => ({
      href,
      priority: 0.75,
      changeFrequency: "monthly" as const,
    })),
    {
      href: "/security-policy",
      priority: 0.2,
      changeFrequency: "yearly" as const,
    },
  ]) {
    if (!isSitemapPath(route.href)) continue;
    routeMap.set(route.href, route);
  }

  return toSitemapEntries(Array.from(routeMap.values()), baseUrl);
}
