/**
 * Topic pages cloned from Heritage at Stonebridge facts (Lennar / Summerlin /
 * 55places / Review-Journal / live MLS HOA displays). Headings follow an
 * answer-first H1 → question H2 → fact H3 pattern for SEO, GEO, and AEO.
 * Prices and HOA amounts are labeled as observed — never guaranteed.
 */
import type { HeritagePageContent } from "./types";
import {
  HERITAGE_COLLECTIONS,
  HERITAGE_COMMUNITY,
} from "./data";
import { generateItemListSchema } from "@/lib/schema";
import { heritageCommunityId } from "@/lib/entity-ids";
import { SITE_CONTACT } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";

const baseTitle = (page: string) =>
  `${page} | Heritage at Stonebridge Summerlin | Dr. Jan Duffy`;

function crumbs(...items: { name: string; url: string }[]) {
  return [{ name: "Home", url: "/" }, ...items];
}

const RELATED_LINKS = [
  { href: "/community", label: "Community Guide" },
  { href: "/amenities", label: "Amenities Hub" },
  { href: "/floor-plans", label: "All Floor Plans" },
  { href: "/hoa-fees", label: "HOA & Fees" },
  { href: "/homes-for-sale", label: "Homes for Sale" },
  { href: "/contact", label: "Schedule a Tour" },
];

function collectionGrid(slug: (typeof HERITAGE_COLLECTIONS)[number]["slug"]) {
  const collection = HERITAGE_COLLECTIONS.find((c) => c.slug === slug);
  if (!collection) {
    throw new Error(`Unknown Heritage collection: ${slug}`);
  }
  return {
    type: "grid" as const,
    heading: `${collection.name} Floor Plans: ${collection.plans.map((p) => p.name).join(", ")}`,
    cards: collection.plans.map((plan) => ({
      title: plan.name,
      items: [
        `${plan.sqFt} sq. ft.`,
        `${plan.beds} bedrooms`,
        `${plan.baths} bathrooms`,
        plan.garage,
      ],
    })),
  };
}

function collectionItemList(slug: (typeof HERITAGE_COLLECTIONS)[number]["slug"]) {
  const collection = HERITAGE_COLLECTIONS.find((c) => c.slug === slug);
  if (!collection) {
    throw new Error(`Unknown Heritage collection: ${slug}`);
  }
  return generateItemListSchema({
    name: `${collection.name} Collection floor plans at Heritage at Stonebridge`,
    description: collection.summary,
    items: collection.plans.map((plan) => ({
      name: `${plan.name} — ${collection.name} Collection`,
      description: `${plan.sqFt} sq. ft., ${plan.beds} bed, ${plan.baths} bath, ${plan.garage}. Single-story 55+ home in Summerlin West 89138.`,
      url: collection.href,
    })),
  });
}

