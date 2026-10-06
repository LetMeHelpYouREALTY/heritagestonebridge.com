import { component$ } from "@builder.io/qwik";
import { community } from "~/config/community";

/** Verified community facts. Replaces the old "generating insights" block. */
export const CommunityFacts = component$(() => {
  return (
    <section class="bg-hsb-cream py-16">
      <div class="mx-auto max-w-3xl px-4">
        <h2 class="font-display text-3xl text-hsb-dark">Inside Heritage at Stonebridge</h2>
        <p class="mt-4 text-lg leading-relaxed text-hsb-text">
          {community.homes} guard-gated 55+ Lennar homes in Summerlin West. The clubhouse is at{" "}
          {community.clubhouseDisplay}. Pools, fitness, pickleball, and bocce are on the grounds.
          Prices and availability come from the MLS listings above.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://heritagestonebridge.com/amenities/"
            class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
          >
            Clubhouse and amenities
          </a>
          <a
            href="https://heritagestonebridge.com/buy-heritage-at-stonebridge/"
            class="rounded-full border border-hsb-border bg-white px-6 py-3 text-center font-medium text-hsb-primary hover:bg-hsb-sand"
          >
            Buy a home
          </a>
        </div>
      </div>
    </section>
  );
});
