import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const head: DocumentHead = {
  title: "Active Adult Communities Las Vegas | 55+ Living Guide - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover premier active adult communities in Las Vegas. Expert guide to 55+ living with resort amenities, social activities, and luxury homes in Summerlin, Henderson, and Red Rock Canyon.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Active Adult Communities Las Vegas | 55+ Living Guide",
    },
    {
      property: "og:description",
      content: "Discover premier active adult communities in Las Vegas with resort amenities and luxury homes.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/active-adult-communities",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Active Adult Communities Las Vegas | 55+ Living Guide",
    },
    {
      name: "twitter:description",
      content: "Discover premier active adult communities in Las Vegas with resort amenities and luxury homes.",
    },
  ],
};

export default component$(() => {
  const communityContent = useSignal("Loading active adult community insights...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a Las Vegas real estate expert specializing in active adult communities and 55+ living. Generate comprehensive insights about active adult communities, focusing on lifestyle amenities, social activities, and community features.`;
      
      const userMessage = `Create detailed content about active adult communities in Las Vegas. Include:
1. What defines an active adult community vs regular 55+ communities
2. Lifestyle amenities and social activities available
3. Community features like fitness centers, pools, clubhouses
4. Social clubs and interest groups
5. Maintenance-free living benefits
6. Location advantages in Summerlin, Henderson, Red Rock Canyon
7. Investment potential and resale value
8. Comparison with other community types

Format as JSON with sections: community_overview, lifestyle_amenities, social_activities, community_features, maintenance_benefits, location_advantages, investment_potential, and community_comparison.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          communityContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏘️ Active Adult Community Overview</h2>
                <p class="text-gray-700">${parsedContent.community_overview || 'Active adult community analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏊 Lifestyle Amenities</h2>
                <p class="text-gray-700">${parsedContent.lifestyle_amenities || 'Lifestyle amenities being catalogued...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🎭 Social Activities</h2>
                <p class="text-gray-700">${parsedContent.social_activities || 'Social activities being mapped...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏢 Community Features</h2>
                <p class="text-gray-700">${parsedContent.community_features || 'Community features being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🔧 Maintenance Benefits</h2>
                <p class="text-gray-700">${parsedContent.maintenance_benefits || 'Maintenance benefits being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📍 Location Advantages</h2>
                <p class="text-gray-700">${parsedContent.location_advantages || 'Location advantages being evaluated...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Investment Potential</h2>
                <p class="text-gray-700">${parsedContent.investment_potential || 'Investment potential being assessed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 Community Comparison</h2>
                <p class="text-gray-700">${parsedContent.community_comparison || 'Community comparison being compiled...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          communityContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Active Adult Communities</h2>
              <p class="text-gray-600">AI-powered community insights temporarily unavailable. Please check back soon for comprehensive active adult community analysis.</p>
            </div>
          `;
        }
      } else {
        communityContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Active Adult Communities</h2>
            <p class="text-gray-600">AI-powered community insights temporarily unavailable. Please check back soon for comprehensive active adult community analysis.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading community insights:", error);
      communityContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Active Adult Communities</h2>
          <p class="text-gray-600">Unable to load community insights at this time. Please contact Dr. Jan Duffy directly for personalized active adult community information.</p>
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
            Active Adult Communities
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-green-100">
            Discover vibrant 55+ living with resort-style amenities and active lifestyles
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

      {/* AI Community Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating active adult community insights...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={communityContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Active Adult Communities Las Vegas | 55+ Living Guide",
          "description": "Discover premier active adult communities in Las Vegas with resort amenities and luxury homes.",
          "url": "https://heritagestonebridge.com/active-adult-communities",
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

      {/* Active Adult Communities Listings Widget */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Active Adult Community Listings</h2>
            <p class="text-lg text-gray-600">Explore available properties in Las Vegas's premier active adult communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR"
            priceMin={400000}
            priceMax={800000}
          />
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Active Adult Communities"
        subtitle="Call 702-789-6561"
        priceMin="400000"
        priceMax="800000"
      />
    </>
  );
});
