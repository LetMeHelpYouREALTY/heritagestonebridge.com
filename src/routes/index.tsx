import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { AgentPortrait } from "~/components/community/AgentPortrait";
import { CommunityGallery } from "~/components/community/CommunityGallery";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { business } from "~/config/business";
import {
  DEFAULT_OG_IMAGE,
  community,
  communityPhoto,
  HERO_IMAGE,
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
    question: "Is Heritage at Stonebridge part of Summerlin?",
    answer:
      "Yes. It sits in the village of Stonebridge, in the Summerlin West part of the Summerlin master plan.",
  },
  {
    question: "How close is Heritage to Red Rock Canyon and Downtown Summerlin?",
    answer:
      "Both are nearby. Red Rock Canyon National Conservation Area, Downtown Summerlin, and the Summerlin Library are the stops buyers ask about first.",
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
export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={homeFaqScript} />
      <section class="relative isolate min-h-[78vh] overflow-hidden bg-hsb-dark text-white">
        <img
          src={HERO_IMAGE.tablet}
          srcset={HERO_IMAGE.srcset}
          sizes="100vw"
          alt={communityPhoto("clubhouse-exterior").alt}
          width={1024}
          height={576}
          fetchPriority="high"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-hsb-dark/80 via-hsb-dark/55 to-hsb-dark/25" />
        <a
          href={business.telephoneHref}
          class="absolute right-4 top-4 z-20 inline-flex min-h-11 items-center gap-2 rounded-full bg-hsb-primary px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-hsb-primary-dark"
        >
          <svg class="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call {business.telephoneDisplay}
        </a>
        <div class="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 py-16">
          <AgentPortrait size="lg" />
          <p class="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-hsb-accent-light">
            {business.name}
          </p>
          <h1 class="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
            Heritage at Stonebridge
          </h1>
          <p class="mt-5 max-w-2xl text-xl text-white md:text-2xl">
            421 guard-gated 55+ homes in Summerlin West. Clubhouse at 930 Silverfir Court.
          </p>
          <p class="mt-3 text-sm uppercase tracking-[0.14em] text-hsb-sand">
            {business.category} · Clark County, Nevada
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/buy-heritage-at-stonebridge"
              class="rounded-full bg-white px-8 py-4 text-center text-lg font-semibold text-hsb-dark hover:bg-hsb-sand"
            >
              Buy in Heritage
            </a>
            <a
              href="/sell-heritage-at-stonebridge"
              class="rounded-full border border-white px-8 py-4 text-center text-lg font-semibold text-white hover:bg-white hover:text-hsb-dark"
            >
              Sell in Heritage
            </a>
            <a
              href={business.telephoneHref}
              class="rounded-full bg-hsb-primary px-8 py-4 text-center text-lg font-semibold text-white hover:bg-hsb-primary-dark"
            >
              Call {business.telephoneDisplay}
            </a>
          </div>
        </div>
      </section>
      <OfficeListingsBelowHero />

      <section class="bg-hsb-cream py-16">
        <div class="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent">
              About the business
            </p>
            <h2 class="mt-3 font-display text-4xl text-hsb-dark">{business.name}</h2>
            <p class="mt-6 text-lg leading-relaxed text-hsb-text">{business.description}</p>
          </div>
          <aside class="rounded-3xl bg-white p-8 shadow-sm">
            <AgentPortrait size="lg" />
            <p class="mt-6 text-sm uppercase tracking-[0.14em] text-hsb-muted">{business.category}</p>
            <p class="mt-1 text-sm text-hsb-muted">{business.additionalCategory}</p>
            <p class="mt-6 font-display text-2xl text-hsb-dark">{business.addressDisplay}</p>
            <p class="mt-2 text-hsb-text">Service area: Las Vegas, NV 89138 and Summerlin West</p>
            <p class="mt-4 text-hsb-text">{business.hoursDisplay}</p>
            <p class="mt-6 text-sm text-hsb-muted">
              Wheelchair accessible parking lot. Wheelchair accessible entrance.
            </p>
            <div class="mt-6 flex flex-col gap-3">
              <a
                href={business.telephoneHref}
                class="rounded-full bg-hsb-primary px-6 py-3 text-center font-semibold text-white hover:bg-hsb-primary-dark"
              >
                Call {business.telephoneDisplay}
              </a>
              <a
                href={business.smsHref}
                class="rounded-full border border-hsb-border px-6 py-3 text-center font-semibold text-hsb-primary hover:bg-hsb-sand"
              >
                Text {business.telephoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="mx-auto max-w-7xl px-4">
          <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent">
                Inside the gate
              </p>
              <h2 class="mt-2 font-display text-4xl text-hsb-dark">The clubhouse and grounds</h2>
            </div>
            <div class="flex flex-wrap gap-4 text-sm font-semibold">
              <a class="text-hsb-primary underline" href="/amenities/">
                Clubhouse amenities
              </a>
              <a class="text-hsb-primary underline" href="/nearby/">
                Restaurants, parks, and parking nearby
              </a>
            </div>
          </div>
          <CommunityGallery />
        </div>
      </section>

      {/* Why Choose Heritage Section */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl text-hsb-dark mb-4">Why Choose Heritage at Stonebridge?</h2>
            <p class="text-lg text-hsb-text mb-8">421 Lennar homes, a staffed gate, and a clubhouse at 930 Silverfir Court.</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Three Home Collections</h3>
              <p class="text-hsb-muted">Cromwell (1,232-1,422 sq ft), Stirling (1,747-2,236 sq ft), and Evander (2,515-2,873 sq ft)</p>
            </div>
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Lennar Everything's Included</h3>
              <p class="text-hsb-muted">Popular features and upgrades included at no extra cost</p>
            </div>
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Red Rock Canyon Views</h3>
              <p class="text-hsb-muted">Stunning mountain backdrop with easy access to outdoor recreation</p>
            </div>
            <div class="text-center">
              <h3 class="font-display text-xl text-hsb-dark mb-3">Today's prices</h3>
              <p class="text-hsb-muted">List prices change with the MLS. Call (702) 789-6561 for the homes on the market now.</p>
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
              class="bg-hsb-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-hsb-primary-dark transition-colors inline-block text-center"
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
      content: "1920",
    },
    {
      property: "og:image:height",
      content: "1080",
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
      content: business.name,
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
      content: `${business.geo.latitude};${business.geo.longitude}`,
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
    {
      rel: "preload",
      as: "image",
      href: HERO_IMAGE.tablet,
      imagesrcset: HERO_IMAGE.srcset,
      imagesizes: "100vw",
    },
  ],
};
