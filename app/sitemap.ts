import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { HERITAGE_SITE_ROUTES } from "@/lib/heritage-stonebridge/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return HERITAGE_SITE_ROUTES.map((route) => ({
    url: route.href === "/" ? baseUrl : `${baseUrl}${route.href}`,
    lastModified,
    changeFrequency: route.changeFrequency ?? "monthly",
    priority: route.priority ?? 0.8,
  }));
}
