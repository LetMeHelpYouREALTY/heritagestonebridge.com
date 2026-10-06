import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  meta: [
    {
      name: "description",
      content: "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/summerlin-55-plus-communities",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, summerlin-buyers",
    },
    {
      name: "location",
      content: "Summerlin, Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/summerlin-55-plus-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for Summerlin 55+ communities
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Summerlin 55+ Communities"
        lede="Discover Las Vegas's premier active adult communities in Summerlin with championship golf courses, Red Rock Canyon views, and luxury amenities"
      />
      <OfficeListingsBelowHero />

      {/* Summerlin Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Summerlin is Perfect for 55+ Living</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover why Summerlin offers the ultimate active adult lifestyle.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Master-Planned Excellence</h3>
              <p class="text-hsb-muted">Thoughtfully designed communities with parks, trails, and world-class amenities</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Championship Golf</h3>
              <p class="text-hsb-muted">Multiple golf courses including TPC Las Vegas and Red Rock Country Club</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Red Rock Canyon Access</h3>
              <p class="text-hsb-muted">Minutes from hiking, rock climbing, and scenic drives in Red Rock Canyon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Summerlin Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Premier 55+ Communities in Summerlin</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore Summerlin's finest active adult communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Heritage at Stonebridge</h3>
              <p class="text-hsb-muted mb-4">Lennar's newest 55+ community in Summerlin West with Everything's Included® features</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Three home collections (Cromwell, Stirling, Evander)</li>
                <li>• 8,000 sq ft clubhouse with fitness center</li>
                <li>• Resort-style pool & heated lap pool</li>
                <li>• Pickleball & bocce courts</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community with RV parking</li>
              </ul>
              <div class="text-lg font-bold text-green-600 mb-4">Starting from $464,990</div>
              <a href="/heritage-at-stonebridge-homes-for-sale" class="text-green-600 hover:text-green-800 font-semibold">View Heritage at Stonebridge →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Summerlin</h3>
              <p class="text-hsb-muted mb-4">Established premier 55+ community with multiple golf courses and mature amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Multiple championship golf courses</li>
                <li>• Recreation centers and pools</li>
                <li>• Extensive social clubs</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-green-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" class="text-green-600 hover:text-green-800 font-semibold">View Sun City Summerlin →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">The Ridges</h3>
              <p class="text-hsb-muted mb-4">Ultra-luxury community with custom estates and exclusive golf course access</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Custom luxury homes</li>
                <li>• Exclusive golf course</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Elite social scene</li>
                <li>• Highest-end finishes</li>
              </ul>
              <div class="text-lg font-bold text-green-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" class="text-green-600 hover:text-green-800 font-semibold">View The Ridges →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Siena</h3>
              <p class="text-hsb-muted mb-4">Tuscan-inspired luxury community with resort amenities and sophisticated design</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div class="text-lg font-bold text-green-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" class="text-green-600 hover:text-green-800 font-semibold">View Siena →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Red Rock Country Club</h3>
              <p class="text-hsb-muted mb-4">Exclusive golf course community with luxury homes and private membership</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Private golf course</li>
                <li>• Country club membership</li>
                <li>• Luxury amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive events</li>
                <li>• Concierge services</li>
              </ul>
              <div class="text-lg font-bold text-green-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" class="text-green-600 hover:text-green-800 font-semibold">View Country Club →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">The Arbors</h3>
              <p class="text-hsb-muted mb-4">Parks, trails, and a wide range of home sizes</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Parks and trails</li>
                <li>• Walking paths</li>
                <li>• Clubhouse access</li>
                <li>• Community events</li>
                <li>• Maintained common areas</li>
                <li>• Convenient location</li>
              </ul>
              <div class="text-lg font-bold text-green-600 mb-4">$400,000 - $1,200,000</div>
              <a href="/the-arbors-summerlin" class="text-green-600 hover:text-green-800 font-semibold">View The Arbors →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Lifestyle Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">The Summerlin 55+ Lifestyle Advantage</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Living in Summerlin's 55+ communities means enjoying the perfect blend of luxury amenities, natural beauty, and active adult living.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Recreation & Amenities</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Championship golf courses and country clubs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Red Rock Canyon hiking and outdoor recreation
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Downtown Summerlin shopping and dining
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  World-class healthcare and medical facilities
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Community Benefits</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Master-planned community with thoughtful design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Safe, well-maintained neighborhoods
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Active social scene and community events
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Convenient access to Las Vegas Strip
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
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Summerlin 55+ Community?</h2>
          <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal Summerlin community that matches your lifestyle, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Summerlin 55+ Communities"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="5000000"
      />
    </>
  );
});
