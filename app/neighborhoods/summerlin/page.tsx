import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, TreePine, Mountain, GraduationCap, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { CanonicalRole } from "@/components/seo/CanonicalRole";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateNeighborhoodSchema,
  combineSchemas,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Summerlin West Villages | Heritage at Stonebridge 89138 | Dr. Jan Duffy",
  description:
    "Village map for Summerlin West at /neighborhoods/summerlin. Heritage at Stonebridge is Lennar's guard-gated 55+ community on Crossbridge Dr, Las Vegas, NV 89138. Listings are on /summerlin-homes.",
  path: "/neighborhoods/summerlin",
  openGraphTitle: "Summerlin West Villages and Heritage at Stonebridge",
  openGraphDescription:
    "How Summerlin villages sit around Heritage at Stonebridge in 89138, with links to the listings page and the 55+ guide.",
});

// Breadcrumb items for this page
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Neighborhoods", url: "/neighborhoods" },
  { name: "Summerlin", url: "/neighborhoods/summerlin" },
];

// FAQ data for schema
const summerlinFaqs = [
  {
    question: "What does /neighborhoods/summerlin cover?",
    answer:
      "This URL maps Summerlin villages around Heritage at Stonebridge, Lennar's guard-gated 55+ community on Crossbridge Dr in Las Vegas, NV 89138. Active Summerlin listings are on /summerlin-homes. The 55+ filter is on /summerlin-55-plus.",
  },
  {
    question: "Where is Heritage at Stonebridge inside Summerlin?",
    answer:
      "Heritage at Stonebridge sits in Summerlin West, ZIP 89138, with 421 homes and nine Lennar floor plans from 1,232 to 2,873 square feet. Dr. Jan Duffy works the community every week.",
  },
  {
    question: "What makes Summerlin different from other Las Vegas communities?",
    answer:
      "Summerlin is a Howard Hughes master plan along the west rim, with Red Rock Canyon nearby, Downtown Summerlin retail, and separate villages such as The Ridges, The Paseos, and Red Rock Country Club. School names that serve parts of Summerlin include Palo Verde High School and The Meadows School.",
  },
  {
    question: "How do I get a current Summerlin price snapshot?",
    answer:
      "This page does not publish a median price or days-on-market figure. Call Dr. Jan Duffy at (702) 789-6561 for a snapshot tied to recent Heritage at Stonebridge and Summerlin closed sales.",
  },
];

// Combined page schemas
const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateNeighborhoodSchema({
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Summerlin West village map centered on Heritage at Stonebridge, a guard-gated Lennar 55+ community of 421 homes on Crossbridge Dr, Las Vegas, NV 89138.",
    latitude: 36.1672,
    longitude: -115.331,
    containedIn: "Las Vegas",
  }),
  generateFAQSchema(summerlinFaqs)
);

