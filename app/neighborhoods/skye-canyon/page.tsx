import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Mountain, Users, Home as HomeIcon, GraduationCap } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { CanonicalRole } from "@/components/seo/CanonicalRole";

export const metadata: Metadata = buildPageMetadata({
  title: "Skye Canyon Real Estate | Northwest Las Vegas | Dr. Jan Duffy",
  description:
    "Skye Canyon homes in northwest Las Vegas. Dr. Jan Duffy covers Skye Canyon and nearby Summerlin West 55+ at Heritage at Stonebridge.",
  path: "/neighborhoods/skye-canyon",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does /neighborhoods/skye-canyon cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This URL is the northwest Las Vegas guide for Skye Canyon: the 15-acre Skye Center, community trails, and Floyd Lamb Park next door. Centennial Hills is on /neighborhoods/centennial-hills.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities does Skye Canyon offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skye Canyon features Skye Center, a 15-acre amenity complex with resort-style pools, fitness center, sports courts, and event spaces. The community also offers miles of trails, parks, and is adjacent to Floyd Lamb Park.",
      },
    },
    {
      "@type": "Question",
      name: "How is Skye Canyon different from Centennial Hills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skye Canyon is organized around the 15-acre Skye Center and sits next to Floyd Lamb Park. Centennial Hills is the US-95 corridor with Centennial Hills Park and Centennial Center. They are different master plans.",
      },
    },
    {
      "@type": "Question",
      name: "Why use Berkshire Hathaway HomeServices for Skye Canyon new construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BHHS provides free buyer representation on new construction purchases—the builder pays our commission. Dr. Jan Duffy can negotiate upgrades, review contracts, and ensure your interests are protected when builder sales agents work for the builder.",
      },
    },
  ],
};

