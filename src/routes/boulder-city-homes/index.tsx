import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
  meta: [
    {
      name: "description",
      content: "Discover Boulder City homes for sale with Dr. Jan Duffy. Historic community near Lake Mead with small-town charm, outdoor recreation, and unique character. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/boulder-city-homes",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "outdoor-enthusiasts, historic-home-buyers",
    },
    {
      name: "location",
      content: "Boulder City, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
    },
    {
      property: "og:description",
      content: "Discover Boulder City homes for sale in historic community near Lake Mead with small-town charm and outdoor recreation.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/boulder-city-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
    },
    {
      name: "twitter:description",
      content: "Discover Boulder City homes for sale in historic community near Lake Mead with small-town charm and outdoor recreation.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Boulder City Homes for Sale"
        lede="Discover historic Boulder City, a charming community near Lake Mead with small-town character and outdoor recreation"
      />
      <OfficeListingsBelowHero />

      {/* Boulder City Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Boulder City?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Boulder City offers a unique blend of historic charm, outdoor recreation, and small-town community feel, all while being just 30 minutes from Las Vegas.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Historic Charm</h3>
              <p class="text-hsb-muted">Historic downtown district with unique shops, restaurants, and architecture</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Lake Mead Access</h3>
              <p class="text-hsb-muted">Direct access to Lake Mead National Recreation Area for water sports</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Small Town Feel</h3>
              <p class="text-hsb-muted">Historic downtown, local shops, and community events</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Easy Access</h3>
              <p class="text-hsb-muted">Just 30 minutes from Las Vegas Strip and McCarran Airport</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Lifestyle */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">The Boulder City Lifestyle</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Boulder City offers a unique small-town atmosphere with historic charm, outdoor recreation, and convenient access to Las Vegas amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="font-display text-2xl text-hsb-dark mb-6">Why Choose Boulder City?</h3>
              <ul class="space-y-4 text-hsb-text">
                <li class="flex items-start">
                  <span class="text-hsb-primary mr-3 mt-1">✓</span>
                  <div>
                    <strong>Historic Charm:</strong> Founded in 1931 for Hoover Dam workers, rich history and unique character
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-hsb-primary mr-3 mt-1">✓</span>
                  <div>
                    <strong>Lake Mead Access:</strong> Direct access to Lake Mead National Recreation Area for water sports
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-hsb-primary mr-3 mt-1">✓</span>
                  <div>
                    <strong>Small Town Feel:</strong> Historic downtown, local shops, and community events
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-hsb-primary mr-3 mt-1">✓</span>
                  <div>
                    <strong>No Gaming:</strong> Boulder City does not allow casinos.
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-hsb-primary mr-3 mt-1">✓</span>
                  <div>
                    <strong>Easy Access:</strong> Just 30 minutes from Las Vegas Strip and McCarran Airport
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Boulder City Quick Facts</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="font-semibold">Population:</span>
                  <span>15,000+ residents</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Founded:</span>
                  <span>1931</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Size:</span>
                  <span>208 square miles</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Elevation:</span>
                  <span>2,500 feet</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Distance to Vegas:</span>
                  <span>30 minutes</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Special Feature:</span>
                  <span>No gaming allowed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Boulder City Neighborhoods</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore Boulder City's diverse neighborhoods, from historic downtown to newer developments with mountain views.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Historic Downtown</h3>
              <p class="text-hsb-muted mb-4">Charming historic district with unique shops, restaurants, and original Hoover Dam worker homes.</p>
              <a href="/boulder-city-downtown" class="text-teal-600 hover:text-hsb-dark font-semibold">View Downtown Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Eldorado Valley</h3>
              <p class="text-hsb-muted mb-4">Newer development with modern homes and mountain views.</p>
              <a href="/eldorado-valley-homes" class="text-teal-600 hover:text-hsb-dark font-semibold">View Eldorado Valley Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Lake Mead Estates</h3>
              <p class="text-hsb-muted mb-4">Luxury homes with lake views and private boat access.</p>
              <a href="/lake-mead-estates" class="text-teal-600 hover:text-hsb-dark font-semibold">View Lake Mead Estates →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sunrise Hills</h3>
              <p class="text-hsb-muted mb-4">Established neighborhood with mature trees and mountain views.</p>
              <a href="/sunrise-hills-homes" class="text-teal-600 hover:text-hsb-dark font-semibold">View Sunrise Hills Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Boulder Creek Golf Course</h3>
              <p class="text-hsb-muted mb-4">Golf course community with luxury homes and resort amenities.</p>
              <a href="/boulder-creek-golf" class="text-teal-600 hover:text-hsb-dark font-semibold">View Golf Course Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Desert Hills</h3>
              <p class="text-hsb-muted mb-4">Custom homes with desert landscaping and mountain views.</p>
              <a href="/desert-hills-homes" class="text-teal-600 hover:text-hsb-dark font-semibold">View Desert Hills Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Outdoor Recreation in Boulder City</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Boulder City is a paradise for outdoor enthusiasts, with easy access to Lake Mead, hiking trails, and recreational activities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Lake Mead Recreation</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Boating and water sports
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Fishing for bass, catfish, and stripers
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Swimming and beach access
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Kayaking and paddleboarding
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Scenic lake cruises
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Hiking & Outdoor Activities</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  River Mountains Loop Trail
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Historic Railroad Trail
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Gold Strike Hot Springs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Mountain biking trails
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Rock climbing opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Boulder City Listings */}



      {/* Why Choose Dr. Jan Duffy for Boulder City */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Dr. Jan Duffy for Boulder City Real Estate?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              With deep knowledge of Boulder City's unique character, historic properties, and outdoor recreation opportunities, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Historic Property Specialist</h3>
              <p class="text-hsb-muted">Expert knowledge of Boulder City's historic homes and unique character properties.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Outdoor Recreation Expert</h3>
              <p class="text-hsb-muted">Understanding of Lake Mead access, hiking trails, and recreational amenities.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Community Knowledge</h3>
              <p class="text-hsb-muted">Deep understanding of Boulder City's small-town charm and local amenities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-hsb-dark py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Boulder City Dream Home?</h2>
          <p class="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Boulder City's historic and charming community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-hsb-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Schedule Boulder City Tour
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
        title="Boulder City Listings"
        subtitle="Call 702-789-6561"
        priceMin="200000"
        priceMax="1500000"
      />
    </>
  );
});
