import {
  buildCloudflareImageUrl,
  type CloudflareImageDeliveryConfig,
} from "@/lib/cloudflare-images";

export function readCloudflareImageDeliveryConfig(): CloudflareImageDeliveryConfig {
  const accountHash =
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true"
      ? process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH?.trim()
      : undefined;
  const baseUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_URL?.trim();

  return {
    baseUrl: baseUrl || undefined,
    accountHash: accountHash || undefined,
  };
}

/**
 * Next.js custom image loader.
 * Wired from next.config.js when NEXT_PUBLIC_CLOUDFLARE_IMAGES_URL
 * (R2 Worker) or hosted Images (account hash) is set.
 *
 * URL format follows Cloudflare Images 2026 docs:
 * `/cdn-cgi/image/width=…,quality=…,format=auto/<key>`
 * not query-string parameters.
 */
export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  return buildCloudflareImageUrl(
    src,
    { width, quality },
    readCloudflareImageDeliveryConfig(),
  );
}
