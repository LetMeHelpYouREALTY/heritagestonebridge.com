import type { Metadata } from "next";
import { AGENT_OG_IMAGE_PATH } from "@/lib/agent-assets";
import { getSiteUrl } from "@/lib/site-url";
import type { HeritagePageContent } from "@/lib/heritage-stonebridge/types";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  robots?: Metadata["robots"];
  ogImagePath?: string;
};

/** Default OG/Twitter image — agent portrait on a 1200×630 social card. */
export const DEFAULT_OG_IMAGE_PATH = AGENT_OG_IMAGE_PATH;

/** Sitemap baseline; heritage pages override via lastUpdated where available. */
export const SITE_BUILD_DATE = new Date("2026-08-30T00:00:00.000Z");

export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function canonicalUrl(path: string): string {
  const normalized = canonicalPath(path);
  const base = getSiteUrl();
  return normalized === "/" ? base : `${base}${normalized}`;
}

export function absoluteOgImage(path: string = DEFAULT_OG_IMAGE_PATH): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Parse heritage "July 2026" / ISO strings for sitemap lastmod. */
export function parseContentLastUpdated(value?: string): Date {
  if (!value) return SITE_BUILD_DATE;
  const iso = Date.parse(value);
  if (!Number.isNaN(iso)) return new Date(iso);
  const monthYear = value.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYear) {
    const parsed = Date.parse(`${monthYear[1]} 1, ${monthYear[2]}`);
    if (!Number.isNaN(parsed)) return new Date(parsed);
  }
  return SITE_BUILD_DATE;
}

export function buildPageMetadata({
  title,
  description,
  path,
  openGraphTitle,
  openGraphDescription,
  robots,
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
}: BuildPageMetadataInput): Metadata {
  const url = canonicalUrl(path);
  const ogImage = absoluteOgImage(ogImagePath);
  const ogTitle = openGraphTitle ?? title;
  const ogDescription = openGraphDescription ?? description;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      url,
      siteName: "Heritage at Stonebridge | Dr. Jan Duffy",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Dr. Jan Duffy — Heritage at Stonebridge Summerlin 55+ REALTOR",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
    robots: robots ?? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
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
