import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Heritage at Stonebridge Homes for Sale | 55+ Summerlin 89138",
  meta: [
    {
      name: "description",
      content: "Find Heritage at Stonebridge homes for sale in Summerlin. Expert guidance from Dr. Jan Duffy on Lennar's premier 55+ community with Everything's Included® features. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, heritage-stonebridge-buyers",
    },
    {
      name: "location",
      content: "Heritage at Stonebridge, Summerlin, Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Heritage at Stonebridge Homes for Sale | 55+ Summerlin 89138",
    },
    {
      property: "og:description",
      content: "Find Heritage at Stonebridge homes for sale in Summerlin. Expert guidance from Dr. Jan Duffy on Lennar's premier 55+ community.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Heritage at Stonebridge Homes for Sale | 55+ Summerlin 89138",
    },
    {
      name: "twitter:description",
      content: "Find Heritage at Stonebridge homes for sale in Summerlin. Expert guidance from Dr. Jan Duffy on Lennar's premier 55+ community.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for Heritage at Stonebridge
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Heritage at Stonebridge Homes for Sale"
        lede="Discover Lennar's premier 55+ community in Summerlin West with Everything's Included® features and stunning Red Rock Canyon views"
      />
      <OfficeListingsBelowHero />

      {/* Current Market Insight */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Current Heritage at Stonebridge Market Update</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              As Las Vegas's premier 55+ community specialist, I'm seeing unprecedented demand for Heritage at Stonebridge homes. Here's what you need to know about today's market.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Current Pricing</h3>
              <p class="text-hsb-muted">Starting from $464,990 for Cromwell collection homes with Everything's Included® features</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Market Demand</h3>
              <p class="text-hsb-muted">High demand with limited inventory - homes selling quickly in this premier location</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Investment Potential</h3>
              <p class="text-hsb-muted">Strong appreciation potential in Summerlin West with Red Rock Canyon proximity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Collections */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Heritage at Stonebridge Home Collections</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Choose from three distinct home collections, each designed with active adult living in mind and featuring Lennar's Everything's Included® package.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Cromwell Collection</h3>
              <p class="text-hsb-muted mb-4">Starting at $464,990 - Perfect for active adults seeking modern comfort</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• 1,500-2,000 sq ft single-story homes</li>
                <li>• Open concept living areas</li>
                <li>• Master suite with walk-in closet</li>
                <li>• Covered patio or lanai</li>
                <li>• 2-car garage</li>
                <li>• Everything's Included® features</li>
              </ul>
              <div class="text-lg font-bold text-red-600 mb-4">Starting from $464,990</div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Stirling Collection</h3>
              <p class="text-hsb-muted mb-4">Mid-range pricing - Enhanced features and larger layouts</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• 1,800-2,400 sq ft single-story homes</li>
                <li>• Expanded living spaces</li>
                <li>• Upgraded finishes</li>
                <li>• Larger master suite</li>
                <li>• Extended covered outdoor living</li>
                <li>• Premium Everything's Included®</li>
              </ul>
              <div class="text-lg font-bold text-red-600 mb-4">Mid-range pricing</div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Evander Collection</h3>
              <p class="text-hsb-muted mb-4">Premium pricing - Luxury features and maximum space</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• 2,200-2,800 sq ft single-story homes</li>
                <li>• Spacious great rooms</li>
                <li>• Luxury master suite</li>
                <li>• Gourmet kitchen</li>
                <li>• Large covered patio</li>
                <li>• Premium Everything's Included®</li>
              </ul>
              <div class="text-lg font-bold text-red-600 mb-4">Premium pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything's Included Features */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Lennar's Everything's Included® Package</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Heritage at Stonebridge homes come with Lennar's Everything's Included® package, providing premium features at no additional cost.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Kitchen & Living Features</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Granite countertops throughout
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Stainless steel appliances
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Hardwood flooring in main areas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Upgraded lighting fixtures
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Smart Home Technology</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Smart thermostat included
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Smart door locks
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Smart garage door opener
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Smart home security system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Heritage at Stonebridge Amenities</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Experience resort-style living with world-class amenities designed for active adults in the heart of Summerlin West.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">8,000 Sq Ft Clubhouse</h3>
              <p class="text-hsb-muted">State-of-the-art clubhouse with fitness center, social spaces, and meeting rooms</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Resort-Style Pool</h3>
              <p class="text-hsb-muted">Main pool and heated lap pool for year-round swimming and relaxation</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sports Courts</h3>
              <p class="text-hsb-muted">Pickleball and bocce courts for active recreation and social activities</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Red Rock Canyon Views</h3>
              <p class="text-hsb-muted">Stunning mountain views of Red Rock Canyon National Conservation Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Heritage at Stonebridge */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Heritage at Stonebridge?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults find their perfect home. Here's why Heritage at Stonebridge stands out.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Prime Summerlin Location</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Minutes from Red Rock Canyon National Conservation Area
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Close to Downtown Summerlin shopping and dining
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Easy access to Las Vegas Strip and McCarran Airport
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  World-class healthcare facilities nearby
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Active Adult Lifestyle</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Age-restricted community for 55+ residents
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Maintenance-free living with HOA services
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Social activities and community events
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Gated community with security and privacy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Widgets */}

      {/* Call to Action */}
      <section class="bg-hsb-dark py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Heritage at Stonebridge Home?</h2>
          <p class="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you find the perfect Heritage at Stonebridge home with Lennar's Everything's Included® features.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Heritage at Stonebridge Homes"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="1500000"
      />
    </>
  );
});
