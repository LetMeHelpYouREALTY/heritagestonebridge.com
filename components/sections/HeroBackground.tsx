import DevicePicture from "@/components/images/DevicePicture";

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
      <DevicePicture
        src={src}
        alt={alt}
        priority={priority}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-slate-900/20"
        aria-hidden="true"
      />
    </>
  );
}
