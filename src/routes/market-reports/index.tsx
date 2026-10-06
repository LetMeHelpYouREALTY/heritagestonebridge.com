import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Las Vegas Market Reports | Real Estate Market Analysis - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Access comprehensive Las Vegas real estate market reports with current trends, pricing data, and market forecasts. Expert analysis for 55+ communities, luxury homes, and active adult living.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Las Vegas Market Reports | Real Estate Market Analysis",
    },
    {
      property: "og:description",
      content: "Access comprehensive Las Vegas real estate market reports with current trends and pricing data.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/market-reports",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Market Reports | Real Estate Market Analysis",
    },
    {
      name: "twitter:description",
      content: "Access comprehensive Las Vegas real estate market reports with current trends and pricing data.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Market Reports"
        lede="Access comprehensive Las Vegas real estate market analysis and trends"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Market Content */}
      

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Las Vegas Market Reports | Real Estate Market Analysis",
          "description": "Access comprehensive Las Vegas real estate market reports with current trends and pricing data.",
          "url": "https://heritagestonebridge.com/market-reports",
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
        title="Market Reports"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
