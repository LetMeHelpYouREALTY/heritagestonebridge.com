import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Community Guides Las Vegas | Neighborhood Information - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Explore comprehensive community guides for Las Vegas neighborhoods including Summerlin, Henderson, Red Rock Canyon, and Northwest Las Vegas. Expert insights on amenities, lifestyle, and local attractions.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Community Guides Las Vegas | Neighborhood Information",
    },
    {
      property: "og:description",
      content: "Explore comprehensive community guides for Las Vegas neighborhoods with amenities and lifestyle insights.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/community-guides",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Community Guides Las Vegas | Neighborhood Information",
    },
    {
      name: "twitter:description",
      content: "Explore comprehensive community guides for Las Vegas neighborhoods with amenities and lifestyle insights.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Community Guides"
        lede="Discover Las Vegas neighborhoods with comprehensive community insights"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Community Content */}
      

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Community Guides Las Vegas | Neighborhood Information",
          "description": "Explore comprehensive community guides for Las Vegas neighborhoods with amenities and lifestyle insights.",
          "url": "https://heritagestonebridge.com/community-guides",
          "mainEntity": {
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy",
            "telephone": "702-789-6561",
            "email": "DrDuffySells@HeritageStonebridge.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "addressCountry": "US"
            },
            "serviceArea": [
              "Summerlin",
              "Henderson", 
              "Northwest Las Vegas",
              "Red Rock Canyon",
              "Boulder City"
            ]
          }
        })}
      />

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Community Guides"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
