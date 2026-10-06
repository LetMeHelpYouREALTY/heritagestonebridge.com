import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { HeroPhoto } from "~/components/community/HeroPhoto";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";

export const head: DocumentHead = {
  title: "Summerlin Homes for Sale | Dr. Jan Duffy - Luxury Community Specialist",
  meta: [
    {
      name: "description",
      content: "Discover luxury Summerlin homes for sale with Dr. Jan Duffy. Premier master-planned community featuring golf courses, resort amenities, and 55+ active adult communities. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/summerlin-homes",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "luxury-home-buyers, adults-55-plus",
    },
    {
      name: "location",
      content: "Summerlin, Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Summerlin Homes for Sale | Dr. Jan Duffy - Luxury Community Specialist",
    },
    {
      property: "og:description",
      content: "Discover luxury Summerlin homes for sale in premier master-planned community with golf courses and resort amenities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/summerlin-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Summerlin Homes for Sale | Dr. Jan Duffy - Luxury Community Specialist",
    },
    {
      name: "twitter:description",
      content: "Discover luxury Summerlin homes for sale in premier master-planned community with golf courses and resort amenities.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 overflow-hidden">
        <HeroPhoto />
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Summerlin Homes for Sale
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover luxury living in Summerlin, Las Vegas's premier master-planned community featuring golf courses, resort amenities, and world-class shopping
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Schedule Summerlin Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>
      <OfficeListingsBelowHero />

      {/* Summerlin Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Summerlin?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Summerlin is Las Vegas's most prestigious master-planned community, offering luxury homes, championship golf courses, and resort-style amenities in a beautiful desert setting.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">⛳</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Golf Courses</h3>
              <p class="text-gray-600">Multiple championship golf courses including TPC Las Vegas and Red Rock Country Club</p>
            </div>
            
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏪</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Shopping & Dining</h3>
              <p class="text-gray-600">Downtown Summerlin, Red Rock Resort, and world-class restaurants</p>
            </div>
            
            <div class="text-center">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏊</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Resort Amenities</h3>
              <p class="text-gray-600">Pools, spas, fitness centers, and tennis courts throughout the community</p>
            </div>
            
            <div class="text-center">
              <div class="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏔️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Mountain Views</h3>
              <p class="text-gray-600">Stunning views of Red Rock Canyon and Spring Mountains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Lifestyle */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">The Summerlin Lifestyle</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Living in Summerlin means enjoying the perfect balance of luxury amenities, natural beauty, and convenient access to everything Las Vegas has to offer.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Choose Summerlin?</h3>
              <ul class="space-y-4 text-gray-700">
                <li class="flex items-start">
                  <span class="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Master-Planned Community:</strong> Thoughtfully designed with parks, trails, and community centers
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Championship Golf:</strong> Multiple golf courses including TPC Las Vegas and Red Rock Country Club
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Downtown Summerlin:</strong> Shopping, dining, and services at Downtown Summerlin
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Red Rock Canyon Access:</strong> Minutes from hiking, rock climbing, and scenic drives
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Downtown Summerlin:</strong> Premier shopping, dining, and entertainment destination
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Summerlin Quick Facts</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="font-semibold">Population:</span>
                  <span>100,000+ residents</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Founded:</span>
                  <span>1990</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Size:</span>
                  <span>22,500 acres</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Golf Courses:</span>
                  <span>8+ championship courses</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Parks:</span>
                  <span>150+ parks and trails</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Distance to Strip:</span>
                  <span>15-20 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Summerlin Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Summerlin's diverse neighborhoods, from luxury estates to active adult communities, each offering unique amenities and lifestyle options.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p class="text-gray-600 mb-4">Luxury 55+ active adult community with resort-style amenities and stunning mountain views.</p>
              <a href="/homes-for-sale-stonebridge-summerlin" class="text-green-600 hover:text-green-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sun City Summerlin</h3>
              <p class="text-gray-600 mb-4">Premier 55+ community with golf courses, recreation centers, and vibrant social scene.</p>
              <a href="/sun-city-summerlin-homes" class="text-green-600 hover:text-green-800 font-semibold">View Sun City Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">The Ridges</h3>
              <p class="text-gray-600 mb-4">Ultra-luxury community with custom estates and exclusive golf course access.</p>
              <a href="/the-ridges-summerlin" class="text-green-600 hover:text-green-800 font-semibold">View Ridges Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Siena</h3>
              <p class="text-gray-600 mb-4">Gated community featuring Tuscan-inspired architecture and resort amenities.</p>
              <a href="/siena-summerlin-homes" class="text-green-600 hover:text-green-800 font-semibold">View Siena Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Red Rock Country Club</h3>
              <p class="text-gray-600 mb-4">Golf course community with luxury homes and exclusive country club membership.</p>
              <a href="/red-rock-country-club" class="text-green-600 hover:text-green-800 font-semibold">View Country Club Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">The Arbors</h3>
              <p class="text-gray-600 mb-4">Parks, trails, and a wide range of home sizes.</p>
              <a href="/the-arbors-summerlin" class="text-green-600 hover:text-green-800 font-semibold">View Arbors Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities in Summerlin */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">55+ Active Adult Communities in Summerlin</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Summerlin offers some of the finest active adult communities in the Southwest, designed specifically for the 55+ lifestyle with resort-style amenities and social activities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Heritage at Stonebridge</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Gated community with 24/7 security
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Resort-style pool and spa
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Fitness center and tennis courts
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Clubhouse with social activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Stunning Red Rock Canyon views
                </li>
              </ul>
              <a href="/homes-for-sale-stonebridge-summerlin" class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">
                View Stonebridge Homes
              </a>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Sun City Summerlin</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Multiple golf courses
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Recreation centers and pools
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Arts and crafts studios
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Social clubs and activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Healthcare facilities on-site
                </li>
              </ul>
              <a href="/sun-city-summerlin-homes" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
                View Sun City Homes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Summerlin Listings */}



      {/* Why Choose Dr. Jan Duffy for Summerlin */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Summerlin Real Estate?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              With deep knowledge of Summerlin's communities and specialized expertise in 55+ active adult living, Dr. Jan Duffy provides unmatched service in Las Vegas's premier master-planned community.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🏆</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Summerlin Specialist</h3>
              <p class="text-gray-600">Deep expertise in Summerlin's communities, amenities, and unique lifestyle offerings.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">55+ Community Expert</h3>
              <p class="text-gray-600">Specialized knowledge of active adult communities and their unique requirements.</p>
            </div>
            
            <div class="text-center">
              <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🤝</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p class="text-gray-600">Dedicated support throughout your Summerlin home buying or selling journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-green-600 to-green-800 py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Summerlin Dream Home?</h2>
          <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Summerlin's premier master-planned community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Schedule Summerlin Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Summerlin Listings"
        subtitle="Call 702-789-6561"
        priceMin="400000"
        priceMax="3000000"
      />
    </>
  );
});
