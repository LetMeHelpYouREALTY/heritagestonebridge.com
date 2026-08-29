import Image from "next/image";
import { getSectionImageForHeading, type SiteImage } from "@/lib/site-images";

type SectionImageProps = {
  src?: string;
  alt?: string;
  heading?: string;
  priority?: boolean;
  className?: string;
  variant?: "banner" | "card";
};

/**
 * Content-matched photograph for a section H2/H3.
 * Pass `heading` to auto-resolve, or an explicit src/alt.
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

  return (
    <div
      className={`relative overflow-hidden bg-slate-200 ${
        isCard
          ? "aspect-[16/10] w-full"
          : "mb-8 aspect-[16/9] w-full rounded-2xl"
      } ${className}`}
    >
      <Image
        src={resolved.src}
        alt={resolved.alt}
        fill
        priority={priority}
        sizes={
          isCard
            ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            : "(max-width: 1024px) 100vw, 1024px"
        }
        className="object-cover object-center"
      />
    </div>
  );
}
