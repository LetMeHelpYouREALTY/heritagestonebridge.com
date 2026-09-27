import { component$ } from "@builder.io/qwik";
import { communityAmenities } from "~/config/community";

export const AmenityGrid = component$(() => {
  return (
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {communityAmenities.map((amenity) => (
        <article key={amenity.title} class="rounded-2xl border border-hsb-border bg-white p-6 shadow-sm">
          <h3 class="font-display text-2xl text-hsb-dark">{amenity.title}</h3>
          <p class="mt-3 text-hsb-text">{amenity.detail}</p>
        </article>
      ))}
    </div>
  );
});
