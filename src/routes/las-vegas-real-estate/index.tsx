import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { openingHoursSpecification } from "~/config/business";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
  meta: [
    {
      name: "description",
      content: "Expert Las Vegas real estate services by Dr. Jan Duffy. Specializing in 55+ communities, luxury homes, and active adult living in Summerlin, Henderson, and Northwest Las Vegas. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/las-vegas-real-estate",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "adults-55-plus, luxury-home-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
    },
    {
      property: "og:description",
      content: "Expert Las Vegas real estate services specializing in 55+ communities and luxury homes. Serving Summerlin, Henderson, and Northwest Las Vegas.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/las-vegas-real-estate",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
    },
    {
      name: "twitter:description",
      content: "Expert Las Vegas real estate services specializing in 55+ communities and luxury homes. Serving Summerlin, Henderson, and Northwest Las Vegas.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive LocalBusiness schema for Las Vegas - September 2025 Google "Perspective" Compliant
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Las Vegas Real Estate"
        lede="Expert real estate services specializing in 55+ communities, luxury homes, and active adult living throughout Las Vegas Valley"
      />
      <OfficeListingsBelowHero />

      {/* Service Areas Overview */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Las Vegas Service Areas</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Dr. Jan Duffy provides comprehensive real estate services across the Las Vegas Valley, with specialized expertise in 55+ communities and luxury properties.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Summerlin</h3>
              <p class="text-hsb-muted mb-4">Premier master-planned community with luxury homes, golf courses, and resort-style amenities.</p>
              <a href="/summerlin-homes" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Summerlin Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Henderson</h3>
              <p class="text-hsb-muted mb-4">Parks and a wide range of housing options in Henderson.</p>
              <a href="/henderson-real-estate" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Henderson Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Northwest Las Vegas</h3>
              <p class="text-hsb-muted mb-4">Growing area with new construction, modern amenities, and convenient access to the Strip.</p>
              <a href="/northwest-las-vegas" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Northwest Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Red Rock Canyon</h3>
              <p class="text-hsb-muted mb-4">Stunning mountain views and luxury communities near Red Rock Canyon National Conservation Area.</p>
              <a href="/red-rock-canyon-communities" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Red Rock Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Boulder City</h3>
              <p class="text-hsb-muted mb-4">Historic community near Lake Mead with small-town charm and outdoor recreation.</p>
              <a href="/boulder-city-homes" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Boulder City Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Las Vegas Strip Area</h3>
              <p class="text-hsb-muted mb-4">High-rise condos and luxury properties in the heart of Las Vegas entertainment district.</p>
              <a href="/las-vegas-condos" class="text-blue-600 hover:text-blue-800 font-semibold">Explore Strip Condos →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Las Vegas Real Estate Market Overview</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              The Las Vegas real estate market continues to show strong growth with increasing property values, low inventory, and high demand across all price ranges and neighborhoods.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Market Growth</h3>
              <p class="text-hsb-muted">Las Vegas property values have shown consistent growth, driven by population increases and economic diversification.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Investment Opportunities</h3>
              <p class="text-hsb-muted">Strong rental market, no state income tax, and growing tourism industry create excellent investment potential.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Diverse Options</h3>
              <p class="text-hsb-muted">From luxury estates to 55+ communities, Las Vegas offers properties for every lifestyle and budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities Focus */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">55+ Communities in Las Vegas</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Las Vegas offers some of the finest active adult communities in the Southwest, featuring resort-style amenities, golf courses, and vibrant social scenes.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Popular 55+ Communities</h3>
              <ul class="space-y-3 text-hsb-text">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Heritage at Stonebridge - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sun City Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Siena - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  The Ridges - Summerlin
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Del Webb communities
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Community Amenities</h3>
              <ul class="space-y-3 text-hsb-text">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Championship golf courses
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Resort-style pools and spas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Fitness centers and tennis courts
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Clubhouses and social activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  24/7 security and gated access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Las Vegas Listings */}



      {/* Why Choose Dr. Jan Duffy */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Dr. Jan Duffy for Las Vegas Real Estate?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              With deep local knowledge and specialized expertise in 55+ communities, Dr. Jan Duffy provides unmatched service throughout the Las Vegas Valley.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">55+ Community Specialist</h3>
              <p class="text-hsb-muted">Deep expertise in active adult communities, understanding unique needs and lifestyle preferences.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Local Market Expert</h3>
              <p class="text-hsb-muted">Comprehensive knowledge of Las Vegas neighborhoods, market trends, and property values.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Personalized Service</h3>
              <p class="text-hsb-muted">Dedicated support throughout the entire buying or selling process with attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-hsb-dark py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Las Vegas Dream Home?</h2>
          <p class="text-lg text-hsb-sand mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you navigate the Las Vegas real estate market and find the perfect home in your ideal community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