export const clubhousePage: HeritagePageContent = {
  slug: "/clubhouse",
  metadata: {
    title: baseTitle("8,000 Sq. Ft. Clubhouse"),
    description:
      "Heritage at Stonebridge clubhouse in Summerlin West: lounge, fitness, showcase kitchen, terrace, resort pool, spa, and heated lap pool. Tour with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs(
    { name: "Amenities", url: "/amenities" },
    { name: "Clubhouse", url: "/clubhouse" },
  ),
  badge: "Stonebridge Village 55+",
  h1: "Heritage at Stonebridge Clubhouse in Summerlin West",
  subtitle:
    "Residents gather in a reported 8,000 sq. ft. clubhouse with lounge, fitness, and aquatics — lock-and-leave living in zip 89138.",
  lastUpdated: "August 2026",
  heroImage: "/images/community/heritage-clubhouse.webp",
  heroImageAlt:
    "Heritage at Stonebridge 8,000 sq. ft. clubhouse and resort pool in Summerlin West Las Vegas 89138 with Red Rock Canyon beyond",
  extraSchemas: [
    {
      "@context": "https://schema.org",
      "@type": "CivicStructure",
      name: "Heritage at Stonebridge Clubhouse",
      description:
        "Reported 8,000 sq. ft. 55+ clubhouse with lounge, fitness center, showcase kitchen, terrace, resort pool, spa, and heated outdoor lap pool in Summerlin West.",
      url: `${getSiteUrl()}/clubhouse`,
      containedInPlace: { "@id": heritageCommunityId() },
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONTACT.address.streetAddress,
        addressLocality: SITE_CONTACT.address.addressLocality,
        addressRegion: SITE_CONTACT.address.addressRegion,
        postalCode: SITE_CONTACT.address.postalCode,
        addressCountry: "US",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Fitness center", value: true },
        { "@type": "LocationFeatureSpecification", name: "Resort pool and spa", value: true },
        { "@type": "LocationFeatureSpecification", name: "Heated outdoor lap pool", value: true },
        { "@type": "LocationFeatureSpecification", name: "Showcase kitchen", value: true },
      ],
    },
  ],
  sections: [
    {
      type: "figure",
      src: "/images/community/heritage-clubhouse.webp",
      alt: "Heritage at Stonebridge clubhouse, terrace, and resort pool facing Red Rock Canyon in Summerlin West",
      caption:
        "Reported 8,000 sq. ft. clubhouse with terrace, firepit, and resort pool — Summerlin West, Las Vegas 89138.",
    },
    {
      type: "prose",
      heading: "What Is Inside the Heritage at Stonebridge Clubhouse?",
      paragraphs: [
        "Heritage at Stonebridge is a Lennar 55+ neighborhood in Stonebridge village, Summerlin West.",
        "The clubhouse is the social hub for 421 planned single-story homes. Official Summerlin copy names a great room, fitness room, multi-purpose room, outdoor pool, and spa.",
        "This site reports an 8,000 sq. ft. building. Confirm square footage on a tour — Lennar’s village page does not publish that number.",
      ],
      subheadings: [
        {
          heading: "Lounge, fireplace, and multi-purpose room",
          paragraphs: [
            "The lounge and fireplace handle smaller gatherings. The multi-purpose room scales for clubs and holiday events.",
            "A full-time activities director is reported on third-party 55+ directories. Ask the HOA which clubs currently meet.",
          ],
        },
        {
          heading: "Showcase kitchen and outdoor terrace",
          paragraphs: [
            "A showcase kitchen supports resident events. The terrace adds a firepit for evening use.",
            "HOA landscaping covers common areas, so the clubhouse stays lock-and-leave ready.",
          ],
        },
        {
          heading: "Fitness center and locker rooms",
          paragraphs: [
            "The fitness room sits inside the clubhouse, not a separate gym membership.",
            "Men’s and women’s locker rooms serve the courts and both pool areas.",
          ],
        },
      ],
    },
    {
      type: "stats",
      heading: "Clubhouse Snapshot",
      stats: [
        { value: "8,000", label: "Sq. Ft. (community report)" },
        { value: "2", label: "Pool Areas (resort + lap)" },
        { value: "6", label: "Lighted Pickleball Courts" },
        { value: "3", label: "Bocce Courts" },
      ],
    },
    {
      type: "prose",
      heading: "Resort Pool, Spa, and Heated Lap Pool",
      paragraphs: [
        "Do not count “two pools” as a marketing slogan. The accurate claim is a resort-style pool and spa plus a heated outdoor lap pool.",
        "Walk the decks at different hours before you buy. Shade, wind, and Red Rock views change through the day.",
      ],
    },
    {
      type: "links",
      heading: "Related Heritage Pages",
      links: [
        { href: "/pickleball", label: "Pickleball Courts" },
        { href: "/amenities", label: "Full Amenities List" },
        ...RELATED_LINKS.filter((l) => l.href !== "/amenities"),
      ],
    },
  ],
  faqs: [
    {
      question: "How large is the Heritage at Stonebridge clubhouse?",
      answer:
        "This community reports an 8,000 sq. ft. clubhouse. Official Summerlin builder copy names the rooms but not the square footage. Verify on a tour with Dr. Jan Duffy at (702) 500-1942.",
    },
    {
      question: "Does the clubhouse include a fitness center?",
      answer:
        "Yes. Heritage lists a fitness center with locker rooms inside the clubhouse, plus a resort pool, spa, and heated outdoor lap pool.",
    },
    {
      question: "Who can use the Heritage clubhouse?",
      answer:
        "The clubhouse serves Heritage at Stonebridge residents in this 55+ community. At least one household resident must be 55 or better. Guest, rental, and occupancy rules live in the CC&Rs.",
    },
  ],
  ctaTitle: "Tour the Clubhouse With Dr. Jan Duffy",
  ctaSubtitle:
    "See the lounge, courts, and pools in person before you write an offer.",
};

