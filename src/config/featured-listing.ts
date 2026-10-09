/**
 * Featured Heritage resale: 894 Heritage Bend Drive.
 * Facts from GLVAR via the RealScout listing, checked October 8, 2026.
 * Open-house times are from that listing record (MLS 2825123).
 */
const PHOTO_BASE =
  "https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982";

const photoAlt =
  "894 Heritage Bend Drive in Heritage at Stonebridge, Summerlin West, Las Vegas 89138";

export const featuredListing = {
  path: "/new-listing-heritage-at-stonebridge",
  status: "For Sale",
  priceDisplay: "$539,888",
  price: 539888,
  plan: "Lennar Claremont",
  beds: 2,
  baths: 2,
  sqft: "1,234",
  lotSqft: "5,227",
  yearBuilt: 2025,
  mlsNumber: "2825123",
  listDate: "2026-10-06",
  checkedOn: "October 8, 2026",
  sourceName: "Greater Las Vegas Association of Realtors (GLVAR)",
  listingBrokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  realscoutUrl:
    "https://drjanduffy.realscout.com/homesearch/listings/p-894-heritage-bend-drive-las-vegas-89138-glvartrestle-177",
  virtualTourUrl: "https://www.propertypanorama.com/instaview/las/2825123",
  street: "894 Heritage Bend Drive",
  city: "Las Vegas",
  region: "NV",
  postalCode: "89138",
  associationName: "Heritage Heights",
  associationFeeMonthly: 350,
  associationFeeTotalMonthly: 419,
  taxAnnualAmount: 1557,
  summary:
    "One-story Lennar Claremont plan with an open great room, an island kitchen, and a walk-in primary closet. The owner added a front-entry sitting area, a paver patio, custom decorative gates, wall-to-wall garage cabinets, and custom closet shelving.",
  photos: [
    {
      src: `${PHOTO_BASE}/e14fa7aa382184aba629d9dfb0e5949bab01d1de`,
      alt: `Covered front patio and entry at ${photoAlt}`,
    },
    {
      src: `${PHOTO_BASE}/fa54161ac3329f063ec92e8f1056d726977c6961`,
      alt: photoAlt,
    },
    {
      src: `${PHOTO_BASE}/c0517048327f3d5d65af7c109aa85867ada79514`,
      alt: photoAlt,
    },
    {
      src: `${PHOTO_BASE}/1bbe3e8eeddd24cf87b9e6234706d84e472795a3`,
      alt: photoAlt,
    },
    {
      src: `${PHOTO_BASE}/08229214051f82f67f72124bb18a3f637dcc70b9`,
      alt: photoAlt,
    },
  ],
  openHouses: [
    {
      label: "Saturday, October 10, 2026",
      time: "12:00–2:00 p.m.",
      start: "2026-10-10T12:00:00-07:00",
      end: "2026-10-10T14:00:00-07:00",
    },
    {
      label: "Sunday, October 11, 2026",
      time: "10:00 a.m.–12:00 p.m.",
      start: "2026-10-11T10:00:00-07:00",
      end: "2026-10-11T12:00:00-07:00",
    },
  ],
} as const;

export const featuredListingFaqs = [
  {
    question: "When is the open house at 894 Heritage Bend Drive?",
    answer:
      "Open houses are Saturday, October 10, 2026, from 12:00–2:00 p.m. and Sunday, October 11, 2026, from 10:00 a.m.–12:00 p.m. Call or text (702) 789-6561 for a private showing.",
  },
  {
    question: "What are the association fees for 894 Heritage Bend Drive?",
    answer:
      "GLVAR lists a $350 monthly association fee and a $419 monthly association fee total for Heritage Heights. Confirm the current assessment in the resale package before you write an offer.",
  },
  {
    question: "What floor plan is 894 Heritage Bend Drive?",
    answer:
      "It is the Lennar Claremont plan: one story, 2 bedrooms, 2 baths, and 1,234 square feet on a 5,227 square foot lot, built in 2025. MLS 2825123. List price $539,888 as of October 8, 2026.",
  },
] as const;
