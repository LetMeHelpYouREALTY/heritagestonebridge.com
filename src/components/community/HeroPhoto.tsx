import { component$ } from "@builder.io/qwik";
import { HERO_IMAGE, communityPhoto } from "~/config/community";

/**
 * Clubhouse exterior as the page hero photograph.
 * Eager and high priority: this is the LCP image on interior pages.
 * Do not lazy-load it. Do not stamp a phone number on the photo.
 */
export const HeroPhoto = component$(() => {
  const photo = communityPhoto("clubhouse-exterior");
  return (
    <>
      <img
        src={HERO_IMAGE.tablet}
        srcset={HERO_IMAGE.srcset}
        sizes="100vw"
        width={1024}
        height={576}
        alt={photo.alt}
        fetchPriority="high"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-hsb-dark/85 via-hsb-dark/60 to-hsb-dark/40" />
    </>
  );
});