export const pickleballPage: HeritagePageContent = {
  slug: "/pickleball",
  metadata: {
    title: baseTitle("Pickleball Courts"),
    description:
      "Six lighted pickleball courts at Heritage at Stonebridge, a guard-gated 55+ community in Summerlin West 89138. Bocce, clubhouse, and live listings with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs(
    { name: "Amenities", url: "/amenities" },
    { name: "Pickleball", url: "/pickleball" },
  ),
  badge: "Lighted Courts · 55+",
  h1: "Pickleball at Heritage at Stonebridge, Summerlin West",
  subtitle:
    "This community reports six lighted pickleball courts and three bocce courts beside the clubhouse in Las Vegas 89138.",
  lastUpdated: "August 2026",
  heroImage: "/images/community/heritage-pickleball.webp",
  heroImageAlt:
    "Six lighted pickleball courts at Heritage at Stonebridge 55+ clubhouse in Summerlin West Las Vegas with Red Rock Canyon",
  extraSchemas: [
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      name: "Heritage at Stonebridge Pickleball Courts",
      description:
        "Reported six lighted pickleball courts and three bocce courts at the Heritage at Stonebridge 55+ clubhouse in Summerlin West, Las Vegas NV 89138.",
      url: `${getSiteUrl()}/pickleball`,
      sport: "Pickleball",
      containedInPlace: { "@id": heritageCommunityId() },
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONTACT.address.streetAddress,
        addressLocality: SITE_CONTACT.address.addressLocality,
        addressRegion: SITE_CONTACT.address.addressRegion,
        postalCode: SITE_CONTACT.address.postalCode,
        addressCountry: "US",
      },
    },
  ],
  sections: [
    {
      type: "figure",
      src: "/images/community/heritage-pickleball.webp",
      alt: "Lighted pickleball courts at Heritage at Stonebridge in Summerlin West near Red Rock Canyon",
      caption:
        "Reported six lighted pickleball courts at the Heritage clubhouse — Summerlin West, NV 89138.",
    },
    {
      type: "prose",
      heading: "How Many Pickleball Courts Does Heritage at Stonebridge Have?",
      paragraphs: [
        "This site reports six lighted pickleball courts. Official Summerlin copy confirms pickleball but does not publish a court count.",
        "Treat six as the current community figure. Confirm lighting hours and reservation rules with the HOA before you buy.",
      ],
      subheadings: [
        {
          heading: "Why lighted courts matter for 55+ buyers",
          paragraphs: [
            "Summerlin evenings stay warm. Lights extend play after sunset without a private club membership.",
            "Ask about noise hours. Lighted courts sit next to homes as well as the clubhouse.",
          ],
        },
        {
          heading: "Bocce courts next to pickleball",
          paragraphs: [
            "Three bocce courts are reported on the same recreation pad. That mix keeps traffic split across sports.",
            "Walking trails and a picnic area sit nearby for residents who prefer a slower loop.",
          ],
        },
      ],
    },
    {
      type: "grid",
      heading: "Recreation Next to the Courts",
      cards: [
        {
          title: "Pickleball",
          items: ["Six lighted courts (community report)", "Clubhouse locker rooms", "HOA-maintained courts"],
        },
        {
          title: "Bocce",
          items: ["Three courts (community report)", "Social clubs listed on 55+ directories", "Same recreation campus"],
        },
        {
          title: "Aquatics",
          items: ["Resort pool and spa", "Heated outdoor lap pool", "Shade and Red Rock views"],
        },
      ],
    },
    {
      type: "links",
      heading: "Related Heritage Pages",
      links: [
        { href: "/clubhouse", label: "Clubhouse & Pools" },
        { href: "/lifestyle", label: "55+ Lifestyle" },
        ...RELATED_LINKS,
      ],
    },
  ],
  faqs: [
    {
      question: "Does Heritage at Stonebridge have pickleball?",
      answer:
        "Yes. Heritage reports six lighted pickleball courts at the clubhouse in Summerlin West. Official Summerlin materials confirm pickleball without a published court count — verify on a tour.",
    },
    {
      question: "Are the pickleball courts lighted?",
      answer:
        "Yes. Community materials describe lighted courts so residents can play after sunset. Confirm current hours with the HOA.",
    },
    {
      question: "Is there bocce at Heritage at Stonebridge?",
      answer:
        "This community reports three bocce courts next to pickleball. Call Dr. Jan Duffy at (702) 500-1942 to tour the recreation campus.",
    },
  ],
  ctaTitle: "See the Courts Before You Offer",
  ctaSubtitle: "Walk pickleball, bocce, and the clubhouse with Dr. Jan Duffy.",
};

