import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Luxury Living Guide Las Vegas | Premium 55+ Communities - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover luxury living in Las Vegas 55+ communities. Expert guide to premium amenities, gated communities, and upscale active adult living in Summerlin and Henderson.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Luxury Living Guide Las Vegas | Premium 55+ Communities",
    },
    {
      property: "og:description",
      content: "Discover luxury living in Las Vegas 55+ communities with premium amenities and gated communities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/luxury-living-guide",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Luxury Living Guide Las Vegas | Premium 55+ Communities",
    },
    {
      name: "twitter:description",
      content: "Discover luxury living in Las Vegas 55+ communities with premium amenities and gated communities.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Luxury Living Guide"
        lede="Discover premium 55+ communities and upscale active adult living"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* Luxury Guide Content */}
      

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Luxury Living Guide"
        subtitle="Call 702-789-6561"
        priceMin="600000"
        priceMax="3000000"
      />
    </>
  );
});
