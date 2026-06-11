/**
 * Canonical production URL for heritagestonebridge.com.
 * Override via NEXT_PUBLIC_BASE_URL on Vercel Production.
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_BASE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.heritagestonebridge.com";

  return raw.replace(/\/$/, "");
}

export function getSiteHostname(): string {
  try {
    return new URL(getSiteUrl()).hostname.replace(/^www\./, "");
  } catch {
    return "heritagestonebridge.com";
  }
}