export const cromwellPage: HeritagePageContent = {
  slug: "/floor-plans/cromwell",
  metadata: {
    title: baseTitle("Cromwell Collection Floor Plans"),
    description:
      "Cromwell Collection at Heritage at Stonebridge: Carson, Claremont, and Connery — single-story 2-bed plans from about 1,232 to 1,422 sq. ft. in Summerlin West 89138.",
  },
  breadcrumbs: crumbs(
    { name: "Floor Plans", url: "/floor-plans" },
    { name: "Cromwell", url: "/floor-plans/cromwell" },
  ),
  badge: "Cromwell Collection · Single-Story",
  h1: "Cromwell Collection Floor Plans at Heritage at Stonebridge",
  subtitle:
    "Carson, Claremont, and Connery are the entry single-story 2-bed / 2-bath plans, about 1,232 to 1,422 sq. ft. in Summerlin West.",
  lastUpdated: "August 2026",
  heroImage: "/images/floor-plans/cromwell-collection.webp",
  heroImageAlt:
    "Cromwell Collection single-story 55+ homes at Heritage at Stonebridge Summerlin West Las Vegas with desert landscaping",
  extraSchemas: [collectionItemList("cromwell")],
  sections: [
    {
      type: "figure",
      src: "/images/floor-plans/cromwell-collection.webp",
      alt: "Single-story Cromwell Collection homes at Heritage at Stonebridge in Summerlin West 89138",
      caption:
        "Cromwell Collection — Carson, Claremont, and Connery single-story plans at Heritage at Stonebridge.",
    },
    {
      type: "prose",
      heading: "Which Cromwell Floor Plan Fits a 55+ Buyer?",
      paragraphs: [
        "Cromwell is the smallest of three Lennar collections. All Heritage homes are single-story.",
        "Each Cromwell plan lists two bedrooms, two bathrooms, and a two-car garage. Sliding doors open to a private patio.",
      ],
      subheadings: [
        {
          heading: "Carson vs. Claremont: 1,232 or 1,237 square feet?",
          paragraphs: [
            "The Review-Journal listed Carson at 1,232 sq. ft. Official Summerlin copy lists 1,237 sq. ft.",
            "Claremont is consistently 1,237 sq. ft. Verify Carson on the builder plan sheet before you compare price per foot.",
          ],
        },
        {
          heading: "Connery at 1,422 square feet",
          paragraphs: [
            "Connery is the largest Cromwell plan at 1,422 sq. ft. It still stays at two bedrooms and two baths.",
            "That extra space is the usual step-up when a buyer wants a larger great room without leaving Cromwell.",
          ],
        },
      ],
    },
    collectionGrid("cromwell"),
    {
      type: "links",
      heading: "Compare the Other Collections",
      links: [
        { href: "/floor-plans/stirling", label: "Stirling Collection" },
        { href: "/floor-plans/evander", label: "Evander Collection" },
        { href: "/everythings-included", label: "Everything’s Included Finishes" },
        ...RELATED_LINKS,
      ],
    },
  ],
  faqs: [
    {
      question: "What floor plans are in the Cromwell Collection?",
      answer:
        "Cromwell includes Carson, Claremont, and Connery. All are single-story 2-bed / 2-bath homes with two-car garages at Heritage at Stonebridge in Summerlin West.",
    },
    {
      question: "How large is the Carson plan?",
      answer:
        "Public sources disagree: 1,232 vs. 1,237 sq. ft. Treat Carson as about 1,232–1,237 sq. ft. until the plan sheet confirms it.",
    },
    {
      question: "Are Cromwell homes two-story?",
      answer:
        "No. Official Summerlin materials describe Heritage as three collections of all single-story homes from 1,232 to 2,873 sq. ft.",
    },
  ],
};

export const stirlingPage: HeritagePageContent = {
  slug: "/floor-plans/stirling",
  metadata: {
    title: baseTitle("Stirling Collection Floor Plans"),
    description:
      "Stirling Collection at Heritage at Stonebridge: Sawyer, Sidney, and Sloan — single-story 1,747 to 2,236 sq. ft. plans in Summerlin West 89138.",
  },
  breadcrumbs: crumbs(
    { name: "Floor Plans", url: "/floor-plans" },
    { name: "Stirling", url: "/floor-plans/stirling" },
  ),
  badge: "Stirling Collection · Single-Story",
  h1: "Stirling Collection Floor Plans at Heritage at Stonebridge",
  subtitle:
    "Sawyer, Sidney, and Sloan run 1,747 to 2,236 sq. ft. with owner suites, walk-in closets, and two-car garages.",
  lastUpdated: "August 2026",
  heroImage: "/images/floor-plans/stirling-collection.webp",
  heroImageAlt:
    "Stirling Collection mid-size single-story homes at Heritage at Stonebridge Summerlin West with Red Rock Canyon",
  extraSchemas: [collectionItemList("stirling")],
  sections: [
    {
      type: "figure",
      src: "/images/floor-plans/stirling-collection.webp",
      alt: "Stirling Collection single-story 55+ homes at Heritage at Stonebridge near Red Rock Canyon",
      caption:
        "Stirling Collection — Sawyer, Sidney, and Sloan in Summerlin West, Las Vegas 89138.",
    },
    {
      type: "prose",
      heading: "Stirling Floor Plans: Sawyer, Sidney, and Sloan",
      paragraphs: [
        "Stirling sits between Cromwell and Evander on size. Plans list two to three bedrooms, two bathrooms, and a two-car garage.",
        "Owner suites typically include a walk-in closet, walk-in shower, and dual sinks. That is the usual 55+ layout buyers compare first.",
      ],
      subheadings: [
        {
          heading: "Sawyer — 1,747 square feet",
          paragraphs: [
            "Sawyer is the smallest Stirling plan at 1,747 sq. ft. It is the step-up from Connery without jumping to Evander garages.",
          ],
        },
        {
          heading: "Sidney — 1,953 square feet",
          paragraphs: [
            "Sidney is listed at 1,953 sq. ft. Buyers often use the extra wing for a den or third bedroom. Confirm the elevation on MLS.",
          ],
        },
        {
          heading: "Sloan — 2,236 square feet",
          paragraphs: [
            "Sloan is the largest Stirling plan at 2,236 sq. ft. It approaches Evander living area without a four-car garage.",
          ],
        },
      ],
    },
    collectionGrid("stirling"),
    {
      type: "links",
      heading: "Compare the Other Collections",
      links: [
        { href: "/floor-plans/cromwell", label: "Cromwell Collection" },
        { href: "/floor-plans/evander", label: "Evander Collection" },
        { href: "/everythings-included", label: "Everything’s Included Finishes" },
        ...RELATED_LINKS,
      ],
    },
  ],
  faqs: [
    {
      question: "What floor plans are in the Stirling Collection?",
      answer:
        "Stirling includes Sawyer (1,747 sq. ft.), Sidney (1,953 sq. ft.), and Sloan (2,236 sq. ft.) at Heritage at Stonebridge.",
    },
    {
      question: "How many bedrooms are in Stirling homes?",
      answer:
        "Stirling plans list two to three bedrooms and two bathrooms with a two-car garage. Confirm the bedroom count on the specific listing.",
    },
  ],
};

