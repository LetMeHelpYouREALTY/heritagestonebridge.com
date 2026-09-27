import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutHeroWidget } from "~/components/real-estate/RealScoutHeroWidget";
import { business } from "~/config/business";
import {
  DEFAULT_OG_IMAGE,
  breadcrumbJsonLd,
  community,
  faqJsonLd,
} from "~/config/community";

const homeFaqs = [
  {
    question: "Where is Heritage at Stonebridge?",
    answer:
      "Heritage at Stonebridge is a guard-gated 55+ Lennar community in Summerlin West, Las Vegas, ZIP 89138. Dr. Jan Duffy helps buyers and sellers with tours and MLS listings tied to this neighborhood.",
  },
  {
    question: "How many homes are in the community?",
    answer: `The community site lists ${community.homes} single-story Lennar homes with a staffed gate and an on-site clubhouse.`,
  },
  {
    question: "What is life like inside the gates?",
    answer:
      "Residents use a staffed gatehouse, not a shared code. The clubhouse area includes pools, fitness, pickleball, bocce, and walking paths within the neighborhood.",
  },
  {
    question: "How do I start with Dr. Jan Duffy?",
    answer: `Call or text ${business.telephoneDisplay}. Dr. Jan Duffy (Nevada license ${business.license}) works with buyers and sellers inside Heritage at Stonebridge. Office hours: ${business.hoursDisplay}.`,
  },
] as const;

const homeFaqScript = faqJsonLd(homeFaqs);
const homeBreadcrumbScript = breadcrumbJsonLd([
  { name: "Home", item: "https://heritagestonebridge.com/" },
]);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={homeFaqScript} />
      <script type="application/ld+json" dangerouslySetInnerHTML={homeBreadcrumbScript} />
      {/* Hero Section */}
      <section class="relative bg-hsb-cream py-16 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div class="text-center mb-8">
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent mb-4">
              Summerlin West · 89138
            </p>
            <h1 class="text-4xl md:text-6xl font-display text-hsb-dark mb-4">
              Heritage at Stonebridge
            </h1>
            <p class="text-xl md:text-2xl text-hsb-text max-w-3xl mx-auto mb-8 font-medium">
              421 guard-gated 55+ homes in Summerlin West
            </p>
            <p class="text-lg text-hsb-text max-w-4xl mx-auto mb-8">
              Lennar built the houses. A staffed gate checks visitors. The clubhouse has pools, a fitness center, pickleball, and bocce. Dr. Jan Duffy helps buyers and sellers inside this community. Call (702) 789-6561.
            </p>
            <div class="text-center mb-8">
              <p class="text-base text-gray-500 max-w-3xl mx-auto">
                <strong>Popular Searches:</strong> Heritage at Stonebridge reviews • Homes for sale in Heritage at Stonebridge • 
                New Construction 55+ communities in Summerlin, NV • Stonebridge Summerlin • Stonebridge Las Vegas • 
                Heritage Las Vegas NV • Heritage 55+ community • Lennar Summerlin
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/buy-heritage-at-stonebridge"
                class="bg-hsb-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-hsb-primary-dark transition-colors inline-block text-center text-lg"
              >
                Buy in Heritage
              </a>
              <a
                href="/sell-heritage-at-stonebridge"
                class="border-2 border-hsb-primary text-hsb-primary px-8 py-4 rounded-full font-semibold hover:bg-hsb-primary hover:text-white transition-colors inline-block text-center text-lg"
              >
                Sell in Heritage
              </a>
              <a
                href="/new-listing-heritage-at-stonebridge"
                class="bg-hsb-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-hsb-accent-dark transition-colors inline-block text-center text-lg"
              >
                New listing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities Section */}
      <section class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Luxury Amenities & Lifestyle</h2>
            <p class="text-lg text-gray-600 mb-8">Experience the finest in 55+ active adult living with resort-style amenities</p>
            <div class="flex flex-wrap justify-center gap-4 mb-8">
              <a href="/55-plus-communities/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Explore 55+ Communities
              </a>
              <a href="/summerlin-homes/" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Summerlin Homes
              </a>
              <a href="/real-estate/" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Real Estate Tools
              </a>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">8,000 Sq Ft Clubhouse</h3>
              <p class="text-gray-600">State-of-the-art facility with fitness center, multi-purpose rooms, and social spaces</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">Resort-Style Pool & Spa</h3>
              <p class="text-gray-600">Outdoor pool, heated lap pool, and spa for relaxation and water aerobics</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-bold mb-2">Pickleball & Bocce Courts</h3>
              <p class="text-gray-600">Multiple courts for friendly games and organized tournaments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Heritage Section */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Heritage at Stonebridge?</h2>
            <p class="text-lg text-gray-600 mb-8">Discover what makes our community the premier choice for 55+ living in Las Vegas</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Three Home Collections</h3>
              <p class="text-gray-600">Cromwell (1,232-1,422 sq ft), Stirling (1,747-2,236 sq ft), and Evander (2,515-2,873 sq ft)</p>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Lennar Everything's Included</h3>
              <p class="text-gray-600">Popular features and upgrades included at no extra cost</p>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon Views</h3>
              <p class="text-gray-600">Stunning mountain backdrop with easy access to outdoor recreation</p>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Today's prices</h3>
              <p class="text-gray-600">List prices change with the MLS. Call (702) 789-6561 for the homes on the market now.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-hsb-sand py-16">
        <div class="max-w-5xl mx-auto px-4">
          <h2 class="text-3xl font-display text-hsb-dark text-center mb-4">
            Heritage at Stonebridge questions
          </h2>
          <p class="text-center text-hsb-text mb-10 max-w-2xl mx-auto">
            Straight answers about buying, selling, and living in this Summerlin West 55+ community.
          </p>
          <div class="space-y-6">
            {homeFaqs.map((item) => (
              <article key={item.question} class="rounded-2xl bg-white p-6 shadow-sm">
                <h3 class="font-display text-2xl text-hsb-dark">{item.question}</h3>
                <p class="mt-2 text-hsb-text">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="bg-hsb-dark py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-display text-white mb-4">Tour Heritage at Stonebridge</h2>
          <p class="text-lg text-hsb-sand mb-8 max-w-2xl mx-auto">
            421 homes. Staffed gate. Clubhouse at 930 Silverfir Court. Call (702) 789-6561.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/buy-heritage-at-stonebridge"
              class="bg-hsb-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-hsb-accent-dark transition-colors inline-block text-center"
            >
              Buy a home
            </a>
            <a
              href="tel:+17027896561"
              class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-hsb-dark transition-colors inline-block text-center"
            >
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Hero Widget */}
              <RealScoutHeroWidget
                agentEncodedId="QWdlbnQtMjI1MDUw"
                title="Exclusive Heritage at Stonebridge Listings"
                subtitle="Schedule Your Private Tour Today"
                priceMin="600000"
                priceMax="900000"
              />

              {/* RealScout Sticky Widget */}
              <RealScoutStickyWidget
                agentEncodedId="QWdlbnQtMjI1MDUw"
                title="Featured Listings"
                subtitle="Call (702) 789-6561"
                priceMin="600000"
                priceMax="900000"
              />
    </>
  );
});

