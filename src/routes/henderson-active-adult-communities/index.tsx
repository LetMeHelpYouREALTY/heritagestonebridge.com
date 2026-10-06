import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Henderson Active Adult Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  meta: [
    {
      name: "description",
      content: "Discover premier active adult communities in Henderson Las Vegas. Expert guidance from Dr. Jan Duffy on Sun City Anthem, MacDonald Ranch, and luxury 55+ living. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/henderson-active-adult-communities",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, henderson-buyers",
    },
    {
      name: "location",
      content: "Henderson, Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Henderson Active Adult Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Discover premier active adult communities in Henderson Las Vegas. Expert guidance from Dr. Jan Duffy on Sun City Anthem, MacDonald Ranch, and luxury 55+ living.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/henderson-active-adult-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Henderson Active Adult Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Discover premier active adult communities in Henderson Las Vegas. Expert guidance from Dr. Jan Duffy on Sun City Anthem, MacDonald Ranch, and luxury 55+ living.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for Henderson active adult communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for Henderson active adult communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/henderson-active-adult-communities#service",
        "name": "Henderson Active Adult Communities",
        "description": "Expert real estate services specializing in active adult communities in Henderson, including Sun City Anthem, MacDonald Ranch, and Seven Hills.",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "telephone": "+1-702-789-6561",
          "email": "DrDuffySells@HeritageStonebridge.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Henderson, Las Vegas, Nevada"
        },
        "serviceType": "Henderson Active Adult Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$3,000,000",
          "description": "Henderson active adult communities with golf, parks, and clubhouses"
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
            "name": "What are the best active adult communities in Henderson?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Active adult communities in Henderson include Sun City Anthem (55+), MacDonald Ranch (golf course), Seven Hills (gated custom homes), Green Valley (parks and trails), and Inspirada (master-planned)."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose Henderson for active adult living?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Henderson offers parks, Lake Mead access, golf communities, and a short drive to Las Vegas amenities."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do Henderson active adult communities offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Henderson active adult communities typically offer golf courses, clubhouses, fitness centers, pools, social activities, parks and trails, and access to Lake Mead recreation and Henderson's cultural attractions."
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
            "name": "Henderson Communities",
            "item": "https://heritagestonebridge.com/henderson-active-adult-communities"
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
      <InteriorHero
        title="Henderson Active Adult Communities"
        lede="Discover 55+ communities in Henderson with golf courses, parks, and Lake Mead access"
      />
      <OfficeListingsBelowHero />

      {/* Henderson Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Henderson is Ideal for Active Adult Living</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover why Henderson offers the perfect blend of suburban charm and urban convenience.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Parks and Trails</h3>
              <p class="text-hsb-muted">City parks, trails, and golf communities across Henderson</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Lake Mead Access</h3>
              <p class="text-hsb-muted">Direct access to Lake Mead National Recreation Area for water sports and outdoor recreation</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Convenient Location</h3>
              <p class="text-hsb-muted">20 minutes to Las Vegas Strip and McCarran Airport with suburban tranquility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Henderson Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Premier Active Adult Communities in Henderson</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore Henderson's finest active adult communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Anthem</h3>
              <p class="text-hsb-muted mb-4">Premier 55+ community with golf courses, recreation centers, and vibrant social scene</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers and pools</li>
                <li>• Extensive social clubs</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-anthem" class="text-blue-600 hover:text-blue-800 font-semibold">View Sun City Anthem →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">MacDonald Ranch</h3>
              <p class="text-hsb-muted mb-4">Luxury golf course community with custom homes and exclusive amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Custom luxury homes</li>
                <li>• Golf course access</li>
                <li>• Private amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive location</li>
                <li>• High-end finishes</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">$700,000 - $2,500,000+</div>
              <a href="/macdonald-ranch-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View MacDonald Ranch →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Seven Hills</h3>
              <p class="text-hsb-muted mb-4">Gated luxury community with custom estates and stunning mountain views</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Gated community</li>
                <li>• Custom estates</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Exclusive location</li>
                <li>• Luxury finishes</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/seven-hills-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Seven Hills →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Green Valley</h3>
              <p class="text-hsb-muted mb-4">Mature trees, parks, and trails in Green Valley</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Mature landscaping</li>
                <li>• Parks and trails</li>
                <li>• Walking paths</li>
                <li>• Resale homes</li>
                <li>• Convenient location</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">$400,000 - $1,200,000</div>
              <a href="/green-valley-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Green Valley →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Inspirada</h3>
              <p class="text-hsb-muted mb-4">Modern master-planned community with contemporary homes and amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Modern design</li>
                <li>• Contemporary amenities</li>
                <li>• Parks and trails</li>
                <li>• Community events</li>
                <li>• New construction</li>
                <li>• Energy-efficient homes</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/inspirada-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Inspirada →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Anthem</h3>
              <p class="text-hsb-muted mb-4">Master-planned community with golf courses, parks, and resort amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Golf courses</li>
                <li>• Parks and trails</li>
                <li>• Resort amenities</li>
                <li>• Community events</li>
                <li>• Clubhouse access</li>
                <li>• Resale homes</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">$600,000 - $2,000,000</div>
              <a href="/anthem-henderson" class="text-blue-600 hover:text-blue-800 font-semibold">View Anthem →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Lifestyle Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">The Henderson Active Adult Lifestyle</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Experience the perfect blend of suburban charm, outdoor recreation, and urban convenience in Henderson's premier active adult communities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Recreation & Amenities</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Lake Mead National Recreation Area access
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Championship golf courses and country clubs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Beautiful parks and hiking trails
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Cultural attractions and events
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Community Benefits</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Golf, clubhouses, and 55+ communities such as Sun City Anthem
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  St. Rose Dominican and Henderson Hospital nearby
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Well-maintained streets, parks, and common areas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Convenient access to Las Vegas amenities
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
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Henderson Active Adult Community?</h2>
          <p class="text-lg text-hsb-sand mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal Henderson community that matches your lifestyle, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Henderson Active Adult Communities"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="3000000"
      />
    </>
  );
});
