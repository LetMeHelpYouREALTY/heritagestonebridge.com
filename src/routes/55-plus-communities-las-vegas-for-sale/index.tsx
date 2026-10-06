import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "55+ Communities in Las Vegas for Sale | Active Adult Homes Available - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Browse 55+ communities in Las Vegas for sale with current listings, pricing, and availability. Expert guidance for active adult home buyers. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/55-plus-communities-las-vegas-for-sale",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, home-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "55+ Communities in Las Vegas for Sale | Active Adult Homes Available",
    },
    {
      property: "og:description",
      content: "Browse 55+ communities in Las Vegas for sale with current listings, pricing, and availability.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/55-plus-communities-las-vegas-for-sale",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "55+ Communities in Las Vegas for Sale | Active Adult Homes Available",
    },
    {
      name: "twitter:description",
      content: "Browse 55+ communities in Las Vegas for sale with current listings, pricing, and availability.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for 55+ communities for sale
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="55+ Communities in Las Vegas for Sale"
        lede="Browse current listings of active adult communities with available homes, pricing, and detailed information"
      />
      <OfficeListingsBelowHero />

      {/* Current Market Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Current 55+ Community Market</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Las Vegas offers a diverse selection of 55+ communities with homes currently available for sale across various price ranges and locations.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">New Construction</h3>
              <p class="text-hsb-muted">Heritage at Stonebridge and other new developments with modern amenities and contemporary designs</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Resale Market</h3>
              <p class="text-hsb-muted">Established communities like Sun City Summerlin with mature amenities and proven track records</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Luxury Options</h3>
              <p class="text-hsb-muted">High-end communities including The Ridges and Siena with premium amenities and custom homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Communities with Homes Currently Available</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore 55+ communities in Las Vegas that currently have homes for sale, from new construction to resale options.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Heritage at Stonebridge</h3>
              <p class="text-hsb-muted mb-4">New construction 55+ community with Lennar Everything's Included® features</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Three home collections available</li>
                <li>• Starting from $464,990</li>
                <li>• Resort-style amenities</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community</li>
                <li>• Smart home technology</li>
              </ul>
              <div class="text-lg font-bold text-indigo-600 mb-4">New Construction Available</div>
              <a href="/homes-for-sale-stonebridge-summerlin" class="text-indigo-600 hover:text-indigo-800 font-semibold">View Available Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Summerlin</h3>
              <p class="text-hsb-muted mb-4">Resale homes and mature amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-indigo-600 mb-4">Resale Homes Available</div>
              <a href="/sun-city-summerlin-homes" class="text-indigo-600 hover:text-indigo-800 font-semibold">View Resale Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">The Ridges</h3>
              <p class="text-hsb-muted mb-4">Ultra-luxury community with custom estates and exclusive amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Custom luxury homes</li>
                <li>• Exclusive golf course</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Elite social scene</li>
                <li>• Highest-end finishes</li>
              </ul>
              <div class="text-lg font-bold text-indigo-600 mb-4">Luxury Estates Available</div>
              <a href="/the-ridges-summerlin" class="text-indigo-600 hover:text-indigo-800 font-semibold">View Luxury Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Siena</h3>
              <p class="text-hsb-muted mb-4">Tuscan-inspired community with resort amenities and sophisticated design</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div class="text-lg font-bold text-indigo-600 mb-4">Resort-Style Homes Available</div>
              <a href="/siena-summerlin-homes" class="text-indigo-600 hover:text-indigo-800 font-semibold">View Siena Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Del Webb Communities</h3>
              <p class="text-hsb-muted mb-4">Multiple Del Webb communities with homes available across Las Vegas</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Established reputation</li>
                <li>• Quality construction</li>
                <li>• Active lifestyle focus</li>
                <li>• Social activities</li>
                <li>• Maintenance-free living</li>
                <li>• Various price points</li>
              </ul>
              <div class="text-lg font-bold text-indigo-600 mb-4">Multiple Communities Available</div>
              <a href="/del-webb-las-vegas" class="text-indigo-600 hover:text-indigo-800 font-semibold">View Del Webb Homes →</a>
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
              <div class="text-lg font-bold text-indigo-600 mb-4">Golf Course Homes Available</div>
              <a href="/red-rock-country-club" class="text-indigo-600 hover:text-indigo-800 font-semibold">View Country Club Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">How to Buy in a 55+ Community</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Understanding the buying process for 55+ communities helps ensure a smooth transaction and successful purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Pre-Purchase Steps</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Research communities and amenities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Get pre-approved for financing
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Visit communities and model homes
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Review HOA documents and fees
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Purchase Process</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Make an offer and negotiate terms
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Complete inspections and appraisals
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Finalize financing and closing
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Move in and enjoy your new home
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
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect 55+ Community?</h2>
          <p class="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you find the ideal 55+ community in Las Vegas with homes currently available for sale.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-indigo-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Communities for Sale"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
