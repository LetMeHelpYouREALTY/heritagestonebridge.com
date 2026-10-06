import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "First Time Buyers Guide Las Vegas | Home Buying Tips - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Complete first-time home buyer guide for Las Vegas real estate. Expert advice on financing, down payments, inspections, and finding your perfect home with Dr. Jan Duffy.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "First Time Buyers Guide Las Vegas | Home Buying Tips",
    },
    {
      property: "og:description",
      content: "Complete first-time home buyer guide for Las Vegas real estate with expert advice on financing and home buying process.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/first-time-buyers",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "First Time Buyers Guide Las Vegas | Home Buying Tips",
    },
    {
      name: "twitter:description",
      content: "Complete first-time home buyer guide for Las Vegas real estate with expert advice on financing and home buying process.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="First-Time Buyers Guide"
        lede="Your complete guide to buying your first home in Las Vegas"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Buyer Content */}
      

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="First Time Buyers"
        subtitle="Call 702-789-6561"
        priceMin="200000"
        priceMax="800000"
      />
    </>
  );
});