export const evanderPage: HeritagePageContent = {
  slug: "/floor-plans/evander",
  metadata: {
    title: baseTitle("Evander Collection & Everly Next Gen"),
    description:
      "Evander Collection at Heritage at Stonebridge: Ethan, Elizabeth, and Everly — 2,515 to 2,873 sq. ft. single-story homes. Everly adds a Next Gen suite in Summerlin West.",
  },
  breadcrumbs: crumbs(
    { name: "Floor Plans", url: "/floor-plans" },
    { name: "Evander", url: "/floor-plans/evander" },
  ),
  badge: "Evander · Next Gen Suite",
  h1: "Evander Collection Floor Plans at Heritage at Stonebridge",
  subtitle:
    "Ethan, Elizabeth, and Everly run 2,515 to 2,873 sq. ft. with three- to four-car garages. Everly adds a Next Gen suite.",
  lastUpdated: "August 2026",
  heroImage: "/images/floor-plans/evander-collection.webp",
  heroImageAlt:
    "Evander Collection larger single-story 55+ home with multi-car garage at Heritage at Stonebridge Summerlin West",
  extraSchemas: [collectionItemList("evander")],
  sections: [
    {
      type: "figure",
      src: "/images/floor-plans/evander-collection.webp",
      alt: "Evander Collection single-story home with large garage at Heritage at Stonebridge in Summerlin West",
      caption:
        "Evander Collection — Ethan, Elizabeth, and Everly, the largest single-story plans at Heritage.",
    },
    {
      type: "prose",
      heading: "Evander Floor Plans: Ethan, Elizabeth, and Everly",
      paragraphs: [
        "Evander is the largest Heritage collection. Plans list two to three bedrooms, two-and-a-half to three bathrooms, and three- to four-car garages.",
        "This is the collection for RV storage, tandem bays, or a Next Gen suite — not a two-story add-on.",
      ],
      subheadings: [
        {
          heading: "Ethan — 2,515 sq. ft. with a 4-bay tandem garage",
          paragraphs: [
            "Ethan is reported at 2,515 sq. ft. The tandem garage is the usual choice for extra vehicles or hobby storage.",
          ],
        },
        {
          heading: "Elizabeth — 2,516 sq. ft. with a 4-bay RV garage",
          paragraphs: [
            "Elizabeth is reported at 2,516 sq. ft. The RV bay is the differentiator versus Ethan. Confirm height and depth on the listing.",
          ],
        },
        {
          heading: "Everly Next Gen Suite — 2,873 square feet",
          paragraphs: [
            "Everly is the largest Heritage plan at 2,873 sq. ft. with three bedrooms and three baths.",
            "The Next Gen suite is a lockable living wing — not a second story. Confirm what the current resale actually includes.",
          ],
        },
      ],
    },
    collectionGrid("evander"),
    {
      type: "links",
      heading: "Compare the Other Collections",
      links: [
        { href: "/floor-plans/cromwell", label: "Cromwell Collection" },
        { href: "/floor-plans/stirling", label: "Stirling Collection" },
        { href: "/everythings-included", label: "Everything’s Included Finishes" },
        ...RELATED_LINKS,
      ],
    },
  ],
  faqs: [
    {
      question: "What is the Everly Next Gen Suite?",
      answer:
        "Everly is the 2,873 sq. ft. Evander plan with three bedrooms, three baths, and a reported Next Gen suite — a lockable living wing on one story, not a second floor.",
    },
    {
      question: "Which Heritage plan has an RV garage?",
      answer:
        "Elizabeth in the Evander Collection is reported with a four-bay RV garage. Confirm door height and depth on the specific home.",
    },
    {
      question: "How large are Evander homes?",
      answer:
        "Evander plans are reported from 2,515 to 2,873 sq. ft. at Heritage at Stonebridge in Summerlin West 89138.",
    },
  ],
};

