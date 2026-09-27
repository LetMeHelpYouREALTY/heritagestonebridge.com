import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const head: DocumentHead = {
  title: "Luxury Living Guide Las Vegas | Premium 55+ Communities - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Discover luxury living in Las Vegas 55+ communities. Expert guide to premium amenities, gated communities, and upscale active adult living in Summerlin and Henderson.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Luxury Living Guide Las Vegas | Premium 55+ Communities",
    },
    {
      property: "og:description",
      content: "Discover luxury living in Las Vegas 55+ communities with premium amenities and gated communities.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/luxury-living-guide",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Luxury Living Guide Las Vegas | Premium 55+ Communities",
    },
    {
      name: "twitter:description",
      content: "Discover luxury living in Las Vegas 55+ communities with premium amenities and gated communities.",
    },
  ],
};

export default component$(() => {
  const luxuryGuideContent = useSignal("Loading luxury living guide...");
  const isLoading = useSignal(true);

  useVisibleTask$(async () => {
    try {
      const systemPrompt = `You are a luxury real estate expert specializing in Las Vegas 55+ communities and active adult living. Generate comprehensive guides about luxury amenities, premium lifestyle features, and upscale community living.`;
      
      const userMessage = `Create a comprehensive luxury living guide for Las Vegas 55+ communities. Include:
1. Premium amenities and services available
2. Gated community features and security
3. Luxury lifestyle activities and clubs
4. High-end dining and entertainment options
5. Concierge services and personal assistance
6. Wellness and spa facilities
7. Golf and recreational amenities
8. Transportation and valet services
9. Private event spaces and social venues
10. Investment value and exclusivity factors

Format as JSON with sections: premium_amenities, gated_features, lifestyle_activities, dining_entertainment, concierge_services, wellness_facilities, recreational_amenities, transportation_services, social_venues, and investment_value.`;

      const content = await generateAIContent(systemPrompt, userMessage);
      
      if (content) {
        try {
          const parsedContent = JSON.parse(content);
          luxuryGuideContent.value = `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-gold-50 to-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🏆 Premium Amenities</h2>
                <p class="text-gray-700">${parsedContent.premium_amenities || 'Premium amenities analysis in progress...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🔒 Gated Community Features</h2>
                <p class="text-gray-700">${parsedContent.gated_features || 'Security features being analyzed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🎭 Lifestyle Activities</h2>
                <p class="text-gray-700">${parsedContent.lifestyle_activities || 'Lifestyle activities being catalogued...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🍽️ Dining & Entertainment</h2>
                <p class="text-gray-700">${parsedContent.dining_entertainment || 'Dining options being researched...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🎩 Concierge Services</h2>
                <p class="text-gray-700">${parsedContent.concierge_services || 'Concierge services being detailed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🧘 Wellness Facilities</h2>
                <p class="text-gray-700">${parsedContent.wellness_facilities || 'Wellness amenities being explored...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">⛳ Recreational Amenities</h2>
                <p class="text-gray-700">${parsedContent.recreational_amenities || 'Recreational facilities being mapped...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg border-l-4 border-slate-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🚗 Transportation Services</h2>
                <p class="text-gray-700">${parsedContent.transportation_services || 'Transportation options being reviewed...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg border-l-4 border-rose-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🎪 Social Venues</h2>
                <p class="text-gray-700">${parsedContent.social_venues || 'Social spaces being identified...'}</p>
              </div>
              
              <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-400">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Investment Value</h2>
                <p class="text-gray-700">${parsedContent.investment_value || 'Investment analysis being calculated...'}</p>
              </div>
            </div>
          `;
        } catch (e) {
          console.error("Failed to parse AI content:", e);
          luxuryGuideContent.value = `
            <div class="text-center p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Luxury Living Guide</h2>
              <p class="text-gray-600">AI-powered luxury guide temporarily unavailable. Please check back soon for comprehensive luxury living insights.</p>
            </div>
          `;
        }
      } else {
        luxuryGuideContent.value = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Luxury Living Guide</h2>
            <p class="text-gray-600">AI-powered luxury guide temporarily unavailable. Please check back soon for comprehensive luxury living insights.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Error loading luxury guide:", error);
      luxuryGuideContent.value = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Luxury Living Guide</h2>
          <p class="text-gray-600">Unable to load luxury guide at this time. Please contact Dr. Jan Duffy directly for personalized luxury community information.</p>
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
            Luxury Living Guide
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-yellow-100">
            Discover premium 55+ communities and upscale active adult living
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

      {/* Luxury Guide Content */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          {isLoading.value ? (
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
              <p class="text-gray-600">Generating luxury living guide...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={luxuryGuideContent.value}></div>
          )}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Luxury Living Guide Las Vegas | Premium 55+ Communities",
          "description": "Discover luxury living in Las Vegas 55+ communities with premium amenities and gated communities.",
          "url": "https://heritagestonebridge.com/luxury-living-guide",
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
        title="Luxury Living Guide"
        subtitle="Call 702-789-6561"
        priceMin="600000"
        priceMax="3000000"
      />
    </>
  );
});
