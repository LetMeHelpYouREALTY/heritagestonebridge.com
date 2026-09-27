import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "New 55+ Communities in Las Vegas | Latest Active Adult Developments - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover the newest 55+ communities in Las Vegas with modern amenities and contemporary designs. Expert guidance for new construction active adult living. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/new-55-plus-communities-las-vegas",
    },
    {
      name: "content-type",
      content: "service-page",
    },
    {
      name: "audience",
      content: "adults-55-plus, new-construction-buyers",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "New 55+ Communities in Las Vegas | Latest Active Adult Developments",
    },
    {
      property: "og:description",
      content: "Discover the newest 55+ communities in Las Vegas with modern amenities and contemporary designs.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/new-55-plus-communities-las-vegas",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "New 55+ Communities in Las Vegas | Latest Active Adult Developments",
    },
    {
      name: "twitter:description",
      content: "Discover the newest 55+ communities in Las Vegas with modern amenities and contemporary designs.",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive schema markup for new 55+ communities
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Service schema for new 55+ communities
      const serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://heritagestonebridge.com/new-55-plus-communities-las-vegas#service",
        "name": "New 55+ Communities in Las Vegas",
        "description": "Expert real estate services specializing in new construction 55+ communities in Las Vegas, helping active adults find the latest developments with modern amenities.",
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
        "serviceType": "New Construction 55+ Community Real Estate Services",
        "offers": {
          "@type": "Offer",
          "priceRange": "$400,000-$1,000,000",
          "description": "New 55+ communities in Las Vegas with modern amenities and contemporary designs"
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
            "name": "What are the newest 55+ communities in Las Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The newest 55+ communities in Las Vegas include Heritage at Stonebridge (Lennar), new Del Webb developments, and upcoming active adult communities in Summerlin and Henderson areas."
            }
          },
          {
            "@type": "Question",
            "name": "What are the benefits of new construction 55+ communities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "New construction 55+ communities offer modern amenities, energy-efficient features, contemporary designs, warranty coverage, and the latest technology and finishes."
            }
          },
          {
            "@type": "Question",
            "name": "How do I choose the right new 55+ community?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consider location, amenities, builder reputation, floor plans, pricing, HOA fees, and future development plans when choosing a new 55+ community."
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
            "name": "New 55+ Communities",
            "item": "https://heritagestonebridge.com/new-55-plus-communities-las-vegas"
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
      <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            New 55+ Communities in Las Vegas
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the latest active adult developments with modern amenities, contemporary designs, and cutting-edge features
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Explore New Communities
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* New Construction Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose New Construction 55+ Communities?</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              New construction offers the latest in design, technology, and amenities specifically designed for active adult living.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Modern Amenities</h3>
              <p class="text-gray-600">State-of-the-art clubhouses, fitness centers, and recreational facilities with the latest equipment and technology</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Energy Efficiency</h3>
              <p class="text-gray-600">Energy-efficient appliances, HVAC systems, and smart home technology to reduce utility costs</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Warranty Coverage</h3>
              <p class="text-gray-600">Comprehensive builder warranties covering structural elements, systems, and finishes for peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured New Communities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Latest 55+ Community Developments</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's newest active adult communities featuring contemporary designs and modern amenities.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p class="text-gray-600 mb-4">Lennar's newest 55+ community in Summerlin with Everything's Included® features</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Three home collections (Cromwell, Stirling, Evander)</li>
                <li>• 8,000 sq ft clubhouse with fitness center</li>
                <li>• Resort-style pool & heated lap pool</li>
                <li>• Pickleball & bocce courts</li>
                <li>• Smart home technology included</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">Starting from $464,990</div>
              <a href="/homes-for-sale-stonebridge-summerlin" class="text-blue-600 hover:text-blue-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">New Del Webb Communities</h3>
              <p class="text-gray-600 mb-4">Latest Del Webb developments with contemporary amenities and designs</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Modern clubhouse designs</li>
                <li>• Updated fitness centers</li>
                <li>• Contemporary social spaces</li>
                <li>• Latest technology integration</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">Various Price Points</div>
              <a href="/del-webb-new-communities" class="text-blue-600 hover:text-blue-800 font-semibold">View Del Webb New →</a>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Upcoming Developments</h3>
              <p class="text-gray-600 mb-4">New 55+ communities planned for Henderson and Northwest Las Vegas</p>
              <ul class="space-y-2 text-gray-600 mb-4">
                <li>• Pre-construction opportunities</li>
                <li>• Customizable floor plans</li>
                <li>• Early buyer incentives</li>
                <li>• Preferred lot selection</li>
              </ul>
              <div class="text-lg font-bold text-blue-600 mb-4">Coming Soon</div>
              <a href="/upcoming-55-plus-communities" class="text-blue-600 hover:text-blue-800 font-semibold">Get Early Access →</a>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Process */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">The New Construction Process</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the new construction process helps you make informed decisions and get the most value from your investment.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Pre-Construction Phase</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Early buyer incentives and pricing
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Lot selection and customization options
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Floor plan modifications and upgrades
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Builder financing programs
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Construction & Closing</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Regular construction updates and walkthroughs
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Final inspections and quality checks
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Warranty documentation and orientation
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Move-in coordination and support
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
          priceMax={1000000}
        />
      </div>

      {/* Call to Action */}
      <section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Ready to Explore New 55+ Communities?</h2>
          <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the latest 55+ community developments in Las Vegas with modern amenities and contemporary designs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
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
        title="New 55+ Communities"
        subtitle="Call (702) 789-6561"
        priceMin="400000"
        priceMax="1000000"
      />
    </>
  );
});
