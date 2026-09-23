import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, TreePine, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { CanonicalRole } from "@/components/seo/CanonicalRole";

export const metadata: Metadata = buildPageMetadata({
  title: "Green Valley Henderson 1988 Master Plan | Dr. Jan Duffy",
  description:
    "/neighborhoods/green-valley covers the 1988 Green Valley master plan, The District at Green Valley Ranch, and how Green Valley, Green Valley Ranch, and Green Valley South differ. Henderson's city page is /neighborhoods/henderson.",
  path: "/neighborhoods/green-valley",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
        name: "What does /neighborhoods/green-valley cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This URL is the Green Valley Henderson page: the 1988 master plan, The District at Green Valley Ranch, Legacy Golf Club, and the split between Green Valley, Green Valley Ranch, and Green Valley South. The citywide Henderson comparison is /neighborhoods/henderson.",
      },
    },
    {
      "@type": "Question",
      name: "How is Green Valley different from Green Valley Ranch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Green Valley is the 1988 master plan with mature trees and larger lots. Green Valley Ranch is the later area around the resort and The District. Green Valley South is a separate pocket with its own price band. Dr. Jan Duffy walks all three before you write an offer.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Green Valley different from newer Henderson communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Green Valley dates to 1988. Streets have mature trees, many lots are larger than Inspirada's, and The District outdoor shops sit inside the trade area. Newer Henderson villages were built later with different HOA amenities.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a current Green Valley price snapshot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This page does not publish a Green Valley median or days-on-market figure. Call Dr. Jan Duffy at (702) 789-6561 for comps near The District, Legacy Golf Club, or Green Valley South.",
      },
    },
  ],
};

