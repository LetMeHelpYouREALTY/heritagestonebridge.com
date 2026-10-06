import { component$ } from "@builder.io/qwik";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";
import { REALSCOUT_AGENT_ID } from "~/config/community";

/** MLS office listings. Rendered once, immediately after the page hero. */
export const OfficeListingsBelowHero = component$(() => {
  return (
    <section class="bg-white py-12" aria-label="Homes for sale">
      <div class="mx-auto max-w-7xl px-4">
        <h2 class="font-display text-3xl text-hsb-dark">Homes for sale</h2>
        <p class="mt-2 max-w-2xl text-hsb-text">
          Current MLS listings through Dr. Jan Duffy. Prices and availability come from the listing feed.
        </p>
        <div class="mt-8">
          <RealScoutOfficeListingsWidget
            agentEncodedId={REALSCOUT_AGENT_ID}
            priceMin={400000}
            priceMax={1600000}
          />
        </div>
      </div>
    </section>
  );
});
