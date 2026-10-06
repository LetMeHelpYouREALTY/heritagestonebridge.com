import { component$ } from "@builder.io/qwik";
import { communityAmenities, communityImage, communityPhoto } from "~/config/community";

export const AmenityGrid = component$(() => {
  return (
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {communityAmenities.map((amenity) => {
        const photo = amenity.photo ? communityPhoto(amenity.photo) : undefined;
        return (
          <article
            key={amenity.title}
            class="overflow-hidden rounded-2xl border border-hsb-border bg-white shadow-sm"
          >
            {photo ? (
              <img
                src={communityImage(photo.id)}
                alt={photo.alt}
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
                class="aspect-[4/3] w-full object-cover"
              />
            ) : null}
            <div class="p-6">
              <h3 class="font-display text-2xl text-hsb-dark">{amenity.title}</h3>
              <p class="mt-3 text-hsb-text">{amenity.detail}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
});
