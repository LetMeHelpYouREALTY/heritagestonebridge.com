import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Waves, TreePine, GraduationCap, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { CanonicalRole } from "@/components/seo/CanonicalRole";

export const metadata: Metadata = buildPageMetadata({
  title: "Inspirada Henderson Real Estate | Dr. Jan Duffy, BHHS",
  description:
    "Inspirada homes in Henderson with Dr. Jan Duffy, BHHS — resort-style living compared to Summerlin 55+ options like Heritage at Stonebridge.",
  path: "/neighborhoods/inspirada",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does /neighborhoods/inspirada cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This URL is the west Henderson Inspirada page: resort pools, trails, and newer streets. The 1988 Green Valley master plan, including The District, is on /neighborhoods/green-valley.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities does Inspirada offer residents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inspirada features resort-style pools with water features, miles of walking trails, multiple parks, sports courts, and community gathering spaces. The HOA maintains these amenities to resort standards, creating a vacation-like atmosphere.",
      },
    },
    {
      "@type": "Question",
      name: "Which schools serve Inspirada addresses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inspirada addresses are in the Clark County School District inside Henderson. Confirm the assigned campus for the lot before you write an offer. Campus names change by village inside the master plan.",
      },
    },
    {
      "@type": "Question",
      name: "Is Inspirada a good investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inspirada has shown strong appreciation as one of Las Vegas's top-selling master-planned communities. The combination of resort amenities, Henderson location, and continued development suggests ongoing demand and value growth.",
      },
    },
  ],
};

