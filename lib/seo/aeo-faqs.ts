import type { FAQItem } from "@/lib/schema";
import { HERITAGE_COMMUNITY, HERITAGE_FAQS } from "@/lib/heritage-stonebridge/data";
import { SITE_CONTACT } from "@/lib/site-contact";

/** Answer-engine FAQs for pages that do not already ship HeritagePageContent.faqs. */
export const listingsPageFaqs: FAQItem[] = [
  {
    question: "Where can I search live Heritage at Stonebridge listings?",
    answer: `Use the MLS search on this page for Summerlin West (${HERITAGE_COMMUNITY.postalCode}) inventory, including ${HERITAGE_COMMUNITY.name} resales. Listings update through RealScout. Call ${SITE_CONTACT.phone.display} for a private tour.`,
  },
  {
    question: "Do I need a separate account to see MLS photos and prices?",
    answer:
      "The on-page RealScout widget shows active inventory. Saved searches and alerts can be set up with Dr. Jan Duffy so new 55+ listings in 89138 reach you as they hit the MLS.",
  },
  {
    question: "What price range should I expect in Heritage at Stonebridge?",
    answer: HERITAGE_COMMUNITY.priceRange,
  },
];

export const neighborhoodsHubFaqs: FAQItem[] = [
  {
    question: "Which Las Vegas area is Heritage at Stonebridge in?",
    answer: `${HERITAGE_COMMUNITY.name} sits in ${HERITAGE_COMMUNITY.masterPlan} (zip ${HERITAGE_COMMUNITY.postalCode}), west of the I-215 beltway near Downtown Summerlin and Red Rock Canyon.`,
  },
  {
    question: "How does Summerlin West compare with Henderson for a 55+ move?",
    answer:
      "Summerlin West (89138) is closer to Red Rock Canyon and Downtown Summerlin retail. Henderson 55+ options such as Sun City Anthem sit farther southeast, nearer Lake Las Vegas and the Anthem corridor. Match commute, HOA, and floor-plan needs rather than a city-wide average.",
  },
  {
    question: "Can Dr. Jan Duffy show homes outside Heritage at Stonebridge?",
    answer: `Yes. ${SITE_CONTACT.agentName} covers Summerlin, Henderson, and the northwest valley, with a focus on guard-gated and 55+ floor plans. Call ${SITE_CONTACT.phone.display}.`,
  },
];

export const marketInsightsFaqs: FAQItem[] = [
  {
    question: "How current is this Heritage Stonebridge market snapshot?",
    answer:
      "Narrative context on this page is dated August 2026. Live prices, DOM, and inventory come from MLS via RealScout. Ask for a plan-level CMA before writing an offer.",
  },
  {
    question: "Why not use a valley-wide Las Vegas median to price a Heritage home?",
    answer: `Heritage has ${HERITAGE_COMMUNITY.homeCount} Lennar homes behind a staffed gate in ${HERITAGE_COMMUNITY.postalCode}. Valley medians mix condos, older tract homes, and different HOAs — they do not price pickleball-oriented 55+ plans at the gate.`,
  },
  ...HERITAGE_FAQS.slice(0, 2),
];

export const listingDetailFaqs: FAQItem[] = [
  {
    question: "Why doesn’t this URL show a canned photo and price?",
    answer:
      "Individual MLS records must come from the live feed with attribution. This page opens the listing identifier in RealScout search rather than inventing beds, baths, or a sale price.",
  },
  {
    question: "How do I tour a specific Heritage at Stonebridge address?",
    answer: `Call ${SITE_CONTACT.phone.display} or use Calendly on the contact page. ${SITE_CONTACT.agentName} will confirm gate access and showing windows with the listing office.`,
  },
];
