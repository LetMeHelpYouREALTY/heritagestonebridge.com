import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Mountain View Homes Las Vegas | Scenic Luxury Living - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover stunning mountain view homes in Las Vegas with breathtaking vistas of Red Rock Canyon and Spring Mountains. Expert guidance for scenic properties in Summerlin, Henderson, and Northwest Las Vegas.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Mountain View Homes Las Vegas | Scenic Luxury Living",
    },
    {
      property: "og:description",
      content: "Discover stunning mountain view homes in Las Vegas with breathtaking vistas of Red Rock Canyon and Spring Mountains.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/mountain-view-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Mountain View Homes Las Vegas | Scenic Luxury Living",
    },
    {
      name: "twitter:description",
      content: "Discover stunning mountain view homes in Las Vegas with breathtaking vistas of Red Rock Canyon and Spring Mountains.",
    },
  ],
};

export default component$(() => {
  const mountainContent = useSignal("Loading mountain view home insights...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a Las Vegas real estate expert specializing in mountain view homes, scenic properties, and luxury homes with natural vistas. Generate comprehensive insights about mountain view properties, scenic benefits, and natural landscape features.`;
      
      const userMessage = `Create detailed content about mountain view homes in Las Vegas. Include:
1. What defines mountain view homes and scenic properties
2. Types of mountain views (Red Rock Canyon, Spring Mountains, etc.)
3. Scenic benefits and natural landscape features
4. Property positioning and view optimization
5. Mountain view communities in Summerlin, Henderson, Northwest Las Vegas
6. Property values and premium pricing for views
7. Lifestyle benefits of mountain view living
8. Outdoor recreation and hiking access
9. Privacy and natural seclusion benefits
10. Investment potential and view preservation

Format as JSON with sections: mountain_home_definition, view_types, scenic_benefits, property_positioning, community_locations, property_values, lifestyle_benefits, outdoor_recreation, privacy_benefits, and investment_potential.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          mountainContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg border-l-4 border-slate-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏔️ Mountain View Home Definition</h2>
                <p class="text-gray-700">${parsedContent.mountain_home_definition || 'Mountain view home analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🌄 View Types</h2>
                <p class="text-gray-700">${parsedContent.view_types || 'View types being catalogued...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🌿 Scenic Benefits</h2>
                <p class="text-gray-700">${parsedContent.scenic_benefits || 'Scenic benefits being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📍 Property Positioning</h2>
                <p class="text-gray-700">${parsedContent.property_positioning || 'Property positioning being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏘️ Community Locations</h2>
                <p class="text-gray-700">${parsedContent.community_locations || 'Community locations being mapped...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Property Values</h2>
                <p class="text-gray-700">${parsedContent.property_values || 'Property values being assessed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 Lifestyle Benefits</h2>
                <p class="text-gray-700">${parsedContent.lifestyle_benefits || 'Lifestyle benefits being explored...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🥾 Outdoor Recreation</h2>
                <p class="text-gray-700">${parsedContent.outdoor_recreation || 'Outdoor recreation being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🔒 Privacy Benefits</h2>
                <p class="text-gray-700">${parsedContent.privacy_benefits || 'Privacy benefits being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📈 Investment Potential</h2>
                <p class="text-gray-700">${parsedContent.investment_potential || 'Investment potential being assessed...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          mountainContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Mountain View Homes</h2>
              <p class="text-gray-600">AI-powered mountain view home insights temporarily unavailable. Please check back soon for comprehensive scenic property analysis.</p>
            </div>
          `;
        }
      } else {
        mountainContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Mountain View Homes</h2>
            <p class="text-gray-600">AI-powered mountain view home insights temporarily unavailable. Please check back soon for comprehensive scenic property analysis.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading mountain insights:", error);
      mountainContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Mountain View Homes</h2>
          <p class="text-gray-600">Unable to load mountain view home insights at this time. Please contact Dr. Jan Duffy directly for personalized scenic property information.</p>
        </div>
      `;
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Mountain View Homes
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">
            Wake up to breathtaking mountain vistas and natural beauty every day
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              class="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              class="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Mountain Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating mountain view home insights...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={mountainContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Mountain View Homes Las Vegas | Scenic Luxury Living",
          "description": "Discover stunning mountain view homes in Las Vegas with breathtaking vistas of Red Rock Canyon and Spring Mountains.",
          "url": "https://heritagestonebridge.com/mountain-view-homes",
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

      {/* Mountain View Homes Listings Widget */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Mountain View Home Listings</h2>
            <p class="text-lg text-gray-600">Explore available properties with stunning mountain views in Las Vegas</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR"
            priceMin={500000}
            priceMax={2500000}
          />
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Mountain View Homes"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="2500000"
      />
    </>
  );
});
