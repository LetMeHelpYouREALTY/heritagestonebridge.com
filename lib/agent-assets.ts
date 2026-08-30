import { getSiteUrl } from "@/lib/site-url";
import {
  buildCloudflareImageUrl,
  isCloudflareImagesEnabled,
} from "@/lib/cloudflare-images";

/**
 * Agent portrait: components use the git-backup path as `src`.
 * Cloudflare Images (when enabled) is the optimizer/holder via the Next.js
 * image loader. Schema/OG use absolute Cloudflare URLs so crawlers skip
 * `/_next/image`.
 */
export const AGENT_PHOTO_ALT =
  "Dr. Jan Duffy, REALTOR® at Berkshire Hathaway HomeServices Nevada Properties";

/** Git backup path — also the Cloudflare Images custom ID (no leading slash). */
export const AGENT_PHOTO_GIT_BACKUP = "/images/dr-jan-duffy.jpg";
export const AGENT_OG_GIT_BACKUP = "/images/og-dr-jan-duffy.jpg";

export const AGENT_PHOTO_CF_ID = "images/dr-jan-duffy.jpg";
export const AGENT_OG_CF_ID = "images/og-dr-jan-duffy.jpg";

export { isCloudflareImagesEnabled };

/** On-page portrait src for next/image (always the git path). */
export function agentPhotoUrl(width = 800): string {
  if (isCloudflareImagesEnabled()) {
    return buildCloudflareImageUrl(AGENT_PHOTO_GIT_BACKUP, width, 85);
  }
  return AGENT_PHOTO_GIT_BACKUP;
}

/** 1200×630 social card — absolute when served from Cloudflare Images. */
export function agentOgImagePath(): string {
  if (isCloudflareImagesEnabled()) {
    return buildCloudflareImageUrl(AGENT_OG_GIT_BACKUP, 1200, 85);
  }
  return AGENT_OG_GIT_BACKUP;
}

export function absoluteAgentPhotoUrl(width = 800): string {
  const src = agentPhotoUrl(width);
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${getSiteUrl()}${src}`;
}

export const AGENT_PHOTO = {
  alt: AGENT_PHOTO_ALT,
  width: 800,
  height: 800,
  src: AGENT_PHOTO_GIT_BACKUP,
};

export const AGENT_OG_IMAGE_PATH = agentOgImagePath();
