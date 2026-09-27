import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const head: DocumentHead = {
  title: "Las Vegas Real Estate Market Analysis 2025 | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Comprehensive Las Vegas real estate market analysis for 2025. Expert insights on 55+ communities, luxury homes, and investment opportunities by Dr. Jan Duffy.",
    },
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/market-analysis",
    },
    {
      name: "content-type",
      content: "market-analysis",
    },
    {
      name: "audience",
      content: "real-estate-investors, luxury-home-buyers, 55-plus-communities",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      property: "og:title",
      content: "Las Vegas Real Estate Market Analysis 2025 | Dr. Jan Duffy",
    },
    {
      property: "og:description",
      content: "Comprehensive Las Vegas real estate market analysis for 2025 with expert insights on 55+ communities and luxury homes.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/market-analysis",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Las Vegas Real Estate Market Analysis 2025 | Dr. Jan Duffy",
    },
    {
      name: "twitter:description",
      content: "Comprehensive Las Vegas real estate market analysis for 2025 with expert insights on 55+ communities and luxury homes.",
    },
  ],
};

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Las Vegas Real Estate Market Analysis 2025
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive market insights, trends, and investment opportunities across Las Vegas Valley's premier communities
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Get Personal Market Report
            </a>
            <a href="tel:702-789-6561" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">2025 Market Overview</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas real estate continues to show strong fundamentals with particular strength in 55+ communities and luxury segments
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div class="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <div class="text-3xl font-bold text-green-600 mb-2">+8.5%</div>
              <div class="text-sm text-gray-600 mb-2">Average Price Growth</div>
              <div class="text-xs text-gray-500">55+ Communities</div>
            </div>
            
            <div class="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <div class="text-3xl font-bold text-blue-600 mb-2">22 Days</div>
              <div class="text-sm text-gray-600 mb-2">Average Days on Market</div>
              <div class="text-xs text-gray-500">Luxury Homes</div>
            </div>
            
            <div class="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <div class="text-3xl font-bold text-purple-600 mb-2">$650K</div>
              <div class="text-sm text-gray-600 mb-2">Median Home Price</div>
              <div class="text-xs text-gray-500">Summerlin Area</div>
            </div>
            
            <div class="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
              <div class="text-3xl font-bold text-yellow-600 mb-2">94%</div>
              <div class="text-sm text-gray-600 mb-2">List-to-Sale Ratio</div>
              <div class="text-xs text-gray-500">Active Adult Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Analysis */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Community Market Analysis</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed analysis of Las Vegas's most sought-after communities and their market performance
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-green-600 text-xl">🏘️</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Summerlin</h3>
                  <div class="text-sm text-gray-500">Master-Planned Community</div>
                </div>
              </div>
              <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                  <span class="text-gray-600">Median Price:</span>
                  <span class="font-semibold">$650,000</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Price Growth:</span>
                  <span class="font-semibold text-green-600">+12.3%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Inventory:</span>
                  <span class="font-semibold">Low (2.1 months)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Market Status:</span>
                  <span class="font-semibold text-green-600">Seller's Market</span>
                </div>
              </div>
              <div class="text-sm text-gray-600">
                <strong>Key Insight:</strong> Summerlin continues to lead in luxury home appreciation, with Heritage at Stonebridge showing exceptional demand for 55+ living.
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-blue-600 text-xl">🏙️</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Henderson</h3>
                  <div class="text-sm text-gray-500">Nevada's second-largest city</div>
                </div>
              </div>
              <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                  <span class="text-gray-600">Median Price:</span>
                  <span class="font-semibold">$485,000</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Price Growth:</span>
                  <span class="font-semibold text-green-600">+9.8%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Inventory:</span>
                  <span class="font-semibold">Moderate (3.2 months)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Market Status:</span>
                  <span class="font-semibold text-blue-600">Balanced</span>
                </div>
              </div>
              <div class="text-sm text-gray-600">
                <strong>Key Insight:</strong> Henderson buyers are comparing parks, Lake Mead access, and Sun City Anthem's 55+ inventory.
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span class="text-purple-600 text-xl">🏔️</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Red Rock Canyon</h3>
                  <div class="text-sm text-gray-500">Mountain View Luxury</div>
                </div>
              </div>
              <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                  <span class="text-gray-600">Median Price:</span>
                  <span class="font-semibold">$850,000</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Price Growth:</span>
                  <span class="font-semibold text-green-600">+15.2%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Inventory:</span>
                  <span class="font-semibold">Very Low (1.8 months)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Market Status:</span>
                  <span class="font-semibold text-green-600">Strong Seller's Market</span>
                </div>
              </div>
              <div class="text-sm text-gray-600">
                <strong>Key Insight:</strong> Mountain view properties continue to command premium prices, with luxury buyers prioritizing outdoor recreation access.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities Analysis */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">55+ Communities Market Analysis</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized analysis of active adult communities and their unique market dynamics
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Market Drivers</h3>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Baby Boomer retirement wave continues
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Low maintenance lifestyle demand
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Resort-style amenities expectations
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Healthcare access considerations
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Social activity requirements
                </li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Top Performing Communities</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Heritage at Stonebridge</span>
                  <span class="text-green-600 font-bold">+18.5%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Sun City Summerlin</span>
                  <span class="text-green-600 font-bold">+14.2%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Sun City Anthem</span>
                  <span class="text-green-600 font-bold">+12.8%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Siena</span>
                  <span class="text-green-600 font-bold">+11.5%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">The Ridges</span>
                  <span class="text-green-600 font-bold">+16.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic investment insights for Las Vegas real estate in 2025
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="text-center mb-4">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-green-600 text-2xl">📈</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Growth Markets</h3>
              </div>
              <ul class="space-y-2 text-gray-600">
                <li>• Northwest Las Vegas new construction</li>
                <li>• Henderson 55+ communities</li>
                <li>• Red Rock Canyon luxury properties</li>
                <li>• 55+ community developments</li>
              </ul>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="text-center mb-4">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-blue-600 text-2xl">💰</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Value Opportunities</h3>
              </div>
              <ul class="space-y-2 text-gray-600">
                <li>• Boulder City historic properties</li>
                <li>• Established Summerlin neighborhoods</li>
                <li>• Golf course communities</li>
                <li>• Mountain view properties</li>
              </ul>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="text-center mb-4">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-purple-600 text-2xl">🎯</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Rental Potential</h3>
              </div>
              <ul class="space-y-2 text-gray-600">
                <li>• Short-term rental markets</li>
                <li>• Corporate housing demand</li>
                <li>• Retirement community rentals</li>
                <li>• Luxury vacation rentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Market Predictions */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">AI-Powered Market Predictions</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced AI analysis of market trends and future opportunities
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">2025 Predictions</h3>
                <div class="space-y-4">
                  <div class="bg-white p-4 rounded-lg">
                    <div class="font-semibold text-gray-900 mb-2">55+ Community Demand</div>
                    <div class="text-sm text-gray-600">Expected to increase 15-20% as more Baby Boomers reach retirement age</div>
                  </div>
                  <div class="bg-white p-4 rounded-lg">
                    <div class="font-semibold text-gray-900 mb-2">Luxury Market Growth</div>
                    <div class="text-sm text-gray-600">Summerlin and Red Rock Canyon areas projected to see 10-12% appreciation</div>
                  </div>
                  <div class="bg-white p-4 rounded-lg">
                    <div class="font-semibold text-gray-900 mb-2">New Construction</div>
                    <div class="text-sm text-gray-600">Northwest Las Vegas expected to lead in new development activity</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Get Your Personal Analysis</h3>
                <p class="text-gray-700 mb-6">
                  Our AI analyzes your specific criteria and provides personalized market insights and recommendations.
                </p>
                <div class="space-y-3">
                  <button class="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    Get AI Market Analysis
                  </button>
                  <button class="w-full bg-white text-purple-600 py-3 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
                    Investment Opportunity Report
                  </button>
                  <button class="w-full bg-white text-purple-600 py-3 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
                    Community Comparison Tool
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Make Informed Real Estate Decisions?</h2>
          <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy provide you with personalized market analysis and expert guidance for your Las Vegas real estate investment.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" class="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Get Personal Market Report
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
        title="Market Analysis Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="3000000"
      />
    </>
  );
});
