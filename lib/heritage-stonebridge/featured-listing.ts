/**
 * Featured Heritage resale: 894 Heritage Bend Drive.
 * Facts from GLVAR via the RealScout listing, checked October 8, 2026.
 * Open-house times are from that same listing record (MLS 2825123).
 * Confirm price, status, and fees on the live listing before an offer.
 */
const PHOTO_BASE =
  "https://d1buiexcd5gara.cloudfront.net/property_photos/glvartrestle/001/192/632/982";

const photoAlt =
  "894 Heritage Bend Drive in Heritage at Stonebridge, Summerlin West, Las Vegas 89138";

export const FEATURED_LISTING = {
  path: "/listings/894-heritage-bend-drive",
  status: "For Sale",
  price: 539888,
  priceDisplay: "$539,888",
  plan: "Lennar Claremont",
  stories: 1,
  beds: 2,
  baths: 2,
  sqft: 1234,
  lotSqft: 5227,
  yearBuilt: 2025,
  garageSpaces: 2,
  mlsNumber: "2825123",
  listDate: "2026-10-06",
  checkedOn: "October 8, 2026",
  sourceName: "Greater Las Vegas Association of Realtors (GLVAR)",
  listingBrokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  realscoutUrl:
    "https://drjanduffy.realscout.com/homesearch/listings/p-894-heritage-bend-drive-las-vegas-89138-glvartrestle-177",
  virtualTourUrl: "https://www.propertypanorama.com/instaview/las/2825123",
  address: {
    street: "894 Heritage Bend Drive",
    city: "Las Vegas",
    state: "NV",
    zip: "89138",
  },
  associationName: "Heritage Heights",
  associationFeeMonthly: 350,
  associationFeeTotalMonthly: 419,
  taxAnnualAmount: 1557,
  parcelNumber: "137-33-819-051",
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
  summary:
    "One-story Lennar Claremont plan with an open great room, an island kitchen, and a walk-in primary closet. The owner added a front-entry sitting area, a paver patio, custom decorative gates, wall-to-wall garage cabinets, and custom closet shelving.",
  paragraphs: [
    "Inside, the Lennar Claremont plan offers 2 bedrooms, 2 baths, and 1,234 square feet. The great room is open to an island kitchen with quartz counters, a breakfast bar, a gas range, and the included appliances. The primary bedroom is 11 by 12 with a walk-in closet. The second bedroom is 14 by 10. The living room is 21 by 12.",
    "Heritage at Stonebridge is a guard-gated, age-qualified 55+ community in Summerlin West. Occupancy is subject to the association's governing documents and applicable law. Amenities include a clubhouse, fitness center, heated lap pool, spa, pickleball courts, and bocce. The built-ins convey with the home.",
  ],
  facts: [
    { label: "Property type", value: "Single family, one story" },
    { label: "Condition", value: "Resale, built 2025" },
    { label: "Furnished", value: "Partially" },
    { label: "Flooring", value: "Carpet and ceramic tile" },
    { label: "Kitchen", value: "Island, breakfast bar, quartz counters" },
    {
      label: "Appliances",
      value: "Dryer, dishwasher, disposal, gas range, microwave, refrigerator, and washer",
    },
    { label: "Laundry", value: "Laundry room with electric and gas dryer hookups" },
    { label: "Patio", value: "Covered patio and porch" },
    { label: "Yard", value: "Block fence, desert landscaping, drip irrigation" },
    { label: "Garage", value: "2-car attached garage with door opener" },
    { label: "Roof", value: "Tile" },
    { label: "Heating and cooling", value: "Central gas heat and central electric air" },
    { label: "Private pool", value: "No — community pool" },
    { label: "Fireplace", value: "No" },
    {
      label: "Schools on the MLS record",
      value:
        "Billy & Rosemary Vassiliadis Elementary, Sig Rogich Middle School, Palo Verde High School. Assignment is set by the Clark County School District.",
    },
  ],
  directions:
    "From the 215 West, exit Hughes Park Drive East. Turn left onto West Charleston Boulevard, right onto North Sky Vista Drive, and left onto Crossbridge Drive. Turn left onto Heritage Heights Drive, then right to stay on Heritage Heights Drive. At the traffic circle, turn right onto Heritage Bend Drive. The home is on the right.",
  disclaimer:
    "Listing information courtesy of the Greater Las Vegas Association of Realtors (GLVAR). Copyright Greater Las Vegas Association of Realtors. All rights reserved. Information is deemed reliable but not guaranteed and should be independently verified. Listing offered by Berkshire Hathaway HomeServices Nevada Properties. MLS 2825123. Checked October 8, 2026. A property shown for sale may later have sold or been withdrawn.",
} as const;

export const FEATURED_LISTING_FAQS = [
  {
    question: "When is the open house at 894 Heritage Bend Drive?",
    answer:
      "Open houses are Saturday, October 10, 2026, from 12:00–2:00 p.m. and Sunday, October 11, 2026, from 10:00 a.m.–12:00 p.m. Call Dr. Jan Duffy or book a tour for a private showing.",
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
