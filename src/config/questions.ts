import { business } from "~/config/business";
import { community } from "~/config/community";

/**
 * Question map for Heritage at Stonebridge (added 2026-10-02).
 * Rule: answers use verified site, HOA, or developer facts only. Dues, guest rules,
 * pet rules, age rules, and live prices are NOT published as figures here. Those answers
 * point the reader to the current HOA documents or to Dr. Jan Duffy.
 * Sources: heritageatstonebridge.org; Howard Hughes "Summerlin 101 Active Adult and
 * Senior Living" fact sheet (2024-02-07); HUD housing-for-older-persons rule (80% test).
 */
export type QA = { question: string; answer: string };

const call = `Call or text Dr. Jan Duffy at ${business.telephoneDisplay}.`;

export const basicsQuestions: ReadonlyArray<QA> = [
  {
    question: "Where is Heritage at Stonebridge?",
    answer:
      "Heritage at Stonebridge is a guard-gated 55+ Lennar community in Summerlin West, Las Vegas, ZIP 89138.",
  },
  {
    question: "How many homes are in Heritage at Stonebridge?",
    answer: `The community site lists ${community.homes} single-story Lennar homes.`,
  },
  {
    question: "Is Heritage at Stonebridge part of Summerlin?",
    answer:
      "Yes. It sits in the village of Stonebridge, in the Summerlin West part of the Summerlin master plan.",
  },
  {
    question: "How close is Heritage to Red Rock Canyon and Downtown Summerlin?",
    answer:
      "Both are nearby. Red Rock Canyon National Conservation Area, Downtown Summerlin, and the Summerlin Library are the stops buyers ask about first. Drive the routes yourself on a tour day to judge the time.",
  },
];

export const ageQuestions: ReadonlyArray<QA> = [
  {
    question: "What is the age requirement to buy or live in Heritage at Stonebridge?",
    answer: `Heritage at Stonebridge is a 55+ community. Under the federal rule for 55+ housing, at least 80 percent of occupied homes must have one resident who is 55 or older. Heritage's own rules are in its recorded HOA documents, so confirm them before you write an offer. ${call}`,
  },
  {
    question: "Can children or grandchildren visit or stay overnight?",
    answer:
      "Guest and visitor rules come from the HOA, and this site does not publish them. Ask the clubhouse or read the current HOA rules before you plan a long stay.",
  },
  {
    question: "Are pets allowed in Heritage at Stonebridge?",
    answer:
      "Pet rules are set in the HOA documents. Confirm the current limits there before you buy.",
  },
];

export const hoaQuestions: ReadonlyArray<QA> = [
  {
    question: "What are the HOA fees at Heritage at Stonebridge?",
    answer: `Dues change with each year's budget, so this site does not print a monthly number. The current amount is on the HOA statement for the home you are buying. ${call} I will get the current figure for that address.`,
  },
  {
    question: "What do the HOA dues cover?",
    answer:
      "The community site describes a staffed gatehouse, the clubhouse, a fitness center, pools and spa, and pickleball and bocce courts. The exact services your dues pay for are listed in the HOA's adopted budget. Ask for it before you offer.",
  },
  {
    question: "Are there two HOA layers or special assessments?",
    answer:
      "Summerlin West has a master association, the Summerlin West Community Association. Ask for a statement that lists every association and charge on the parcel. Special assessments, transfer fees, and any improvement-district balance show up in the resale package and the parcel record during escrow.",
  },
];

export const homeQuestions: ReadonlyArray<QA> = [
  {
    question: "What floor plans does Heritage at Stonebridge offer?",
    answer:
      "Lennar built nine floor plans in three collections: Cromwell at 1,232 to 1,422 square feet, Stirling at 1,747 to 2,236 square feet, and Evander at 2,515 to 2,873 square feet.",
  },
  {
    question: "Are the homes single-story?",
    answer:
      "Yes. The community site lists single-story Lennar homes. Some sources mention a multi-generation suite on certain larger plans. Confirm that on the plan sheet for the specific home.",
  },
  {
    question: "What is Lennar's Everything's Included at Heritage?",
    answer:
      "It is Lennar's program of building popular upgrades into the base home. The finishes varied by collection and build date, so check the options sheet and seller disclosures for the home you like.",
  },
  {
    question: "What do homes in Heritage at Stonebridge cost right now?",
    answer: `List prices change with the MLS, so this site does not print a fixed range. ${call} I will send the homes on the market today.`,
  },
];

