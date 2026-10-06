import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { HeroPhoto } from "~/components/community/HeroPhoto";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";

export const head: DocumentHead = {
  title: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  meta: [
    {
      name: "description",
      content: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/active-adult-lifestyle-communities",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, lifestyle-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/active-adult-lifestyle-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for active adult lifestyle communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for active adult lifestyle communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/active-adult-lifestyle-communities#service",
        "name": "Active Adult Lifestyle Communities",
        "description": "Expert real estate services specializing in active adult lifestyle communities in Las Vegas, providing comprehensive guidance for 55+ communities with resort amenities, social activities, and maintenance-free living.",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "telephone": "+1-702-789-6561",
          "email": "DrDuffySells@HeritageStonebridge.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Las Vegas, Nevada"
        },
        "serviceType": "Active Adult Lifestyle Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$3,000,000",
          "description": "Active adult lifestyle communities with resort amenities"
        }
      });

      // FAQ Schema
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What defines an active adult lifestyle community?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Active adult lifestyle communities are age-restricted communities (typically 55+) that offer resort-style amenities, social activities, maintenance-free living, and a focus on active, healthy lifestyles for residents."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do active adult lifestyle communities offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Active adult lifestyle communities typically offer fitness centers, pools, golf courses, clubhouses, social activities, maintenance services, security, and resort-style amenities designed for active adult living."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose an active adult lifestyle community?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Active adult lifestyle communities offer maintenance-free living, social opportunities, resort amenities, security, and a focus on healthy, active lifestyles perfect for adults 55+ seeking an engaging community environment."
            }
          }
        ]
      });

      // Breadcrumb Schema
      const breadcrumbSchema = document.createElement('script');
      breadcrumbSchema.type = 'application/ld+json';
      breadcrumbSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://heritagestonebridge.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "55+ Communities",
            "item": "https://heritagestonebridge.com/55-plus-communities"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Active Adult Lifestyle",
            "item": "https://heritagestonebridge.com/active-adult-lifestyle-communities"
          }
        ]
      });

      // Inject all schemas
      document.head.appendChild(serviceSchema);
      document.head.appendChild(faqSchema);
      document.head.appendChild(breadcrumbSchema);
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white py-20 overflow-hidden">
        <HeroPhoto />
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Active Adult Lifestyle Communities
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover vibrant 55+ communities designed for active adults with resort amenities, social activities, and maintenance-free living
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Explore Lifestyle Communities
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>
      <OfficeListingsBelowHero />

      {/* Active Adult Lifestyle Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Active Adult Lifestyle Communities?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover the benefits of lifestyle-focused communities designed for healthy, engaging living.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Resort-Style Amenities</h3>
              <p class="text-gray-600">Fitness centers, pools, golf courses, clubhouses, and spa facilities</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Social Activities</h3>
              <p class="text-gray-600">Clubs, events, classes, and activities designed for active adult engagement</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Maintenance-Free Living</h3>
              <p class="text-gray-600">No yard work, exterior maintenance, or repairs - focus on enjoying life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lifestyle Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Premier Active Adult Lifestyle Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's finest active adult lifestyle communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p class="text-gray-600 mb-4">Lennar's newest 55+ community with Everything's Included® features and resort amenities</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Three home collections</li>
                <li>• 8,000 sq ft clubhouse</li>
                <li>• Resort-style pool</li>
                <li>• Pickleball & bocce courts</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">Starting from $464,990</div>
              <a href="/heritage-at-stonebridge-homes-for-sale" class="text-teal-600 hover:text-teal-800 font-semibold">View Heritage at Stonebridge →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sun City Summerlin</h3>
              <p class="text-gray-600 mb-4">Established premier 55+ community with multiple golf courses and mature amenities</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Extensive social clubs</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" class="text-teal-600 hover:text-teal-800 font-semibold">View Sun City Summerlin →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sun City Anthem</h3>
              <p class="text-gray-600 mb-4">Henderson's premier 55+ community with golf courses and vibrant social scene</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-anthem" class="text-teal-600 hover:text-teal-800 font-semibold">View Sun City Anthem →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">The Ridges</h3>
              <p class="text-gray-600 mb-4">Ultra-luxury community with custom estates and exclusive golf course access</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Custom luxury homes</li>
                <li>• Exclusive golf course</li>
                <li>• Private amenities</li>
                <li>• Mountain views</li>
                <li>• Elite social scene</li>
                <li>• Highest-end finishes</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" class="text-teal-600 hover:text-teal-800 font-semibold">View The Ridges →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Siena</h3>
              <p class="text-gray-600 mb-4">Tuscan-inspired luxury community with resort amenities and sophisticated design</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" class="text-teal-600 hover:text-teal-800 font-semibold">View Siena →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Red Rock Country Club</h3>
              <p class="text-gray-600 mb-4">Exclusive golf course community with luxury homes and private membership</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Private golf course</li>
                <li>• Country club membership</li>
                <li>• Luxury amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive events</li>
                <li>• Concierge services</li>
              </ul>
              <div class="text-lg font-bold text-teal-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" class="text-teal-600 hover:text-teal-800 font-semibold">View Country Club →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">The Active Adult Lifestyle Advantage</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury amenities, social engagement, and maintenance-free living in Las Vegas's premier active adult lifestyle communities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Health & Wellness</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  State-of-the-art fitness centers and wellness programs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Pools, spas, and relaxation areas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Walking trails and outdoor recreation
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Health and wellness classes
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Social Engagement</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clubs and interest groups
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Community events and activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Educational classes and workshops
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Travel and excursion groups
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Widgets */}

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-teal-600 to-teal-800 py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Active Adult Lifestyle Community?</h2>
          <p class="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal active adult lifestyle community that matches your interests, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Active Adult Lifestyle Communities"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="3000000"
      />
    </>
  );
});
