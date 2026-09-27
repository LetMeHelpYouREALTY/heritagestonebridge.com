import { component$, Slot } from "@builder.io/qwik";

type CampaignHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
};

export const CampaignHero = component$<CampaignHeroProps>(({ eyebrow, title, lede }) => {
  return (
    <section class="bg-hsb-dark text-white">
      <div class="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent-light">{eyebrow}</p>
        <h1 class="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p class="mt-6 max-w-2xl text-lg text-hsb-sand">{lede}</p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <Slot />
        </div>
      </div>
    </section>
  );
});
