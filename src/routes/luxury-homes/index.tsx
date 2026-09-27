import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Luxury Homes Las Vegas | Premium Real Estate - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover luxury homes in Las Vegas featuring premium amenities, stunning designs, and exclusive locations. Expert guidance for high-end real estate in Summerlin, Henderson, and Red Rock Canyon.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Luxury Homes Las Vegas | Premium Real Estate",
    },
    {
      property: "og:description",
      content: "Discover luxury homes in Las Vegas featuring premium amenities and exclusive locations.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/luxury-homes",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Luxury Homes Las Vegas | Premium Real Estate",
    },
    {
      name: "twitter:description",
      content: "Discover luxury homes in Las Vegas featuring premium amenities and exclusive locations.",
    },
  ],
};

export default component$(() => {
  const luxuryContent = useSignal("Loading luxury home insights...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a Las Vegas luxury real estate expert specializing in high-end properties, premium amenities, and exclusive communities. Generate comprehensive insights about luxury homes and their unique features.`;
      
      const userMessage = `Create detailed content about luxury homes in Las Vegas. Include:
1. What defines luxury homes vs standard properties
2. Premium amenities and features available
3. High-end finishes and materials
4. Smart home technology and automation
5. Private amenities like pools, spas, wine cellars
6. Exclusive locations and gated communities
7. Architectural styles and design trends
8. Investment potential and luxury market trends
9. Customization and personalization options
10. Lifestyle benefits of luxury living

Format as JSON with sections: luxury_definition, premium_amenities, high_end_finishes, smart_technology, private_amenities, exclusive_locations, architectural_styles, investment_trends, customization_options, and lifestyle_benefits.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          luxuryContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-gold-50 to-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏆 Luxury Home Definition</h2>
                <p class="text-gray-700">${parsedContent.luxury_definition || 'Luxury home analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">✨ Premium Amenities</h2>
                <p class="text-gray-700">${parsedContent.premium_amenities || 'Premium amenities being catalogued...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏗️ High-End Finishes</h2>
                <p class="text-gray-700">${parsedContent.high_end_finishes || 'High-end finishes being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📱 Smart Technology</h2>
                <p class="text-gray-700">${parsedContent.smart_technology || 'Smart technology being explored...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏊 Private Amenities</h2>
                <p class="text-gray-700">${parsedContent.private_amenities || 'Private amenities being mapped...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🔒 Exclusive Locations</h2>
                <p class="text-gray-700">${parsedContent.exclusive_locations || 'Exclusive locations being identified...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏛️ Architectural Styles</h2>
                <p class="text-gray-700">${parsedContent.architectural_styles || 'Architectural styles being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📈 Investment Trends</h2>
                <p class="text-gray-700">${parsedContent.investment_trends || 'Investment trends being assessed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🎨 Customization Options</h2>
                <p class="text-gray-700">${parsedContent.customization_options || 'Customization options being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 Lifestyle Benefits</h2>
                <p class="text-gray-700">${parsedContent.lifestyle_benefits || 'Lifestyle benefits being explored...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          luxuryContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Luxury Homes</h2>
              <p class="text-gray-600">AI-powered luxury home insights temporarily unavailable. Please check back soon for comprehensive luxury property analysis.</p>
            </div>
          `;
        }
      } else {
        luxuryContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Luxury Homes</h2>
            <p class="text-gray-600">AI-powered luxury home insights temporarily unavailable. Please check back soon for comprehensive luxury property analysis.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading luxury insights:", error);
      luxuryContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Luxury Homes</h2>
          <p class="text-gray-600">Unable to load luxury home insights at this time. Please contact Dr. Jan Duffy directly for personalized luxury property information.</p>
        </div>
      `;
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Luxury Homes
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-yellow-100">
            Discover premium real estate with exclusive amenities and stunning designs
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              class="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Luxury Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating luxury home insights...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={luxuryContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Luxury Homes Las Vegas | Premium Real Estate",
          "description": "Discover luxury homes in Las Vegas featuring premium amenities and exclusive locations.",
          "url": "https://heritagestonebridge.com/luxury-homes",
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

      {/* Luxury Homes Listings Widget */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Luxury Home Listings</h2>
            <p class="text-lg text-gray-600">Explore available luxury properties in Las Vegas's most exclusive communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR"
            priceMin={800000}
            priceMax={5000000}
          />
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Luxury Homes"
        subtitle="Call 702-789-6561"
        priceMin="800000"
        priceMax="5000000"
      />
    </>
  );
});