export default function GreenValleyPage() {
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
              <span className="text-slate-900">Green Valley</span>
            </nav>
          </div>

          {/* Hero */}
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Green Valley Henderson: 1988 Master Plan and The District"
            subtitle="This page is Green Valley only — the 1988 master plan, The District at Green Valley Ranch, and the split between Green Valley, Green Valley Ranch, and Green Valley South."
            priority
          />

          <CanonicalRole
            path="/neighborhoods/green-valley"
            answer="Street-level guide to Henderson's 1988 master plan. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, separates Green Valley from Green Valley Ranch and Green Valley South before you tour."
            related={[
              {
                href: "/neighborhoods/henderson",
                label: "Henderson villages compared with Heritage",
                note: "Citywide village comparison at /neighborhoods/henderson.",
              },
              {
                href: "/neighborhoods/mountains-edge",
                label: "Mountains Edge southwest Las Vegas",
                note: "Exploration Peak and I-215 at /neighborhoods/mountains-edge.",
              },
              {
                href: "/henderson-real-estate",
                label: "Henderson real estate guide",
                note: "Broader Henderson overview at /henderson-real-estate.",
              },
            ]}
          />

          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Green Valley facts on this page
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">1988</div>
                <div className="text-slate-300 text-sm">Master plan year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">3</div>
                <div className="text-slate-300 text-sm">Areas: GV, GVR, GV South</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">7 mi</div>
                <div className="text-slate-300 text-sm">To Harry Reid Airport</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">19 ac</div>
                <div className="text-slate-300 text-sm">Paseo Verde Park</div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              A current Green Valley median is not published here. Call (702) 789-6561 for comps in the pocket you are touring.
            </p>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Green Valley, Green Valley Ranch, and Green Valley South
              </h2>
              <p>
                <strong>/neighborhoods/green-valley</strong> covers one Henderson master plan, started in
                1988. Mature trees line many streets. The District at Green Valley Ranch — outdoor shops,
                a movie theater, and the resort — sits in the later Green Valley Ranch area, which is not
                the same product as the original streets or Green Valley South.
              </p>
              <p>
                Thirty-five years of growth produced shade trees and lots that are often larger than
                Inspirada&apos;s. Campus names in the trade area include Green Valley High School, Coronado
                High School, and Elise L. Wolff Elementary. Confirm the assigned school for the address
                before you rely on it.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> agents have been selling
                homes in Green Valley for years. Dr. Jan Duffy separates mountain-view streets, HOA
                maintenance, and the three pockets — Green Valley, Green Valley Ranch, and Green Valley
                South — before you write an offer.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Mature Landscaping & Character</h4>
                  </div>
                  <p className="text-slate-600">
                    Green Valley's 35+ years of growth have created tree-lined streets and lush landscaping
                    that newer communities simply can't match. The established vegetation provides shade,
                    privacy, and a sense of permanence. Many homes feature larger lots than you'll find in
                    newer developments, with mature fruit trees and professional landscaping.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">The District at Green Valley Ranch</h4>
                  </div>
                  <p className="text-slate-600">
                    The District is Henderson's premier outdoor shopping and entertainment destination.
                    This pedestrian-friendly center features upscale retailers, diverse dining options,
                    a luxury movie theater, and regular community events. Green Valley residents enjoy
                    easy access to this lifestyle amenity that draws visitors from across the valley.
                  </p>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Green Valley School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Green Valley addresses are served by the Clark County School District. Confirm the
                  assigned campus. Names below are a starting list:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Elise L. Wolff Elementary</li>
                      <li>• C.T. Sewell Elementary</li>
                      <li>• Gordon McCaw Elementary</li>
                      <li>• John C. Vanderburg Elementary</li>
                      <li>• Gene Ward Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Green Valley High School</li>
                      <li>• Coronado High School</li>
                      <li>• Bob Miller Middle School</li>
                      <li>• Burkholder Middle School</li>
                      <li>• Greenspun Junior High</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Options</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Henderson International School</li>
                      <li>• Pinecrest Academy (Charter)</li>
                      <li>• Coral Academy of Science</li>
                      <li>• St. Peter the Apostle School</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Green Valley</h3>
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
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">7 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">18-25 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Henderson</td><td className="px-4 py-3">3 miles</td><td className="px-4 py-3">8 min</td><td className="px-4 py-3">10-15 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">20 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr><td className="px-4 py-3">Lake Mead</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">25-30 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Recreation</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Entertainment</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>The District at Green Valley Ranch:</strong> Premier outdoor shopping with Anthropologie, Crate & Barrel, REI, and 60+ shops.</li>
                    <li><strong>Green Valley Ranch Resort:</strong> Casino, spa, multiple restaurants, concert venue.</li>
                    <li><strong>Trader Joe's & Whole Foods:</strong> Both locations within 5 minutes of most Green Valley homes.</li>
                    <li><strong>Galleria at Sunset:</strong> 10-minute drive to major mall with Macy's, Dillard's, 140+ stores.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Parks & Recreation</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Whitney Mesa Recreation Area:</strong> Dog park, trails, mountain views.</li>
                    <li><strong>Paseo Verde Park:</strong> 19-acre park with splash pad, tennis courts, playground.</li>
                    <li><strong>Green Valley Athletic Club:</strong> Full-service gym with pools, tennis, dining.</li>
                    <li><strong>Legacy Golf Club:</strong> Challenging 18-hole public course designed by Arthur Hills.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                This page does not publish a Green Valley median, listing count, or days-on-market figure.
                Call <strong>(702) 789-6561</strong> for comps in Green Valley proper, Green Valley Ranch,
                or Green Valley South.
              </p>
              <p>
                Those three pockets have different lot sizes, HOAs, and distances to The District.
                Dr. Jan Duffy tours them as separate products. The citywide Henderson comparison stays on{" "}
                <Link href="/neighborhoods/henderson" className="text-blue-700 underline">/neighborhoods/henderson</Link>.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "When a buyer wants the 1988 streets, I show Green Valley. When they want the resort and
                The District, I show Green Valley Ranch. Those are different tours, and this page is where
                I separate them."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Green Valley Real Estate
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What does /neighborhoods/green-valley cover?
                </h3>
                <p className="text-slate-600">
                  This URL is the Green Valley Henderson page: the 1988 master plan, The District at Green Valley Ranch, and the split between Green Valley, Green Valley Ranch, and Green Valley South. The citywide Henderson comparison is /neighborhoods/henderson.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How is Green Valley different from Green Valley Ranch?
                </h3>
                <p className="text-slate-600">
                  Green Valley is the 1988 master plan with mature trees and larger lots. Green Valley Ranch is the later area around the resort and The District. Green Valley South is a separate pocket with its own price band. Dr. Jan Duffy walks all three before you write an offer.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What makes Green Valley different from newer Henderson communities?
                </h3>
                <p className="text-slate-600">
                  Green Valley dates to 1988. Streets have mature trees, many lots are larger than Inspirada&apos;s, and The District outdoor shops sit inside the trade area. Newer Henderson villages were built later with different HOA amenities.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How do I get a current Green Valley price snapshot?
                </h3>
                <p className="text-slate-600">
                  This page does not publish a Green Valley median or days-on-market figure. Call Dr. Jan Duffy at (702) 789-6561 for comps near The District, Legacy Golf Club, or Green Valley South.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Green Valley Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Green Valley specialist,
              for a tour of the 1988 streets, Green Valley Ranch, or Green Valley South.
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
        title="Green Valley listings"
        subtitle="Search Green Valley and Green Valley Ranch inventory. The 1988 master-plan guide stays on /neighborhoods/green-valley."
      />
      <Footer />
    </>
  );
}
