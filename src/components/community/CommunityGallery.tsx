import { component$ } from "@builder.io/qwik";
import { communityImage, communityPhotos } from "~/config/community";

/** Real clubhouse and grounds photos. Served from Cloudflare Images. */
export const CommunityGallery = component$(() => {
  const [lead, ...rest] = communityPhotos;

  return (
    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <figure class="col-span-2 overflow-hidden rounded-2xl md:row-span-2">
        <img
          src={communityImage(lead.id, "desktop")}
          alt={lead.alt}
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          class="h-full min-h-64 w-full object-cover"
        />
      </figure>
      {rest.map((photo) => (
        <figure key={photo.key} class="overflow-hidden rounded-2xl">
          <img
            src={communityImage(photo.id)}
            alt={photo.alt}
            width={1024}
            height={768}
            loading="lazy"
            decoding="async"
            class="aspect-[4/3] w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
});