export default function SkyeCanyonPage() {
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
              <span className="text-slate-900">Skye Canyon</span>
            </nav>
          </div>

          {/* Hero */}
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Skye Canyon: the 15-Acre Skye Center and Floyd Lamb Park"
            subtitle="This page is northwest Las Vegas only — Skye Center pools, trails, and the edge of Floyd Lamb Park. Centennial Hills and US-95 are a different page."
            priority
          />

          <CanonicalRole
            path="/neighborhoods/skye-canyon"
            answer="Northwest Las Vegas guide centered on the 15-acre Skye Center. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, keeps this tour off the Centennial Hills and North Las Vegas pages."
            related={[
              {
                href: "/neighborhoods/centennial-hills",
                label: "Centennial Hills and US-95",
                note: "Centennial Center and the park at /neighborhoods/centennial-hills.",
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
              Skye Canyon facts on this page
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">15 ac</div>
                <div className="text-slate-300 text-sm">Skye Center</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">NW</div>
                <div className="text-slate-300 text-sm">Las Vegas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">Park</div>
                <div className="text-slate-300 text-sm">Floyd Lamb next door</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">Trails</div>
                <div className="text-slate-300 text-sm">Inside the community</div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              A current Skye Canyon median is not published here. Call (702) 789-6561 for comps on the street you are touring.
            </p>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Skye Canyon: Northwest Las Vegas's Most Exciting New Community
              </h2>
              <p>
                <strong>Skye Canyon</strong> represents the future of Las Vegas master-planned living.
                This 1,700-acre community in northwest Las Vegas has quickly become one of the valley's
                most sought-after addresses, consistently ranking among the nation's top-selling
                master-planned communities. <strong>Berkshire Hathaway HomeServices</strong> is proud
                to help buyers discover what makes Skye Canyon special.
              </p>
              <p>
                What sets Skye Canyon apart is Skye Center—a stunning 15-acre amenity complex that
                rivals resort facilities. The facility features multiple pools including a zero-entry
                family pool and lap pool, a state-of-the-art fitness center, tennis and pickleball
                courts, and flexible event spaces that host community gatherings throughout the year.
                From summer movie nights to holiday celebrations, Skye Center creates the kind of
                community connections that transform neighborhoods into true communities.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> offers free buyer
                representation on all Skye Canyon new construction purchases. This is crucial because
                when you walk into a builder's sales center, those agents work for the builder—not you.
                Dr. Jan Duffy represents your interests, negotiates upgrades, reviews contracts for
                hidden pitfalls, and ensures you're getting fair value. This service costs buyers
                nothing—builders pay the commission.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Skye Center Amenities</h4>
                  </div>
                  <p className="text-slate-600">
                    Skye Center is the community's social hub, featuring resort-style pools, a modern
                    fitness center, sports courts, and community gathering spaces. The facility hosts
                    year-round events from outdoor movie nights to fitness classes, creating a vibrant
                    community atmosphere. Nothing else in northwest Las Vegas compares.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Mountain Views & Open Space</h4>
                  </div>
                  <p className="text-slate-600">
                    Skye Canyon's position at the base of the mountains provides stunning views and
                    easy access to outdoor recreation. Adjacent Floyd Lamb Park offers 680 acres of
                    lakes, wildlife, and natural beauty. The community's trail system connects to
                    regional paths, perfect for walking, running, and cycling.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Skye Canyon Schools</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Skye Canyon features newer schools purpose-built for the community, plus access to
                  established northwest schools:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Skye Canyon Elementary (New)</li>
                      <li>• Floyd Elementary</li>
                      <li>• Mabel Hoggard Elementary</li>
                      <li>• Escobedo Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Shadow Ridge High School</li>
                      <li>• Arbor View High School</li>
                      <li>• Bilbray Middle School</li>
                      <li>• Garrett Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Charter/Private</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pinecrest Academy</li>
                      <li>• Somerset Academy</li>
                      <li>• Coral Academy</li>
                      <li>• Faith Lutheran (15 min)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Skye Canyon</h3>
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
                    <tr><td className="px-4 py-3">Downtown Summerlin</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-30 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">22 miles</td><td className="px-4 py-3">28 min</td><td className="px-4 py-3">40-55 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Centennial Hills</td><td className="px-4 py-3">5 miles</td><td className="px-4 py-3">10 min</td><td className="px-4 py-3">12-18 min</td></tr>
                    <tr><td className="px-4 py-3">Floyd Lamb Park</td><td className="px-4 py-3">Adjacent</td><td className="px-4 py-3">5 min</td><td className="px-4 py-3">5 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Builders */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Active Builders in Skye Canyon</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Premium Builders</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Toll Brothers:</strong> Larger plans and customization. Ask for the current sheet.</li>
                    <li><strong>Woodside Homes:</strong> Confirm which collections are still releasing.</li>
                    <li><strong>Shea Homes:</strong> Energy-efficient designs.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Value Builders</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Lennar:</strong> Everything&apos;s Included packages.</li>
                    <li><strong>KB Home:</strong> Energy Star options and buyer personalization.</li>
                    <li><strong>Century Communities:</strong> Confirm which plans are still for sale.</li>
                  </ul>
                </div>
              </div>

              {/* Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Skye Canyon Amenities</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Skye Center Features</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Resort-style pool with cabanas</li>
                    <li>• Zero-entry family pool and splash pad</li>
                    <li>• Lap pool for fitness swimming</li>
                    <li>• State-of-the-art fitness center</li>
                    <li>• Tennis and pickleball courts</li>
                    <li>• Community event lawn</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Outdoor Recreation</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Floyd Lamb Park (680 acres adjacent)</li>
                    <li>• 10+ miles of community trails</li>
                    <li>• Multiple neighborhood parks</li>
                    <li>• Dog parks throughout community</li>
                    <li>• Mountain biking access</li>
                    <li>• Desert hiking nearby</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                This page does not publish a Skye Canyon median, listing count, or days-on-market
                figure. Call <strong>(702) 789-6561</strong> for the current builder sheet or a
                resale comp near Skye Center.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for your Skye Canyon purchase
                means working with agents who know which builders offer the best quality, which lots
                have the best views, and which upgrades deliver the best value. Dr. Jan Duffy has
                helped dozens of families find their Skye Canyon homes, and that experience translates
                into better outcomes for buyers navigating this competitive market.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Skye Canyon is the tour that starts at the 15-acre Skye Center. The amenities are on site,
                the homes are modern and energy-efficient, and the community vibe is exactly what people
                are looking for. As a Berkshire Hathaway HomeServices agent, I make sure my clients get
                the best value—whether that's negotiating builder upgrades or finding a resale with
                features already included."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Skye Canyon
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What does /neighborhoods/skye-canyon cover?
                </h3>
                <p className="text-slate-600">
                  This URL is the northwest Las Vegas guide for Skye Canyon: the 15-acre Skye Center, community trails, and Floyd Lamb Park next door. Centennial Hills is on /neighborhoods/centennial-hills.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What amenities does Skye Canyon offer?
                </h3>
                <p className="text-slate-600">
                  Skye Canyon features Skye Center, a 15-acre amenity complex with resort-style pools,
                  fitness center, sports courts, and event spaces. The community also offers miles of
                  trails, parks, and is adjacent to Floyd Lamb Park.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How is Skye Canyon different from Centennial Hills?
                </h3>
                <p className="text-slate-600">
                  Skye Canyon is organized around the 15-acre Skye Center and sits next to Floyd Lamb Park. Centennial Hills is the US-95 corridor with Centennial Hills Park and Centennial Center. They are different master plans.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Why use Berkshire Hathaway HomeServices for Skye Canyon new construction?
                </h3>
                <p className="text-slate-600">
                  BHHS provides free buyer representation on new construction purchases—the builder pays
                  our commission. Dr. Jan Duffy can negotiate upgrades, review contracts, and ensure
                  your interests are protected when builder sales agents work for the builder.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Skye Canyon Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Skye Canyon specialist,
              for expert guidance on new construction and resale homes.
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
        title="Skye Canyon listings"
        subtitle="Search northwest Las Vegas inventory. The Skye Center guide stays on /neighborhoods/skye-canyon."
      />
      <Footer />
    </>
  );
}
