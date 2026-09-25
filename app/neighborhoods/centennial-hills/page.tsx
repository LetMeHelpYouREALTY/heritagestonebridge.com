import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Mountain, Users, ShoppingBag, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { CanonicalRole } from "@/components/seo/CanonicalRole";

export const metadata: Metadata = buildPageMetadata({
  title: "Centennial Hills Real Estate | Near Summerlin & Heritage Stonebridge",
  description:
    "Centennial Hills Las Vegas homes near Summerlin West. Dr. Jan Duffy helps buyers comparing northwest valley neighborhoods and Heritage at Stonebridge 55+ in 89138.",
  path: "/neighborhoods/centennial-hills",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does /neighborhoods/centennial-hills cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This URL is the US-95 guide for Centennial Hills: Centennial Hills Park and Centennial Center. Skye Canyon is on /neighborhoods/skye-canyon. The City of North Las Vegas is on /neighborhoods/north-las-vegas.",
      },
    },
    {
      "@type": "Question",
      name: "How is Centennial Hills different from Skye Canyon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centennial Hills follows US-95 and includes Centennial Hills Park and Centennial Center. Skye Canyon is organized around the 15-acre Skye Center beside Floyd Lamb Park. Confirm which master plan the address sits in.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Centennial Hills from the Las Vegas Strip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centennial Hills is approximately 20-25 minutes from the Strip via US-95. The freeway is the practical difference versus Skye Canyon and versus Heritage at Stonebridge in Summerlin West.",
      },
    },
    {
      "@type": "Question",
      name: "What shopping and amenities are near Centennial Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Centennial Center provides extensive shopping, dining, and entertainment including Target, Costco, and numerous restaurants. Downtown Summerlin is also easily accessible for additional retail and entertainment options.",
      },
    },
  ],
};

