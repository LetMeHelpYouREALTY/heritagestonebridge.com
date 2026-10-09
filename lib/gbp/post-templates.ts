import { SITE_CONTACT } from "@/lib/site-contact";
import { HERITAGE_COMMUNITY } from "@/lib/heritage-stonebridge/data";
import type { GbpPublishDay } from "./advisor-decisions";

export type GbpPostCtaType = "CALL" | "LEARN_MORE" | "BOOK";

export type GbpPostDraft = {
  id: string;
  theme: "inventory" | "seller" | "buyer" | "community" | "market";
  title: string;
  body: string;
  cta: {
    type: GbpPostCtaType;
    label: string;
    url?: string;
  };
  suggestedPhotoAlt: string;
  publishDay: GbpPublishDay;
};

const siteUrl = SITE_CONTACT.url.replace(/\/$/, "");
const phone = SITE_CONTACT.phone.display;
const community = HERITAGE_COMMUNITY.name;

/** Rotating pool — advisor picks 3 per week via ISO week index. */
export const GBP_POST_POOL: GbpPostDraft[] = [
  {
    id: "inventory-homes",
    theme: "inventory",
    title: `Homes for sale in ${community}`,
    body: `Browse guard-gated 55+ homes in Summerlin West (${HERITAGE_COMMUNITY.postalCode}). ${community} offers Lennar single-family plans, an ${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sq. ft. clubhouse, pool, pickleball, and staffed gate access. Dr. Jan Duffy helps buyers compare resale and new-build options with MLS-backed pricing — not pressure. Questions? Call ${phone}.`,
    cta: { type: "LEARN_MORE", label: "View homes", url: `${siteUrl}/homes-for-sale` },
    suggestedPhotoAlt: "Heritage at Stonebridge Summerlin West community or listing exterior",
    publishDay: "Tuesday",
  },
  {
    id: "seller-guide",
    theme: "seller",
    title: `Selling in ${community}?`,
    body: `Thinking about listing in ${community} or another Summerlin 55+ neighborhood? Get a current market read before you price. Dr. Jan Duffy specializes in guard-gated resales in ${HERITAGE_COMMUNITY.postalCode} with ${SITE_CONTACT.brokerage}. Free consultation — ${phone}.`,
    cta: { type: "LEARN_MORE", label: "Selling guide", url: `${siteUrl}/selling-guide` },
    suggestedPhotoAlt: "Summerlin West home exterior ready for market",
    publishDay: "Thursday",
  },
  {
    id: "downsizing-55",
    theme: "buyer",
    title: "Downsizing to Summerlin 55+?",
    body: `Compare ${community} floor plans, HOA context, and guard-gated lifestyle with larger active-adult options in Las Vegas. Lennar-built homes, age 55+ community rules, and minutes to Downtown Summerlin. Dr. Jan Duffy guides buyers and sellers across ${HERITAGE_COMMUNITY.postalCode}.`,
    cta: { type: "BOOK", label: "Book consultation", url: `${siteUrl}/contact` },
    suggestedPhotoAlt: "Clubhouse or pool amenity at Heritage at Stonebridge",
    publishDay: "Saturday",
  },
  {
    id: "guard-gated",
    theme: "community",
    title: "Guard-gated 55+ in Summerlin West",
    body: `${community} features ${HERITAGE_COMMUNITY.security.toLowerCase()} — visitor verification, not just a keypad. ${HERITAGE_COMMUNITY.homeCount} homes, pickleball, walking trails, and quick access to Red Rock Canyon. Explore whether Heritage fits your downsizing or Nevada relocation timeline.`,
    cta: { type: "LEARN_MORE", label: "Community guide", url: `${siteUrl}/55-plus-communities/heritage-stonebridge` },
    suggestedPhotoAlt: "Guard gate or community entrance Summerlin 89138",
    publishDay: "Tuesday",
  },
  {
    id: "vs-sun-city",
    theme: "community",
    title: "Heritage vs Sun City Summerlin",
    body: `Smaller Lennar 55+ community vs Nevada's largest active-adult neighborhood — which fits your lifestyle? Heritage at Stonebridge is staff guard-gated with ${HERITAGE_COMMUNITY.floorPlanCount} floor plans; Sun City offers more golf and clubs. Dr. Jan helps you compare HOA, resale, and daily living in Summerlin West.`,
    cta: { type: "LEARN_MORE", label: "Compare communities", url: `${siteUrl}/vs-sun-city-summerlin` },
    suggestedPhotoAlt: "Summerlin West neighborhood lifestyle image",
    publishDay: "Thursday",
  },
  {
    id: "hoa-education",
    theme: "buyer",
    title: "HOA & fees at Heritage at Stonebridge",
    body: `Before you buy in ${HERITAGE_COMMUNITY.postalCode}, understand monthly HOA, guard-gated policies, and what's included in Lennar's Everything's Included features. Dr. Jan Duffy walks buyers through real numbers from current listings — not brochure guesses. Call ${phone} or read the HOA overview on heritagestonebridge.com.`,
    cta: { type: "LEARN_MORE", label: "HOA overview", url: `${siteUrl}/hoa-fees` },
    suggestedPhotoAlt: "Heritage at Stonebridge kitchen or interior showing Lennar finishes",
    publishDay: "Saturday",
  },
  {
    id: "floor-plans",
    theme: "inventory",
    title: `${HERITAGE_COMMUNITY.floorPlanCount} floor plans at Heritage`,
    body: `${community} spans ${HERITAGE_COMMUNITY.sqFtRange} sq. ft. with ${HERITAGE_COMMUNITY.bedroomRange} bedrooms across three collections. Resale and new-build inventory changes weekly — search live MLS results and schedule a private tour in Summerlin West (${HERITAGE_COMMUNITY.postalCode}).`,
    cta: { type: "LEARN_MORE", label: "Floor plans", url: `${siteUrl}/floor-plans` },
    suggestedPhotoAlt: "Heritage at Stonebridge floor plan or model home",
    publishDay: "Tuesday",
  },
  {
    id: "valuation",
    theme: "seller",
    title: "What's your Heritage home worth?",
    body: `Summerlin West 55+ resale values depend on plan, elevation, and guard-gated demand. Request a current market snapshot for ${community} before you list or renew your search. Dr. Jan Duffy, REALTOR® — ${phone}.`,
    cta: { type: "LEARN_MORE", label: "Home valuation", url: `${siteUrl}/home-valuation` },
    suggestedPhotoAlt: "Summerlin West single-family home exterior",
    publishDay: "Thursday",
  },
  {
    id: "california-reloc",
    theme: "buyer",
    title: "Relocating to Summerlin 55+?",
    body: `Out-of-state buyers often compare Nevada tax advantages with Summerlin West lifestyle. ${community} offers guard-gated Lennar living near Downtown Summerlin — with Dr. Jan Duffy as your local guide for tours, HOA questions, and offer strategy in ${HERITAGE_COMMUNITY.postalCode}.`,
    cta: { type: "CALL", label: "Call now" },
    suggestedPhotoAlt: "Downtown Summerlin or Red Rock Canyon near Heritage Stonebridge",
    publishDay: "Saturday",
  },
  {
    id: "amenities",
    theme: "community",
    title: "Clubhouse & pickleball at Heritage",
    body: `Active-adult amenities at ${community}: ${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sq. ft. clubhouse, fitness center, resort pool, heated lap pool, and six pickleball courts. Staff guard-gated entry in Summerlin West. See if this 55+ community matches your next chapter.`,
    cta: { type: "LEARN_MORE", label: "Amenities", url: `${siteUrl}/amenities` },
    suggestedPhotoAlt: "Pickleball courts or clubhouse at Heritage at Stonebridge",
    publishDay: "Tuesday",
  },
  {
    id: "buying-guide",
    theme: "buyer",
    title: "Buying in a 55+ guard-gated community",
    body: `Age-restricted rules, visitor policies, and resale considerations differ from typical Las Vegas subdivisions. Dr. Jan Duffy explains the buying process for ${community} buyers — financing, inspections, and HOA review — before you write an offer in ${HERITAGE_COMMUNITY.postalCode}.`,
    cta: { type: "LEARN_MORE", label: "Buying guide", url: `${siteUrl}/buying-guide` },
    suggestedPhotoAlt: "Dr. Jan Duffy professional photo with Summerlin branding",
    publishDay: "Thursday",
  },
  {
    id: "downtown-summerlin",
    theme: "market",
    title: "Live near Downtown Summerlin",
    body: `${community} sits in Summerlin West with shopping, dining, and services minutes away — plus Red Rock Canyon recreation. Guard-gated Lennar 55+ living in ${HERITAGE_COMMUNITY.postalCode}. Browse homes or schedule a consultation: ${phone}.`,
    cta: { type: "LEARN_MORE", label: "Location guide", url: `${siteUrl}/downtown-summerlin` },
    suggestedPhotoAlt: "Downtown Summerlin shopping district near Heritage Stonebridge",
    publishDay: "Saturday",
  },
];