export const everythingsIncludedPage: HeritagePageContent = {
  slug: "/everythings-included",
  metadata: {
    title: baseTitle("Lennar Everything’s Included Finishes"),
    description:
      "Lennar Everything’s Included at Heritage at Stonebridge: quartz counters, stainless appliances, raised-panel cabinets, and smart-home features. Features vary by homesite — verify on the listing.",
  },
  breadcrumbs: crumbs({
    name: "Everything’s Included",
    url: "/everythings-included",
  }),
  badge: "Lennar Finishes · 55+",
  h1: "Lennar Everything’s Included at Heritage at Stonebridge",
  subtitle:
    "Heritage resales are marketed with quartz, stainless appliances, raised-panel cabinets, and smart-home automation — subject to plan and homesite.",
  lastUpdated: "August 2026",
  heroImage: "/images/community/heritage-kitchen.webp",
  heroImageAlt:
    "Quartz kitchen with stainless appliances in a Heritage at Stonebridge Lennar Everything’s Included home in Summerlin West",
  extraSchemas: [
    generateItemListSchema({
      name: "Reported Everything’s Included finishes at Heritage at Stonebridge",
      description:
        "Lennar program features commonly listed on Heritage homes; confirm on the specific plan and homesite.",
      items: [
        {
          name: "Quartz countertops",
          description: "Reported kitchen counters in Heritage at Stonebridge homes.",
        },
        {
          name: "Stainless steel appliances",
          description: "Reported kitchen appliance package on Heritage homes.",
        },
        {
          name: "Raised-panel cabinetry",
          description: "Reported cabinet style in Heritage interiors.",
        },
        {
          name: "Smart-home automation",
          description:
            "Lennar program examples include smart locks and thermostats; packages vary by homesite.",
        },
      ],
    }),
  ],
  sections: [
    {
      type: "figure",
      src: "/images/community/heritage-kitchen.webp",
      alt: "Heritage at Stonebridge kitchen with quartz counters and stainless appliances in Summerlin West",
      caption:
        "Reported Everything’s Included kitchen finishes — verify appliances and counters on the listing you write.",
    },
    {
      type: "prose",
      heading: "What Does Everything’s Included Mean at Heritage?",
      paragraphs: [
        "Lennar markets Everything’s Included as standard features instead of long option lists. Official Lennar pages warn that products vary by community and homesite.",
        "Heritage-specific copy lists quartz counters, stainless appliances, raised-panel cabinets, and smart-home automation. Treat that as the reported package, not a guarantee on every resale.",
      ],
      subheadings: [
        {
          heading: "Kitchen finishes buyers should verify",
          paragraphs: [
            "Open the listing photos and the seller disclosure. Quartz and stainless are commonly photographed. Substitutions happen on later upgrades or repairs.",
          ],
        },
        {
          heading: "Smart-home items that vary by homesite",
          paragraphs: [
            "Lennar’s national examples include a Schlage Encode lock and a Honeywell thermostat. Those SKUs are program examples, not a Heritage inventory sheet.",
            "Ask which devices transfer at closing. Wi-Fi locks and cameras are often seller personal property.",
          ],
        },
        {
          heading: "Everly Next Gen as a plan-level extra",
          paragraphs: [
            "The Everly Next Gen suite is a floor-plan feature, not a finish upgrade. See the Evander page for size and suite details.",
          ],
        },
      ],
    },
    {
      type: "checklist",
      heading: "Finish Due Diligence",
      items: [
        {
          title: "Match photos to the listing remarks",
          description: "If quartz is claimed, confirm it in the kitchen and baths you care about.",
        },
        {
          title: "Ask which smart devices convey",
          description: "Locks, thermostats, and cameras may be excluded.",
        },
        {
          title: "Compare three collections, not one model home",
          description: "Cromwell, Stirling, and Evander share the program but not the same rooms.",
        },
      ],
    },
    {
      type: "links",
      heading: "Related Heritage Pages",
      links: [
        { href: "/floor-plans/cromwell", label: "Cromwell Plans" },
        { href: "/floor-plans/stirling", label: "Stirling Plans" },
        { href: "/floor-plans/evander", label: "Evander & Everly" },
        ...RELATED_LINKS,
      ],
    },
  ],
  faqs: [
    {
      question: "What finishes are included at Heritage at Stonebridge?",
      answer:
        "Heritage homes are marketed with Lennar Everything’s Included: quartz counters, stainless appliances, raised-panel cabinets, and smart-home automation. Lennar states features vary by community and homesite — verify on the listing.",
    },
    {
      question: "Does every Heritage home have the same appliances?",
      answer:
        "No. The program is the starting point. Resales and later upgrades can differ. Dr. Jan Duffy will walk the specific home with you — (702) 500-1942.",
    },
  ],
};

