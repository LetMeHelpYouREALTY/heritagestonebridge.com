import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "55+ Communities in Las Vegas | Active Adult Living Guide - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information. Expert guidance for 55+ buyers. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/55-plus-communities-las-vegas",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, active-adults",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "55+ Communities in Las Vegas | Active Adult Living Guide",
    },
    {
      property: "og:description",
      content: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/55-plus-communities-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "55+ Communities in Las Vegas | Active Adult Living Guide",
    },
    {
      name: "twitter:description",
      content: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for 55+ communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for 55+ communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/55-plus-communities-las-vegas#service",
        "name": "55+ Communities in Las Vegas",
        "description": "Expert real estate services specializing in 55+ communities in Las Vegas, providing comprehensive guidance for active adult living options and lifestyle choices.",
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
        "serviceType": "55+ Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$300,000-$5,000,000",
          "description": "55+ communities in Las Vegas with active adult living options"
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
              "text": "The best 55+ communities in Las Vegas include Heritage at Stonebridge, Sun City Summerlin, The Ridges, Siena, and various Del Webb communities, each offering unique amenities and lifestyle benefits."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities do 55+ communities typically offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "55+ communities typically offer clubhouses, fitness centers, pools, golf courses, social activities, maintenance services, and age-restricted living environments."
            }
          },
          {
            "@type": "Question",
            "name": "What is the age requirement for 55+ communities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most 55+ communities require at least one resident to be 55 years or older, with some communities allowing younger spouses or partners."
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
            "name": "Las Vegas Communities",
            "item": "https://heritagestonebridge.com/55-plus-communities-las-vegas"
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
        title="55+ Communities in Las Vegas"
        lede="Discover the premier active adult communities offering resort-style amenities, social activities, and maintenance-free living"
      />
      <OfficeListingsBelowHero />

      {/* Community Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Las Vegas 55+ Community Landscape</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Las Vegas offers a diverse selection of 55+ communities, from new construction developments to established communities with mature amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">New Construction</h3>
              <p class="text-hsb-muted">Modern communities like Heritage at Stonebridge with contemporary amenities and smart home technology</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Established Communities</h3>
              <p class="text-hsb-muted">Mature communities like Sun City Summerlin with proven amenities and established social scenes</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Luxury Options</h3>
              <p class="text-hsb-muted">High-end communities including The Ridges and Siena with premium amenities and concierge services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Featured 55+ Communities in Las Vegas</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Explore Las Vegas's premier active adult communities offering diverse lifestyles and amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Heritage at Stonebridge</h3>
              <p class="text-hsb-muted mb-4">Lennar's newest 55+ community in Summerlin with Everything's Included® features</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Three home collections</li>
                <li>• Resort-style amenities</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community</li>
                <li>• Smart home technology</li>
                <li>• New construction</li>
              </ul>
              <div class="text-lg font-bold text-emerald-600 mb-4">Starting from $464,990</div>
              <a href="/homes-for-sale-stonebridge-summerlin" class="text-emerald-600 hover:text-emerald-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Sun City Summerlin</h3>
              <p class="text-hsb-muted mb-4">Established premier 55+ community with golf courses and mature amenities</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Resale homes</li>
                <li>• Strong resale market</li>
              </ul>
              <div class="text-lg font-bold text-emerald-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" class="text-emerald-600 hover:text-emerald-800 font-semibold">View Sun City Homes →</a>
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
              <div class="text-lg font-bold text-emerald-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" class="text-emerald-600 hover:text-emerald-800 font-semibold">View Ridges Homes →</a>
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
              <div class="text-lg font-bold text-emerald-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" class="text-emerald-600 hover:text-emerald-800 font-semibold">View Siena Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Del Webb Communities</h3>
              <p class="text-hsb-muted mb-4">Multiple Del Webb communities with quality construction and active lifestyle focus</p>
              <ul class="space-y-2 text-hsb-muted mb-4">
                <li>• Established reputation</li>
                <li>• Quality construction</li>
                <li>• Active lifestyle focus</li>
                <li>• Social activities</li>
                <li>• Maintenance-free living</li>
                <li>• Various price points</li>
              </ul>
              <div class="text-lg font-bold text-emerald-600 mb-4">$400,000 - $1,500,000</div>
              <a href="/del-webb-las-vegas" class="text-emerald-600 hover:text-emerald-800 font-semibold">View Del Webb Homes →</a>
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
              <div class="text-lg font-bold text-emerald-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" class="text-emerald-600 hover:text-emerald-800 font-semibold">View Country Club Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Benefits of 55+ Community Living</h2>
            <p class="text-lg text-hsb-text max-w-3xl mx-auto">
              Discover the advantages of active adult community living in Las Vegas, from social connections to maintenance-free lifestyles.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Social & Lifestyle Benefits</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Active social scene with clubs and activities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Like-minded neighbors and friendships
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Organized events and entertainment
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Volunteer opportunities and community involvement
                </li>
              </ul>
            </div>
            
            <div class="bg-hsb-sand p-8 rounded-lg">
              <h3 class="font-display text-2xl text-hsb-dark mb-4">Practical Benefits</h3>
              <ul class="space-y-3 text-hsb-text mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Maintenance-free living and services
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Security and gated communities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Access to amenities and facilities
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Age-appropriate environment and activities
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
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect 55+ Community?</h2>
          <p class="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the ideal 55+ community in Las Vegas that matches your lifestyle, budget, and preferences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Communities Las Vegas"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="5000000"
      />
    </>
  );
});
