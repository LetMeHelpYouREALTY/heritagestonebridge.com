import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options. Expert guidance for renters. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, renters",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes",
    },
    {
      property: "og:description",
      content: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes",
    },
    {
      name: "twitter:description",
      content: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for 55+ communities for rent
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="55+ Communities in Las Vegas for Rent"
        lede="Discover active adult rental homes with access to community amenities, social activities, and maintenance-free living"
      />
      <OfficeListingsBelowHero />

      {/* Rental Market Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">55+ Community Rental Market</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Las Vegas offers rental opportunities in various 55+ communities, allowing you to experience active adult living before committing to purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Rental Availability</h3>
              <p class="text-hsb-muted">Limited but available rental homes in established 55+ communities with owner-occupied properties</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Amenity Access</h3>
              <p class="text-hsb-muted">Renters typically have access to community amenities, pools, fitness centers, and social activities</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Flexible Terms</h3>
              <p class="text-hsb-muted">Various lease terms available, from short-term rentals to annual leases with renewal options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities with Rental Options */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Communities with Rental Options</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore 55+ communities in Las Vegas that offer rental opportunities for active adults.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Summerlin</h3>
              <p class="text-hsb-muted mb-4">Occasional rental homes available from owners</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Owner rentals available</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$2,500 - $4,500/month</div>
              <a href="/sun-city-summerlin-rentals" class="text-teal-600 hover:text-hsb-dark font-semibold">View Rental Options →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Del Webb Communities</h3>
              <p class="text-hsb-muted mb-4">Various Del Webb communities with rental homes from individual owners</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Quality construction</li>
                <li>• Active lifestyle focus</li>
                <li>• Social activities</li>
                <li>• Maintenance-free living</li>
                <li>• Various price points</li>
                <li>• Owner rental policies</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$2,000 - $5,000/month</div>
              <a href="/del-webb-rentals" class="text-teal-600 hover:text-hsb-dark font-semibold">View Del Webb Rentals →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Siena</h3>
              <p class="text-hsb-muted mb-4">Luxury community with occasional rental homes from owners</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$3,500 - $6,000/month</div>
              <a href="/siena-rentals" class="text-teal-600 hover:text-hsb-dark font-semibold">View Siena Rentals →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Red Rock Country Club</h3>
              <p class="text-hsb-muted mb-4">Exclusive golf course community with limited rental opportunities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Private golf course</li>
                <li>• Country club membership</li>
                <li>• Luxury amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive events</li>
                <li>• Limited rental availability</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$4,000 - $8,000/month</div>
              <a href="/red-rock-country-club-rentals" class="text-teal-600 hover:text-hsb-dark font-semibold">View Country Club Rentals →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">MacDonald Ranch</h3>
              <p class="text-hsb-muted mb-4">Henderson luxury community with occasional rental homes</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Custom luxury homes</li>
                <li>• Golf course access</li>
                <li>• Private amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive location</li>
                <li>• High-end finishes</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$3,000 - $7,000/month</div>
              <a href="/macdonald-ranch-rentals" class="text-teal-600 hover:text-hsb-dark font-semibold">View MacDonald Ranch Rentals →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Seven Hills</h3>
              <p class="text-hsb-muted mb-4">Gated luxury community with limited rental opportunities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Gated community</li>
                <li>• Custom estates</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Exclusive location</li>
                <li>• Luxury finishes</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$3,500 - $8,000/month</div>
              <a href="/seven-hills-rentals" class="text-teal-600 hover:text-hsb-dark font-semibold">View Seven Hills Rentals →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Considerations */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Important Rental Considerations</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Understanding rental policies, costs, and requirements helps ensure a successful rental experience in 55+ communities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Rental Policies</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Age restrictions (55+ requirement)
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Lease terms and renewal options
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Amenity access and restrictions
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Pet policies and limitations
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Cost Considerations</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Monthly rent and security deposits
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  HOA fees and community assessments
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Utilities and maintenance costs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Application and background check fees
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
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Rental?</h2>
          <p class="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you find the ideal 55+ community rental in Las Vegas with access to amenities and active adult lifestyle.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-hsb-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-hsb-dark transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Communities for Rent"
        subtitle="Call (702) 789-6561"
        priceMin="2000"
        priceMax="8000"
      />
    </>
  );
});
