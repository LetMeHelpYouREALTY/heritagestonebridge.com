import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutAdvancedSearch } from "~/components/real-estate/RealScoutAdvancedSearch";
import { RealScoutSimpleSearch } from "~/components/real-estate/RealScoutSimpleSearch";
import { RealScoutHomeValue } from "~/components/real-estate/RealScoutHomeValue";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { InteriorHero } from "~/components/community/InteriorHero";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Real estate tools"
        lede="Search the MLS and request a home value for Heritage at Stonebridge. Prices come from the listing feed."
      />
      <OfficeListingsBelowHero />

      {/* Dynamic RealScout Content Blocks */}
      <main>
        {/* <DynamicRealScoutGrid config={realEstateContentConfig} /> */}

        {/* RealScout Widgets Grid */}
        <div class="max-w-7xl mx-auto px-4 py-12">
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="font-display text-xl text-hsb-dark mb-4">Quick Property Search</h3>
              <RealScoutSimpleSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="font-display text-xl text-hsb-dark mb-4">Advanced Search</h3>
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 class="font-display text-xl text-hsb-dark mb-4">Get Your Home's Value</h3>
            <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
        </div>

        {/* Widget Information */}
        <div class="mx-auto mt-4 max-w-3xl px-4 pb-16">
          <p class="text-hsb-text">
            Listings and values come from the MLS feed. Call (702) 789-6561 to tour a home in Heritage at Stonebridge.
          </p>
        </div>
      </main>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Featured Properties"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="1000000"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Las Vegas Real Estate Search Tools | Heritage at Stonebridge - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Search Las Vegas real estate with advanced MLS tools, home valuations, and property listings. Dr. Jan Duffy's comprehensive RealScout platform for Heritage at Stonebridge and Summerlin areas.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/real-estate/",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
    {
      name: "geo.region",
      content: "US-NV",
    },
    {
      name: "geo.placename",
      content: "Las Vegas, Nevada",
    },
    {
      name: "geo.position",
      content: "36.1699;-115.1398",
    },
    {
      property: "og:title",
      content: "Las Vegas Real Estate Search Tools | Heritage at Stonebridge",
    },
    {
      property: "og:description",
      content:
        "Search Las Vegas real estate with advanced MLS tools, home valuations, and property listings. Dr. Jan Duffy's comprehensive RealScout platform.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/real-estate/",
    },
    {
      property: "og:site_name",
      content: "Heritage at Stonebridge",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@heritage_stonebridge",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Real Estate Search Tools | Heritage at Stonebridge",
    },
    {
      name: "twitter:description",
      content:
        "Search Las Vegas real estate with advanced MLS tools, home valuations, and property listings. Dr. Jan Duffy's comprehensive RealScout platform.",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/real-estate/",
    },
  ],
};
