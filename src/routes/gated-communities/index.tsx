import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Gated Communities Las Vegas | Secure Luxury Living - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Explore premier gated communities in Las Vegas offering security, privacy, and luxury amenities. Expert guidance for exclusive neighborhoods in Summerlin, Henderson, and Red Rock Canyon.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Gated Communities Las Vegas | Secure Luxury Living",
    },
    {
      property: "og:description",
      content: "Explore premier gated communities in Las Vegas offering security, privacy, and luxury amenities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/gated-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Gated Communities Las Vegas | Secure Luxury Living",
    },
    {
      name: "twitter:description",
      content: "Explore premier gated communities in Las Vegas offering security, privacy, and luxury amenities.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Gated Communities"
        lede="Experience secure luxury living with privacy and exclusive amenities"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Gated Content */}
      

      {/* Gated Communities Listings Widget */}



      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Gated Communities"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="2000000"
      />
    </>
  );
});
