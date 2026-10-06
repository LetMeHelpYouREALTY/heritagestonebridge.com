import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Mountain View Homes Las Vegas | Scenic Luxury Living - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover stunning mountain view homes in Las Vegas with breathtaking vistas of Red Rock Canyon and Spring Mountains. Expert guidance for scenic properties in Summerlin, Henderson, and Northwest Las Vegas.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Mountain View Homes Las Vegas | Scenic Luxury Living",
    },
    {
      property: "og:description",
      content: "Discover stunning mountain view homes in Las Vegas with breathtaking vistas of Red Rock Canyon and Spring Mountains.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/mountain-view-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mountain View Homes Las Vegas | Scenic Luxury Living",
    },
    {
      name: "twitter:description",
      content: "Discover stunning mountain view homes in Las Vegas with breathtaking vistas of Red Rock Canyon and Spring Mountains.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Mountain View Homes"
        lede="Wake up to breathtaking mountain vistas and natural beauty every day"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Mountain Content */}
      

      {/* Mountain View Homes Listings Widget */}



      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Mountain View Homes"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="2500000"
      />
    </>
  );
});
