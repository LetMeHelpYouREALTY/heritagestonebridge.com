/**
 * Cloudflare Images delivery for Heritage Stonebridge photography.
 *
 * Git (`public/images/`) is the backup of originals.
 * Production delivery is Cloudflare Images named variants, not Vercel
 * `/_next/image` or a raw `/images/...` file.
 *
 * Delivery URL (Cloudflare Images docs, 2026):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 *
 * Variants match devices a homebuyer or homeseller actually uses:
 *   phone (≤640), tablet (≤1024), desktop (1920), card (800), og (1200×630)
 *
 * Custom image IDs match the git path without extension, e.g.
 *   /images/hero/hero-heritage-stonebridge.webp
 *     → images/hero/hero-heritage-stonebridge
 */

export const CLOUDFLARE_IMAGE_VARIANTS = [
  "phone",
  "tablet",
  "desktop",
  "card",
  "og",
] as const;

export type CloudflareImageVariant = (typeof CLOUDFLARE_IMAGE_VARIANTS)[number];

/** Named variant definitions used by the upload script and docs. */
export const CLOUDFLARE_VARIANT_OPTIONS: Record<
  CloudflareImageVariant,
  { width: number; height?: number; fit: "cover"; metadata: "none" }
> = {
  phone: { width: 640, fit: "cover", metadata: "none" },
  tablet: { width: 1024, fit: "cover", metadata: "none" },
  desktop: { width: 1920, fit: "cover", metadata: "none" },
  card: { width: 800, fit: "cover", metadata: "none" },
  og: { width: 1200, height: 630, fit: "cover", metadata: "none" },
};

export function isCloudflareImagesEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true" &&
    Boolean(process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH)
  );
}

/**
 * Map a git backup path to the Cloudflare Images custom ID.
 * Strips a leading slash and the file extension.
 */
export function pathToImageId(src: string): string {
  const withoutQuery = src.split("?")[0] ?? src;
  const trimmed = withoutQuery.startsWith("/")
    ? withoutQuery.slice(1)
    : withoutQuery;
  return trimmed.replace(/\.(webp|avif|jpe?g|png|gif)$/i, "");
}

/** Pick the named device variant Next.js `sizes` requested. */
export function variantForWidth(width: number): CloudflareImageVariant {
  if (width <= 640) return "phone";
  if (width <= 800) return "card";
  if (width <= 1024) return "tablet";
  return "desktop";
}

/**
 * Resolve a site image to a Cloudflare Images variant URL when enabled.
 * Git paths stay as-is for local/dev until the account hash is configured.
 */
export function cloudflareDeliveryUrl(
  src: string,
  variant: CloudflareImageVariant = "desktop",
): string {
  if (!src) return src;
  if (src.startsWith("https://imagedelivery.net/")) return src;
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("data:") || src.endsWith(".svg")) return src;
  if (!isCloudflareImagesEnabled()) return src;

  const accountHash = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH ?? "";
  return `https://imagedelivery.net/${accountHash}/${pathToImageId(src)}/${variant}`;
}
