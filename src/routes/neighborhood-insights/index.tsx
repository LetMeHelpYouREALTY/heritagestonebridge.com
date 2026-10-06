import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis. Expert real estate intelligence for Summerlin, Henderson, and Northwest Las Vegas.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
    },
    {
      property: "og:description",
      content: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/neighborhood-insights",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
    },
    {
      name: "twitter:description",
      content: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="AI-Powered Neighborhood Insights"
        lede="Discover Las Vegas communities through advanced market intelligence"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Insights Content */}
      

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
          "description": "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
          "url": "https://heritagestonebridge.com/neighborhood-insights",
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
        title="Neighborhood Insights"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
