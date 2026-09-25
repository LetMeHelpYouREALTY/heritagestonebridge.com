import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Shield, Users } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import NeighborhoodPageSchema from "@/components/seo/NeighborhoodPageSchema";
import { CanonicalRole } from "@/components/seo/CanonicalRole";

export const metadata = buildPageMetadata({
  title: "Henderson Villages vs Heritage at Stonebridge | Dr. Jan Duffy",
  description:
    "/neighborhoods/henderson compares Green Valley, Inspirada, Anthem, MacDonald Highlands, and Lake Las Vegas with Heritage at Stonebridge in Summerlin West 89138. The Henderson guide is /henderson-real-estate.",
  path: "/neighborhoods/henderson",
});

const hendersonFaqs = [
  {
    question: "What does /neighborhoods/henderson cover?",
    answer:
      "This URL compares Henderson villages — Green Valley, Inspirada, MacDonald Highlands, Anthem, and Lake Las Vegas — with Heritage at Stonebridge in Summerlin West. The broader Henderson guide is /henderson-real-estate. Green Valley's own page is /neighborhoods/green-valley.",
  },
  {
    question: "How far is Henderson from Heritage at Stonebridge?",
    answer:
      "Heritage at Stonebridge is on Crossbridge Dr in Las Vegas, NV 89138. The drive from central Henderson to Summerlin West is about 22 miles, often 28 minutes off-peak and 40–55 minutes in rush hour.",
  },
  {
    question: "Which Henderson villages are on this page?",
    answer:
      "Green Valley (master plan from 1988, The District), Inspirada (resort-style amenities), MacDonald Highlands (guard-gated hillside homes), Anthem, and Lake Las Vegas (waterfront). Each has a different lot size, HOA, and commute to Harry Reid International Airport.",
  },
  {
    question: "How do I get a current Henderson price snapshot?",
    answer:
      "This page does not publish a Henderson median or days-on-market figure. Call Dr. Jan Duffy at (702) 789-6561 for a snapshot tied to recent closed sales in the village you are comparing.",
  },
];

