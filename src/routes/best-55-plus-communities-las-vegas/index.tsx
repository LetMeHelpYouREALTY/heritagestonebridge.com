import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Best 55+ Communities in Las Vegas | Top-Rated Active Adult Living - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover the best 55+ communities in Las Vegas with top-rated amenities, locations, and lifestyle options. Expert rankings and reviews of premier active adult communities. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/best-55-plus-communities-las-vegas",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, luxury-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Best 55+ Communities in Las Vegas | Top-Rated Active Adult Living",
    },
    {
      property: "og:description",
      content: "Discover the best 55+ communities in Las Vegas with top-rated amenities, locations, and lifestyle options.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/best-55-plus-communities-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Best 55+ Communities in Las Vegas | Top-Rated Active Adult Living",
    },
    {
      name: "twitter:description",
      content: "Discover the best 55+ communities in Las Vegas with top-rated amenities, locations, and lifestyle options.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for best 55+ communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for best 55+ communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/best-55-plus-communities-las-vegas#service",
        "name": "Best 55+ Communities in Las Vegas",
        "description": "Expert real estate services specializing in the best 55+ communities in Las Vegas, providing comprehensive rankings and reviews of top-rated active adult communities.",
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
        "serviceType": "Best 55+ Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$2,000,000",
          "description": "Best 55+ communities in Las Vegas with top-rated amenities and locations"
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
            "name": "What are the best 55+ communities in Las Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best 55+ communities in Las Vegas include Heritage at Stonebridge, Sun City Summerlin, The Ridges, Siena, and Del Webb communities, each offering unique amenities and lifestyle benefits."
            }
          },
          {
            "@type": "Question",
            "name": "What makes a 55+ community the best?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best 55+ communities feature excellent amenities, prime locations, active social scenes, quality construction, reasonable HOA fees, and strong resale values."
            }
          },
          {
            "@type": "Question",
            "name": "How do I choose between the best 55+ communities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consider your budget, desired amenities, location preferences, social activities, maintenance requirements, and long-term investment potential when choosing between top 55+ communities."
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
            "name": "Best 55+ Communities",
            "item": "https://heritagestonebridge.com/best-55-plus-communities-las-vegas"
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
      <section class="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Best 55+ Communities in Las Vegas
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the top-rated active adult communities with premier amenities, prime locations, and exceptional lifestyle options
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Explore Top Communities
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Ranking Criteria */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">How We Rank the Best 55+ Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive evaluation considers amenities, location, value, lifestyle, and resident satisfaction to identify Las Vegas's premier active adult communities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Amenities & Facilities</h3>
              <p class="text-gray-600">Quality and variety of recreational facilities, clubhouses, fitness centers, and social spaces</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Location & Access</h3>
              <p class="text-gray-600">Proximity to shopping, dining, healthcare, entertainment, and transportation</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Value & Investment</h3>
              <p class="text-gray-600">Price-to-value ratio, HOA fees, resale potential, and overall cost of living</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top-Rated Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Top-Rated 55+ Communities in Las Vegas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on comprehensive analysis of amenities, location, value, and resident satisfaction.
            </p>
          </div>
          
          <div class="space-y-8">
            {/* #1 Heritage at Stonebridge */}
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <div class="flex items-center mb-6">
                <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold text-lg mr-4">
                  #1
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Heritage at Stonebridge</h3>
              </div>
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <p class="text-gray-600 mb-4">Lennar's premier 55+ community in Summerlin with Everything's Included® features and stunning Red Rock Canyon views.</p>
                  <ul class="space-y-2 text-gray-600 mb-4">
                    <li>• Three home collections (Cromwell, Stirling, Evander)</li>
                    <li>• 8,000 sq ft clubhouse with fitness center</li>
                    <li>• Resort-style pool & heated lap pool</li>
                    <li>• Pickleball & bocce courts</li>
                    <li>• Gated community with RV parking</li>
                    <li>• Smart home technology included</li>
                  </ul>
                  <div class="text-lg font-bold text-purple-600 mb-4">Starting from $464,990</div>
                </div>
                <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 class="text-lg font-bold text-gray-900 mb-3">Why It's #1</h4>
                  <ul class="space-y-2 text-gray-700">
                    <li>✓ New construction with modern amenities</li>
                    <li>✓ Prime Summerlin location</li>
                    <li>✓ Red Rock Canyon views</li>
                    <li>✓ Lennar Everything's Included®</li>
                    <li>✓ Excellent value proposition</li>
                    <li>✓ Strong resale potential</li>
                  </ul>
                </div>
              </div>
              <a href="/homes-for-sale-stonebridge-summerlin" class="text-purple-600 hover:text-purple-800 font-semibold">View Heritage at Stonebridge Homes →</a>
            </div>

            {/* #2 Sun City Summerlin */}
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <div class="flex items-center mb-6">
                <div class="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                  #2
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Sun City Summerlin</h3>
              </div>
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <p class="text-gray-600 mb-4">Established premier 55+ community with mature amenities, golf courses, and vibrant social scene.</p>
                  <ul class="space-y-2 text-gray-600 mb-4">
                    <li>• Multiple golf courses</li>
                    <li>• Recreation centers and pools</li>
                    <li>• Extensive social clubs</li>
                    <li>• Mature landscaping</li>
                    <li>• Resale homes</li>
                    <li>• Strong resale market</li>
                  </ul>
                  <div class="text-lg font-bold text-purple-600 mb-4">$500,000 - $1,500,000</div>
                </div>
                <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                  <h4 class="text-lg font-bold text-gray-900 mb-3">Why It's #2</h4>
                  <ul class="space-y-2 text-gray-700">
                    <li>✓ Established reputation</li>
                    <li>✓ Multiple golf courses</li>
                    <li>✓ Extensive amenities</li>
                    <li>✓ Active social scene</li>
                    <li>✓ Prime Summerlin location</li>
                    <li>✓ Proven track record</li>
                  </ul>
                </div>
              </div>
              <a href="/sun-city-summerlin-homes" class="text-purple-600 hover:text-purple-800 font-semibold">View Sun City Summerlin Homes →</a>
            </div>

            {/* #3 The Ridges */}
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <div class="flex items-center mb-6">
                <div class="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                  #3
                </div>
                <h3 class="text-2xl font-bold text-gray-900">The Ridges</h3>
              </div>
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <p class="text-gray-600 mb-4">Ultra-luxury 55+ community with custom estates, exclusive golf course access, and mountain views.</p>
                  <ul class="space-y-2 text-gray-600 mb-4">
                    <li>• Custom luxury homes</li>
                    <li>• Exclusive golf course</li>
                    <li>• Mountain views</li>
                    <li>• Private amenities</li>
                    <li>• Elite social scene</li>
                    <li>• Highest-end finishes</li>
                  </ul>
                  <div class="text-lg font-bold text-purple-600 mb-4">$1,000,000 - $5,000,000+</div>
                </div>
                <div class="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                  <h4 class="text-lg font-bold text-gray-900 mb-3">Why It's #3</h4>
                  <ul class="space-y-2 text-gray-700">
                    <li>✓ Ultra-luxury positioning</li>
                    <li>✓ Exclusive golf access</li>
                    <li>✓ Custom home options</li>
                    <li>✓ Stunning mountain views</li>
                    <li>✓ Elite amenities</li>
                    <li>✓ Prestigious address</li>
                  </ul>
                </div>
              </div>
              <a href="/the-ridges-summerlin" class="text-purple-600 hover:text-purple-800 font-semibold">View The Ridges Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Guide */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Community Comparison Guide</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare the top 55+ communities based on key factors to find the perfect match for your lifestyle and budget.
            </p>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-lg shadow-lg">
              <thead class="bg-purple-100">
                <tr>
                  <th class="px-6 py-4 text-left font-bold text-gray-900">Community</th>
                  <th class="px-6 py-4 text-left font-bold text-gray-900">Price Range</th>
                  <th class="px-6 py-4 text-left font-bold text-gray-900">Amenities</th>
                  <th class="px-6 py-4 text-left font-bold text-gray-900">Location</th>
                  <th class="px-6 py-4 text-left font-bold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 font-semibold text-gray-900">Heritage at Stonebridge</td>
                  <td class="px-6 py-4 text-gray-600">$464,990+</td>
                  <td class="px-6 py-4 text-gray-600">Resort-style pool, clubhouse, courts</td>
                  <td class="px-6 py-4 text-gray-600">Summerlin West</td>
                  <td class="px-6 py-4 text-gray-600">New construction buyers</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-semibold text-gray-900">Sun City Summerlin</td>
                  <td class="px-6 py-4 text-gray-600">$500,000+</td>
                  <td class="px-6 py-4 text-gray-600">Golf courses, recreation centers</td>
                  <td class="px-6 py-4 text-gray-600">Summerlin</td>
                  <td class="px-6 py-4 text-gray-600">Golf enthusiasts</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-semibold text-gray-900">The Ridges</td>
                  <td class="px-6 py-4 text-gray-600">$1,000,000+</td>
                  <td class="px-6 py-4 text-gray-600">Exclusive golf, luxury amenities</td>
                  <td class="px-6 py-4 text-gray-600">Summerlin</td>
                  <td class="px-6 py-4 text-gray-600">Luxury buyers</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-semibold text-gray-900">Siena</td>
                  <td class="px-6 py-4 text-gray-600">$600,000+</td>
                  <td class="px-6 py-4 text-gray-600">Tuscan-inspired, resort amenities</td>
                  <td class="px-6 py-4 text-gray-600">Summerlin</td>
                  <td class="px-6 py-4 text-gray-600">Style-conscious buyers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RealScout Widgets */}
      <div class="max-w-7xl mx-auto px-4 py-8">
        <RealScoutOfficeListingsWidget
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
          listingStatus="For Sale"
          propertyTypes="SFR"
          priceMin={400000}
          priceMax={2000000}
        />
      </div>

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-purple-600 to-purple-800 py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect 55+ Community?</h2>
          <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you choose from the best 55+ communities in Las Vegas based on your lifestyle, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Best 55+ Communities"
        subtitle="Call (702) 789-6561"
        priceMin="400000"
        priceMax="2000000"
      />
    </>
  );
});
