import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

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
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for Sun City Del Webb communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/sun-city-del-webb-real-estate#service",
        "name": "Sun City Del Webb Real Estate",
        "description": "Expert real estate services specializing in Sun City and Del Webb communities in Las Vegas, providing comprehensive guidance for established 55+ communities with golf courses and mature amenities.",
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
        "serviceType": "Sun City Del Webb Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$2,000,000",
          "description": "Sun City and Del Webb communities with established amenities"
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
            "name": "What are the differences between Sun City and Del Webb communities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sun City communities are established, mature 55+ communities with proven amenities and strong resale markets, while Del Webb communities offer newer construction with contemporary amenities and modern designs, both featuring golf courses and active adult lifestyles."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do Sun City and Del Webb communities offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both Sun City and Del Webb communities typically offer golf courses, clubhouses, fitness centers, pools, social activities, maintenance services, and age-restricted living environments designed for active adults."
            }
          },
          {
            "@type": "Question",
            "name": "Are Sun City and Del Webb communities good investments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Sun City and Del Webb communities are generally good investments due to their established reputations, mature amenities, strong resale markets, and consistent demand from 55+ buyers seeking active adult lifestyles."
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
            "name": "Sun City Del Webb",
            "item": "https://heritagestonebridge.com/sun-city-del-webb-real-estate"
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
            Sun City Del Webb Real Estate
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert guidance on established 55+ communities with golf courses, mature amenities, and proven track records
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Explore Sun City Del Webb
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Established Communities Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Established Sun City & Del Webb Communities?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover the benefits of established communities with proven amenities and strong resale markets.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p class="text-gray-600">Established communities with mature amenities, strong resale markets, and proven appreciation</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Championship Golf</h3>
              <p class="text-gray-600">Multiple golf courses with established memberships and tournament-quality facilities</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Mature Amenities</h3>
              <p class="text-gray-600">Fully developed clubhouses, fitness centers, pools, and social facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Premier Sun City & Del Webb Communities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's finest established 55+ communities, each offering unique amenities and lifestyle options for discerning active adults.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sun City Summerlin</h3>
              <p class="text-gray-600 mb-4">Premier established 55+ community with multiple golf courses and mature amenities</p>
              <ul class="space-y-2 text-gray-600 mb-4">
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
              <div class="text-lg font-bold text-purple-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-anthem" class="text-purple-600 hover:text-purple-800 font-semibold">View Sun City Anthem →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Del Webb Communities</h3>
              <p class="text-gray-600 mb-4">Newer Del Webb developments with contemporary amenities and modern designs</p>
              <ul class="space-y-2 text-gray-600 mb-4">
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
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sun City MacDonald Ranch</h3>
              <p class="text-gray-600 mb-4">Luxury golf course community with custom homes and exclusive amenities</p>
              <ul class="space-y-2 text-gray-600 mb-4">
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
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sun City Seven Hills</h3>
              <p class="text-gray-600 mb-4">Gated luxury community with custom estates and stunning mountain views</p>
              <ul class="space-y-2 text-gray-600 mb-4">
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
              <h3 class="text-xl font-bold text-gray-900 mb-3">Del Webb Inspirada</h3>
              <p class="text-gray-600 mb-4">Modern master-planned community with contemporary homes and amenities</p>
              <ul class="space-y-2 text-gray-600 mb-4">
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
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Sun City vs Del Webb: Which is Right for You?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the differences between Sun City and Del Webb communities helps you make the best choice for your active adult lifestyle.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Sun City Communities</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
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
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Del Webb Communities</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
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
