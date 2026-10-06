import { component$ } from "@builder.io/qwik";
import { HeroPhoto } from "~/components/community/HeroPhoto";
import { business } from "~/config/business";

type InteriorHeroProps = {
  title: string;
  lede: string;
};

/** Same photograph and type as the homepage, with the page's own title. */
export const InteriorHero = component$<InteriorHeroProps>(({ title, lede }) => {
  return (
    <section class="relative overflow-hidden bg-hsb-dark text-white">
      <HeroPhoto />
      <div class="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:py-28">
        <p class="text-sm uppercase tracking-[0.18em] text-hsb-sand">Heritage at Stonebridge</p>
        <h1 class="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">{title}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-hsb-sand">{lede}</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={business.telephoneHref}
            class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
          >
            Call {business.telephoneDisplay}
          </a>
          <a
            href="http://drjanduffy.realscout.com/onboarding"
            target="_blank"
            rel="noopener"
            class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
          >
            Schedule a tour
          </a>
        </div>
      </div>
    </section>
  );
});
