import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const head: DocumentHead = {
  title: "Las Vegas 55+ Community Comparison | Active Adult Living Guide - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Compare Las Vegas 55+ communities including Heritage at Stonebridge, Del Webb, Sun City, and Siena. Expert analysis of amenities, pricing, and lifestyle features.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Las Vegas 55+ Community Comparison | Active Adult Living Guide",
    },
    {
      property: "og:description",
      content: "Compare Las Vegas 55+ communities including Heritage at Stonebridge, Del Webb, Sun City, and Siena.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/community-comparison",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas 55+ Community Comparison | Active Adult Living Guide",
    },
    {
      name: "twitter:description",
      content: "Compare Las Vegas 55+ communities including Heritage at Stonebridge, Del Webb, Sun City, and Siena.",
    },
  ],
};

export default component$(() => {
  const comparisonContent = useSignal("Loading community comparison...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a Las Vegas real estate expert specializing in 55+ communities and active adult living. Generate detailed comparisons between major Las Vegas communities including Heritage at Stonebridge, Del Webb communities, Sun City, Siena, The Ridges, and other premier active adult communities.`;
      
      const userMessage = `Create a comprehensive comparison of Las Vegas 55+ communities. Include detailed analysis of:
1. Heritage at Stonebridge - amenities, pricing, location advantages
2. Del Webb communities - features, lifestyle, investment value
3. Sun City Las Vegas - community benefits, activities, demographics
4. Siena - luxury features, golf amenities, social opportunities
5. The Ridges - mountain views, exclusivity, premium pricing
6. Other notable communities - Anthem, Green Valley, Seven Hills

For each community, provide: location_advantages, amenity_comparison, pricing_analysis, lifestyle_features, social_opportunities, investment_potential, and unique_selling_points.

Format as JSON with sections: heritage_stonebridge, del_webb_communities, sun_city_las_vegas, siena_community, the_ridges, other_communities, and overall_comparison.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          comparisonContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏘️ Heritage at Stonebridge</h2>
                <p class="text-gray-700">${parsedContent.heritage_stonebridge || 'Heritage at Stonebridge analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🌿 Del Webb Communities</h2>
                <p class="text-gray-700">${parsedContent.del_webb_communities || 'Del Webb communities being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">☀️ Sun City Las Vegas</h2>
                <p class="text-gray-700">${parsedContent.sun_city_las_vegas || 'Sun City Las Vegas being evaluated...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">⛳ Siena Community</h2>
                <p class="text-gray-700">${parsedContent.siena_community || 'Siena community being assessed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏔️ The Ridges</h2>
                <p class="text-gray-700">${parsedContent.the_ridges || 'The Ridges being reviewed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏡 Other Notable Communities</h2>
                <p class="text-gray-700">${parsedContent.other_communities || 'Other communities being compared...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 Overall Comparison</h2>
                <p class="text-gray-700">${parsedContent.overall_comparison || 'Overall comparison being compiled...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          comparisonContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Community Comparison</h2>
              <p class="text-gray-600">AI-powered comparison temporarily unavailable. Please check back soon for comprehensive community analysis.</p>
            </div>
          `;
        }
      } else {
        comparisonContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Community Comparison</h2>
            <p class="text-gray-600">AI-powered comparison temporarily unavailable. Please check back soon for comprehensive community analysis.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading comparison:", error);
      comparisonContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Community Comparison</h2>
          <p class="text-gray-600">Unable to load community comparison at this time. Please contact Dr. Jan Duffy directly for personalized community analysis.</p>
        </div>
      `;
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-green-900 via-teal-800 to-blue-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Community Comparison Guide
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-green-100">
            Compare Las Vegas 55+ communities and find your perfect active adult lifestyle
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

      {/* Comparison Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating community comparison...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={comparisonContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Las Vegas 55+ Community Comparison | Active Adult Living Guide",
          "description": "Compare Las Vegas 55+ communities including Heritage at Stonebridge, Del Webb, Sun City, and Siena.",
          "url": "https://heritagestonebridge.com/community-comparison",
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

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Community Comparison"
        subtitle="Call 702-789-6561"
        priceMin="400000"
        priceMax="1500000"
      />
    </>
  );
});
