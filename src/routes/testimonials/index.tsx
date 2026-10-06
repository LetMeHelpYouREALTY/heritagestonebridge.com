import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Heritage at Stonebridge Reviews | Client Testimonials - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Read authentic Heritage at Stonebridge reviews and client testimonials for Dr. Jan Duffy. Real experiences from satisfied residents in Las Vegas 55+ communities and luxury homes.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Client Testimonials | Dr. Jan Duffy Real Estate Reviews",
    },
    {
      property: "og:description",
      content: "Read authentic client testimonials and reviews for Dr. Jan Duffy, Las Vegas real estate expert.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/testimonials",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Client Testimonials | Dr. Jan Duffy Real Estate Reviews",
    },
    {
      name: "twitter:description",
      content: "Read authentic client testimonials and reviews for Dr. Jan Duffy, Las Vegas real estate expert.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Client Testimonials"
        lede="Real success stories from satisfied clients across Las Vegas"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Testimonial Content */}
      

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Client Testimonials | Dr. Jan Duffy Real Estate Reviews",
          "description": "Read authentic client testimonials and reviews for Dr. Jan Duffy, Las Vegas real estate expert.",
          "url": "https://heritagestonebridge.com/testimonials",
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
        title="Client Testimonials"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
