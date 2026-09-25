import { SITE_CONTACT } from "@/lib/site-contact";
import { formatBusinessHoursShort } from "@/lib/hours";

/** Queries Google shows under “People also search for” for this Business Profile. */
export const SEARCH_INTENT_LINKS = [
  {
    href: "/homes-for-sale",
    label: "Heritage Stonebridge homes for sale",
  },
  {
    href: "/reviews",
    label: "Heritage Stonebridge reviews",
  },
  {
    href: "/homes-for-rent",
    label: "Heritage Stonebridge for rent",
  },
  {
    href: "/homes-for-rent",
    label: "Heritage Stonebridge homes for rent",
  },
  {
    href: "/community",
    label: "Heritage at Stonebridge Summerlin",
  },
  {
    href: "/hoa-fees",
    label: "Heritage at Stonebridge HOA",
  },
  {
    href: "/floor-plans",
    label: "Heritage Stonebridge floor plans",
  },
  {
    href: "/stonebridge-las-vegas",
    label: "Stonebridge Las Vegas",
  },
] as const;

export const SEARCH_INTENT_FAQS = [
  {
    question: "Where are Heritage Stonebridge homes for sale?",
    answer: `Heritage Stonebridge homes for sale are Lennar resales in the guard-gated 55+ community at ${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}. Search the live MLS on this site or call ${SITE_CONTACT.phone.display}.`,
  },
  {
    question: "Where can I read Heritage Stonebridge reviews?",
    answer: `Heritage Stonebridge reviews are the Google reviews for ${SITE_CONTACT.businessName}. This site does not invent star ratings. Open the Google listing from the reviews page, or call ${SITE_CONTACT.phone.display}.`,
  },
  {
    question: "Are there Heritage Stonebridge homes for rent?",
    answer:
      "Heritage at Stonebridge is an ownership community. A home for rent, when an owner offers one, needs a written lease on file with the HOA before that tenant uses the clubhouse. This site does not publish a rental feed. Call for what is available, and read the CC&Rs before assuming a short stay is allowed.",
  },
  {
    question: "What is the Heritage at Stonebridge HOA?",
    answer:
      "The Heritage at Stonebridge HOA covers the guard gate, clubhouse, pools, and common-area landscaping. Recent resale listings showed about $410–$419 a month combined with the Summerlin master fee. Confirm the current amount in the resale package.",
  },
  {
    question: "What are the business hours?",
    answer: `${SITE_CONTACT.businessName} is open ${formatBusinessHoursShort()}. Phone ${SITE_CONTACT.phone.display}.`,
  },
] as const;
