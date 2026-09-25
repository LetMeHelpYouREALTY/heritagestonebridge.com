import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, DollarSign, TrendingUp, Home as HomeIcon, Users } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { CanonicalRole } from "@/components/seo/CanonicalRole";

export const metadata: Metadata = buildPageMetadata({
  title: "North Las Vegas Real Estate | Dr. Jan Duffy, BHHS",
  description:
    "North Las Vegas homes with Dr. Jan Duffy — affordable valley options near Summerlin and 55+ communities.",
  path: "/neighborhoods/north-las-vegas",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does /neighborhoods/north-las-vegas cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This URL is the City of North Las Vegas page, including Aliante and Tule Springs. Skye Canyon and Centennial Hills are in the City of Las Vegas and have their own pages.",
      },
    },
    {
      "@type": "Question",
      name: "Is North Las Vegas a good area to buy a home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North Las Vegas has transformed dramatically with new master-planned communities, improved infrastructure, and major employment centers. It offers excellent value for first-time buyers and investors seeking positive cash flow on rental properties.",
      },
    },
    {
      "@type": "Question",
      name: "What new construction is available in North Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Major builders including Lennar, KB Home, Richmond American, and Century Communities offer new construction in North Las Vegas. Communities like Aliante, Tule Springs, and Valley Vista feature modern designs with energy-efficient features.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Berkshire Hathaway HomeServices for North Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BHHS provides expert guidance for first-time buyers navigating the purchase process, plus free representation on new construction purchases. Dr. Jan Duffy helps clients find value while avoiding common pitfalls in emerging neighborhoods.",
      },
    },
  ],
};

