/**
 * Curated /llms.txt index for AI crawlers (ChatGPT, Perplexity, Claude, etc.).
 * Google Search does not use llms.txt for rankings or AI Overviews — this file
 * is for other generative engines that fetch a Markdown site map.
 * @see https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
 */
import { getSiteUrl } from "@/lib/site-url";
import { SITE_CONTACT } from "@/lib/site-contact";
import { HERITAGE_COMMUNITY } from "./data";

type LlmsLink = { href: string; title: string; note: string };

function abs(href: string): string {
  const base = getSiteUrl();
  return href === "/" ? `${base}/` : `${base}${href}`;
}

const IDENTITY = [
  {
    href: "/",
    title: "Heritage at Stonebridge home",
    note: `Lennar guard-gated 55+ community in Summerlin West (${HERITAGE_COMMUNITY.postalCode}). ${HERITAGE_COMMUNITY.homeCount} single-story homes.`,
  },
  {
    href: "/about",
    title: "Dr. Jan Duffy",
    note: `REALTOR®, license ${SITE_CONTACT.license}, ${SITE_CONTACT.brokerage}. Phone ${SITE_CONTACT.phone.display}.`,
  },
  {
    href: "/google-business",
    title: "Google Business Profile / NAP",
    note: `${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}.`,
  },
  {
    href: "/contact",
    title: "Contact and tour scheduling",
    note: `Call ${SITE_CONTACT.phone.display} or request a gate-cleared clubhouse tour.`,
  },
] as const satisfies readonly LlmsLink[];

const COMMUNITY = [
  {
    href: "/community",
    title: "Community guide",
    note: "Staff guard-gated 55+ neighborhood facts, collections, and why buyers choose Heritage.",
  },
  {
    href: "/amenities",
    title: "Amenities hub",
    note: "Clubhouse, fitness, pools, pickleball, bocce, and trails.",
  },
  {
    href: "/clubhouse",
    title: "Clubhouse",
    note: "Reported 8,000 sq. ft. clubhouse with lounge, fitness, resort pool, spa, and heated lap pool.",
  },
  {
    href: "/pickleball",
    title: "Pickleball courts",
    note: "Reported six lighted pickleball courts and three bocce courts.",
  },
  {
    href: "/floor-plans",
    title: "Floor plans hub",
    note: "Nine single-story plans in Cromwell, Stirling, and Evander collections (1,232–2,873 sq. ft.).",
  },
  {
    href: "/floor-plans/cromwell",
    title: "Cromwell Collection",
    note: "Carson, Claremont, Connery — 2-bed / 2-bath entry plans. Carson sq. ft. 1,232 vs 1,237 — verify.",
  },
  {
    href: "/floor-plans/stirling",
    title: "Stirling Collection",
    note: "Sawyer, Sidney, Sloan — 1,747–2,236 sq. ft. owner-suite plans.",
  },
  {
    href: "/floor-plans/evander",
    title: "Evander Collection",
    note: "Ethan, Elizabeth, Everly. Everly is 2,873 sq. ft. with a Next Gen suite.",
  },
  {
    href: "/everythings-included",
    title: "Lennar Everything’s Included",
    note: "Quartz, stainless, raised-panel cabinets, smart-home — verify by homesite.",
  },
  {
    href: "/hoa-fees",
    title: "HOA fees",
    note: "Recent resales display about $410–$419/month combined. Confirm in the resale package.",
  },
  {
    href: "/guard-gated-living",
    title: "Guard-gated living",
    note: "Staffed visitor verification, not a shared keypad.",
  },
] as const satisfies readonly LlmsLink[];

const LOCATION = [
  {
    href: "/location",
    title: "Location and map",
    note: "Summerlin West 89138 near Downtown Summerlin and Red Rock Canyon.",
  },
  {
    href: "/stonebridge-village",
    title: "Stonebridge village",
    note: "Official Summerlin village adjacent to Red Rock Canyon; Heritage sits inside it.",
  },
  {
    href: "/crossbridge-drive",
    title: "Crossbridge Drive address",
    note: "GBP NAP is Crossbridge Dr, Las Vegas NV 89138. Homes inside the gates use streets such as Heritage Bend Drive.",
  },
  {
    href: "/downtown-summerlin",
    title: "Downtown Summerlin",
    note: "Retail and entertainment core minutes from the community (traffic-dependent).",
  },
  {
    href: "/red-rock-canyon-communities",
    title: "Red Rock Canyon area",
    note: "West Summerlin communities next to the conservation area.",
  },
] as const satisfies readonly LlmsLink[];

const BUYING = [
  {
    href: "/homes-for-sale",
    title: "Homes for sale",
    note: "Live MLS search for Heritage at Stonebridge and Summerlin West 89138.",
  },
  {
    href: "/buying-guide",
    title: "Buying guide",
    note: "Tours, HOA due diligence, and offer timing for 55+ Summerlin buyers.",
  },
  {
    href: "/faq",
    title: "FAQ",
    note: "Age restriction, gate, amenities, pricing range, and who to call.",
  },
  {
    href: "/vs-sun-city-summerlin",
    title: "vs Sun City Summerlin",
    note: "Newer Lennar plans and staffed gate versus a larger golf-course 55+ community.",
  },
  {
    href: "/vs-trilogy-summerlin",
    title: "vs Trilogy Summerlin",
    note: "Boutique Heritage scale versus Trilogy’s larger amenity campus.",
  },
] as const satisfies readonly LlmsLink[];

function section(heading: string, links: readonly LlmsLink[]): string {
  const items = links
    .map((link) => `- [${link.title}](${abs(link.href)}): ${link.note}`)
    .join("\n");
  return `## ${heading}\n\n${items}`;
}

export function buildLlmsTxt(): string {
  return [
    "# Heritage at Stonebridge | Dr. Jan Duffy",
    "",
    `> Guard-gated Lennar 55+ community in Stonebridge village, Summerlin West, Las Vegas NV ${HERITAGE_COMMUNITY.postalCode}. ${HERITAGE_COMMUNITY.homeCount} single-story homes. Agent: ${SITE_CONTACT.agentName}, ${SITE_CONTACT.brokerage}, license ${SITE_CONTACT.license}. Phone ${SITE_CONTACT.phone.display}.`,
    "",
    section("Identity and contact", IDENTITY),
    "",
    section("Community, plans, and amenities", COMMUNITY),
    "",
    section("Location", LOCATION),
    "",
    section("Buying", BUYING),
    "",
  ].join("\n");
}
