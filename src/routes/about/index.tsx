import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const head: DocumentHead = {
  title: "About Dr. Jan Duffy - Las Vegas Real Estate Expert | Heritage at Stonebridge",
  meta: [
    {
      name: "description",
      content: "Meet Dr. Jan Duffy, licensed Nevada real estate professional with doctorate degree and 500+ successful transactions. Expert in Las Vegas luxury market, 55+ communities, and Heritage at Stonebridge.",
    },
    {
      property: "og:title",
      content: "About Dr. Jan Duffy - Las Vegas Real Estate Expert | Heritage at Stonebridge",
    },
    {
      property: "og:description",
      content: "Meet Dr. Jan Duffy, licensed Nevada real estate professional with doctorate degree and 500+ successful transactions. Expert in Las Vegas luxury market and 55+ communities.",
    },
    {
      property: "og:type",
      content: "profile",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/about",
    },
    {
      property: "og:image",
      content: "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "About Dr. Jan Duffy - Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Meet Dr. Jan Duffy, licensed Nevada real estate professional with doctorate degree and 500+ successful transactions.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/about",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive Person schema - September 2025 Google "Perspective" Compliant
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Primary Person Schema with Advanced Expertise Signals
      const personSchema = document.createElement('script');
      personSchema.type = 'application/ld+json';
      personSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://heritagestonebridge.com/about#person",
        "name": "Dr. Jan Duffy",
        "honorificPrefix": "Dr.",
        "givenName": "Jan",
        "familyName": "Duffy",
        "jobTitle": "Real Estate Agent",
        "description": "Licensed Nevada real estate professional with doctorate degree and 500+ successful transactions. Expert in Las Vegas luxury market, investment properties, Heritage at Stonebridge, and first-time homebuyer programs.",
        "image": {
          "@type": "ImageObject",
          "url": "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
          "width": 400,
          "height": 400
        },
        "telephone": "+1-702-789-6561",
        "email": "DrDuffySells@HeritageStonebridge.com",
        "url": "https://heritagestonebridge.com/about",
        "worksFor": {
          "@type": "RealEstateAgent",
          "@id": "https://heritagestonebridge.com/#organization",
          "name": "Heritage Stonebridge | Homes By Dr. Jan Duffy"
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Real Estate Agent",
          "occupationLocation": {
            "@type": "State",
            "name": "Nevada"
          },
          "skills": [
            "Real Estate Sales",
            "Market Analysis", 
            "Investment Consulting",
            "Luxury Home Marketing",
            "Client Relations",
            "55+ Community Specialist",
            "Active Adult Living Expert",
            "Heritage at Stonebridge Expert",
            "Red Rock Canyon Properties",
            "Summerlin Real Estate"
          ],
          "responsibilities": [
            "Represent buyers and sellers in real estate transactions",
            "Provide market analysis and property valuations",
            "Guide clients through the home buying and selling process",
            "Specialize in 55+ communities and luxury properties",
            "Expert knowledge of Heritage at Stonebridge community"
          ]
        },
        "knowsAbout": [
          "Las Vegas Real Estate",
          "Nevada Property Law",
          "Investment Analysis",
          "Market Trends",
          "Luxury Properties",
          "Stonebridge Community",
          "Red Rock Canyon Properties",
          "Summerlin Properties",
          "Henderson Real Estate",
          "55+ Communities",
          "Active Adult Living",
          "Gated Communities",
          "New Construction Homes"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Doctorate Degree",
            "educationalLevel": "Doctoral",
            "description": "Advanced degree demonstrating expertise and analytical skills"
          },
          {
            "@type": "EducationalOccupationalCredential", 
            "credentialCategory": "Real Estate License",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Nevada Real Estate Division"
            },
            "identifier": "S.0197614.LLC",
            "description": "Licensed Nevada Real Estate Professional"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Crossbridge Dr",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89138",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "36.1716",
          "longitude": "-115.3384"
        },
        "sameAs": [
          "https://www.linkedin.com/in/drjanduffy",
          "https://www.facebook.com/DrJanDuffyRealEstate",
          "https://www.instagram.com/drjanduffylasvegas"
        ],
        "award": [
          {
            "@type": "Award",
            "name": "500+ Successful Transactions",
            "description": "Over 500 successful real estate transactions completed"
          },
          {
            "@type": "Award",
            "name": "Heritage at Stonebridge Specialist",
            "description": "Recognized expert in Heritage at Stonebridge community"
          }
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "Nevada Association of Realtors"
          },
          {
            "@type": "Organization",
            "name": "Las Vegas Association of Realtors"
          }
        ]
      });

      // Professional Profile Schema
      const profileSchema = document.createElement('script');
      profileSchema.type = 'application/ld+json';
      profileSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://heritagestonebridge.com/about#person"
        },
        "name": "Dr. Jan Duffy - Real Estate Professional Profile",
        "description": "Professional profile of Dr. Jan Duffy, Las Vegas real estate expert specializing in Heritage at Stonebridge and 55+ communities.",
        "url": "https://heritagestonebridge.com/about"
      });

      // FAQ Schema for About Page
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Dr. Jan Duffy's background in real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy is a licensed Nevada real estate professional with a doctorate degree and over 500 successful transactions. She specializes in Las Vegas luxury market, 55+ communities, and is an expert in Heritage at Stonebridge community."
            }
          },
          {
            "@type": "Question",
            "name": "What areas does Dr. Jan Duffy serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy serves Las Vegas, Summerlin, Henderson, Red Rock Canyon, and specializes in Heritage at Stonebridge community. She has extensive knowledge of 55+ communities and luxury properties throughout the Las Vegas area."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Dr. Jan Duffy qualified to help with Heritage at Stonebridge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy is a recognized Heritage at Stonebridge specialist with deep knowledge of the community, its amenities, home collections, and market trends. Her doctorate degree and 500+ successful transactions demonstrate her expertise and analytical approach to real estate."
            }
          },
          {
            "@type": "Question",
            "name": "What is Dr. Jan Duffy's license number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Jan Duffy's Nevada Real Estate License number is S.0197614.LLC, issued by the Nevada Real Estate Division."
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
            "name": "About Dr. Jan Duffy",
            "item": "https://heritagestonebridge.com/about"
          }
        ]
      });

      // Inject all schemas
      document.head.appendChild(personSchema);
      document.head.appendChild(profileSchema);
      document.head.appendChild(faqSchema);
      document.head.appendChild(breadcrumbSchema);
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            About Dr. Jan Duffy
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Licensed Nevada Real Estate Professional with Doctorate Degree and 500+ Successful Transactions
          </p>
          <p class="text-lg text-blue-200 max-w-4xl mx-auto mb-8">
            Expert in Las Vegas luxury market, Heritage at Stonebridge specialist, and 55+ community expert. 
            Your trusted guide to finding the perfect home in Summerlin, Henderson, and Red Rock Canyon areas.
          </p>
        </div>
      </section>

      {/* Professional Background */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Excellence & Expertise
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Dr. Jan Duffy brings a unique combination of advanced education, extensive experience, 
                and specialized knowledge to every real estate transaction. With a doctorate degree 
                and over 500 successful transactions, she provides unparalleled expertise in the 
                Las Vegas luxury market.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span class="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Doctorate Degree</h3>
                    <p class="text-gray-600">Advanced analytical skills and research-based approach to real estate</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span class="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">500+ Successful Transactions</h3>
                    <p class="text-gray-600">Proven track record of successful real estate transactions</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span class="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Heritage at Stonebridge Specialist</h3>
                    <p class="text-gray-600">Recognized expert in Heritage at Stonebridge community</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span class="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">55+ Community Expert</h3>
                    <p class="text-gray-600">Specialized knowledge of active adult communities and lifestyle</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div class="text-center">
                <div class="w-48 h-48 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span class="text-6xl text-blue-600">👩‍💼</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Dr. Jan Duffy</h3>
                <p class="text-lg text-gray-600 mb-4">Licensed Nevada Real Estate Professional</p>
                <div class="space-y-2 text-sm text-gray-500">
                  <p><strong>License:</strong> S.0197614.LLC</p>
                  <p><strong>Phone:</strong> (702) 789-6561</p>
                  <p><strong>Email:</strong> DrDuffySells@HeritageStonebridge.com</p>
                  <p><strong>Location:</strong> Las Vegas, Nevada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy specializes in multiple areas of Las Vegas real estate, 
              providing comprehensive expertise for every type of buyer and seller.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Heritage at Stonebridge */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">🏘️</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">Heritage at Stonebridge</h3>
                <p class="text-gray-600">
                  Recognized specialist in Heritage at Stonebridge community with deep knowledge 
                  of home collections, amenities, and market trends.
                </p>
              </div>
            </div>

            {/* 55+ Communities */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">👥</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">55+ Communities</h3>
                <p class="text-gray-600">
                  Expert in active adult living communities throughout Las Vegas, 
                  Summerlin, and Henderson areas.
                </p>
              </div>
            </div>

            {/* Luxury Properties */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">💎</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">Luxury Properties</h3>
                <p class="text-gray-600">
                  Specialized knowledge of luxury homes, gated communities, 
                  and high-end properties in Las Vegas market.
                </p>
              </div>
            </div>

            {/* Red Rock Canyon */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">🏔️</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">Red Rock Canyon</h3>
                <p class="text-gray-600">
                  Expert in properties near Red Rock Canyon with stunning mountain views 
                  and natural beauty.
                </p>
              </div>
            </div>

            {/* Investment Properties */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">📈</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">Investment Properties</h3>
                <p class="text-gray-600">
                  Advanced market analysis and investment consulting for 
                  buyers seeking profitable real estate opportunities.
                </p>
              </div>
            </div>

            {/* First-Time Buyers */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">🏠</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">First-Time Buyers</h3>
                <p class="text-gray-600">
                  Patient guidance and education for first-time homebuyers 
                  navigating the Las Vegas real estate market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy serves clients throughout the Las Vegas metropolitan area 
              with specialized expertise in premier communities and neighborhoods.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center p-6 bg-blue-50 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Las Vegas</h3>
              <p class="text-gray-600">Complete Las Vegas metropolitan area coverage</p>
            </div>
            <div class="text-center p-6 bg-green-50 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Summerlin</h3>
              <p class="text-gray-600">Premier master-planned community specialist</p>
            </div>
            <div class="text-center p-6 bg-purple-50 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Henderson</h3>
              <p class="text-gray-600">Established neighborhoods and new construction</p>
            </div>
            <div class="text-center p-6 bg-orange-50 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Red Rock Canyon</h3>
              <p class="text-gray-600">Properties with stunning mountain views</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Dr. Jan Duffy?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Experience the difference that advanced education, extensive experience, 
            and specialized expertise can make in your real estate journey. 
            Dr. Jan Duffy is ready to help you achieve your real estate goals.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Call (702) 789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-block text-center"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
          <div class="mt-8 text-center">
            <p class="text-blue-200 text-sm">
              <strong>Nevada Real Estate License:</strong> S.0197614.LLC
              <br />
              <strong>Office:</strong> Crossbridge Dr, Las Vegas, NV 89138
              <br />
              <strong>Specialties:</strong> Heritage at Stonebridge, 55+ Communities, Luxury Properties
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="About Dr. Jan Duffy"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
