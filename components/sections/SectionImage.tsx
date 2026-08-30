import Image from "next/image";
import { cloudflareDeliveryUrl } from "@/lib/cloudflare-images";
import { getSectionImageForHeading, type SiteImage } from "@/lib/site-images";
import { getSiteUrl } from "@/lib/site-url";

type SectionImageProps = {
  src?: string;
  alt?: string;
  heading?: string;
  priority?: boolean;
  className?: string;
  variant?: "banner" | "card" | "inline";
};

/**
 * Content-matched photograph for a section H2/H3.
 * Pass `heading` to auto-resolve, or an explicit src/alt.
 * Banner/inline variants emit ImageObject JSON-LD keyed to the heading.
 */
export default function SectionImage({
  src,
  alt,
  heading,
  priority = false,
  className = "",
  variant = "banner",
}: SectionImageProps) {
  const resolved: SiteImage | null = heading
    ? getSectionImageForHeading(heading)
    : src && alt
      ? { src, alt }
      : null;

  if (!resolved) return null;

  const isCard = variant === "card";
  const isInline = variant === "inline";
  const frameClass = isCard
    ? "aspect-[16/10] w-full"
    : isInline
      ? "mb-6 aspect-[21/9] w-full max-h-64 rounded-2xl"
      : "mb-8 aspect-[16/9] w-full rounded-2xl";

  const delivered = cloudflareDeliveryUrl(
    resolved.src,
    isCard ? "card" : "desktop",
  );
  const contentUrl = /^https?:\/\//i.test(delivered)
    ? delivered
    : `${getSiteUrl()}${delivered.startsWith("/") ? delivered : `/${delivered}`}`;
  const imageObject =
    !isCard && heading
      ? {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          contentUrl,
          url: contentUrl,
          name: heading,
          description: resolved.alt,
          width: 1920,
          height: isInline ? 823 : 1080,
          encodingFormat: "image/webp",
        }
      : null;

  return (
    <div
      className={`relative overflow-hidden bg-slate-200 ${frameClass} ${className}`}
    >
      {imageObject && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObject) }}
        />
      )}
      <Image
        src={resolved.src}
        alt={resolved.alt}
        fill
        priority={priority}
        sizes={
          isCard
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
        }
        className="object-cover object-center"
      />
    </div>
  );
}
