import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import type { HeritagePageContent } from "@/lib/heritage-stonebridge/types";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  robots?: Metadata["robots"];
};

/** Stable build date for sitemap lastModified (avoids fake daily churn). */
export const SITE_BUILD_DATE = new Date("2026-06-01T00:00:00.000Z");

export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function canonicalUrl(path: string): string {
  const normalized = canonicalPath(path);
  const base = getSiteUrl();
  return normalized === "/" ? base : `${base}${normalized}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  openGraphTitle,
  openGraphDescription,
  robots,
}: BuildPageMetadataInput): Metadata {
  const normalizedPath = canonicalPath(path);
  const url = canonicalUrl(path);

  return {
    title,
    description,
    alternates: {
      // Absolute URL avoids www/apex duplicate clusters in Search Console
      canonical: url,
    },
    openGraph: {
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      type: "website",
      url,
    },
    robots: robots ?? {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function heritagePageMetadata(content: HeritagePageContent): Metadata {
  const title =
    typeof content.metadata.title === "string"
      ? content.metadata.title
      : "Heritage Stonebridge | Homes By Dr. Jan Duffy";
  const description =
    typeof content.metadata.description === "string"
      ? content.metadata.description
      : "";

  return buildPageMetadata({
    title,
    description,
    path: content.slug,
  });
}
