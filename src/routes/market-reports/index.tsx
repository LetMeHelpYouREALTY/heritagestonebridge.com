import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const head: DocumentHead = {
  title: "Las Vegas Market Reports | Real Estate Market Analysis - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Access comprehensive Las Vegas real estate market reports with current trends, pricing data, and market forecasts. Expert analysis for 55+ communities, luxury homes, and active adult living.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Las Vegas Market Reports | Real Estate Market Analysis",
    },
    {
      property: "og:description",
      content: "Access comprehensive Las Vegas real estate market reports with current trends and pricing data.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/market-reports",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Market Reports | Real Estate Market Analysis",
    },
    {
      name: "twitter:description",
      content: "Access comprehensive Las Vegas real estate market reports with current trends and pricing data.",
    },
  ],
};

export default component$(() => {
  const marketContent = useSignal("Loading market reports...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a Las Vegas real estate market expert specializing in market analysis, pricing trends, and statistical data. Generate comprehensive market reports with current data, trends, and forecasts.`;
      
      const userMessage = `Create detailed Las Vegas real estate market reports. Include:
1. Current market overview and key statistics
2. Price trends and appreciation rates
3. Inventory levels and days on market
4. Market forecasts and predictions
5. Neighborhood-specific data (Summerlin, Henderson, Northwest Las Vegas)
6. Property type analysis (55+ communities, luxury homes, etc.)
7. Interest rate impact and affordability
8. Investment opportunities and market outlook
9. Seasonal trends and market cycles
10. Comparative market analysis

Format as JSON with sections: market_overview, price_trends, inventory_data, market_forecasts, neighborhood_data, property_type_analysis, interest_rates, investment_outlook, seasonal_trends, and comparative_analysis.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          marketContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 Market Overview</h2>
                <p class="text-gray-700">${parsedContent.market_overview || 'Market overview analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📈 Price Trends</h2>
                <p class="text-gray-700">${parsedContent.price_trends || 'Price trends being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📦 Inventory Data</h2>
                <p class="text-gray-700">${parsedContent.inventory_data || 'Inventory data being compiled...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🔮 Market Forecasts</h2>
                <p class="text-gray-700">${parsedContent.market_forecasts || 'Market forecasts being generated...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏘️ Neighborhood Data</h2>
                <p class="text-gray-700">${parsedContent.neighborhood_data || 'Neighborhood data being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏠 Property Type Analysis</h2>
                <p class="text-gray-700">${parsedContent.property_type_analysis || 'Property type analysis being conducted...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Interest Rates</h2>
                <p class="text-gray-700">${parsedContent.interest_rates || 'Interest rate impact being assessed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📈 Investment Outlook</h2>
                <p class="text-gray-700">${parsedContent.investment_outlook || 'Investment outlook being evaluated...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🗓️ Seasonal Trends</h2>
                <p class="text-gray-700">${parsedContent.seasonal_trends || 'Seasonal trends being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">⚖️ Comparative Analysis</h2>
                <p class="text-gray-700">${parsedContent.comparative_analysis || 'Comparative analysis being compiled...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          marketContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Market Reports</h2>
              <p class="text-gray-600">AI-powered market reports temporarily unavailable. Please check back soon for comprehensive Las Vegas market analysis.</p>
            </div>
          `;
        }
      } else {
        marketContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Market Reports</h2>
            <p class="text-gray-600">AI-powered market reports temporarily unavailable. Please check back soon for comprehensive Las Vegas market analysis.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading market reports:", error);
      marketContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Market Reports</h2>
          <p class="text-gray-600">Unable to load market reports at this time. Please contact Dr. Jan Duffy directly for personalized market analysis.</p>
        </div>
      `;
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Market Reports
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Access comprehensive Las Vegas real estate market analysis and trends
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
              class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Market Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating market reports...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={marketContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Las Vegas Market Reports | Real Estate Market Analysis",
          "description": "Access comprehensive Las Vegas real estate market reports with current trends and pricing data.",
          "url": "https://heritagestonebridge.com/market-reports",
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
        title="Market Reports"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
