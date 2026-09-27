import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NapBlock } from "~/components/nap/NapBlock";

export const head: DocumentHead = {
  title: "Sitemap - Heritage at Stonebridge",
  meta: [
    {
      name: "description",
      content: "Complete sitemap for Heritage at Stonebridge website. Find all pages, property listings, and resources.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
};

export default component$(() => {
  return (
    <div class="max-w-4xl mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
      <NapBlock />
      
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 mt-8">
        <h2 class="text-xl font-semibold text-blue-900 mb-2">XML Sitemaps</h2>
        <p class="text-blue-800 mb-4">For search engines and SEO tools:</p>
        <ul class="space-y-2">
          <li>
            <a href="/sitemap.xml" class="text-blue-600 hover:text-blue-800 underline">
              Main Sitemap Index (/sitemap.xml)
            </a>
          </li>
          <li>
            <a href="/sitemap-pages.xml" class="text-blue-600 hover:text-blue-800 underline">
              Pages Sitemap (/sitemap-pages.xml)
            </a>
          </li>
          <li>
            <a href="/sitemap-images.xml" class="text-blue-600 hover:text-blue-800 underline">
              Images Sitemap (/sitemap-images.xml)
            </a>
          </li>
          <li>
            <a href="/sitemap-properties.xml" class="text-blue-600 hover:text-blue-800 underline">
              Properties Sitemap (/sitemap-properties.xml)
            </a>
          </li>
        </ul>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Core Pages</h2>
          <ul class="space-y-2">
            <li><a href="/" class="text-blue-600 hover:text-blue-800">Homepage</a></li>
            <li><a href="/about/" class="text-blue-600 hover:text-blue-800">About</a></li>
            <li><a href="/contact/" class="text-blue-600 hover:text-blue-800">Contact</a></li>
            <li><a href="/real-estate/" class="text-blue-600 hover:text-blue-800">Real Estate</a></li>
            <li><a href="/55-plus-communities/" class="text-blue-600 hover:text-blue-800">55+ Communities</a></li>
            <li><a href="/homes-for-sale-stonebridge-summerlin/" class="text-blue-600 hover:text-blue-800">Stonebridge Homes</a></li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Service Areas</h2>
          <ul class="space-y-2">
            <li><a href="/las-vegas-real-estate/" class="text-blue-600 hover:text-blue-800">Las Vegas Real Estate</a></li>
            <li><a href="/summerlin-homes/" class="text-blue-600 hover:text-blue-800">Summerlin Homes</a></li>
            <li><a href="/henderson-real-estate/" class="text-blue-600 hover:text-blue-800">Henderson Real Estate</a></li>
            <li><a href="/northwest-las-vegas/" class="text-blue-600 hover:text-blue-800">Northwest Las Vegas</a></li>
            <li><a href="/boulder-city-homes/" class="text-blue-600 hover:text-blue-800">Boulder City Homes</a></li>
            <li><a href="/red-rock-canyon-communities/" class="text-blue-600 hover:text-blue-800">Red Rock Canyon Communities</a></li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Property Types</h2>
          <ul class="space-y-2">
            <li><a href="/55-plus-communities-red-rock-canyon/" class="text-blue-600 hover:text-blue-800">55+ Communities Red Rock Canyon</a></li>
            <li><a href="/active-adult-communities/" class="text-blue-600 hover:text-blue-800">Active Adult Communities</a></li>
            <li><a href="/luxury-homes/" class="text-blue-600 hover:text-blue-800">Luxury Homes</a></li>
            <li><a href="/gated-communities/" class="text-blue-600 hover:text-blue-800">Gated Communities</a></li>
            <li><a href="/golf-course-homes/" class="text-blue-600 hover:text-blue-800">Golf Course Homes</a></li>
            <li><a href="/mountain-view-homes/" class="text-blue-600 hover:text-blue-800">Mountain View Homes</a></li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
          <ul class="space-y-2">
            <li><a href="/blog/" class="text-blue-600 hover:text-blue-800">AI-Powered Blog</a></li>
            <li><a href="/market-analysis/" class="text-blue-600 hover:text-blue-800">Market Analysis</a></li>
            <li><a href="/neighborhood-insights/" class="text-blue-600 hover:text-blue-800">Neighborhood Insights</a></li>
            <li><a href="/luxury-living-guide/" class="text-blue-600 hover:text-blue-800">Luxury Living Guide</a></li>
            <li><a href="/community-comparison/" class="text-blue-600 hover:text-blue-800">Community Comparison</a></li>
            <li><a href="/market-reports/" class="text-blue-600 hover:text-blue-800">Market Reports</a></li>
            <li><a href="/community-guides/" class="text-blue-600 hover:text-blue-800">Community Guides</a></li>
            <li><a href="/home-selling-guide/" class="text-blue-600 hover:text-blue-800">Home Selling Guide</a></li>
            <li><a href="/first-time-buyers/" class="text-blue-600 hover:text-blue-800">First Time Buyers</a></li>
            <li><a href="/testimonials/" class="text-blue-600 hover:text-blue-800">Testimonials</a></li>
            <li><a href="/privacy-policy/" class="text-blue-600 hover:text-blue-800">Privacy Policy</a></li>
            <li><a href="/terms-of-service/" class="text-blue-600 hover:text-blue-800">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
});
