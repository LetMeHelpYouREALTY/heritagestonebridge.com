import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { HeroPhoto } from "~/components/community/HeroPhoto";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";

export const head: DocumentHead = {
  title: "Retirement Communities Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  meta: [
    {
      name: "description",
      content: "Discover premier retirement communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities, active adult living, and maintenance-free retirement. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/retirement-communities-las-vegas",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, retirement-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Retirement Communities Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Discover premier retirement communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities, active adult living, and maintenance-free retirement.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/retirement-communities-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Retirement Communities Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Discover premier retirement communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities, active adult living, and maintenance-free retirement.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for retirement communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for retirement communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/retirement-communities-las-vegas#service",
        "name": "Retirement Communities Las Vegas",
        "description": "Expert real estate services specializing in retirement communities in Las Vegas, providing comprehensive guidance for 55+ communities, active adult living, and maintenance-free retirement.",
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
        "serviceType": "Retirement Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$3,000,000",
          "description": "Retirement communities with maintenance-free living and resort amenities"
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
            "name": "What are the best retirement communities in Las Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best retirement communities in Las Vegas include Heritage at Stonebridge (new construction), Sun City Summerlin (established), Sun City Anthem (Henderson), The Ridges (luxury), Siena (resort-style), and Red Rock Country Club (golf course community)."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do retirement communities offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Retirement communities typically offer golf courses, clubhouses, fitness centers, pools, social activities, maintenance services, security, and resort-style amenities designed for active adult living."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose Las Vegas for retirement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Las Vegas offers no state income tax, year-round sunshine, world-class entertainment, excellent healthcare, outdoor recreation, and a variety of retirement communities with resort amenities and active adult lifestyles."
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
            "name": "Retirement Communities",
            "item": "https://heritagestonebridge.com/retirement-communities-las-vegas"
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
      <section class="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white py-20 overflow-hidden">
        <HeroPhoto />
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Retirement Communities Las Vegas
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover premier 55+ retirement communities with resort amenities, maintenance-free living, and active adult lifestyles
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-orange-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-100 transition-colors shadow-lg inline-block text-center">
              Explore Retirement Communities
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>
      <OfficeListingsBelowHero />

      {/* Las Vegas Retirement Advantage */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Las Vegas for Retirement?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of retirees discover why Las Vegas offers the perfect retirement destination with tax benefits, sunshine, and world-class amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">No State Income Tax</h3>
              <p class="text-gray-600">Keep more of your retirement income with Nevada's tax-friendly environment</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Year-Round Sunshine</h3>
              <p class="text-gray-600">Enjoy 300+ days of sunshine with mild winters and perfect outdoor weather</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">World-Class Amenities</h3>
              <p class="text-gray-600">Access to entertainment, dining, healthcare, and recreational activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Retirement Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Premier Retirement Communities in Las Vegas</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's finest retirement communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
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
              <div class="text-lg font-bold text-orange-600 mb-4">Starting from $464,990</div>
              <a href="/heritage-at-stonebridge-homes-for-sale" class="text-orange-600 hover:text-orange-800 font-semibold">View Heritage at Stonebridge →</a>
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
              <div class="text-lg font-bold text-orange-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" class="text-orange-600 hover:text-orange-800 font-semibold">View Sun City Summerlin →</a>
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
              <div class="text-lg font-bold text-orange-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-anthem" class="text-orange-600 hover:text-orange-800 font-semibold">View Sun City Anthem →</a>
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
              <div class="text-lg font-bold text-orange-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" class="text-orange-600 hover:text-orange-800 font-semibold">View The Ridges →</a>
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
              <div class="text-lg font-bold text-orange-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" class="text-orange-600 hover:text-orange-800 font-semibold">View Siena →</a>
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
              <div class="text-lg font-bold text-orange-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" class="text-orange-600 hover:text-orange-800 font-semibold">View Country Club →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Lifestyle Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">The Las Vegas Retirement Lifestyle</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury amenities, outdoor recreation, and maintenance-free living in Las Vegas's premier retirement communities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Outdoor Recreation</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Red Rock Canyon hiking and rock climbing
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Lake Mead water sports and fishing
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Championship golf courses
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Year-round outdoor activities
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Entertainment & Culture</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  World-class shows and entertainment
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Fine dining and culinary experiences
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Museums and cultural attractions
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Shopping and retail therapy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Widgets */}

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-orange-600 to-orange-800 py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Retirement Community?</h2>
          <p class="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal retirement community that matches your lifestyle, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-orange-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Retirement Communities Las Vegas"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="3000000"
      />
    </>
  );
});
