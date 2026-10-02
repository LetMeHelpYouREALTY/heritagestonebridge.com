import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";

export const Footer = component$(() => {
  return (
    <footer class="bg-hsb-dark text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 class="text-xl font-bold mb-4">{business.name}</h3>
            <p class="text-gray-300 mb-4">
              Your local guide to Heritage at Stonebridge — Lennar's guard-gated 55+ community in
              Summerlin West (89138).
            </p>
            <div class="space-y-2">
              <p class="flex items-center">
                <span class="mr-2">📞</span>
                <a href={business.telephoneHref} class="hover:text-hsb-accent-light">
                  {business.telephoneDisplay}
                </a>
              </p>
              <p class="flex items-center">
                <span class="mr-2">💬</span>
                <a href={business.smsHref} class="hover:text-hsb-accent-light">
                  Text {business.telephoneDisplay}
                </a>
              </p>
              <p class="flex items-center">
                <span class="mr-2">✉️</span>
                <a href={`mailto:${business.email}`} class="hover:text-hsb-accent-light">
                  {business.email}
                </a>
              </p>
              <p class="flex items-center">
                <span class="mr-2">📍</span>
                {business.addressDisplay}
              </p>
              <p class="flex items-start">
                <span class="mr-2">🕒</span>
                <span>{business.hoursDisplay}</span>
              </p>
              <p class="flex flex-wrap gap-x-3 gap-y-1">
                <a
                  href={business.mapsUrl}
                  class="hover:text-hsb-accent-light underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
                <a
                  href={business.reviewsUrl}
                  class="hover:text-hsb-accent-light underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Google Reviews
                </a>
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 class="text-xl font-bold mb-4">Service Areas</h3>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a
                  href="/las-vegas-real-estate"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service-area"
                  data-topic="las-vegas-real-estate"
                  rel="related"
                >
                  Las Vegas Real Estate
                </a>
              </li>
              <li>
                <a
                  href="/summerlin-homes"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service-area"
                  data-topic="summerlin-homes"
                  rel="related"
                >
                  Summerlin Homes
                </a>
              </li>
              <li>
                <a
                  href="/red-rock-canyon-communities"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service-area"
                  data-topic="red-rock-canyon"
                  rel="related"
                >
                  Red Rock Canyon Communities
                </a>
              </li>
              <li>
                <a
                  href="/henderson-real-estate"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service-area"
                  data-topic="henderson-real-estate"
                  rel="related"
                >
                  Henderson Real Estate
                </a>
              </li>
              <li>
                <a
                  href="/northwest-las-vegas"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service-area"
                  data-topic="northwest-las-vegas"
                  rel="related"
                >
                  Northwest Las Vegas
                </a>
              </li>
              <li>
                <a
                  href="/boulder-city-homes"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service-area"
                  data-topic="boulder-city-homes"
                  rel="related"
                >
                  Boulder City Homes
                </a>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 class="text-xl font-bold mb-4">Property Types</h3>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a
                  href="/55-plus-communities"
                  class="hover:text-hsb-accent-light"
                  data-content-type="property-type"
                  data-topic="55-plus-communities"
                  rel="related"
                >
                  55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/active-adult-communities"
                  class="hover:text-hsb-accent-light"
                  data-content-type="property-type"
                  data-topic="active-adult-communities"
                  rel="related"
                >
                  Active Adult Communities
                </a>
              </li>
              <li>
                <a
                  href="/luxury-homes"
                  class="hover:text-hsb-accent-light"
                  data-content-type="property-type"
                  data-topic="luxury-homes"
                  rel="related"
                >
                  Luxury Homes
                </a>
              </li>
              <li>
                <a
                  href="/gated-communities"
                  class="hover:text-hsb-accent-light"
                  data-content-type="property-type"
                  data-topic="gated-communities"
                  rel="related"
                >
                  Gated Communities
                </a>
              </li>
              <li>
                <a
                  href="/golf-course-homes"
                  class="hover:text-hsb-accent-light"
                  data-content-type="property-type"
                  data-topic="golf-course-homes"
                  rel="related"
                >
                  Golf Course Homes
                </a>
              </li>
              <li>
                <a
                  href="/mountain-view-homes"
                  class="hover:text-hsb-accent-light"
                  data-content-type="property-type"
                  data-topic="mountain-view-homes"
                  rel="related"
                >
                  Mountain View Homes
                </a>
              </li>
            </ul>
          </div>

          {/* 55+ Community Services */}
          <div>
            <h3 class="text-xl font-bold mb-4">55+ Community Services</h3>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a
                  href="/affordable-55-plus-communities-las-vegas"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service"
                  data-topic="affordable-55-plus"
                  rel="related"
                >
                  Affordable 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/new-55-plus-communities-las-vegas"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service"
                  data-topic="new-55-plus"
                  rel="related"
                >
                  New 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/best-55-plus-communities-las-vegas"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service"
                  data-topic="best-55-plus"
                  rel="related"
                >
                  Best 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/luxury-retirement-communities-las-vegas"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service"
                  data-topic="luxury-retirement"
                  rel="related"
                >
                  Luxury Retirement Communities
                </a>
              </li>
              <li>
                <a
                  href="/55-plus-communities-las-vegas-for-sale"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service"
                  data-topic="55-plus-for-sale"
                  rel="related"
                >
                  55+ Communities for Sale
                </a>
              </li>
              <li>
                <a
                  href="/55-and-over-communities-las-vegas-for-rent"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service"
                  data-topic="55-plus-for-rent"
                  rel="related"
                >
                  55+ Communities for Rent
                </a>
              </li>
              <li>
                <a
                  href="/55-plus-communities-las-vegas"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service"
                  data-topic="55-plus-general"
                  rel="related"
                >
                  55+ Communities Las Vegas
                </a>
              </li>
              <li>
                <a
                  href="/55-and-over-communities-summerlin-las-vegas"
                  class="hover:text-hsb-accent-light"
                  data-content-type="service"
                  data-topic="55-plus-summerlin"
                  rel="related"
                >
                  55+ Communities Summerlin
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 class="text-xl font-bold mb-4">Resources</h3>
            <ul class="space-y-2 text-gray-300 mb-6">
              <li>
                <a href="/questions" class="hover:text-hsb-accent-light">
                  Questions and Answers
                </a>
              </li>
              <li>
                <a href="/hoa-fees" class="hover:text-hsb-accent-light">
                  HOA Fees
                </a>
              </li>
              <li>
                <a href="/floor-plans" class="hover:text-hsb-accent-light">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="/amenities" class="hover:text-hsb-accent-light">
                  Clubhouse and Amenities
                </a>
              </li>
              <li>
                <a href="/about" class="hover:text-hsb-accent-light">
                  About
                </a>
              </li>
              <li>
                <a href="/buy-heritage-at-stonebridge" class="hover:text-hsb-accent-light">
                  Buy in Heritage at Stonebridge
                </a>
              </li>
              <li>
                <a href="/sell-heritage-at-stonebridge" class="hover:text-hsb-accent-light">
                  Sell in Heritage at Stonebridge
                </a>
              </li>
              <li>
                <a href="/new-listing-heritage-at-stonebridge" class="hover:text-hsb-accent-light">
                  New Listing
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:text-hsb-accent-light">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" class="hover:text-hsb-accent-light">
                  Real Estate Blog
                </a>
              </li>
              <li>
                <a href="/market-analysis" class="hover:text-hsb-accent-light">
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="/neighborhood-insights" class="hover:text-hsb-accent-light">
                  Neighborhood Insights
                </a>
              </li>
              <li>
                <a href="/luxury-living-guide" class="hover:text-hsb-accent-light">
                  Luxury Living Guide
                </a>
              </li>
              <li>
                <a href="/community-comparison" class="hover:text-hsb-accent-light">
                  Community Comparison
                </a>
              </li>
              <li>
                <a href="/market-reports" class="hover:text-hsb-accent-light">
                  Las Vegas Market Reports
                </a>
              </li>
              <li>
                <a href="/community-guides" class="hover:text-hsb-accent-light">
                  Community Guides
                </a>
              </li>
              <li>
                <a href="/home-selling-guide" class="hover:text-hsb-accent-light">
                  Home Selling Guide
                </a>
              </li>
              <li>
                <a href="/first-time-buyers" class="hover:text-hsb-accent-light">
                  First Time Buyers
                </a>
              </li>
              <li>
                <a href="/testimonials" class="hover:text-hsb-accent-light">
                  Client Testimonials
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div class="space-y-2">
              <h4 class="font-semibold">Follow Dr. Jan Duffy</h4>
              <div class="flex space-x-4">
                <a
                  href="https://www.facebook.com/DrJanDuffyRealEstate"
                  class="text-gray-300 hover:text-hsb-accent-light"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://www.linkedin.com/in/drjanduffy"
                  class="text-gray-300 hover:text-hsb-accent-light"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="https://www.instagram.com/drjanduffylasvegas"
                  class="text-gray-300 hover:text-hsb-accent-light"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div class="border-t border-gray-700 mt-8 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-sm mb-4 md:mb-0">
              <p>
                &copy; 2026 {business.name}, Nevada Real Estate License #{business.license}
              </p>
              <p>
                {business.broker} · Serving Las Vegas, NV 89138 and Summerlin West
              </p>
            </div>
            <div class="flex space-x-6 text-sm">
              <a href="/privacy-policy" class="text-gray-400 hover:text-hsb-accent-light">
                Privacy Policy
              </a>
              <a href="/terms-of-service" class="text-gray-400 hover:text-hsb-accent-light">
                Terms of Service
              </a>
              <a href="/sitemap" class="text-gray-400 hover:text-hsb-accent-light">
                Sitemap
              </a>
            </div>
          </div>

          {/* SEO Keywords Footer */}
          <div class="mt-6 text-xs text-gray-500 leading-relaxed">
            <p>
              Dr. Jan Duffy is a Las Vegas real estate expert specializing in 55+ communities,
              active adult living, luxury homes, and gated communities in Summerlin, Red Rock
              Canyon, Henderson, and Northwest Las Vegas. Serving clients in Del Webb communities,
              Sun City, Siena, The Ridges, and all premier Nevada retirement communities. 
              Features AI-powered market analysis, neighborhood insights, luxury living guides, 
              and community comparisons for enhanced real estate intelligence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});
