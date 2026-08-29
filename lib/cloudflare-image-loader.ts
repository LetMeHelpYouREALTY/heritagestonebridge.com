/**
 * Next.js custom image loader → Cloudflare Images named variants.
 *
 * Do not append ?width=&quality= query strings. Cloudflare Images serves
 * `https://imagedelivery.net/<hash>/<id>/<variant>` (path, not query).
 *
 * When Cloudflare Images is not configured, return the git backup path so
 * local/dev still renders from `public/images/`.
 */

import {
  cloudflareDeliveryUrl,
  isCloudflareImagesEnabled,
  variantForWidth,
} from "./cloudflare-images";

export default function cloudflareImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!isCloudflareImagesEnabled()) {
    return src;
  }

  return cloudflareDeliveryUrl(src, variantForWidth(width));
}
