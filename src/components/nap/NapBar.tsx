import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";

/** Compact GBP-matching NAP, rendered in the site header on every page. */
export const NapBar = component$(() => {
  return (
    <div class="bg-hsb-dark text-white text-xs sm:text-sm">
      <div class="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <p class="font-semibold">{business.name}</p>
        <p>
          <a
            href={business.mapsUrl}
            class="hover:text-hsb-accent-light underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {business.addressDisplay}
          </a>
          <span class="mx-2" aria-hidden="true">
            ·
          </span>
          <a href={business.telephoneHref} class="hover:text-hsb-accent-light font-semibold">
            {business.telephoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
});