export default function CentennialHillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <span className="text-slate-900">Centennial Hills</span>
            </nav>
          </div>

          {/* Hero */}
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Centennial Hills: US-95, the Park, and Centennial Center"
            subtitle="This page is the US-95 corridor in northwest Las Vegas — Centennial Hills Park and Centennial Center. Skye Canyon and its 15-acre center are a different page."
            priority
          />

          <CanonicalRole
            path="/neighborhoods/centennial-hills"
            answer="Northwest Las Vegas guide along US-95. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, keeps Centennial Hills separate from Skye Canyon and from the City of North Las Vegas."
            related={[
              {
                href: "/neighborhoods/skye-canyon",
                label: "Skye Canyon and Skye Center",
                note: "The 15-acre amenity site at /neighborhoods/skye-canyon.",
              },
              {
                href: "/neighborhoods/north-las-vegas",
                label: "North Las Vegas city",
                note: "Aliante and Tule Springs at /neighborhoods/north-las-vegas.",
              },
              {
                href: "/neighborhoods/summerlin",
                label: "Summerlin West and Heritage",
                note: "Heritage at Stonebridge in 89138 at /neighborhoods/summerlin.",
              },
            ]}
          />

          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Centennial Hills facts on this page
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">US-95</div>
                <div className="text-slate-300 text-sm">Freeway spine</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">Park</div>
                <div className="text-slate-300 text-sm">Centennial Hills Park</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">Center</div>
                <div className="text-slate-300 text-sm">Centennial Center shops</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">NW</div>
                <div className="text-slate-300 text-sm">Las Vegas</div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              A current Centennial Hills median is not published here. Call (702) 789-6561 for comps on the street you are touring.
            </p>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Centennial Hills along US-95
              </h2>
              <p>
                <strong>Centennial Hills</strong> represents the best of established northwest Las Vegas
                living. While newer communities like Skye Canyon attract attention, Centennial Hills
                has older streets, more mature landscaping, and Centennial Center already built.
                <strong> Berkshire Hathaway HomeServices</strong> uses this page for the US-95
                side of northwest Las Vegas.
              </p>
              <p>
                The community's appeal starts with location. Positioned at the base of the mountains
                with easy access to US-95, Centennial Hills provides quick commutes throughout the
                valley while maintaining a distinctly suburban atmosphere. The mountains are visible
                from most streets, creating the feeling of living closer to nature than Centennial
                Hills' urban conveniences would suggest.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented
                Centennial Hills families since the community's earliest phases. Dr. Jan Duffy knows
                which streets offer the best mountain views, which school zones are most sought-after,
                and which HOAs maintain their communities to the highest standards. This deep local
                knowledge, combined with the BHHS commitment to client service, ensures Centennial
                Hills buyers and sellers receive exceptional representation.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Established Family Community</h4>
                  </div>
                  <p className="text-slate-600">
                    Centennial Hills has matured into a true community where neighbors know each other
                    and families put down roots. The area features multiple established parks including
                    the popular Centennial Hills Park, community events throughout the year, and the
                    kind of neighborhood stability that creates lifelong friendships and strong property values.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Centennial Center Convenience</h4>
                  </div>
                  <p className="text-slate-600">
                    Centennial Center provides residents with comprehensive shopping, dining, and
                    entertainment options without leaving the neighborhood. Major retailers like Target,
                    Costco, and Home Depot anchor the center, while diverse restaurants and services
                    meet daily needs. Downtown Summerlin is also just minutes away.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Centennial Hills School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Centennial Hills is served by established, well-regarded schools with proven track records:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Ober Elementary (8/10)</li>
                      <li>• Cashman Elementary</li>
                      <li>• Scherkenbach Elementary</li>
                      <li>• Hummel Elementary</li>
                      <li>• McMillan Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Centennial High School (7/10)</li>
                      <li>• Shadow Ridge High School</li>
                      <li>• Arbor View High School</li>
                      <li>• Becker Middle School</li>
                      <li>• Escobedo Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Charter/Private</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pinecrest Academy</li>
                      <li>• Somerset Academy</li>
                      <li>• Coral Academy of Science</li>
                      <li>• Faith Lutheran (nearby)</li>
                      <li>• The Meadows School (nearby)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Centennial Hills</h3>
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
                    <tr><td className="px-4 py-3">Downtown Summerlin</td><td className="px-4 py-3">6 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">18-25 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">30-45 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">25 miles</td><td className="px-4 py-3">30 min</td><td className="px-4 py-3">45-60 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Centennial Hills' proximity to US-95 provides excellent north-south access throughout the valley.
              </p>

              {/* Shopping & Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Centennial Center</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Major Retail:</strong> Target, Costco, Home Depot, Best Buy, Kohl's</li>
                    <li><strong>Grocery:</strong> Smith's, Trader Joe's, Whole Foods nearby</li>
                    <li><strong>Dining:</strong> 50+ restaurants including Red Robin, BJ's, Cheesecake Factory</li>
                    <li><strong>Entertainment:</strong> Century 18 Theatres, bowling, fitness centers</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Centennial Hills Hospital:</strong> Full-service hospital, 24/7 ER, maternity center</li>
                    <li><strong>Southwest Medical:</strong> Multiple primary care and urgent care locations</li>
                    <li><strong>Dignity Health:</strong> Clinics and specialty services</li>
                    <li><strong>VA Medical Center:</strong> 10 minutes for veteran services</li>
                  </ul>
                </div>
              </div>

              {/* Parks & Recreation */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Parks & Recreation</h3>
              <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Centennial Hills offers extensive parks and recreation facilities:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Centennial Hills Park:</strong> 120 acres with sports fields, playground, skate park, dog park</li>
                    <li><strong>Centennial Hills YMCA:</strong> Full fitness facility, pools, youth programs</li>
                    <li><strong>Centennial Hills Library:</strong> Modern library with programs and events</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Angel Park Golf Club:</strong> Two public courses, 36 holes of golf</li>
                    <li><strong>Floyd Lamb Park:</strong> 15 minutes—680 acres, lakes, wildlife viewing</li>
                    <li><strong>Mountain Trails:</strong> Easy access to BLM land for hiking and biking</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                This page does not publish a Centennial Hills median, listing count, or days-on-market
                figure. Call <strong>(702) 789-6561</strong> for comps near Centennial Center or
                Centennial Hills Park.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in Centennial Hills means
                partnering with agents who understand the community's evolution and can identify
                properties that represent genuine value. Dr. Jan Duffy helps buyers look beyond
                surface features to evaluate factors that matter long-term: construction quality,
                lot positioning, HOA health, and school quality. That expertise translates into
                better purchase decisions and stronger long-term investments.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Centennial Hills offers something newer communities are still building: a genuine
                sense of community. The schools have track records, the neighbors have history, and
                the landscaping is mature. As a Berkshire Hathaway HomeServices agent, I help families
                see beyond the shiny new construction to communities that have proven their value
                over time."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Centennial Hills
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What does /neighborhoods/centennial-hills cover?
                </h3>
                <p className="text-slate-600">
                  This URL is the US-95 guide for Centennial Hills: Centennial Hills Park and Centennial Center. Skye Canyon is on /neighborhoods/skye-canyon. The City of North Las Vegas is on /neighborhoods/north-las-vegas.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How is Centennial Hills different from Skye Canyon?
                </h3>
                <p className="text-slate-600">
                  Centennial Hills follows US-95 and includes Centennial Hills Park and Centennial Center. Skye Canyon is organized around the 15-acre Skye Center beside Floyd Lamb Park. Confirm which master plan the address sits in.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How far is Centennial Hills from the Las Vegas Strip?
                </h3>
                <p className="text-slate-600">
                  Centennial Hills is approximately 20-25 minutes from the Strip via US-95.
                  The community offers easy freeway access while maintaining a suburban,
                  The freeway is the practical difference versus Skye Canyon and versus Heritage at Stonebridge in Summerlin West.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What shopping and amenities are near Centennial Hills?
                </h3>
                <p className="text-slate-600">
                  Centennial Center provides extensive shopping, dining, and entertainment
                  including Target, Costco, and numerous restaurants. Downtown Summerlin is
                  also easily accessible for additional retail and entertainment options.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Centennial Hills Home
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Centennial Hills expert,
              for guidance in this established family community.
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
        title="Centennial Hills listings"
        subtitle="Search US-95 corridor inventory. The park and center guide stays on /neighborhoods/centennial-hills."
      />
      <Footer />
    </>
  );
}
