import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Sun City Del Webb Real Estate | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  meta: [
    {
      name: "description",
      content: "Expert guidance on Sun City and Del Webb communities in Las Vegas. Dr. Jan Duffy specializes in established 55+ communities with golf courses and mature amenities. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/sun-city-del-webb-real-estate",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, sun-city-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Sun City Del Webb Real Estate | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Expert guidance on Sun City and Del Webb communities in Las Vegas. Dr. Jan Duffy specializes in established 55+ communities with golf courses and mature amenities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/sun-city-del-webb-real-estate",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Sun City Del Webb Real Estate | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Expert guidance on Sun City and Del Webb communities in Las Vegas. Dr. Jan Duffy specializes in established 55+ communities with golf courses and mature amenities.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for Sun City Del Webb communities
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Sun City Del Webb Real Estate"
        lede="Expert guidance on established 55+ communities with golf courses, mature amenities, and proven track records"
      />
      <OfficeListingsBelowHero />

      {/* Established Communities Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Established Sun City & Del Webb Communities?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover the benefits of established communities with proven amenities and strong resale markets.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Proven Track Record</h3>
              <p class="text-hsb-muted">Established communities with mature amenities, strong resale markets, and proven appreciation</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Championship Golf</h3>
              <p class="text-hsb-muted">Multiple golf courses with established memberships and tournament-quality facilities</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Mature Amenities</h3>
              <p class="text-hsb-muted">Fully developed clubhouses, fitness centers, pools, and social facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Premier Sun City & Del Webb Communities</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore Las Vegas's finest established 55+ communities, each offering unique amenities and lifestyle options for discerning active adults.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Summerlin</h3>
              <p class="text-hsb-muted mb-4">Premier established 55+ community with multiple golf courses and mature amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Multiple championship golf courses</li>
                <li>• Recreation centers and pools</li>
                <li>• Extensive social clubs</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-purple-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Sun City Summerlin →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Anthem</h3>
              <p class="text-hsb-muted mb-4">Henderson's premier 55+ community with golf courses and vibrant social scene</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-purple-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-anthem" class="text-purple-600 hover:text-purple-800 font-semibold">View Sun City Anthem →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Del Webb Communities</h3>
              <p class="text-hsb-muted mb-4">Newer Del Webb developments with contemporary amenities and modern designs</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Modern clubhouse designs</li>
                <li>• Updated fitness centers</li>
                <li>• Contemporary social spaces</li>
                <li>• Latest technology integration</li>
                <li>• Quality construction</li>
                <li>• Active lifestyle focus</li>
              </ul>
              <div class="text-lg font-bold text-purple-600 mb-4">$400,000 - $1,500,000</div>
              <a href="/del-webb-las-vegas" class="text-purple-600 hover:text-purple-800 font-semibold">View Del Webb Communities →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City MacDonald Ranch</h3>
              <p class="text-hsb-muted mb-4">Luxury golf course community with custom homes and exclusive amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Custom luxury homes</li>
                <li>• Golf course access</li>
                <li>• Private amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive location</li>
                <li>• High-end finishes</li>
              </ul>
              <div class="text-lg font-bold text-purple-600 mb-4">$700,000 - $2,500,000+</div>
              <a href="/macdonald-ranch-henderson" class="text-purple-600 hover:text-purple-800 font-semibold">View MacDonald Ranch →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Seven Hills</h3>
              <p class="text-hsb-muted mb-4">Gated luxury community with custom estates and stunning mountain views</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Gated community</li>
                <li>• Custom estates</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Exclusive location</li>
                <li>• Luxury finishes</li>
              </ul>
              <div class="text-lg font-bold text-purple-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/seven-hills-henderson" class="text-purple-600 hover:text-purple-800 font-semibold">View Seven Hills →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Del Webb Inspirada</h3>
              <p class="text-hsb-muted mb-4">Modern master-planned community with contemporary homes and amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Modern design</li>
                <li>• Contemporary amenities</li>
                <li>• Parks and trails</li>
                <li>• Community events</li>
                <li>• New construction</li>
                <li>• Energy-efficient homes</li>
              </ul>
              <div class="text-lg font-bold text-purple-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/inspirada-henderson" class="text-purple-600 hover:text-purple-800 font-semibold">View Inspirada →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Comparison */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Sun City vs Del Webb: Which is Right for You?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Understanding the differences between Sun City and Del Webb communities helps you make the best choice for your active adult lifestyle.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Sun City Communities</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Established, mature communities with proven track records
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Multiple championship golf courses
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Mature landscaping and established amenities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Strong resale markets and appreciation
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Del Webb Communities</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Newer construction with contemporary amenities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Modern clubhouse designs and technology
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Energy-efficient homes and smart features
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Active lifestyle focus and social activities
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
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Sun City or Del Webb Community?</h2>
          <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you choose between established Sun City communities and newer Del Webb developments.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Sun City Del Webb Real Estate"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="2000000"
      />
    </>
  );
});
