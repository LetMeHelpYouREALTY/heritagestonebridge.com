import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Active Adult Communities Las Vegas | 55+ Living Guide - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover premier active adult communities in Las Vegas. Expert guide to 55+ living with resort amenities, social activities, and luxury homes in Summerlin, Henderson, and Red Rock Canyon.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Active Adult Communities Las Vegas | 55+ Living Guide",
    },
    {
      property: "og:description",
      content: "Discover premier active adult communities in Las Vegas with resort amenities and luxury homes.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/active-adult-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Active Adult Communities Las Vegas | 55+ Living Guide",
    },
    {
      name: "twitter:description",
      content: "Discover premier active adult communities in Las Vegas with resort amenities and luxury homes.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Active Adult Communities"
        lede="Discover vibrant 55+ living with resort-style amenities and active lifestyles"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Community Content */}
      

      {/* Active Adult Communities Listings Widget */}



      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Active Adult Communities"
        subtitle="Call 702-789-6561"
        priceMin="400000"
        priceMax="800000"
      />
    </>
  );
});
