import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Luxury Homes Las Vegas | Premium Real Estate - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover luxury homes in Las Vegas featuring premium amenities, stunning designs, and exclusive locations. Expert guidance for high-end real estate in Summerlin, Henderson, and Red Rock Canyon.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Luxury Homes Las Vegas | Premium Real Estate",
    },
    {
      property: "og:description",
      content: "Discover luxury homes in Las Vegas featuring premium amenities and exclusive locations.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/luxury-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Luxury Homes Las Vegas | Premium Real Estate",
    },
    {
      name: "twitter:description",
      content: "Discover luxury homes in Las Vegas featuring premium amenities and exclusive locations.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Luxury Homes"
        lede="Discover premium real estate with exclusive amenities and stunning designs"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Luxury Content */}
      

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Luxury Homes Las Vegas | Premium Real Estate",
          "description": "Discover luxury homes in Las Vegas featuring premium amenities and exclusive locations.",
          "url": "https://heritagestonebridge.com/luxury-homes",
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

      {/* Luxury Homes Listings Widget */}



      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Luxury Homes"
        subtitle="Call 702-789-6561"
        priceMin="800000"
        priceMax="5000000"
      />
    </>
  );
});
