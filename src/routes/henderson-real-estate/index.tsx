import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Henderson Real Estate | Dr. Jan Duffy - Parks, Golf, and Lake Mead",
  meta: [
    {
      name: "description",
      content: "Discover Henderson real estate with Dr. Jan Duffy. Parks, Lake Mead access, golf, and a wide range of housing. Call 702-789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/henderson-real-estate",
    },
    {
      name: "content-type",
      content: "service-area",
    },
    {
      name: "audience",
      content: "home-buyers, luxury-home-buyers",
    },
    {
      name: "location",
      content: "Henderson, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Henderson Real Estate | Dr. Jan Duffy - Parks, Golf, and Lake Mead",
    },
    {
      property: "og:description",
      content: "Discover Henderson real estate with parks, Lake Mead access, and a wide range of housing options.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/henderson-real-estate",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Henderson Real Estate | Dr. Jan Duffy - Parks, Golf, and Lake Mead",
    },
    {
      name: "twitter:description",
      content: "Discover Henderson real estate with parks, Lake Mead access, and a wide range of housing options.",
    },
  ],
};

export default component$(() => {

  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Henderson Real Estate"
        lede="Henderson is Nevada's second-largest city, with parks, Lake Mead access, and a wide range of housing"
      />
      <OfficeListingsBelowHero />

      {/* Henderson Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Henderson?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Henderson combines parks and trails with shopping at Galleria at Sunset and The District, plus a wide range of housing.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Lake Mead</h3>
              <p class="text-hsb-muted">Lake Mead National Recreation Area and Sloan Canyon are a short drive from Henderson</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Beautiful Parks</h3>
              <p class="text-hsb-muted">Numerous parks, trails, and recreational facilities throughout the city</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Shopping & Dining</h3>
              <p class="text-hsb-muted">Galleria at Sunset, The District, and diverse dining options</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Healthcare</h3>
              <p class="text-hsb-muted">St. Rose Dominican Hospital and Henderson Hospital for quality care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Lifestyle */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">The Henderson Lifestyle</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Henderson offers parks, golf, and access to Las Vegas amenities, including 55+ communities such as Sun City Anthem.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="font-display text-2xl text-hsb-dark mb-6">Why Choose Henderson?</h3>
              <ul class="space-y-4 text-hsb-text">
                <li class="flex items-start">
                  <span class="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Outdoor access:</strong> Lake Mead, Sloan Canyon, and city parks and trails
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Outdoor Recreation:</strong> Lake Mead, Sloan Canyon, and numerous parks and trails
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Economic Growth:</strong> Strong job market with major employers and business parks
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Cultural Attractions:</strong> Henderson Events Plaza, museums, and performing arts
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Convenient Location:</strong> 20 minutes to Las Vegas Strip and McCarran Airport
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Henderson Quick Facts</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="font-semibold">Population:</span>
                  <span>320,000+ residents</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Founded:</span>
                  <span>1953</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Size:</span>
                  <span>108 square miles</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Schools:</span>
                  <span>40+ public schools</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Parks:</span>
                  <span>60+ parks and trails</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Distance to Strip:</span>
                  <span>20 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Henderson Communities</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore Henderson neighborhoods, from master-planned communities to areas with mature trees, parks, and their own amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Green Valley</h3>
              <p class="text-hsb-muted mb-4">Mature trees, parks, and trails in Green Valley.</p>
              <a href="/green-valley-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Green Valley Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Anthem</h3>
              <p class="text-hsb-muted mb-4">Master-planned community with golf courses, parks, and resort amenities.</p>
              <a href="/anthem-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Anthem Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">MacDonald Ranch</h3>
              <p class="text-hsb-muted mb-4">Luxury community with custom homes and golf course access.</p>
              <a href="/macdonald-ranch-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View MacDonald Ranch Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Seven Hills</h3>
              <p class="text-hsb-muted mb-4">Gated community with luxury homes and mountain views.</p>
              <a href="/seven-hills-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Seven Hills Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Inspirada</h3>
              <p class="text-hsb-muted mb-4">Modern master-planned community with contemporary homes and amenities.</p>
              <a href="/inspirada-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Inspirada Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Anthem</h3>
              <p class="text-hsb-muted mb-4">Premier 55+ community with golf courses and resort-style amenities.</p>
              <a href="/sun-city-anthem" class="text-blue-600 hover:text-blue-800 font-semibold">View Sun City Anthem Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities in Henderson */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">55+ Active Adult Communities in Henderson</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Henderson offers several premier active adult communities designed for the 55+ lifestyle, featuring resort-style amenities and vibrant social scenes.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Sun City Anthem</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Multiple golf courses and driving ranges
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Recreation centers with pools and spas
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
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Other 55+ Communities</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Solera at Anthem - Luxury active adult living
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Regency at Seven Hills - Gated community
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Heritage at Inspirada - Modern 55+ living
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Del Webb communities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Various age-restricted neighborhoods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Henderson Listings */}



      {/* Why Choose Dr. Jan Duffy for Henderson */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Dr. Jan Duffy for Henderson Real Estate?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              With comprehensive knowledge of Henderson's communities and specialized expertise in 55+ active adult living, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Henderson Specialist</h3>
              <p class="text-hsb-muted">Deep expertise in Henderson's neighborhoods, schools, and community amenities.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">55+ Community Expert</h3>
              <p class="text-hsb-muted">Specialized knowledge of active adult communities and their unique requirements.</p>
            </div>
            
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Personalized Service</h3>
              <p class="text-hsb-muted">Dedicated support throughout your Henderson home buying or selling journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-hsb-dark py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Find Your Henderson Dream Home?</h2>
          <p class="text-lg text-hsb-sand mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you compare Henderson homes, from Green Valley to Sun City Anthem.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Henderson Tour
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
        title="Henderson Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
