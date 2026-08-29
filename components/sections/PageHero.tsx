import HeroBackground from "@/components/sections/HeroBackground";
import { getHeroImageForHeading } from "@/lib/site-images";

type PageHeroProps = {
  /** Page H1. */
  title: string;
  /** Answer-first intro line (AEO/GEO: 1–2 sentences, extractable). */
  subtitle?: string;
  /** Small eyebrow/badge above the title. */
  badge?: string;
  /** Override the domain hero image. */
  imageSrc?: string;
  imageAlt?: string;
  /** Set true only for the LCP hero (first on the page). */
  priority?: boolean;
  /** CTA buttons or extra content rendered under the subtitle. */
  children?: React.ReactNode;
};

/**
 * Hyperlocal page hero: a content-matched photograph resolved from the H1,
 * with optional imageSrc override. Renders as a rounded card so it drops into
 * the existing `container` page layout.
 */
export default function PageHero({
  title,
  subtitle,
  badge,
  imageSrc,
  imageAlt,
  priority = true,
  children,
}: PageHeroProps) {
  const matched = getHeroImageForHeading(title);
  const src = imageSrc ?? matched.src;
  const alt = imageAlt ?? matched.alt;

  return (
    <section className="relative mb-16 flex min-h-[360px] items-center overflow-hidden rounded-2xl bg-slate-900 text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <HeroBackground src={src} alt={alt} priority={priority} />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 text-center">
        {badge && (
          <span className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            {badge}
          </span>
        )}
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/85 md:text-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
