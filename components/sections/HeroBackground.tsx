import Image from "next/image";

type HeroBackgroundProps = {
  /** Prefer optimized WebP; JPG fallback for older browsers via picture element handled by next/image */
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

export default function HeroBackground({
  src = "/images/hero/hero_bg_1.webp",
  alt = "Summerlin West desert landscape near Heritage at Stonebridge",
  priority = true,
  className = "object-cover object-center opacity-40",
}: HeroBackgroundProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="100vw"
      quality={75}
      className={className}
    />
  );
}
