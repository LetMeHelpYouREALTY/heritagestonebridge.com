import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  DollarSign,
  Sun,
  Home as HomeIcon,
  Briefcase,
  Plane,
  GraduationCap,
  Heart,
  Calculator,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { californiaRelocatorMetadata } from "@/lib/seo/static-page-metadata";

export const metadata = californiaRelocatorMetadata;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can I save moving from California to Nevada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevada has no state income tax. A savings figure for your income and the home you would sell is a call to (702) 789-6561, not a published percentage.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods do California relocators prefer in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "California buyers often tour Summerlin (master-planned villages and Red Rock access), Henderson (Green Valley, Inspirada, Anthem), and The Ridges (six guard-gated villages). A price comparison is a call to (702) 789-6561.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to establish Nevada residency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevada residency can be established immediately upon moving. To benefit from no state income tax, you should update your driver's license, register your vehicles, and register to vote in Nevada. Most people complete this within 30 days of their move.",
      },
    },
    {
      "@type": "Question",
      name: "What does my California home equity buy in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the California home and the Las Vegas floor plan. This page does not publish a conversion ratio. Call (702) 789-6561 for comps on both sides.",
      },
    },
    {
      "@type": "Question",
      name: "Are there direct flights from Las Vegas to California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Las Vegas has extensive flight options to California. Southwest, United, and other carriers offer dozens of daily flights to LAX, SFO, SAN, and other California airports. Flight times are typically 1-1.5 hours.",
      },
    },
  ],
};

const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  telephone: "+17027896561",
  url: "https://www.heritagestonebridge.com/buyers/california-relocator",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Crossbridge Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89138",
  },
  areaServed: ["Las Vegas, NV 89138", "Summerlin West, Las Vegas, NV"],
};

export default function CaliforniaRelocatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/buyers" className="hover:text-blue-600">Buyers</Link>
              {" / "}
              <span className="text-slate-900">California Relocator</span>
            </nav>
          </div>

          {/* Hero */}
          <PageHero
            badge="California to Las Vegas"
            title="Relocating from California? Welcome to Las Vegas"
            subtitle="Nevada has no state income tax. A price comparison for the home you would sell is a call to (702) 789-6561, not a published percentage."
            priority
          >
            <a
              href="tel:+17027896561"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Start Your Tax-Free Life → (702) 789-6561
            </a>
          </PageHero>

          {/* Tax Savings Comparison */}
          <section className="mb-16 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="h-10 w-10 mr-3" />
              <h2 className="text-3xl font-bold">Nevada has no state income tax</h2>
            </div>
            <p className="text-center text-green-100 text-lg max-w-3xl mx-auto">
              California taxes wage income. Nevada does not. Housing, HOA, and property tax
              depend on the address. Call (702) 789-6561 for a comparison of the home you would sell.
            </p>
          </section>

          {/* What Your CA Equity Buys */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Compare the home you would sell with a current Las Vegas comp
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto">
              This page does not publish a California-to-Las Vegas price conversion.
              Dr. Jan runs it from the home you would sell and the floor plan you are touring.
              Call (702) 789-6561.
            </p>
          </section>

          {/* Top Neighborhoods for CA Relocators */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Top 3 Neighborhoods for California Relocators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold text-xl">Summerlin</h3>
                  <p className="text-blue-100 text-sm">Call for comps</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    Master-planned villages, Downtown Summerlin, trails, and Red Rock Canyon access.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Often toured by:</strong> Buyers leaving Orange County and coastal California
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Downtown Summerlin
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      150+ parks & trails
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Upscale dining & shopping
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/summerlin"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore Summerlin →
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-green-600 text-white p-4">
                  <h3 className="font-bold text-xl">Henderson / Inspirada</h3>
                  <p className="text-green-100 text-sm">Call for comps</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    Henderson is a separate city. Inspirada has resort pools and trails.
                    This page does not publish a safety ranking.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Often toured by:</strong> Buyers comparing San Diego suburbs with west Henderson
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Tech job growth
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Resort pools and trails
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      New construction options
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/henderson"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore Henderson →
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-purple-600 text-white p-4">
                  <h3 className="font-bold text-xl">The Ridges</h3>
                  <p className="text-purple-100 text-sm">Call for comps</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    Six guard-gated villages along Red Rock. Call (702) 789-6561 for a current comp.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Best for:</strong> Beverly Hills/Newport Beach luxury buyers
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Guard-gated privacy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom home sites
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Red Rock Canyon access
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/the-ridges"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore The Ridges →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Remote Work Lifestyle */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Remote Work, Vegas Lifestyle</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4">
                  Keep your California salary, lose the California taxes. Thousands of tech workers,
                  executives, and entrepreneurs have discovered that Las Vegas offers the perfect
                  remote work base:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Same income, lower costs:</strong> Keep your Bay Area salary while paying Nevada prices</span>
                  </li>
                  <li className="flex items-start">
                    <Plane className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Easy travel:</strong> Direct flights to SFO, LAX, SJC for when you need to be in-office</span>
                  </li>
                  <li className="flex items-start">
                    <Sun className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Work-life balance:</strong> Golf at 2pm, hike Red Rock after work, world-class dining</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Henderson Tech Corridor</h3>
                <p className="text-slate-600 mb-4">
                  Google's $600M data center. Amazon Web Services. Switch Supernap. Henderson is
                  becoming a legitimate tech hub, with companies attracted by zero corporate
                  income tax and quality of life.
                </p>
                <p className="text-sm text-slate-500">
                  Many California tech workers find themselves with <em>more</em> local job options
                  after moving to Vegas than they expected.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              California Relocator FAQs
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How much can I save moving from California to Nevada?
                </h3>
                <p className="text-slate-600">
                  Nevada has no state income tax. Housing, HOA, and property tax depend on the
                  address. A comparison for the home you would sell is a call to (702) 789-6561.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What neighborhoods do California relocators prefer?
                </h3>
                <p className="text-slate-600">
                  California buyers often tour Summerlin for master-planned villages and Red Rock
                  access, Henderson for Green Valley and Inspirada, and The Ridges for six
                  guard-gated villages. A current price comparison is a call to (702) 789-6561.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How long does it take to establish Nevada residency?
                </h3>
                <p className="text-slate-600">
                  Nevada residency can be established immediately upon moving. To benefit from no
                  state income tax, update your driver's license, register your vehicles, and
                  register to vote in Nevada. Most people complete this within 30 days.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Are there direct flights from Las Vegas to California?
                </h3>
                <p className="text-slate-600">
                  Yes! Las Vegas has extensive flight options to California. Southwest, United, and
                  other carriers offer dozens of daily flights to LAX, SFO, SAN, and other California
                  airports. Flight times are typically 1-1.5 hours.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What about schools compared to California?
                </h3>
                <p className="text-slate-600">
                  Clark County School District assigns the zoned campus by address. Dr. Jan looks
                  up the campus name and the drive time for the homes you tour. She does not rank
                  schools on this page.
                </p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I've helped hundreds of California families make the move to Las Vegas. The most
                common reaction? 'Why didn't we do this sooner?' Between the tax savings, the space,
                and the lifestyle, most clients can't believe what their California equity buys here.
                As a <strong>Berkshire Hathaway HomeServices</strong> agent, I coordinate with our
                California offices to make the transition seamless—you don't have to figure this
                out alone."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Tax-Free Life?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a personalized relocation consultation with Dr. Jan Duffy. She'll show you exactly
              what your California equity buys in Las Vegas and help you find the perfect neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17027896561"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call/Text (702) 789-6561
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: September 23, 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