export default function InspiradaPage() {
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
              <span className="text-slate-900">Inspirada</span>
            </nav>
          </div>

          {/* Hero */}
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Inspirada: Resort Pools in West Henderson"
            subtitle="This page is Inspirada only — resort pools, trails, and newer west Henderson streets. The 1988 Green Valley master plan is a different page."
            priority
          />

          <CanonicalRole
            path="/neighborhoods/inspirada"
            answer="West Henderson resort-plan guide. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, tours Inspirada separately from Green Valley and from Heritage at Stonebridge."
            related={[
              {
                href: "/neighborhoods/green-valley",
                label: "Green Valley 1988 master plan",
                note: "The District and mature trees at /neighborhoods/green-valley.",
              },
              {
                href: "/neighborhoods/henderson",
                label: "Henderson village comparison",
                note: "Henderson set next to Heritage at /neighborhoods/henderson.",
              },
              {
                href: "/community",
                label: "Heritage at Stonebridge",
                note: "Guard-gated 55+ in 89138 at /community.",
              },
            ]}
          />

          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Inspirada facts on this page
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">Pools</div>
                <div className="text-slate-300 text-sm">Resort-style water</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">Trails</div>
                <div className="text-slate-300 text-sm">Inside the plan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">West</div>
                <div className="text-slate-300 text-sm">Henderson</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">Later</div>
                <div className="text-slate-300 text-sm">Than Green Valley 1988</div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              A current Inspirada median is not published here. Call (702) 789-6561 for comps on the street you are touring.
            </p>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Inspirada: Henderson's Award-Winning Resort-Style Community
              </h2>
              <p>
                <strong>Inspirada</strong> redefines what a master-planned community can be. This
                2,000-acre development in Henderson consistently ranks among the nation's top-selling
                communities, and for good reason: Inspirada delivers resort-style amenities that make
                every day feel like a vacation. <strong>Berkshire Hathaway HomeServices</strong>
                is proud to represent buyers and sellers in this exceptional community.
              </p>
              <p>
                The community's amenity package rivals many resorts. Multiple pools feature water
                slides, splash pads, and cabanas. Miles of walking and biking trails wind through
                the community, connecting to neighborhood parks and gathering spaces. Sports courts,
                fitness facilities, and community events create an active, engaged lifestyle that
                brings neighbors together. These amenities aren't afterthoughts—they're central
                to Inspirada's identity.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides free
                buyer representation on Inspirada new construction purchases. With multiple builders
                offering homes in the community, navigating options can be overwhelming. Dr. Jan Duffy
                helps buyers compare builders, negotiate upgrades, and avoid common new construction
                pitfalls. For resales, BHHS agents identify properties where previous owners made
                smart upgrade decisions, delivering better value than comparable new construction.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Waves className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Resort-Style Pools & Amenities</h4>
                  </div>
                  <p className="text-slate-600">
                    Inspirada's pools aren't typical community pools—they're resort experiences.
                    Water slides, splash pads for kids, lap lanes for exercise, and shaded cabanas
                    for relaxation create a vacation atmosphere steps from your front door. The
                    HOA maintains these facilities to exceptional standards year-round.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Trails, Parks & Active Living</h4>
                  </div>
                  <p className="text-slate-600">
                    Miles of walking and biking trails connect Inspirada's neighborhoods, parks,
                    and amenity centers. Whether you're training for a marathon or taking an evening
                    stroll, the trail system encourages an active lifestyle. Community events—from
                    outdoor movies to fitness classes—bring neighbors together throughout the year.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Inspirada School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Inspirada is served by excellent Henderson schools, with newer facilities built to
                  serve the growing community:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Inspirada Elementary (New)</li>
                      <li>• Lomie Heard Elementary</li>
                      <li>• Glen Taylor Elementary</li>
                      <li>• Wright Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Coronado High School (8/10)</li>
                      <li>• Foothill High School</li>
                      <li>• Del Webb Middle School</li>
                      <li>• Mannion Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Options</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Henderson International</li>
                      <li>• Pinecrest Academy</li>
                      <li>• Coral Academy</li>
                      <li>• The Adelson School</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Inspirada</h3>
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
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-30 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Henderson</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">15-25 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Green Valley</td><td className="px-4 py-3">5 miles</td><td className="px-4 py-3">10 min</td><td className="px-4 py-3">12-18 min</td></tr>
                    <tr><td className="px-4 py-3">Lake Mead</td><td className="px-4 py-3">25 miles</td><td className="px-4 py-3">30 min</td><td className="px-4 py-3">35-40 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Amenities Detail */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Inspirada Amenity Centers</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Resort Pool Complex</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Resort-style pool with cabanas</li>
                    <li>• Water slides and splash features</li>
                    <li>• Zero-entry family pool</li>
                    <li>• Lap lanes for fitness swimming</li>
                    <li>• Poolside WiFi and refreshments</li>
                    <li>• Extended summer hours</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Active Living Amenities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• 10+ miles of walking/biking trails</li>
                    <li>• Multiple neighborhood parks</li>
                    <li>• Tennis and pickleball courts</li>
                    <li>• Basketball courts</li>
                    <li>• Dog parks</li>
                    <li>• Community fitness classes</li>
                  </ul>
                </div>
              </div>

              {/* Builders */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Builders in Inspirada</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Toll Brothers:</strong> Larger plans and upgrade packages. Ask for the current sheet.</li>
                    <li><strong>Beazer Homes:</strong> Energy-efficient designs.</li>
                    <li><strong>Lennar:</strong> Everything&apos;s Included packages.</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Woodside Homes:</strong> Ask which plans are still releasing.</li>
                    <li><strong>Richmond American:</strong> Personalization options on current releases.</li>
                    <li><strong>Century Communities:</strong> Modern plans. Confirm what is still for sale.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                This page does not publish an Inspirada median, listing count, or days-on-market
                figure. Call <strong>(702) 789-6561</strong> for the current builder sheet or a
                resale comp on the street you are touring.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for your Inspirada purchase
                means working with agents who understand the community's various neighborhoods, which
                builders offer the best quality, and which lots provide the best value. Dr. Jan Duffy
                has helped dozens of families find their Inspirada homes, and that experience
                translates into better outcomes for buyers navigating this popular community.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Inspirada isn't just a place to live—it's a lifestyle. Families move here for the
                pools, the trails, and the community events that make weekends special. As a
                Berkshire Hathaway HomeServices agent, I help clients find the specific neighborhood
                within Inspirada that matches how they want to live, whether that's close to the
                main pool complex or on a quiet cul-de-sac backing to open space."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Inspirada
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What does /neighborhoods/inspirada cover?
                </h3>
                <p className="text-slate-600">
                  This URL is the west Henderson Inspirada page: resort pools, trails, and newer streets. The 1988 Green Valley master plan, including The District, is on /neighborhoods/green-valley.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What amenities does Inspirada offer residents?
                </h3>
                <p className="text-slate-600">
                  Inspirada features resort-style pools with water features, miles of walking trails,
                  multiple parks, sports courts, and community gathering spaces. The HOA maintains
                  these amenities to resort standards, creating a vacation-like atmosphere.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Which schools serve Inspirada addresses?
                </h3>
                <p className="text-slate-600">
                  Inspirada addresses are in the Clark County School District inside Henderson. Confirm the assigned campus for the lot before you write an offer. Campus names change by village inside the master plan.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Is Inspirada a good investment?
                </h3>
                <p className="text-slate-600">
                  Inspirada has shown strong appreciation as one of Las Vegas's top-selling master-planned
                  communities. The combination of resort amenities, Henderson location, and continued
                  development suggests ongoing demand and value growth.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Inspirada Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Inspirada specialist,
              for expert guidance in Henderson's premier resort-style community.
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
        title="Inspirada listings"
        subtitle="Search west Henderson inventory. The resort-pool guide stays on /neighborhoods/inspirada."
      />
      <Footer />
    </>
  );
}
