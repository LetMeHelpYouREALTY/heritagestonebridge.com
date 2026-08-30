import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const allowSite: MetadataRoute.Robots["rules"] = {
    userAgent: "*",
    allow: "/",
    // Block API + font blobs only — do NOT block /_next/static (Google needs JS/CSS)
    disallow: ["/api/", "/_next/static/media/"],
  };

  return {
    rules: allowSite,
    sitemap: `${getSiteUrl()}/sitemap.xml`,
    host: getSiteUrl(),
  };
}
