import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const head: DocumentHead = {
  title: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis. Expert real estate intelligence for Summerlin, Henderson, and Northwest Las Vegas.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
    },
    {
      property: "og:description",
      content: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/neighborhood-insights",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
    },
    {
      name: "twitter:description",
      content: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
    },
  ],
};

export default component$(() => {
  const insightsContent = useSignal("Loading AI-powered neighborhood insights...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a Las Vegas real estate expert AI assistant. Generate comprehensive neighborhood insights and market analysis for Las Vegas areas including Summerlin, Henderson, Northwest Las Vegas, and Red Rock Canyon communities. Focus on 55+ communities, luxury homes, and active adult living.`;
      
      const userMessage = `Generate detailed neighborhood insights for Las Vegas real estate markets. Include:
1. Current market trends for Summerlin, Henderson, Northwest Las Vegas
2. 55+ community analysis and amenities
3. Price trends and investment opportunities
4. Lifestyle factors and community features
5. Future development plans and growth projections

Format as JSON with sections: market_overview, neighborhood_analysis, price_trends, lifestyle_factors, investment_outlook, and recommendations.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          insightsContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Market Overview</h2>
                <p class="text-gray-700">${parsedContent.market_overview || 'Market analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Analysis</h2>
                <p class="text-gray-700">${parsedContent.neighborhood_analysis || 'Neighborhood insights being generated...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Price Trends</h2>
                <p class="text-gray-700">${parsedContent.price_trends || 'Price analysis in development...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Lifestyle Factors</h2>
                <p class="text-gray-700">${parsedContent.lifestyle_factors || 'Lifestyle analysis being prepared...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Investment Outlook</h2>
                <p class="text-gray-700">${parsedContent.investment_outlook || 'Investment analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Expert Recommendations</h2>
                <p class="text-gray-700">${parsedContent.recommendations || 'Recommendations being formulated...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          insightsContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Insights</h2>
              <p class="text-gray-600">AI-powered analysis temporarily unavailable. Please check back soon for comprehensive Las Vegas neighborhood insights.</p>
            </div>
          `;
        }
      } else {
        insightsContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Insights</h2>
            <p class="text-gray-600">AI-powered analysis temporarily unavailable. Please check back soon for comprehensive Las Vegas neighborhood insights.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading insights:", error);
      insightsContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Insights</h2>
          <p class="text-gray-600">Unable to load AI insights at this time. Please contact Dr. Jan Duffy directly for personalized neighborhood analysis.</p>
        </div>
      `;
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Neighborhood Insights
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Discover Las Vegas communities through advanced market intelligence
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Insights Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating AI-powered neighborhood insights...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={insightsContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
          "description": "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
          "url": "https://heritagestonebridge.com/neighborhood-insights",
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
        title="Neighborhood Insights"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
