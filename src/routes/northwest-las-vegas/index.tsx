import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
  meta: [
    {
      name: "description",
      content: "Discover Northwest Las Vegas real estate with Dr. Jan Duffy. Growing area with new construction, modern amenities, and convenient access to the Strip. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/northwest-las-vegas",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "home-buyers, luxury-home-buyers",
    },
    {
      name: "location",
      content: "Northwest Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
    },
    {
      property: "og:description",
      content: "Discover Northwest Las Vegas real estate in growing area with new construction and modern amenities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/northwest-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
    },
    {
      name: "twitter:description",
      content: "Discover Northwest Las Vegas real estate in growing area with new construction and modern amenities.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Northwest Las Vegas Real Estate"
        lede="Discover the growing Northwest Las Vegas area with new construction, modern amenities, and convenient access to the Strip"
      />
      <OfficeListingsBelowHero />

      {/* Northwest Las Vegas Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Northwest Las Vegas?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Northwest Las Vegas is one of the fastest-growing areas in the valley, offering new construction homes, modern amenities, and excellent value for money with convenient access to the Strip.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">New Construction</h3>
              <p class="text-hsb-muted">Modern homes with the latest features, designs, and energy-efficient systems</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Convenient Access</h3>
              <p class="text-hsb-muted">Easy access to the Las Vegas Strip, downtown, and major highways</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Great Value</h3>
              <p class="text-hsb-muted">More square footage for the price than many Summerlin resales</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Growth Potential</h3>
              <p class="text-hsb-muted">Rapidly developing area with increasing property values</p>
            </div>
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Lifestyle */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">The Northwest Las Vegas Lifestyle</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Northwest Las Vegas offers the perfect combination of new construction, modern amenities, and convenient access to everything Las Vegas has to offer.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="font-display text-2xl text-hsb-dark mb-6">Why Choose Northwest Las Vegas?</h3>
              <ul class="space-y-4 text-hsb-text">
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>New Construction:</strong> Modern homes with latest features, energy-efficient systems, and contemporary designs
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Square footage:</strong> More square footage for the price than many Summerlin resales
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Growth Potential:</strong> Rapidly developing area with increasing property values and new amenities
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Convenient Access:</strong> Easy access to Las Vegas Strip, downtown, and major highways
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Parks and recreation:</strong> Parks and recreational facilities across Northwest Las Vegas
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Northwest Las Vegas Quick Facts</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="font-semibold">Population:</span>
                  <span>200,000+ residents</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Growth Rate:</span>
                  <span>Fastest growing area</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">New Communities:</span>
                  <span>10+ master-planned</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Distance to Strip:</span>
                  <span>15-25 minutes</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Schools:</span>
                  <span>New & modern facilities</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Parks:</span>
                  <span>50+ parks & trails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Northwest Las Vegas Communities</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore Northwest Las Vegas's diverse neighborhoods, from master-planned communities to new construction developments.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Skye Canyon</h3>
              <p class="text-hsb-muted mb-4">Master-planned community with outdoor recreation, parks, and modern amenities.</p>
              <a href="/skye-canyon-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Skye Canyon Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Centennial Hills</h3>
              <p class="text-hsb-muted mb-4">Parks, shopping, and resale homes in Centennial Hills.</p>
              <a href="/centennial-hills-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Centennial Hills Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Aliante</h3>
              <p class="text-hsb-muted mb-4">Master-planned community with a golf course, parks, and a clubhouse.</p>
              <a href="/aliante-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Aliante Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Tule Springs</h3>
              <p class="text-hsb-muted mb-4">New development with modern homes and community amenities.</p>
              <a href="/tule-springs-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Tule Springs Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Desert Shores</h3>
              <p class="text-hsb-muted mb-4">Waterfront community with lakes, parks, and recreational facilities.</p>
              <a href="/desert-shores-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Desert Shores Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">North Las Vegas</h3>
              <p class="text-hsb-muted mb-4">Growing area with new construction and affordable housing options.</p>
              <a href="/north-las-vegas-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View North Las Vegas Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Focus */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">New Construction in Northwest Las Vegas</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Northwest Las Vegas is home to numerous new construction developments offering modern homes with the latest features and designs.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">New Construction Benefits</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Latest building codes and safety features
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Energy-efficient systems and appliances
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Modern floor plans and open designs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Warranty coverage on major systems
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Customization options available
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Popular Builders</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Lennar - Modern homes with smart features
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Pulte Homes - Quality construction and design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  KB Home - Affordable new construction
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Richmond American - Customizable floor plans
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Toll Brothers - Luxury new construction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Northwest Las Vegas Listings */}



      {/* Why Choose Dr. Jan Duffy for Northwest Las Vegas */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Dr. Jan Duffy for Northwest Las Vegas Real Estate?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              With comprehensive knowledge of Northwest Las Vegas's growing communities and new construction developments, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Northwest Specialist</h3>
              <p class="text-hsb-muted">Deep expertise in Northwest Las Vegas communities and new construction developments.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">New Construction Expert</h3>
              <p class="text-hsb-muted">Specialized knowledge of new construction processes and builder relationships.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Personalized Service</h3>
              <p class="text-hsb-muted">Dedicated support throughout your Northwest Las Vegas home buying journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-hsb-dark py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Northwest Las Vegas Dream Home?</h2>
          <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Northwest Las Vegas's growing communities.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Northwest Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Northwest Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="250000"
        priceMax="1500000"
      />
    </>
  );
});
