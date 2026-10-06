import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "New 55+ Communities in Las Vegas | Latest Active Adult Developments - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover the newest 55+ communities in Las Vegas with modern amenities and contemporary designs. Expert guidance for new construction active adult living. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/new-55-plus-communities-las-vegas",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, new-construction-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "New 55+ Communities in Las Vegas | Latest Active Adult Developments",
    },
    {
      property: "og:description",
      content: "Discover the newest 55+ communities in Las Vegas with modern amenities and contemporary designs.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/new-55-plus-communities-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "New 55+ Communities in Las Vegas | Latest Active Adult Developments",
    },
    {
      name: "twitter:description",
      content: "Discover the newest 55+ communities in Las Vegas with modern amenities and contemporary designs.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for new 55+ communities
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="New 55+ Communities in Las Vegas"
        lede="Discover the latest active adult developments with modern amenities, contemporary designs, and cutting-edge features"
      />
      <OfficeListingsBelowHero />

      {/* New Construction Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose New Construction 55+ Communities?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              New construction offers the latest in design, technology, and amenities specifically designed for active adult living.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Modern Amenities</h3>
              <p class="text-hsb-muted">State-of-the-art clubhouses, fitness centers, and recreational facilities with the latest equipment and technology</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Energy Efficiency</h3>
              <p class="text-hsb-muted">Energy-efficient appliances, HVAC systems, and smart home technology to reduce utility costs</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Warranty Coverage</h3>
              <p class="text-hsb-muted">Comprehensive builder warranties covering structural elements, systems, and finishes for peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured New Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Latest 55+ Community Developments</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore Las Vegas's newest active adult communities featuring contemporary designs and modern amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Heritage at Stonebridge</h3>
              <p class="text-hsb-muted mb-4">Lennar's newest 55+ community in Summerlin with Everything's Included® features</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Three home collections (Cromwell, Stirling, Evander)</li>
                <li>• 8,000 sq ft clubhouse with fitness center</li>
                <li>• Resort-style pool & heated lap pool</li>
                <li>• Pickleball & bocce courts</li>
                <li>• Smart home technology included</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">Starting from $464,990</div>
              <a href="/homes-for-sale-stonebridge-summerlin" class="text-blue-600 hover:text-blue-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">New Del Webb Communities</h3>
              <p class="text-hsb-muted mb-4">Latest Del Webb developments with contemporary amenities and designs</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Modern clubhouse designs</li>
                <li>• Updated fitness centers</li>
                <li>• Contemporary social spaces</li>
                <li>• Latest technology integration</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">Various Price Points</div>
              <a href="/del-webb-new-communities" class="text-blue-600 hover:text-blue-800 font-semibold">View Del Webb New →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Upcoming Developments</h3>
              <p class="text-hsb-muted mb-4">New 55+ communities planned for Henderson and Northwest Las Vegas</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Pre-construction opportunities</li>
                <li>• Customizable floor plans</li>
                <li>• Early buyer incentives</li>
                <li>• Preferred lot selection</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">Coming Soon</div>
              <a href="/upcoming-55-plus-communities" class="text-blue-600 hover:text-blue-800 font-semibold">Get Early Access →</a>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Process */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">The New Construction Process</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Understanding the new construction process helps you make informed decisions and get the most value from your investment.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Pre-Construction Phase</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Early buyer incentives and pricing
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Lot selection and customization options
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Floor plan modifications and upgrades
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Builder financing programs
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Construction & Closing</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Regular construction updates and walkthroughs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Final inspections and quality checks
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Warranty documentation and orientation
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Move-in coordination and support
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
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Explore New 55+ Communities?</h2>
          <p class="text-lg text-hsb-sand mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the latest 55+ community developments in Las Vegas with modern amenities and contemporary designs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
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
        title="New 55+ Communities"
        subtitle="Call (702) 789-6561"
        priceMin="400000"
        priceMax="1000000"
      />
    </>
  );
});