export default function NorthLasVegasPage() {
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
              <span className="text-slate-900">North Las Vegas</span>
            </nav>
          </div>

          {/* Hero */}
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="North Las Vegas: Aliante, Tule Springs, and the City Line"
            subtitle="This page is the City of North Las Vegas — Aliante and Tule Springs. Skye Canyon and Centennial Hills sit in Las Vegas and have their own pages."
            priority
          />

          <CanonicalRole
            path="/neighborhoods/north-las-vegas"
            answer="City of North Las Vegas guide. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, uses this page when the address is inside North Las Vegas, not northwest Las Vegas."
            related={[
              {
                href: "/neighborhoods/skye-canyon",
                label: "Skye Canyon",
                note: "Las Vegas master plan at /neighborhoods/skye-canyon.",
              },
              {
                href: "/neighborhoods/centennial-hills",
                label: "Centennial Hills",
                note: "US-95 and Centennial Center at /neighborhoods/centennial-hills.",
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
              North Las Vegas facts on this page
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">City</div>
                <div className="text-slate-300 text-sm">North Las Vegas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">Aliante</div>
                <div className="text-slate-300 text-sm">Master plan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">Tule</div>
                <div className="text-slate-300 text-sm">Tule Springs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">New</div>
                <div className="text-slate-300 text-sm">Builder inventory</div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-slate-300">
              A current North Las Vegas median is not published here. Call (702) 789-6561 for comps in the community you are touring.
            </p>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                North Las Vegas: The Valley's Best Value for First-Time Buyers
              </h2>
              <p>
                <strong>North Las Vegas</strong> has undergone a remarkable transformation over the past
                decade. What was once considered a distant suburb is now a thriving city with new
                master-planned communities, major employers, and infrastructure improvements that make
                it the Las Vegas Valley's best opportunity for affordable homeownership. <strong>Berkshire
                Hathaway HomeServices</strong> is proud to help first-time buyers and investors
                discover North Las Vegas's potential.
              </p>
              <p>
                North Las Vegas is its own city. Aliante and Tule Springs sit inside that city line.
                Skye Canyon and Centennial Hills do not. Nevada has no state income tax. A published
                median for the city is not on this page — call <strong>(702) 789-6561</strong> for
                comps in the community you are touring.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides the same
                expert service in North Las Vegas as we do in the valley's luxury markets. Dr. Jan Duffy
                helps first-time buyers understand the purchase process, navigate financing options, and
                avoid common pitfalls. For new construction—where builders' sales agents represent the
                builder, not you—BHHS provides free buyer representation that can save thousands in
                upgrades and negotiations.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">City line</h4>
                  </div>
                  <p className="text-slate-600">
                    Confirm the city on the tax record. Aliante and Tule Springs are North Las Vegas.
                    Skye Canyon and Centennial Hills are Las Vegas. Builder names on the street include
                    Lennar, KB Home, Richmond American, and Century Communities. Ask for the current
                    price sheet instead of a valley-wide median.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Rapid Growth & Development</h4>
                  </div>
                  <p className="text-slate-600">
                    North Las Vegas is experiencing unprecedented growth with new retail centers, improved
                    roads, and major employers moving to the area. The city's population has grown over
                    30% in the past decade, bringing new amenities, restaurants, and services. This growth
                    trajectory suggests continued appreciation for today's buyers.
                  </p>
                </div>
              </div>

              {/* Major Employers */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Major North Las Vegas Employers</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  North Las Vegas has attracted major employers, creating local jobs and driving housing demand:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 space-y-2">
                    <li><strong>Amazon:</strong> Multiple fulfillment centers employing 5,000+</li>
                    <li><strong>Fanatics:</strong> Sports merchandise distribution (~3,000 jobs)</li>
                    <li><strong>Sephora:</strong> Major distribution center</li>
                    <li><strong>Chewy:</strong> Pet supply distribution center</li>
                  </ul>
                  <ul className="text-slate-600 space-y-2">
                    <li><strong>City of North Las Vegas:</strong> Growing municipal workforce</li>
                    <li><strong>North Las Vegas Airport:</strong> Aviation and logistics</li>
                    <li><strong>Nellis Air Force Base:</strong> Major employer just east</li>
                    <li><strong>Las Vegas Motor Speedway:</strong> Events and hospitality</li>
                  </ul>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">North Las Vegas Schools</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  North Las Vegas is served by Clark County School District, with newer schools in
                  master-planned communities often performing above area averages:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Top Elementary</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Aliante Elementary</li>
                      <li>• Oran K. Gragson Elementary</li>
                      <li>• Mabel Hoggard Elementary</li>
                      <li>• Tate Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Canyon Springs High School</li>
                      <li>• Legacy High School</li>
                      <li>• Aliante Middle School</li>
                      <li>• Sawyer Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Charter Options</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pinecrest Academy North</li>
                      <li>• Somerset Academy</li>
                      <li>• Coral Academy of Science</li>
                      <li>• SLAM! Academy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from North Las Vegas</h3>
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
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-30 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">30-45 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">30-45 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                The 215 Beltway provides excellent access from North Las Vegas to all parts of the valley.
                Many Amazon/warehouse workers live in NLV for the short commute to nearby facilities.
              </p>

              {/* New Construction Communities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">New Construction Communities</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Active Builder Communities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Aliante:</strong> Master plan with golf, a casino, and a town center.</li>
                    <li><strong>Tule Springs:</strong> Near I-215. Builders have included KB Home and Lennar.</li>
                    <li><strong>Valley Vista:</strong> Parks and pools. Century Communities has built here.</li>
                    <li><strong>Camino Al Norte:</strong> Near the 215, with more than one builder.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>North Vista Hospital:</strong> Full-service hospital with ER, surgical center.</li>
                    <li><strong>VA Southern Nevada Healthcare:</strong> Veterans medical facility on Craig Road.</li>
                    <li><strong>Southwest Medical:</strong> Multiple urgent care and primary care locations.</li>
                    <li><strong>Aliante Station Casino:</strong> Entertainment, dining, and gaming nearby.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current market shows <strong>892 active listings</strong> with homes averaging
                <strong> 32 days on market</strong>—slightly longer than the valley average, giving
                buyers more time to make informed decisions. Year-over-year appreciation of <strong>3.2%</strong>
                is more modest than luxury markets but represents solid, sustainable growth. Investors
                find particularly strong opportunities here, with rental yields often exceeding 6%.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in North Las Vegas means
                getting honest guidance about which neighborhoods offer the best value, which builders
                have the best reputations, and which areas are poised for the strongest appreciation.
                Dr. Jan Duffy won't push you toward a more expensive area when North Las Vegas fits
                your needs—that integrity is what sets BHHS apart from agencies focused solely on
                commission.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I tell first-time buyers the truth: you don't need to stretch your budget to own a
                great home. North Las Vegas offers brand-new construction with modern features at
                prices that let you build wealth instead of struggling with payments. As a Berkshire
                Hathaway HomeServices agent, my job is to find the right fit—not the highest price."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About North Las Vegas
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What does /neighborhoods/north-las-vegas cover?
                </h3>
                <p className="text-slate-600">
                  This URL is the City of North Las Vegas page, including Aliante and Tule Springs. Skye Canyon and Centennial Hills are in the City of Las Vegas and have their own pages.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Is North Las Vegas a good area to buy a home?
                </h3>
                <p className="text-slate-600">
                  North Las Vegas has transformed dramatically with new master-planned communities,
                  improved infrastructure, and major employment centers. It offers excellent value for
                  first-time buyers and investors seeking positive cash flow on rental properties.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What new construction is available in North Las Vegas?
                </h3>
                <p className="text-slate-600">
                  Major builders including Lennar, KB Home, Richmond American, and Century Communities
                  offer new construction in North Las Vegas. Communities like Aliante, Tule Springs,
                  and Valley Vista feature modern designs with energy-efficient features.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Why choose Berkshire Hathaway HomeServices for North Las Vegas?
                </h3>
                <p className="text-slate-600">
                  BHHS provides expert guidance for first-time buyers navigating the purchase process,
                  plus free representation on new construction purchases. Dr. Jan Duffy helps clients
                  find value while avoiding common pitfalls in emerging neighborhoods.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Homeownership Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices North Las Vegas expert,
              for guidance on finding affordable homes that fit your budget.
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
        title="North Las Vegas listings"
        subtitle="Search City of North Las Vegas inventory. The Aliante and Tule Springs guide stays on /neighborhoods/north-las-vegas."
      />
      <Footer />
    </>
  );
}
