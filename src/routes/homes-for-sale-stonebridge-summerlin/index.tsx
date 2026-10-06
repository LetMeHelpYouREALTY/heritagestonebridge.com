import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { schemaOpeningHours } from "~/config/business";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Homes for Sale in Stonebridge, Summerlin, Las Vegas NV | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Discover luxury homes for sale in Stonebridge, Summerlin, Las Vegas NV. Gated community with resort amenities, mountain views, and active adult living. Dr. Jan Duffy, your Stonebridge specialist.",
    },
    {
      property: "og:title",
      content: "Homes for Sale in Stonebridge, Summerlin, Las Vegas NV | Dr. Jan Duffy",
    },
    {
      property: "og:description",
      content:
        "Discover luxury homes for sale in Stonebridge, Summerlin, Las Vegas NV. Gated community with resort amenities, mountain views, and active adult living.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin",
    },
    {
      property: "og:image",
      content: "https://heritagestonebridge.com/images/stonebridge-homes-hero.webp",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Homes for Sale in Stonebridge, Summerlin, Las Vegas NV | Dr. Jan Duffy",
    },
    {
      name: "twitter:description",
      content:
        "Discover luxury homes for sale in Stonebridge, Summerlin, Las Vegas NV. Gated community with resort amenities, mountain views, and active adult living.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin",
    },
  ],
};