export const stonebridgeVillagePage: HeritagePageContent = {
  slug: "/stonebridge-village",
  metadata: {
    title: baseTitle("Stonebridge Village Summerlin West"),
    description:
      "Heritage at Stonebridge sits in Stonebridge village, Summerlin West, adjacent to Red Rock Canyon. 55+ guard-gated Lennar homes in Las Vegas 89138 with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs({
    name: "Stonebridge Village",
    url: "/stonebridge-village",
  }),
  badge: "Summerlin West · 89138",
  h1: "Stonebridge Village and Heritage at Stonebridge in Summerlin West",
  subtitle:
    "Official Summerlin materials place Heritage in Stonebridge village, adjacent to Red Rock Canyon National Conservation Area, zip 89138.",
  lastUpdated: "August 2026",
  heroImage: "/images/neighborhoods/heritage-summerlin-west.webp",
  heroImageAlt:
    "Stonebridge village in Summerlin West Las Vegas adjacent to Red Rock Canyon with Heritage at Stonebridge rooftops",
  extraSchemas: [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name: "Stonebridge Village, Summerlin West",
      description:
        "Summerlin village adjacent to Red Rock Canyon National Conservation Area. Heritage at Stonebridge is the Lennar 55+ neighborhood inside Stonebridge.",
      url: `${getSiteUrl()}/stonebridge-village`,
      containedInPlace: {
        "@type": "Place",
        name: "Summerlin West",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89138",
          addressCountry: "US",
        },
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: HERITAGE_COMMUNITY.geo.latitude,
        longitude: HERITAGE_COMMUNITY.geo.longitude,
      },
    },
  ],
  sections: [
    {
      type: "prose",
      heading: "Where Is Heritage at Stonebridge in Summerlin?",
      paragraphs: [
        "Heritage is a Lennar 55+ neighborhood inside Stonebridge village. Summerlin West is the master-plan district. Las Vegas 89138 is the postal city.",
        "Howard Hughes places Summerlin adjacent to Red Rock Canyon and about nine miles west of the Strip. That is master-plan geography, not a Heritage driveway measurement.",
      ],
      subheadings: [
        {
          heading: "Red Rock Canyon adjacency — official, not a drive-time app",
          paragraphs: [
            "Official Summerlin copy calls Stonebridge scenic and adjacent to Red Rock Canyon National Conservation Area.",
            "A June 2026 listing guide estimated about 10 minutes to the scenic loop. Treat that as traffic-dependent, not a surveyed mile.",
          ],
        },
        {
          heading: "Downtown Summerlin access — estimate, not a guarantee",
          paragraphs: [
            "Downtown Summerlin is Howard Hughes’ 400-acre retail and entertainment core. The same listing guide estimated about 5 minutes from Heritage.",
            "Use live traffic on the day you tour. Peak event nights at the arena change that number.",
          ],
        },
      ],
    },
    {
      type: "grid",
      heading: "Place Names Buyers Mix Up",
      cards: [
        {
          title: "Heritage at Stonebridge",
          items: ["Lennar 55+ neighborhood", "421 planned homes", "Staff guard-gated"],
        },
        {
          title: "Stonebridge village",
          items: ["Summerlin village name", "Adjacent to Red Rock Canyon", "Contains Heritage"],
        },
        {
          title: "Summerlin West / 89138",
          items: ["Master plan + zip", "Las Vegas postal city", "Downtown Summerlin nearby"],
        },
      ],
    },
    {
      type: "links",
      heading: "Related Location Pages",
      links: [
        { href: "/crossbridge-drive", label: "Address & Crossbridge Drive" },
        { href: "/location", label: "Location & Map" },
        { href: "/downtown-summerlin", label: "Downtown Summerlin" },
        { href: "/red-rock-canyon-communities", label: "Red Rock Area Communities" },
        ...RELATED_LINKS,
      ],
    },
  ],
  faqs: [
    {
      question: "Is Heritage at Stonebridge in Stonebridge village?",
      answer:
        "Yes. Official Summerlin materials place Heritage by Lennar in Stonebridge village, Summerlin West, adjacent to Red Rock Canyon.",
    },
    {
      question: "What zip code is Heritage at Stonebridge?",
      answer:
        "89138. The postal city is Las Vegas, Nevada. Call Dr. Jan Duffy at (702) 500-1942 for a map pin and gate directions.",
    },
    {
      question: "How far is Heritage from Downtown Summerlin?",
      answer:
        "A June 2026 listing guide estimated about 5 minutes. Official sources confirm proximity, not a surveyed drive time. Check traffic the day you tour.",
    },
  ],
};

