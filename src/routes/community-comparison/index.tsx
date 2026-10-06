import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Las Vegas 55+ Community Comparison | Active Adult Living Guide - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Compare Las Vegas 55+ communities including Heritage at Stonebridge, Del Webb, Sun City, and Siena. Expert analysis of amenities, pricing, and lifestyle features.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Las Vegas 55+ Community Comparison | Active Adult Living Guide",
    },
    {
      property: "og:description",
      content: "Compare Las Vegas 55+ communities including Heritage at Stonebridge, Del Webb, Sun City, and Siena.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/community-comparison",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas 55+ Community Comparison | Active Adult Living Guide",
    },
    {
      name: "twitter:description",
      content: "Compare Las Vegas 55+ communities including Heritage at Stonebridge, Del Webb, Sun City, and Siena.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Community Comparison Guide"
        lede="Compare Las Vegas 55+ communities and find your perfect active adult lifestyle"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* Comparison Content */}
      

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Las Vegas 55+ Community Comparison | Active Adult Living Guide",
          "description": "Compare Las Vegas 55+ communities including Heritage at Stonebridge, Del Webb, Sun City, and Siena.",
          "url": "https://heritagestonebridge.com/community-comparison",
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
        title="Community Comparison"
        subtitle="Call 702-789-6561"
        priceMin="400000"
        priceMax="1500000"
      />
    </>
  );
});