export default component$(() => {
  // Inject schema markup
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Homes for Sale in Stonebridge, Summerlin, Las Vegas NV"
        lede="Discover luxury living in Stonebridge, Summerlin's premier gated community. Three distinct home collections from Lennar with prices starting from $464,990. Currently 15 homes available for sale with resort-style amenities, mountain views, and active adult lifestyle."
      />
      <OfficeListingsBelowHero />

      {/* Community Overview */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-hsb-dark mb-4">
              Why Choose Stonebridge, Summerlin?
            </h2>
            <p class="text-xl text-hsb-muted max-w-3xl mx-auto">
              Stonebridge offers the perfect blend of luxury living, resort amenities, and prime
              Summerlin location for discerning homebuyers.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gated Security */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <h3 class="text-xl font-semibold mb-3">Gated Security</h3>
                <p class="text-hsb-muted">
                  24/7 gated access with professional security ensuring privacy and peace of mind
                  for all residents.
                </p>
              </div>
            </div>

            {/* Resort Amenities */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <h3 class="text-xl font-semibold mb-3">Resort Amenities</h3>
                <p class="text-hsb-muted">
                  8,000 sq ft clubhouse, resort-style pool & heated lap pool, fitness center, pickleball & bocce courts, walking trails, and RV parking for active living.
                </p>
              </div>
            </div>

            {/* Prime Location */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <h3 class="text-xl font-semibold mb-3">Prime Location</h3>
                <p class="text-hsb-muted">
                  Minutes from Red Rock Canyon, Downtown Summerlin, and world-class shopping and
                  dining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-hsb-dark mb-4">
              Featured Stonebridge Homes
            </h2>
            <p class="text-xl text-hsb-muted max-w-3xl mx-auto">
              Explore our curated selection of luxury homes currently available in the Stonebridge
              community.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div class="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div class="h-48 bg-hsb-primary flex items-center justify-center">
                <div class="text-center text-white">
                  <h3 class="text-2xl font-bold mb-2">Cromwell Collection</h3>
                  <p class="text-hsb-sand">1,232 - 1,456 sq ft</p>
                </div>
              </div>
              <div class="p-6">
                <h4 class="text-xl font-semibold mb-3">Luxury Single-Story Living</h4>
                <ul class="space-y-2 text-hsb-muted mb-4">
                  <li>• 2-3 Bedrooms, 2-2.5 Bathrooms</li>
                  <li>• Open concept living spaces</li>
                  <li>• Gourmet kitchens with islands</li>
                  <li>• Private courtyards</li>
                </ul>
                <div class="text-2xl font-bold text-blue-600 mb-4">Starting from $464,990</div>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener"
                  class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-block"
                >
                  Schedule Tour
                </a>
              </div>
            </div>

            {/* Property 2 */}
            <div class="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div class="h-48 bg-hsb-primary flex items-center justify-center">
                <div class="text-center text-white">
                  <h3 class="text-2xl font-bold mb-2">Stirling Collection</h3>
                  <p class="text-green-100">1,456 - 2,100 sq ft</p>
                </div>
              </div>
              <div class="p-6">
                <h4 class="text-xl font-semibold mb-3">Spacious floor plans</h4>
                <ul class="space-y-2 text-hsb-muted mb-4">
                  <li>• 3-4 Bedrooms, 2.5-3 Bathrooms</li>
                  <li>• Great rooms with fireplaces</li>
                  <li>• Master suites with walk-in closets</li>
                  <li>• Covered patios</li>
                </ul>
                <div class="text-2xl font-bold text-green-600 mb-4">Starting from $675,990</div>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener"
                  class="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center inline-block"
                >
                  Schedule Tour
                </a>
              </div>
            </div>

            {/* Property 3 */}
            <div class="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div class="h-48 bg-hsb-primary flex items-center justify-center">
                <div class="text-center text-white">
                  <h3 class="text-2xl font-bold mb-2">Evander Collection</h3>
                  <p class="text-purple-100">2,100 - 2,873 sq ft</p>
                </div>
              </div>
              <div class="p-6">
                <h4 class="text-xl font-semibold mb-3">Estate-Style Living</h4>
                <ul class="space-y-2 text-hsb-muted mb-4">
                  <li>• 4-5 Bedrooms, 3-4 Bathrooms</li>
                  <li>• Formal dining rooms</li>
                  <li>• Home offices/studies</li>
                  <li>• Expansive outdoor living</li>
                </ul>
                <div class="text-2xl font-bold text-purple-600 mb-4">Starting from $861,990</div>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener"
                  class="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center inline-block"
                >
                  Schedule Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Amenities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-hsb-dark mb-6">
                Prime Summerlin Location
              </h2>
              <p class="text-lg text-hsb-text mb-6">
                Stonebridge is perfectly positioned in Summerlin West, offering unparalleled access
                to Las Vegas's finest attractions and amenities.
              </p>
              <ul class="space-y-3 text-hsb-muted">
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  12 miles to Red Rock Canyon National Conservation Area
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Minutes to Downtown Summerlin shopping and dining
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Close to world-class golf courses
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Easy access to McCarran International Airport
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-3">✓</span>
                  Nearby medical facilities and hospitals
                </li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-6">Community Amenities</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <span class="text-2xl mb-2 block">🏊</span>
                  <p class="font-semibold">Swimming Pools</p>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <span class="text-2xl mb-2 block">🏓</span>
                  <p class="font-semibold">Pickleball Courts</p>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <span class="text-2xl mb-2 block">💪</span>
                  <p class="font-semibold">Fitness Center</p>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <span class="text-2xl mb-2 block">🏠</span>
                  <p class="font-semibold">Clubhouse</p>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <span class="text-2xl mb-2 block">🚶</span>
                  <p class="font-semibold">Walking Trails</p>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <span class="text-2xl mb-2 block">🌳</span>
                  <p class="font-semibold">Parks & Gardens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-hsb-dark mb-4">
              Stonebridge Market Insights
            </h2>
            <p class="text-xl text-hsb-muted max-w-3xl mx-auto">
              Stay informed about the latest market trends and property values in Stonebridge,
              Summerlin.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center p-6 bg-blue-50 rounded-lg">
              <div class="text-4xl font-bold text-blue-600 mb-2">$750K+</div>
              <p class="text-hsb-muted">Average Home Price</p>
            </div>
            <div class="text-center p-6 bg-green-50 rounded-lg">
              <div class="text-4xl font-bold text-green-600 mb-2">5.2%</div>
              <p class="text-hsb-muted">Year-over-Year Appreciation</p>
            </div>
            <div class="text-center p-6 bg-purple-50 rounded-lg">
              <div class="text-4xl font-bold text-purple-600 mb-2">28</div>
              <p class="text-hsb-muted">Days on Market Average</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-hsb-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-hsb-muted">
              Everything you need to know about buying a home in Stonebridge, Summerlin.
            </p>
          </div>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-3">
                What types of homes are available in Stonebridge?
              </h3>
              <p class="text-hsb-muted">
                Stonebridge offers three distinct home collections: Cromwell (1,232-1,456 sq ft),
                Stirling (1,456-2,100 sq ft), and Evander (2,100-2,873 sq ft). All homes feature
                single-story living with luxury finishes and resort-style amenities.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-3">Is Stonebridge a gated community?</h3>
              <p class="text-hsb-muted">
                Yes, Stonebridge is a fully gated community with 24/7 security and controlled
                access. This ensures privacy and peace of mind for all residents.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-3">
                What amenities are included in Stonebridge?
              </h3>
              <p class="text-hsb-muted">
                Residents enjoy access to a clubhouse, swimming pools, fitness center, pickleball
                courts, walking trails, parks, and gardens. The community is designed for active
                adult living with resort-style amenities.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-3">
                How close is Stonebridge to Red Rock Canyon?
              </h3>
              <p class="text-hsb-muted">
                Stonebridge is located just 12 miles from Red Rock Canyon National Conservation
                Area, making it easy to enjoy hiking, rock climbing, and scenic drives in this
                natural wonder.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-3">What is the HOA fee for Stonebridge homes?</h3>
              <p class="text-hsb-muted">
                The HOA fee for Stonebridge homes is approximately $410 per month, which includes
                maintenance of common areas, security, and access to all community amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-hsb-dark text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home in Stonebridge?
          </h2>
          <p class="text-xl text-hsb-sand mb-8">
            Let Dr. Jan Duffy help you discover the perfect home in Stonebridge, Summerlin. With
            years of experience and local expertise, she'll guide you through every step of the home
            buying process.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              class="bg-hsb-primary text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Schedule Private Tour
            </a>
            <a
              href="tel:702-789-6561"
              class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-block text-center"
            >
              Call Dr. Jan Duffy
            </a>
          </div>
          <div class="mt-8 text-center">
            <p class="text-hsb-sand text-sm">
              <strong>Address:</strong> Crossbridge Dr, Las Vegas, NV 89138
              <br />
              <strong>Neighborhood:</strong> Summerlin West, Stonebridge Community
              <br />
              <strong>License:</strong> Nevada Real Estate License #S.0197614
            </p>
          </div>
        </div>
      </section>

      {/* Stonebridge Listings Widget */}



      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Stonebridge Homes"
        subtitle="Call 702-789-6561"
        priceMin="600000"
        priceMax="900000"
      />
    </>
  );
});