export const crossbridgeDrivePage: HeritagePageContent = {
  slug: "/crossbridge-drive",
  metadata: {
    title: baseTitle("Crossbridge Drive Address & Gate Access"),
    description:
      "Heritage Stonebridge NAP: Crossbridge Dr, Las Vegas, NV 89138. Homes inside the gates often list on streets such as Heritage Bend Drive. Confirm the legal address with Dr. Jan Duffy.",
  },
  breadcrumbs: crumbs({
    name: "Crossbridge Drive",
    url: "/crossbridge-drive",
  }),
  badge: "NAP · Las Vegas 89138",
  h1: "Heritage at Stonebridge Address, Gate Access, and Crossbridge Drive",
  subtitle:
    "This site’s Google Business Profile lists Crossbridge Dr, Las Vegas, NV 89138. Homes inside the gates often list on streets such as Heritage Bend Drive.",
  lastUpdated: "August 2026",
  heroImage: "/images/neighborhoods/heritage-guard-gate.webp",
  heroImageAlt:
    "Staff guard-gated entry at Heritage at Stonebridge 55+ community, Crossbridge Drive area, Las Vegas NV 89138",
  extraSchemas: [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name: "Heritage at Stonebridge — Crossbridge Dr",
      description:
        "Google Business Profile NAP for Heritage Stonebridge | Homes By Dr. Jan Duffy: Crossbridge Dr, Las Vegas, NV 89138. Staff guard-gated 55+ Lennar community in Summerlin West.",
      url: `${getSiteUrl()}/crossbridge-drive`,
      telephone: SITE_CONTACT.phone.tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONTACT.address.streetAddress,
        addressLocality: SITE_CONTACT.address.addressLocality,
        addressRegion: SITE_CONTACT.address.addressRegion,
        postalCode: SITE_CONTACT.address.postalCode,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE_CONTACT.geo.latitude,
        longitude: SITE_CONTACT.geo.longitude,
      },
      containedInPlace: { "@id": heritageCommunityId() },
    },
  ],
  sections: [
    {
      type: "figure",
      src: "/images/neighborhoods/heritage-guard-gate.webp",
      alt: "Guard-gated entry serving Heritage at Stonebridge in Summerlin West Las Vegas 89138",
      caption:
        "Staffed guard gate with visitor verification — Heritage at Stonebridge, Las Vegas NV 89138.",
    },
    {
      type: "prose",
      heading: "What Address Should You Use for Heritage at Stonebridge?",
      paragraphs: [
        `Use the published NAP for this business: ${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}. Phone ${SITE_CONTACT.phone.display}.`,
        "That street matches this site’s Google Business Profile. It is the listing you should see in Maps, not a random model-home pin.",
      ],
      subheadings: [
        {
          heading: "Heritage Bend Drive vs. Crossbridge Drive",
          paragraphs: [
            "Recent resales inside the gates list on streets such as Heritage Bend Drive. Those are home addresses, not the GBP street.",
            "Confirm the legal address on the title report and the gate code sheet. Do not copy a map pin from a stale listing.",
          ],
        },
        {
          heading: "Staff guard-gated entry — not a keypad-only gate",
          paragraphs: [
            "Official Summerlin copy calls Heritage guard-gated. This community uses staffed visitor verification.",
            "Movers, inspectors, and guests need a call-ahead. Ask Dr. Jan Duffy to put your name on the list before a tour.",
          ],
        },
      ],
    },
    {
      type: "checklist",
      heading: "Before You GPS the Gate",
      items: [
        {
          title: "Match NAP on this page to Google",
          description: `Crossbridge Dr · Las Vegas NV 89138 · ${SITE_CONTACT.phone.display}`,
        },
        {
          title: "Use the listing street for the house",
          description: "The home you buy will have its own street inside the gates.",
        },
        {
          title: "Call ahead for visitor access",
          description: "Staffed gates do not take a shared keypad code from a forum post.",
        },
      ],
    },
    {
      type: "links",
      heading: "Related Pages",
      links: [
        { href: "/stonebridge-village", label: "Stonebridge Village" },
        { href: "/guard-gated-living", label: "Guard-Gated Living" },
        { href: "/google-business", label: "Google Business Profile" },
        { href: "/contact", label: "Get Gate Directions" },
        ...RELATED_LINKS,
      ],
    },
  ],
  faqs: [
    {
      question: "What is the address for Heritage at Stonebridge?",
      answer: `This site’s Google Business Profile lists ${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}. Individual homes use interior streets such as Heritage Bend Drive.`,
    },
    {
      question: "Is Heritage at Stonebridge guard-gated?",
      answer:
        "Yes. Official Summerlin materials call Heritage guard-gated. Staff verify visitors. Call (702) 500-1942 so Dr. Jan Duffy can clear your tour.",
    },
    {
      question: "What is the phone number for Heritage Stonebridge homes?",
      answer: `Call ${SITE_CONTACT.phone.display}. That is the number on this site’s NAP and should match the Google Business Profile.`,
    },
  ],
  ctaTitle: "Get Gate Directions From Dr. Jan Duffy",
  ctaSubtitle: "We clear visitors at the staffed gate and meet you at the clubhouse.",
};

export const HERITAGE_TOPIC_PAGES: HeritagePageContent[] = [
  clubhousePage,
  pickleballPage,
  cromwellPage,
  stirlingPage,
  evanderPage,
  everythingsIncludedPage,
  stonebridgeVillagePage,
  crossbridgeDrivePage,
];