export const amenityQuestions: ReadonlyArray<QA> = [
  {
    question: "What is in the Heritage at Stonebridge clubhouse?",
    answer:
      "The clubhouse is 8,000 square feet, per the Howard Hughes Summerlin fact sheet dated February 7, 2024. It has a fitness center and social rooms, with pools, a spa, pickleball, and bocce outside.",
  },
  {
    question: "Is the community guard-gated, and how do visitors get in?",
    answer:
      "Yes. The community site describes a staffed gatehouse with round-the-clock access control. Visitors check in at the gate. It is not a shared gate code.",
  },
  {
    question: "Where is the clubhouse and what are its hours?",
    answer: `The HOA clubhouse is at ${community.clubhouseDisplay}. Clubhouse phone ${community.clubhousePhoneDisplay}. Hours posted on the community site: ${community.clubhouseHours}. That is the association building, not Dr. Jan Duffy's office.`,
  },
];

export const processQuestions: ReadonlyArray<QA> = [
  {
    question: "How do I tour a home inside the gates with Dr. Jan Duffy?",
    answer: `Call or text ${business.telephoneDisplay}. Dr. Jan Duffy books the tour and registers you at the staffed gate.`,
  },
  {
    question: "How does buying in Heritage at Stonebridge work?",
    answer:
      "Four steps. Search the live MLS. Tour the homes you pick. Read the HOA documents. Then write an offer based on sold homes inside Heritage at Stonebridge, not a valley average.",
  },
  {
    question: "Who is Dr. Jan Duffy and what license does she hold?",
    answer: `Dr. Jan Duffy is a REALTOR with Berkshire Hathaway HomeServices Nevada Properties, Nevada license ${business.license}. Office hours: ${business.hoursDisplay}.`,
  },
];

export const comparisonQuestions: ReadonlyArray<QA> = [
  {
    question: "How does Heritage compare to Sun City Summerlin, Siena, Regency, or Trilogy?",
    answer: `Heritage is the newer, smaller choice: ${community.homes} single-story Lennar homes that opened in 2021, with a staffed gate and no golf course in its published amenity lists. Sun City Summerlin is a much larger Del Webb community with golf. Regency is a Toll Brothers community, and Trilogy is a Shea Homes community of attached homes. Tour more than one before you decide.`,
  },
  {
    question: "Is Heritage better for newer construction or for mature amenities?",
    answer:
      "It fits buyers who want newer construction and a compact community. Buyers who want golf on site or a long-running club calendar usually look at the older, larger communities. Neither is better for everyone. It depends on what you will use each week.",
  },
];

export type QuestionGroup = {
  id: string;
  title: string;
  items: ReadonlyArray<QA>;
  more?: { href: string; label: string };
};

export const questionGroups: ReadonlyArray<QuestionGroup> = [
  { id: "basics", title: "Location and community basics", items: basicsQuestions },
  { id: "age-rules", title: "Age rules and residency", items: ageQuestions },
  { id: "hoa", title: "Cost and HOA", items: hoaQuestions, more: { href: "/hoa-fees", label: "HOA fees guide" } },
  { id: "homes", title: "Homes, floor plans, and builder", items: homeQuestions, more: { href: "/floor-plans", label: "Floor plans guide" } },
  { id: "amenities", title: "Amenities and clubhouse", items: amenityQuestions, more: { href: "/amenities", label: "Clubhouse and amenities" } },
  { id: "buying", title: "Buying process and agent", items: processQuestions, more: { href: "/buy-heritage-at-stonebridge", label: "Buyer guide" } },
  { id: "comparison", title: "Comparing Summerlin 55+ communities", items: comparisonQuestions, more: { href: "/community-comparison", label: "Community comparison" } },
];