export const head: DocumentHead = {
  title: "Heritage at Stonebridge | 55+ Summerlin, NV",
  meta: [
    {
      name: "description",
      content:
        "421 guard-gated Lennar homes in Summerlin West (89138). Clubhouse pools, fitness, and pickleball. Dr. Jan Duffy, NV license S.0197614.LLC. Call (702) 789-6561.",
    },
    // Enhanced Meta Tags for AI & Search Engine Understanding
    {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "bingbot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    // Canonical URL
    {
      name: "canonical",
      content: "https://heritagestonebridge.com/",
    },
    // AI-Friendly Content Tags
    {
      name: "content-type",
      content: "real-estate-community",
    },
    {
      name: "audience",
      content: "adults-55-plus",
    },
    {
      name: "location",
      content: "Las Vegas, Nevada, USA",
    },
    {
      name: "community-type",
      content: "active-adult-gated-community",
    },
    // Open Graph for social sharing
    {
      property: "og:title",
      content: "Heritage at Stonebridge | 55+ Summerlin, NV",
    },
    {
      property: "og:description",
      content:
        "421 guard-gated Lennar homes in Summerlin West (89138). Clubhouse pools, fitness, and pickleball. Dr. Jan Duffy. Call (702) 789-6561.",
    },
    {
      property: "og:image",
      content: DEFAULT_OG_IMAGE,
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com",
    },
    {
      property: "og:site_name",
      content: "Heritage at Stonebridge",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    // Local SEO
    {
      name: "geo.region",
      content: "US-NV",
    },
    {
      name: "geo.placename",
      content: "Las Vegas, Nevada",
    },
    {
      name: "geo.position",
      content: "36.1699;-115.1398",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@heritage_stonebridge",
    },
    {
      name: "twitter:image",
      content: DEFAULT_OG_IMAGE,
    },
    {
      name: "twitter:title",
      content: "Heritage at Stonebridge | 55+ Summerlin, NV",
    },
    {
      name: "twitter:description",
      content:
        "421 guard-gated Lennar homes in Summerlin West (89138). Clubhouse pools, fitness, and pickleball. Dr. Jan Duffy. Call (702) 789-6561.",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com",
    },
  ],
};
