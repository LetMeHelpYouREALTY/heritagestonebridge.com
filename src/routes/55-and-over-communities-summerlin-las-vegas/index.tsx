import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "55+ Communities in Summerlin Las Vegas | Active Adult Living - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover 55+ communities in Summerlin Las Vegas with luxury amenities, golf courses, and active adult living. Expert guidance for Summerlin 55+ buyers. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/55-and-over-communities-summerlin-las-vegas",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, summerlin-buyers",
    },
    {
      name: "location",
      content: "Summerlin, Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "55+ Communities in Summerlin Las Vegas | Active Adult Living",
    },
    {
      property: "og:description",
      content: "Discover 55+ communities in Summerlin Las Vegas with luxury amenities, golf courses, and active adult living.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/55-and-over-communities-summerlin-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "55+ Communities in Summerlin Las Vegas | Active Adult Living",
    },
    {
      name: "twitter:description",
      content: "Discover 55+ communities in Summerlin Las Vegas with luxury amenities, golf courses, and active adult living.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for 55+ communities in Summerlin
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for 55+ communities in Summerlin
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/55-and-over-communities-summerlin-las-vegas#service",
        "name": "55+ Communities in Summerlin Las Vegas",
        "description": "Expert real estate services specializing in 55+ communities in Summerlin Las Vegas, providing access to premier active adult communities with luxury amenities and golf courses.",
        "provider": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "telephone": "+1-702-789-6561",
          "email": "DrDuffySells@HeritageStonebridge.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Summerlin, Las Vegas, Nevada"
        },
        "serviceType": "Summerlin 55+ Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$5,000,000",
          "description": "55+ communities in Summerlin Las Vegas with luxury amenities and golf courses"
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
            "name": "What 55+ communities are available in Summerlin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Summerlin offers several premier 55+ communities including Heritage at Stonebridge, Sun City Summerlin, The Ridges, Siena, and Red Rock Country Club, each with unique amenities and lifestyle options."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do Summerlin 55+ communities offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Summerlin 55+ communities typically offer golf courses, clubhouses, fitness centers, pools, social activities, maintenance services, and access to Red Rock Canyon recreation."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose Summerlin for 55+ living?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Summerlin offers master-planned community amenities, golf courses, Red Rock Canyon access, excellent healthcare, shopping at Downtown Summerlin, and maintained parks, paths, and common areas."
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
            "name": "Summerlin Communities",
            "item": "https://heritagestonebridge.com/55-and-over-communities-summerlin-las-vegas"
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
        title="55+ Communities in Summerlin Las Vegas"
        lede="Experience premier active adult living in Summerlin with luxury amenities, golf courses, and Red Rock Canyon views"
      />
      <OfficeListingsBelowHero />

      {/* Summerlin Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Summerlin for 55+ Living?</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Summerlin offers the perfect combination of luxury amenities, natural beauty, and active adult lifestyle options in Las Vegas's premier master-planned community.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Master-Planned Amenities</h3>
              <p class="text-hsb-muted">Downtown Summerlin shopping, dining, entertainment, and world-class healthcare facilities</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Golf Course Access</h3>
              <p class="text-hsb-muted">Multiple championship golf courses including TPC Las Vegas and Red Rock Country Club</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Red Rock Canyon</h3>
              <p class="text-hsb-muted">Direct access to Red Rock Canyon National Conservation Area for hiking and outdoor recreation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Summerlin Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Premier 55+ Communities in Summerlin</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Discover Summerlin's finest active adult communities offering luxury amenities, golf courses, and stunning mountain views.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Heritage at Stonebridge</h3>
              <p class="text-hsb-muted mb-4">Lennar's newest 55+ community in Summerlin West with Everything's Included® features</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Three home collections (Cromwell, Stirling, Evander)</li>
                <li>• 8,000 sq ft clubhouse with fitness center</li>
                <li>• Resort-style pool & heated lap pool</li>
                <li>• Pickleball & bocce courts</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community with RV parking</li>
              </ul>
              <div class="text-lg font-bold text-orange-600 mb-4">Starting from $464,990</div>
              <a href="/homes-for-sale-stonebridge-summerlin" class="text-orange-600 hover:text-orange-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Summerlin</h3>
              <p class="text-hsb-muted mb-4">Established premier 55+ community with multiple golf courses and mature amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Multiple championship golf courses</li>
                <li>• Recreation centers and pools</li>
                <li>• Extensive social clubs</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-orange-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" class="text-orange-600 hover:text-orange-800 font-semibold">View Sun City Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">The Ridges</h3>
              <p class="text-hsb-muted mb-4">Ultra-luxury community with custom estates and exclusive golf course access</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Custom luxury homes</li>
                <li>• Exclusive golf course</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Elite social scene</li>
                <li>• Highest-end finishes</li>
              </ul>
              <div class="text-lg font-bold text-orange-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" class="text-orange-600 hover:text-orange-800 font-semibold">View Ridges Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Siena</h3>
              <p class="text-hsb-muted mb-4">Tuscan-inspired luxury community with resort amenities and sophisticated design</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div class="text-lg font-bold text-orange-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" class="text-orange-600 hover:text-orange-800 font-semibold">View Siena Homes →</a>
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
              <div class="text-lg font-bold text-orange-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" class="text-orange-600 hover:text-orange-800 font-semibold">View Country Club Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">The Arbors</h3>
              <p class="text-hsb-muted mb-4">Parks, trails, and a wide range of home sizes</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Parks and trails</li>
                <li>• Walking paths</li>
                <li>• Clubhouse access</li>
                <li>• Community events</li>
                <li>• Maintained common areas</li>
                <li>• Convenient location</li>
              </ul>
              <div class="text-lg font-bold text-orange-600 mb-4">$400,000 - $1,200,000</div>
              <a href="/the-arbors-summerlin" class="text-orange-600 hover:text-orange-800 font-semibold">View Arbors Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Lifestyle */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">The Summerlin 55+ Lifestyle</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Experience the perfect blend of luxury amenities, natural beauty, and active adult living in Summerlin's premier communities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Recreation & Amenities</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Championship golf courses and country clubs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Red Rock Canyon hiking and outdoor recreation
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Downtown Summerlin shopping and dining
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  World-class healthcare and medical facilities
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Community Benefits</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Master-planned community with thoughtful design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Safe, well-maintained neighborhoods
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Active social scene and community events
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Convenient access to Las Vegas Strip
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
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Summerlin 55+ Community?</h2>
          <p class="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect 55+ community in Summerlin with luxury amenities, golf courses, and Red Rock Canyon views.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-orange-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Summerlin 55+ Communities"
        subtitle="Call (702) 789-6561"
        priceMin="400000"
        priceMax="5000000"
      />
    </>
  );
});
