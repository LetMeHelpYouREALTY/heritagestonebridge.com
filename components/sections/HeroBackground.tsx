import Image from "next/image";

type HeroBackgroundProps = {
  /** Prefer optimized WebP; JPG fallback for older browsers via picture element handled by next/image */
  src?: string;
  alt?: string;
  priority?: boolean;
};

export default function HeroBackground({
  src = "/images/hero/heritage-stonebridge.webp",
  alt = "Heritage at Stonebridge 55+ community in Summerlin West with Red Rock Canyon beyond",
  priority = true,
}: HeroBackgroundProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        quality={80}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/45 via-slate-900/55 to-slate-900/70" />
    </>
  );
}
