import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Golf Course Homes Las Vegas | Luxury Golf Living - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover luxury golf course homes in Las Vegas with stunning fairway views and resort amenities. Expert guidance for golf communities in Summerlin, Henderson, and Red Rock Canyon.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Golf Course Homes Las Vegas | Luxury Golf Living",
    },
    {
      property: "og:description",
      content: "Discover luxury golf course homes in Las Vegas with stunning fairway views and resort amenities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/golf-course-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Golf Course Homes Las Vegas | Luxury Golf Living",
    },
    {
      name: "twitter:description",
      content: "Discover luxury golf course homes in Las Vegas with stunning fairway views and resort amenities.",
    },
  ],
};

export default component$(() => {
  const golfContent = useSignal("Loading golf course home insights...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a Las Vegas real estate expert specializing in golf course homes, luxury golf communities, and resort-style living. Generate comprehensive insights about golf course properties, amenities, and lifestyle benefits.`;
      
      const userMessage = `Create detailed content about golf course homes in Las Vegas. Include:
1. What defines golf course homes and their unique features
2. Types of golf course properties and views
3. Golf course amenities and club memberships
4. Resort-style living and luxury services
5. Golf course communities in Summerlin, Henderson, Red Rock Canyon
6. Property values and investment potential
7. Lifestyle benefits of golf course living
8. Golf course maintenance and landscaping
9. Social aspects and golf community events
10. Access to golf courses and tee times

Format as JSON with sections: golf_home_definition, property_types, golf_amenities, resort_living, community_locations, property_values, lifestyle_benefits, course_maintenance, social_aspects, and golf_access.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          golfContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">⛳ Golf Course Home Definition</h2>
                <p class="text-gray-700">${parsedContent.golf_home_definition || 'Golf course home analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏠 Property Types</h2>
                <p class="text-gray-700">${parsedContent.property_types || 'Property types being catalogued...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏌️ Golf Amenities</h2>
                <p class="text-gray-700">${parsedContent.golf_amenities || 'Golf amenities being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏨 Resort Living</h2>
                <p class="text-gray-700">${parsedContent.resort_living || 'Resort living being explored...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📍 Community Locations</h2>
                <p class="text-gray-700">${parsedContent.community_locations || 'Community locations being mapped...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Property Values</h2>
                <p class="text-gray-700">${parsedContent.property_values || 'Property values being assessed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 Lifestyle Benefits</h2>
                <p class="text-gray-700">${parsedContent.lifestyle_benefits || 'Lifestyle benefits being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🌿 Course Maintenance</h2>
                <p class="text-gray-700">${parsedContent.course_maintenance || 'Course maintenance being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🎭 Social Aspects</h2>
                <p class="text-gray-700">${parsedContent.social_aspects || 'Social aspects being explored...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">⛳ Golf Access</h2>
                <p class="text-gray-700">${parsedContent.golf_access || 'Golf access being outlined...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          golfContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Golf Course Homes</h2>
              <p class="text-gray-600">AI-powered golf course home insights temporarily unavailable. Please check back soon for comprehensive golf course property analysis.</p>
            </div>
          `;
        }
      } else {
        golfContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Golf Course Homes</h2>
            <p class="text-gray-600">AI-powered golf course home insights temporarily unavailable. Please check back soon for comprehensive golf course property analysis.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading golf insights:", error);
      golfContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Golf Course Homes</h2>
          <p class="text-gray-600">Unable to load golf course home insights at this time. Please contact Dr. Jan Duffy directly for personalized golf course property information.</p>
        </div>
      `;
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Golf Course Homes
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-green-100">
            Live the ultimate golf lifestyle with stunning fairway views and resort amenities
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              class="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Golf Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating golf course home insights...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={golfContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Golf Course Homes Las Vegas | Luxury Golf Living",
          "description": "Discover luxury golf course homes in Las Vegas with stunning fairway views and resort amenities.",
          "url": "https://heritagestonebridge.com/golf-course-homes",
          "mainEntity": {
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy",
            "telephone": "702-789-6561",
            "email": "DrDuffySells@HeritageStonebridge.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "addressCountry": "US"
            },
            "serviceArea": [
              "Summerlin",
              "Henderson", 
              "Northwest Las Vegas",
              "Red Rock Canyon",
              "Boulder City"
            ]
          }
        })}
      />

      {/* Golf Course Homes Listings Widget */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Golf Course Home Listings</h2>
            <p class="text-lg text-gray-600">Explore available properties on Las Vegas's premier golf courses</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR"
            priceMin={600000}
            priceMax={3000000}
          />
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Golf Course Homes"
        subtitle="Call 702-789-6561"
        priceMin="600000"
        priceMax="3000000"
      />
    </>
  );
});
