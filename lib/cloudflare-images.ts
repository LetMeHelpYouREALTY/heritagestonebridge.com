/**
 * Cloudflare Images is the runtime optimizer/holder.
 * Git copies under `public/` are backup only (custom IDs match those paths).
 *
 * Delivery: https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT-OR-OPTIONS>
 * Flexible variants use path segments, not query strings (Images docs, 2026).
 * @see https://developers.cloudflare.com/images/optimization/features/
 */

import { getSiteUrl } from "@/lib/site-url";

export function isCloudflareImagesEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true" &&
    Boolean(process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH)
  );
}

/** Strip leading slash so `/images/foo.jpg` → `images/foo.jpg`. */
export function gitPathToImageId(src: string): string {
  return src.startsWith("/") ? src.slice(1) : src;
}

export function buildCloudflareTransform({
  width,
  height,
  quality = 85,
  format = "auto",
  fit,
}: {
  width?: number;
  height?: number;
  quality?: number;
  format?: string;
  fit?: string;
}): string {
  const parts: string[] = [];
  if (width) parts.push(`w=${width}`);
  if (height) parts.push(`h=${height}`);
  parts.push(`q=${quality}`);
  parts.push(`f=${format}`);
  if (fit) parts.push(`fit=${fit}`);
  return parts.length ? parts.join(",") : "public";
}

/**
 * Map a git-backup src (`/images/...`) to a Cloudflare Images URL.
 * Leaves already-remote URLs alone (except imagedelivery.net passthrough).
 */
export function buildCloudflareImageUrl(
  src: string,
  width: number,
  quality = 85,
): string {
  const hash = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
  if (!hash) return src;
  if (src.startsWith("https://imagedelivery.net/")) return src;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;

  const id = gitPathToImageId(src);
  const transform = buildCloudflareTransform({
    width,
    quality,
    format: "auto",
  });
  return `https://imagedelivery.net/${hash}/${id}/${transform}`;
}

/**
 * Absolute URL for JSON-LD / Open Graph.
 * Uses Cloudflare Images when enabled so crawlers skip `/_next/image`;
 * otherwise the git backup on this origin.
 */
export function absolutePublicImageUrl(src: string, width = 1200): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (isCloudflareImagesEnabled()) {
    return buildCloudflareImageUrl(src, width, 85);
  }
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${getSiteUrl()}${path}`;
}

/** Pull the public account hash out of an imagedelivery.net variant URL. */
export function accountHashFromDeliveryUrl(url: string): string | null {
  const match = url.match(/^https:\/\/imagedelivery\.net\/([^/]+)\//i);
  return match?.[1] ?? null;
}
