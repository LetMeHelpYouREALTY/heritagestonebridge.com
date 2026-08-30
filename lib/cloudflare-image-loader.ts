/**
 * Cloudflare Images loader for Next.js (2026 URL format).
 *
 * Delivery URL: https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT-OR-OPTIONS>
 * Options use path segments (`w=800,q=85,f=auto`), not query strings.
 * @see https://developers.cloudflare.com/images/optimization/features/
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
  const useCloudflareImages =
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "true";
  const accountHash = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;

  if (useCloudflareImages && accountHash) {
    if (src.startsWith("https://imagedelivery.net/")) {
      return src;
    }
    const imageId = src.startsWith("/") ? src.slice(1) : src;
    const q = quality ?? 85;
    return `https://imagedelivery.net/${accountHash}/${imageId}/w=${width},q=${q},f=auto`;
  }

  const params = new URLSearchParams({
    w: width.toString(),
    q: String(quality || 85),
    f: "auto",
  });

  return `${src}?${params.toString()}`;
}
