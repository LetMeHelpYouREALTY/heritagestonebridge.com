import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const sitemapStatus = useSignal<string>("Checking...");
  const robotsStatus = useSignal<string>("Checking...");
  const pagesStatus = useSignal<string>("Checking...");
  const imagesStatus = useSignal<string>("Checking...");

  useVisibleTask$(() => {
    // Auto-test sitemap accessibility
    const testSitemap = async (url: string, statusSignal: { value: string }) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          statusSignal.value = `✅ ${url} - Accessible (${response.status})`;
        } else {
          statusSignal.value = `❌ ${url} - Error (${response.status})`;
        }
      } catch (err) {
        statusSignal.value = `❌ ${url} - Network Error: ${err}`;
      }
    };

    // Test all sitemap files
    testSitemap("/sitemap.xml", sitemapStatus);
    testSitemap("/robots.txt", robotsStatus);
    testSitemap("/sitemap-pages.xml", pagesStatus);
    testSitemap("/sitemap-images.xml", imagesStatus);
  });

  return (
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Sitemap Validation & Testing</h1>

          <div class="space-y-6">
            {/* Sitemap Links */}
            <div>
              <h2 class="text-xl font-semibold text-gray-800 mb-4">Sitemap Links Test</h2>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <a
                    href="/sitemap.xml"
                    class="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener"
                  >
                    Main Sitemap (sitemap.xml)
                  </a>
                  <span class="text-sm text-gray-600">{sitemapStatus.value}</span>
                </div>

                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <a
                    href="/robots.txt"
                    class="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener"
                  >
                    Robots.txt
                  </a>
                  <span class="text-sm text-gray-600">{robotsStatus.value}</span>
                </div>

                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <a
                    href="/sitemap-pages.xml"
                    class="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener"
                  >
                    Pages Sitemap (sitemap-pages.xml)
                  </a>
                  <span class="text-sm text-gray-600">{pagesStatus.value}</span>
                </div>

                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <a
                    href="/sitemap-images.xml"
                    class="text-blue-600 hover:text-blue-800 font-medium"
                    target="_blank"
                    rel="noopener"
                  >
                    Images Sitemap (sitemap-images.xml)
                  </a>
                  <span class="text-sm text-gray-600">{imagesStatus.value}</span>
                </div>
              </div>
            </div>

            {/* SEO Information */}
            <div>
              <h2 class="text-xl font-semibold text-gray-800 mb-4">SEO Implementation Status</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 bg-green-50 rounded-lg">
                  <h3 class="font-semibold text-green-800 mb-2">✅ Completed</h3>
                  <ul class="text-sm text-green-700 space-y-1">
                    <li>• Enhanced robots.txt with AI crawler support</li>
                    <li>• Multi-sitemap structure (index, pages, images)</li>
                    <li>• AI-friendly meta tags on homepage</li>
                    <li>• Enhanced JSON-LD structured data</li>
                    <li>• AI crawler detection system</li>
                    <li>• Breadcrumb navigation component</li>
                  </ul>
                </div>

                <div class="p-4 bg-blue-50 rounded-lg">
                  <h3 class="font-semibold text-blue-800 mb-2">📋 Next Steps</h3>
                  <ul class="text-sm text-blue-700 space-y-1">
                    <li>• Submit sitemap to Google Search Console</li>
                    <li>• Submit sitemap to Bing Webmaster Tools</li>
                    <li>• Monitor crawl errors in search console</li>
                    <li>• Validate sitemap XML syntax monthly</li>
                    <li>• Update lastmod dates when content changes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div>
              <h2 class="text-xl font-semibold text-gray-800 mb-4">
                Technical Implementation Details
              </h2>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-800 mb-2">Sitemap Structure:</h3>
                <ul class="text-sm text-gray-700 space-y-1 ml-4">
                  <li>
                    • <strong>sitemap.xml:</strong> Main sitemap index referencing all sub-sitemaps
                  </li>
                  <li>
                    • <strong>sitemap-pages.xml:</strong> All website pages with priorities and
                    change frequencies
                  </li>
                  <li>
                    • <strong>sitemap-images.xml:</strong> Image optimization with titles and
                    captions
                  </li>
                  <li>
                    • <strong>sitemap-properties.xml:</strong> Placeholder for dynamic property
                    listings
                  </li>
                </ul>

                <h3 class="font-semibold text-gray-800 mb-2 mt-4">AI Crawler Support:</h3>
                <ul class="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• ChatGPT-User, OpenAI-SearchBot, ClaudeBot, PerplexityBot</li>
                  <li>• Enhanced meta tags for AI understanding</li>
                  <li>• Structured content summary for AI crawlers</li>
                  <li>• AI-friendly JSON-LD schema markup</li>
                </ul>
              </div>
            </div>

            {/* Validation Tools */}
            <div>
              <h2 class="text-xl font-semibold text-gray-800 mb-4">External Validation Tools</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 border rounded-lg">
                  <h3 class="font-semibold text-gray-800 mb-2">Google Tools</h3>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>
                      •{" "}
                      <a
                        href="https://search.google.com/search-console"
                        class="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        Google Search Console
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
                        class="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        Sitemap Guidelines
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://search.google.com/test/rich-results"
                        class="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        Rich Results Test
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="p-4 border rounded-lg">
                  <h3 class="font-semibold text-gray-800 mb-2">Validation Tools</h3>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>
                      •{" "}
                      <a
                        href="https://www.xml-sitemaps.com/validate-xml-sitemap.html"
                        class="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        XML Sitemap Validator
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://validator.w3.org/"
                        class="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        W3C Markup Validator
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://www.bing.com/webmasters"
                        class="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        Bing Webmaster Tools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Sitemap Validation & Testing - Heritage at Stonebridge",
  meta: [
    {
      name: "description",
      content:
        "Test and validate sitemap files for Heritage at Stonebridge website. Check sitemap accessibility and SEO implementation status.",
    },
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
};
