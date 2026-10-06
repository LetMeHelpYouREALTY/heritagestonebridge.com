import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Golf Course Homes Las Vegas | Luxury Golf Living - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover luxury golf course homes in Las Vegas with stunning fairway views and resort amenities. Expert guidance for golf communities in Summerlin, Henderson, and Red Rock Canyon.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Golf Course Homes Las Vegas | Luxury Golf Living",
    },
    {
      property: "og:description",
      content: "Discover luxury golf course homes in Las Vegas with stunning fairway views and resort amenities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/golf-course-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Golf Course Homes Las Vegas | Luxury Golf Living",
    },
    {
      name: "twitter:description",
      content: "Discover luxury golf course homes in Las Vegas with stunning fairway views and resort amenities.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Golf Course Homes"
        lede="Live the ultimate golf lifestyle with stunning fairway views and resort amenities"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Golf Content */}
      

      {/* Golf Course Homes Listings Widget */}



      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Golf Course Homes"
        subtitle="Call 702-789-6561"
        priceMin="600000"
        priceMax="3000000"
      />
    </>
  );
});
