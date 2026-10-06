import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
  meta: [
    {
      name: "description",
      content: "Discover luxury homes near Red Rock Canyon with Dr. Jan Duffy. Stunning mountain views, outdoor recreation, and premier communities in Las Vegas's most scenic area. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/red-rock-canyon-communities",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "luxury-home-buyers, outdoor-enthusiasts",
    },
    {
      name: "location",
      content: "Red Rock Canyon, Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
    },
    {
      property: "og:description",
      content: "Discover luxury homes near Red Rock Canyon with stunning mountain views and outdoor recreation opportunities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/red-rock-canyon-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
    },
    {
      name: "twitter:description",
      content: "Discover luxury homes near Red Rock Canyon with stunning mountain views and outdoor recreation opportunities.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Red Rock Canyon Communities"
        lede="Discover luxury living with stunning mountain views near Red Rock Canyon National Conservation Area"
      />
      <OfficeListingsBelowHero />

      {/* Red Rock Canyon Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Living Near Red Rock Canyon</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Experience the natural beauty of Red Rock Canyon while enjoying luxury amenities and stunning mountain views. These premier communities offer the perfect blend of outdoor recreation and sophisticated living.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Mountain Views</h3>
              <p class="text-hsb-muted">Breathtaking views of Red Rock Canyon and Spring Mountains from your home</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Outdoor Recreation</h3>
              <p class="text-hsb-muted">Hiking, rock climbing, and nature trails right in your backyard</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Golf Courses</h3>
              <p class="text-hsb-muted">Championship golf courses with stunning mountain backdrops</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Luxury Amenities</h3>
              <p class="text-hsb-muted">Resort-style pools, spas, and fitness centers with mountain views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Red Rock Canyon Lifestyle */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">The Red Rock Canyon Lifestyle</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Living near Red Rock Canyon offers the ultimate combination of natural beauty, outdoor adventure, and luxury amenities in Las Vegas's most scenic area.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="font-display text-2xl text-hsb-dark mb-6">Why Choose Red Rock Canyon Area?</h3>
              <ul class="space-y-4 text-hsb-text">
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Natural Beauty:</strong> Stunning red rock formations and mountain views create a unique desert landscape
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Outdoor Recreation:</strong> Hiking, rock climbing, mountain biking, and scenic drives right outside your door
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Luxury Communities:</strong> Premier neighborhoods with custom homes and resort-style amenities
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Privacy & Exclusivity:</strong> Gated communities with large lots and stunning views
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Convenient Access:</strong> Minutes to Summerlin amenities while maintaining natural serenity
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Red Rock Canyon Quick Facts</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="font-semibold">Size:</span>
                  <span>195,819 acres</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Established:</span>
                  <span>1990</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Trails:</span>
                  <span>30+ hiking trails</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Elevation:</span>
                  <span>3,000-8,000 ft</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Distance from Vegas:</span>
                  <span>12-20 miles</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Annual Visitors:</span>
                  <span>3+ million</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Rock Canyon Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Premier Red Rock Canyon Communities</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Discover luxury communities that offer the perfect combination of natural beauty, outdoor recreation, and sophisticated amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Heritage at Stonebridge</h3>
              <p class="text-hsb-muted mb-4">Luxury 55+ community with stunning Red Rock Canyon views and resort-style amenities.</p>
              <a href="/homes-for-sale-stonebridge-summerlin" class="text-red-600 hover:text-red-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">The Ridges</h3>
              <p class="text-hsb-muted mb-4">Ultra-luxury community with custom estates and exclusive golf course access.</p>
              <a href="/the-ridges-summerlin" class="text-red-600 hover:text-red-800 font-semibold">View Ridges Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Red Rock Country Club</h3>
              <p class="text-hsb-muted mb-4">Golf course community with luxury homes and exclusive country club membership.</p>
              <a href="/red-rock-country-club" class="text-red-600 hover:text-red-800 font-semibold">View Country Club Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Mountain's Edge</h3>
              <p class="text-hsb-muted mb-4">Master-planned community with mountain views, parks, and resort amenities.</p>
              <a href="/mountains-edge-homes" class="text-red-600 hover:text-red-800 font-semibold">View Mountain's Edge Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Inspirada</h3>
              <p class="text-hsb-muted mb-4">Modern community with contemporary homes and outdoor recreation facilities.</p>
              <a href="/inspirada-homes" class="text-red-600 hover:text-red-800 font-semibold">View Inspirada Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Rhodes Ranch</h3>
              <p class="text-hsb-muted mb-4">Golf course community with luxury homes and resort-style amenities.</p>
              <a href="/rhodes-ranch-homes" class="text-red-600 hover:text-red-800 font-semibold">View Rhodes Ranch Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Outdoor Recreation Opportunities</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Living near Red Rock Canyon means having access to world-class outdoor recreation right in your backyard.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Red Rock Canyon National Conservation Area</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Over 30 miles of hiking trails
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  World-class rock climbing routes
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Scenic 13-mile scenic drive
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Wildlife viewing opportunities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Photography and nature study
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Community Amenities</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
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
                  Walking and biking trails
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Community parks and open spaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Red Rock Canyon Listings */}



      {/* Why Choose Dr. Jan Duffy for Red Rock Canyon */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Dr. Jan Duffy for Red Rock Canyon Real Estate?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              With deep knowledge of Red Rock Canyon communities and their unique mountain lifestyle, Dr. Jan Duffy provides expert guidance for your luxury home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Mountain View Specialist</h3>
              <p class="text-hsb-muted">Expert knowledge of communities with the best Red Rock Canyon views and access.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Outdoor Lifestyle Expert</h3>
              <p class="text-hsb-muted">Understanding of outdoor recreation needs and mountain community amenities.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Luxury Home Specialist</h3>
              <p class="text-hsb-muted">Experience with high-end properties and exclusive community requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-hsb-dark py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Mountain View Home?</h2>
          <p class="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home with stunning Red Rock Canyon views.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-100 transition-colors shadow-lg inline-block text-center">
              Schedule Mountain Tour
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Red Rock Canyon Listings"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="5000000"
      />
    </>
  );
});
