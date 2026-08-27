import Image from "next/image";
import type { HeritageImage } from "@/lib/heritage-stonebridge/types";

type HeadingImageProps = {
  image: HeritageImage;
  /** Match the heading level this photo illustrates. */
  headingLevel: "h1" | "h2" | "h3";
  priority?: boolean;
  className?: string;
};

export default function HeadingImage({
  image,
  headingLevel,
  priority = false,
  className = "mb-6",
}: HeadingImageProps) {
  const sizes =
    headingLevel === "h3"
      ? "(max-width: 768px) 100vw, 360px"
      : "(max-width: 768px) 100vw, 960px";

  return (
    <figure
      className={`overflow-hidden rounded-xl bg-slate-100 ${className}`.trim()}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={900}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full object-cover"
      />
    </figure>
  );
}
