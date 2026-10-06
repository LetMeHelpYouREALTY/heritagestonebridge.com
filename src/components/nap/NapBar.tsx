import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";

/** Compact GBP-matching NAP, rendered in the site header on every page. */
export const NapBar = component$(() => {
  return (
    <div class="bg-hsb-dark text-hsb-sand text-xs">
      <div class="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="tracking-[0.12em] uppercase text-white/90">{business.name}</p>
        <p>
          <a
            href={business.mapsUrl}
            class="text-hsb-sand hover:text-white underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {business.addressDisplay}
          </a>
          <span class="mx-2" aria-hidden="true">
            ·
          </span>
          <a href={business.telephoneHref} class="font-medium text-hsb-sand hover:text-white">
            {business.telephoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
});