export default function HendersonPage() {
  return (
    <>
      <NeighborhoodPageSchema
        slug="henderson"
        name="Henderson"
        description="Henderson village comparison against Heritage at Stonebridge on Crossbridge Dr, Las Vegas, NV 89138"
        latitude={36.0395}
        longitude={-114.9817}
        containedIn="Henderson"
        faqs={hendersonFaqs}
      />
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
              <span className="text-slate-900">Henderson</span>
            </nav>
          </div>

          {/* Hero */}
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Henderson Villages Compared With Heritage at Stonebridge"
            subtitle="This page lines up Green Valley, Inspirada, Anthem, MacDonald Highlands, and Lake Las Vegas against Heritage at Stonebridge on Crossbridge Dr in 89138."
            priority
          />

          <CanonicalRole
            path="/neighborhoods/henderson"
            answer="Village-by-village comparison for buyers who already know Heritage at Stonebridge and want the Henderson alternatives in one place. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties."
            related={[
              {
                href: "/henderson-real-estate",
                label: "Henderson real estate guide",
                note: "Citywide Henderson overview at /henderson-real-estate.",
              },
              {
                href: "/neighborhoods/green-valley",
                label: "Green Valley Henderson",
                note: "The 1988 master plan and The District at /neighborhoods/green-valley.",
              },
              {
                href: "/community",
                label: "Heritage at Stonebridge Summerlin",
                note: "421 Lennar homes in Summerlin West at /community.",
              },
            ]}
          />

          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Henderson facts used on this comparison
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">22 mi</div>
                <div className="text-slate-300 text-sm">Henderson to Summerlin West</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">1988</div>
                <div className="text-slate-300 text-sm">Green Valley master plan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">6 mi</div>
                <div className="text-slate-300 text-sm">To Harry Reid Airport</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">89138</div>
                <div className="text-slate-300 text-sm">Heritage ZIP, not Henderson</div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              A current Henderson median is not published here. Call (702) 789-6561 for closed-sale comps in the village you are touring.
            </p>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Henderson villages versus a Summerlin West 55+ address
              </h2>
              <p>
                <strong>/neighborhoods/henderson</strong> is the comparison. Heritage at Stonebridge is not in
                Henderson. It is on Crossbridge Dr, Las Vegas, NV 89138 — about 22 miles and 28 minutes
                off-peak from central Henderson. Use this page when a buyer is weighing that drive against
                Green Valley, Inspirada, Anthem, MacDonald Highlands, or Lake Las Vegas.
              </p>
              <p>
                Henderson is Nevada&apos;s second-largest city, with more than 320,000 residents and no state
                income tax. The District at Green Valley Ranch, Galleria at Sunset, and Henderson Hospital
                sit on the east and south sides of the valley. Harry Reid International Airport is about
                6 miles from central Henderson.
              </p>
              <p>
                The Henderson real estate market offers remarkable diversity. From the established tree-lined
                streets of <strong>Green Valley</strong> to the resort-style amenities of <strong>Inspirada</strong>,
                from the luxury estates of <strong>MacDonald Highlands</strong> to the waterfront properties at
                <strong> Lake Las Vegas</strong>—Henderson has a community for every lifestyle and budget.
                <strong> Berkshire Hathaway HomeServices Nevada Properties</strong> agents know each of these
                communities intimately.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">City services and commute</h4>
                  </div>
                  <p className="text-slate-600">
                    Henderson runs its own police and fire departments and more than 60 parks. The 215
                    Beltway and I-515 connect Green Valley and Anthem to the airport in about 12 minutes
                    off-peak. That airport commute is the practical difference versus Summerlin West.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Parks, library, and events</h4>
                  </div>
                  <p className="text-slate-600">
                    The city operates more than 60 parks, recreation centers, and the Henderson Libraries
                    system. Recurring events include the Henderson Farmers Market and the Heritage Parade.
                    Amenity lists differ by HOA — Inspirada and Anthem are not the same product as Green Valley.
                  </p>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Henderson School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Henderson addresses are served by the Clark County School District. Confirm the assigned
                  campus for a specific lot. Names below are a starting list:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• John C. Vanderburg Elementary</li>
                      <li>• Elise L. Wolff Elementary</li>
                      <li>• C.T. Sewell Elementary</li>
                      <li>• Pinecrest Academy (Charter)</li>
                      <li>• Coral Academy (Charter)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Coronado High School</li>
                      <li>• Green Valley High School</li>
                      <li>• Foothill High School</li>
                      <li>• Bob Miller Middle School</li>
                      <li>• Del E. Webb Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Henderson International School</li>
                      <li>• Coral Academy of Science</li>
                      <li>• Pinecrest Academy</li>
                      <li>• The Adelson School</li>
                      <li>• St. Peter the Apostle</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Henderson</h3>
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
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">6 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">15-25 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">22 miles</td><td className="px-4 py-3">28 min</td><td className="px-4 py-3">40-55 min</td></tr>
                    <tr><td className="px-4 py-3">Lake Mead</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">20-25 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Henderson's central location provides excellent access to the 215 Beltway and I-515/US-95,
                making commutes to all parts of the valley convenient.
              </p>

              {/* Major Employers */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Major Henderson Employers</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <ul className="text-slate-600 space-y-2">
                  <li><strong>Barclays:</strong> Credit card operations center (~3,000 employees)</li>
                  <li><strong>Credit One Bank:</strong> Corporate headquarters</li>
                  <li><strong>City of Henderson:</strong> Municipal services</li>
                  <li><strong>Henderson Hospital:</strong> Healthcare services</li>
                </ul>
                <ul className="text-slate-600 space-y-2">
                  <li><strong>Station Casinos:</strong> Green Valley Ranch, Sunset Station</li>
                  <li><strong>Levi Strauss:</strong> Distribution center</li>
                  <li><strong>Amazon:</strong> Fulfillment center nearby</li>
                  <li><strong>St. Rose Dominican:</strong> Hospital system</li>
                </ul>
              </div>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Entertainment</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>The District at Green Valley Ranch:</strong> Outdoor shopping, restaurants, movie theater.</li>
                    <li><strong>Galleria at Sunset:</strong> Major mall with Macy's, Dillard's, 140+ stores.</li>
                    <li><strong>Green Valley Ranch Resort:</strong> Casino, spa, restaurants, concerts.</li>
                    <li><strong>Henderson Farmers Market:</strong> Weekly local produce and artisan goods.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare Facilities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Henderson Hospital:</strong> Full-service hospital, 24/7 ER, labor & delivery.</li>
                    <li><strong>St. Rose Dominican:</strong> Three locations in Henderson—Siena, San Martin, Rose de Lima.</li>
                    <li><strong>Southwest Medical:</strong> Multiple clinics throughout Henderson.</li>
                    <li><strong>Dignity Health:</strong> Urgent care and primary care facilities.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                This page does not publish a Henderson median, listing count, or days-on-market figure.
                Call <strong>(702) 789-6561</strong> for comps in the village you are comparing with
                Heritage at Stonebridge.
              </p>
              <p>
                Dr. Jan Duffy can walk the HOA differences between Green Valley, Inspirada, and MacDonald
                Highlands, then put those next to the Heritage guard gate and clubhouse in 89138. The
                citywide write-up stays on{" "}
                <Link href="/henderson-real-estate" className="text-blue-700 underline">/henderson-real-estate</Link>.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "If you are deciding between a Henderson village and Heritage at Stonebridge, I put the
                drive time, HOA, and floor plan on one sheet. The airport is closer in Henderson. The
                guard-gated 55+ clubhouse is in Summerlin West."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Henderson Real Estate
            </h2>
            <div className="space-y-6">
              {hendersonFaqs.map((faq) => (
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
              Find Your Henderson Home Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Henderson expert,
              for personalized guidance and local market insights.
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
        title="Henderson listings"
        subtitle="Search Henderson inventory. The village comparison with Heritage at Stonebridge stays on /neighborhoods/henderson."
      />
      <Footer />
    </>
  );
}
