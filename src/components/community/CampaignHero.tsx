import { component$, Slot } from "@builder.io/qwik";
import { AgentPortrait } from "~/components/community/AgentPortrait";
import { HeroPhoto } from "~/components/community/HeroPhoto";

type CampaignHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
};

export const CampaignHero = component$<CampaignHeroProps>(({ eyebrow, title, lede }) => {
  return (
    <section class="relative overflow-hidden bg-hsb-dark text-white">
      <HeroPhoto />
      <div class="relative z-10 mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16 sm:flex-row sm:items-center sm:py-20">
        <AgentPortrait size="lg" />
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent-light">{eyebrow}</p>
          <h1 class="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
          <p class="mt-6 max-w-2xl text-lg text-hsb-sand">{lede}</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <Slot />
          </div>
        </div>
      </div>
    </section>
  );
});
