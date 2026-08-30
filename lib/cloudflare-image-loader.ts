/**
 * Next.js `images.loaderFile` — Cloudflare Images when enabled.
 * Git-backup paths (`/images/...`) are the Image `src`; this loader rewrites
 * them to imagedelivery.net. Without Cloudflare env, next.config does not
 * attach this loader, so Next/Vercel optimization uses the git files.
 */
import { buildCloudflareImageUrl } from "./cloudflare-images";

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  return buildCloudflareImageUrl(src, width, quality ?? 85);
}
