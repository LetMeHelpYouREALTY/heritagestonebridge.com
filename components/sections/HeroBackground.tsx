import Image from "next/image";

type HeroBackgroundProps = {
  src?: string;
  alt?: string;
  priority?: boolean;
};

export default function HeroBackground({
  src = "/images/hero/hero-heritage-stonebridge.webp",
  alt = "Heritage at Stonebridge guard-gated 55+ community in Summerlin West with Red Rock Canyon views",
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
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/55 to-slate-900/30"
        aria-hidden="true"
      />
    </>
  );
}
