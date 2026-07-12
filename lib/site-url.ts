import { CANONICAL_HOST } from "@/lib/heritage-stonebridge/legacy-redirects";

/**
 * Canonical production URL for heritagestonebridge.com.
 * Always normalizes to https://www — apex host in env vars is upgraded so
 * rel=canonical, JSON-LD, and sitemaps never disagree with middleware.
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_BASE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    `https://${CANONICAL_HOST}`;

  try {
    const url = new URL(raw.replace(/\/$/, "") || `https://${CANONICAL_HOST}`);
    if (
      url.hostname === "heritagestonebridge.com" ||
      url.hostname === CANONICAL_HOST
    ) {
      url.hostname = CANONICAL_HOST;
      url.protocol = "https:";
    }
    return url.origin;
  } catch {
    return `https://${CANONICAL_HOST}`;
  }
}

export function getSiteHostname(): string {
  try {
    return new URL(getSiteUrl()).hostname.replace(/^www\./, "");
  } catch {
    return "heritagestonebridge.com";
  }
}
