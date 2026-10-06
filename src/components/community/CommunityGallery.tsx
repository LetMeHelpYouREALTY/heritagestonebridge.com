import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";
import { communityImage, communityPhotos } from "~/config/community";

const callClass =
  "absolute bottom-3 left-3 z-10 inline-flex min-h-11 max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-hsb-primary px-3 py-2 text-xs font-semibold text-white shadow-md hover:bg-hsb-primary-dark sm:text-sm";

/** Call link sitting on a community photo. */
const PhotoCall = component$(() => {
  return (
    <a href={business.telephoneHref} class={callClass}>
      <svg class="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      <span>Call {business.telephoneDisplay}</span>
    </a>
  );
});

/** Real clubhouse and grounds photos. Served from Cloudflare Images. */
export const CommunityGallery = component$(() => {
  const [lead, ...rest] = communityPhotos;

  return (
    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <figure class="relative col-span-2 overflow-hidden rounded-2xl md:row-span-2">
        <img
          src={communityImage(lead.id)}
          alt={lead.alt}
          width={1024}
          height={768}
          loading="lazy"
          decoding="async"
          class="h-full min-h-64 w-full object-cover"
        />
        <PhotoCall />
      </figure>
      {rest.map((photo) => (
        <figure key={photo.key} class="relative overflow-hidden rounded-2xl">
          <img
            src={communityImage(photo.id)}
            alt={photo.alt}
            width={1024}
            height={768}
            loading="lazy"
            decoding="async"
            class="aspect-[4/3] w-full object-cover"
          />
          <PhotoCall />
        </figure>
      ))}
    </div>
  );
});