export default function SummerlinPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + Place + FAQ */}
      <SchemaScript schema={pageSchemas} id="summerlin-schema" />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <span className="text-slate-900">Summerlin</span>
            </nav>
          </div>

          {/* Hero */}
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Summerlin West Villages and Heritage at Stonebridge"
            subtitle="This page maps Summerlin villages around Heritage at Stonebridge, Lennar's guard-gated 55+ community on Crossbridge Dr in Las Vegas, NV 89138."
            priority
          />

          <CanonicalRole
            path="/neighborhoods/summerlin"
            answer="Village map for buyers who start at Heritage at Stonebridge in Summerlin West. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, works the community every week."
            related={[
              {
                href: "/summerlin-homes",
                label: "Summerlin homes for sale",
                note: "Listing search for Summerlin at /summerlin-homes.",
              },
              {
                href: "/summerlin-55-plus",
                label: "Summerlin 55+ communities",
                note: "Age-restricted communities across Summerlin at /summerlin-55-plus.",
              },
              {
                href: "/community",
                label: "Heritage at Stonebridge Summerlin",
                note: "421 homes, nine floor plans, and the clubhouse at /community.",
              },
            ]}
          />

          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Summerlin West facts on this page
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">89138</div>
                <div className="text-slate-300 text-sm">Heritage ZIP on Crossbridge Dr</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">421</div>
                <div className="text-slate-300 text-sm">Heritage homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">9</div>
                <div className="text-slate-300 text-sm">Lennar floor plans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">1990</div>
                <div className="text-slate-300 text-sm">Howard Hughes master plan</div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              A current Summerlin median and days-on-market figure are not published here. Call (702) 789-6561 for a snapshot from recent closed sales.
            </p>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Summerlin villages around Heritage at Stonebridge
              </h2>
              <p>
                <strong>/neighborhoods/summerlin</strong> is the village map. Heritage at Stonebridge sits in
                Summerlin West: 421 Lennar homes, a staffed guard gate, and nine floor plans from 1,232 to
                2,873 square feet on Crossbridge Dr, Las Vegas, NV 89138. Dr. Jan Duffy, Berkshire Hathaway
                HomeServices Nevada Properties, works that community every week.
              </p>
              <p>
                Developed by The Howard Hughes Corporation since 1990, Summerlin spans 22,500 acres along the
                western rim of the Las Vegas Valley. The community offers an unparalleled lifestyle with Red Rock
                Canyon as its backdrop—providing hiking, biking, and outdoor recreation just minutes from your
                front door. With over 150 parks, 150 miles of trails, and nine golf courses, Summerlin residents
                enjoy an active, healthy lifestyle that's hard to find elsewhere in the desert Southwest.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has deep roots in Summerlin,
                and our agents walk the villages—from The Paseos to the estates of The Ridges, and from
                condos in Affinity to custom homes in Red Rock Country Club.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Red Rock Canyon Access</h4>
                  </div>
                  <p className="text-slate-600">
                    Summerlin's western location provides unmatched access to Red Rock Canyon National
                    Conservation Area. Residents enjoy world-class hiking, rock climbing, and scenic drives
                    within a 10-minute drive. The community's trail system connects directly to Red Rock,
                    making outdoor adventures a daily possibility.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Schools that serve Summerlin</h4>
                  </div>
                  <p className="text-slate-600">
                    Clark County School District campuses in and near Summerlin include Palo Verde High School,
                    West Career and Technical Academy, and Sig Rogich Middle School. Private options nearby
                    include The Meadows School and Bishop Gorman High School. Ask which campus a specific
                    lot is assigned to before you write an offer.
                  </p>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Summerlin School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Summerlin is served by the Clark County School District. Campus names below are a
                  starting list — confirm the assigned school for a specific address:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• William R. Lummis Elementary</li>
                      <li>• Marion Earl Elementary</li>
                      <li>• Helen Smith Elementary</li>
                      <li>• John C. Vanderburg Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Palo Verde High School</li>
                      <li>• West Career & Technical Academy</li>
                      <li>• Del E. Webb Middle School</li>
                      <li>• Sig Rogich Middle School</li>
                      <li>• The Meadows School (Private)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Bishop Gorman High School</li>
                      <li>• The Meadows School (K-12)</li>
                      <li>• Faith Lutheran Middle & High</li>
                      <li>• American Heritage Academy</li>
                      <li>• Pinecrest Academy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Summerlin</h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Distance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Drive Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rush Hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">30-45 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">22 miles</td><td className="px-4 py-3">28 min</td><td className="px-4 py-3">40-55 min</td></tr>
                    <tr><td className="px-4 py-3">Red Rock Canyon</td><td className="px-4 py-3">5 miles</td><td className="px-4 py-3">10 min</td><td className="px-4 py-3">10-15 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-6 w-6 text-blue-600 mr-2" />
                    <h5 className="font-bold text-slate-900">Shopping & Dining</h5>
                  </div>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Downtown Summerlin:</strong> 125+ stores, restaurants, movie theater. Apple, Nordstrom, Williams Sonoma.</li>
                    <li><strong>Boca Park:</strong> Trader Joe's, Whole Foods, local restaurants on West Charleston.</li>
                    <li><strong>Tivoli Village:</strong> Upscale outdoor shopping with Restoration Hardware, boutiques, and fine dining.</li>
                    <li><strong>Red Rock Casino Resort:</strong> Gaming, spa, multiple restaurants including T-Bones Chophouse.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-6 w-6 text-blue-600 mr-2" />
                    <h5 className="font-bold text-slate-900">Healthcare & Services</h5>
                  </div>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Summerlin Hospital:</strong> Full-service hospital with ER, labor & delivery, cardiology center.</li>
                    <li><strong>Red Rock Medical Campus:</strong> Outpatient surgery, imaging, specialty clinics.</li>
                    <li><strong>Dignity Health:</strong> Multiple urgent care and primary care locations throughout Summerlin.</li>
                    <li><strong>Southwest Medical:</strong> Multi-specialty clinics with pharmacy services.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                Nevada has no state income tax. A published Summerlin median, active-listing count, and
                days-on-market number are not on this page. Call <strong>(702) 789-6561</strong> for a
                snapshot from recent closed sales in the village you are comparing.
              </p>
              <p>
                Dr. Jan Duffy has worked Summerlin since 2008. She can tell you which streets face the
                mountains and which Heritage elevations resell. Active listings stay on{" "}
                <Link href="/summerlin-homes" className="text-blue-700 underline">/summerlin-homes</Link>.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I have worked Summerlin since 2008. I can tell you which village fits a lock-and-leave
                week, which streets face Red Rock, and how Heritage at Stonebridge resales compare with
                the rest of Summerlin West."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Summerlin Real Estate
            </h2>
            <div className="space-y-6">
              {summerlinFaqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Summerlin Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Summerlin specialist,
              for a personalized home search or free market analysis.
            </p>
            <a
              href="tel:+17027896561"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 789-6561
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: September 23, 2026</div>
      </main>
      <RealScoutListings
        title="Summerlin listings"
        subtitle="Search Summerlin inventory. The village map for Heritage at Stonebridge stays on /neighborhoods/summerlin."
      />
      <Footer />
    </>
  );
}
