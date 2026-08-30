import { getSiteUrl } from "@/lib/site-url";

/**
 * Agent portrait ownership:
 * - Holder: Cloudflare Images (`imagedelivery.net`)
 * - Backup: git copies under `public/images/`
 * - Not the local VM disk
 *
 * Custom IDs match the git backup paths so a Cloudflare Images loader can
 * resolve `/images/dr-jan-duffy.jpg` without a second mapping table.
 * Per Cloudflare Images docs (custom ID paths, Apr 2026).
 */
export const AGENT_PHOTO_ALT =
  "Dr. Jan Duffy, REALTOR® at Berkshire Hathaway HomeServices Nevada Properties";

export const AGENT_PHOTO_GIT_BACKUP = "/images/dr-jan-duffy.jpg";
export const AGENT_OG_GIT_BACKUP = "/images/og-dr-jan-duffy.jpg";

/** Cloudflare Images custom IDs (same as git backup paths, no leading slash). */
export const AGENT_PHOTO_CF_ID = "images/dr-jan-duffy.jpg";
export const AGENT_OG_CF_ID = "images/og-dr-jan-duffy.jpg";

export function isCloudflareImagesEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true" &&
    Boolean(process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH)
  );
}

export function cloudflareDeliveryUrl(
  imageId: string,
  transform = "public",
): string {
  const hash = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
  if (!hash) {
    throw new Error("NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH is required");
  }
  return `https://imagedelivery.net/${hash}/${imageId}/${transform}`;
}

/** On-page portrait: Cloudflare Images when configured, git backup otherwise. */
export function agentPhotoUrl(width = 800): string {
  if (isCloudflareImagesEnabled()) {
    return cloudflareDeliveryUrl(
      AGENT_PHOTO_CF_ID,
      `w=${width},h=${width},fit=cover,f=auto`,
    );
  }
  return AGENT_PHOTO_GIT_BACKUP;
}

/** 1200×630 social card. */
export function agentOgImagePath(): string {
  if (isCloudflareImagesEnabled()) {
    return cloudflareDeliveryUrl(
      AGENT_OG_CF_ID,
      "w=1200,h=630,fit=cover,f=auto",
    );
  }
  return AGENT_OG_GIT_BACKUP;
}

export function absoluteAgentPhotoUrl(width = 800): string {
  const src = agentPhotoUrl(width);
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${getSiteUrl()}${src}`;
}

/** @deprecated Prefer agentPhotoUrl() — kept for call sites that need a static object. */
export const AGENT_PHOTO = {
  alt: AGENT_PHOTO_ALT,
  width: 800,
  height: 800,
  get src(): string {
    return agentPhotoUrl(800);
  },
};

export const AGENT_OG_IMAGE_PATH = agentOgImagePath();
