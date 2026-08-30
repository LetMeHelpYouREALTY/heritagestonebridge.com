import { cloudflareDeliveryUrl } from "@/lib/cloudflare-images";

type DevicePictureProps = {
  src: string;
  alt: string;
  /** LCP / above-fold heroes only. */
  priority?: boolean;
  className?: string;
};

/**
 * Serve phone / tablet / desktop Cloudflare Images variants to the
 * devices a homebuyer or homeseller actually uses.
 *
 * Git paths in `src` are the backup IDs. Production URLs are
 * imagedelivery.net named variants when Cloudflare Images is enabled.
 */
export default function DevicePicture({
  src,
  alt,
  priority = false,
  className = "",
}: DevicePictureProps) {
  const phone = cloudflareDeliveryUrl(src, "phone");
  const tablet = cloudflareDeliveryUrl(src, "tablet");
  const desktop = cloudflareDeliveryUrl(src, "desktop");

  return (
    <picture>
      <source media="(max-width: 640px)" srcSet={phone} />
      <source media="(max-width: 1024px)" srcSet={tablet} />
      <img
        src={desktop}
        alt={alt}
        className={className}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        loading={priority ? "eager" : "lazy"}
      />
    </picture>
  );
}
