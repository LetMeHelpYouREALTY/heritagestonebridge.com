import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Home, DollarSign, BarChart, Phone, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market Questions | Berkshire Hathaway HomeServices",
  description:
    "How Dr. Jan Duffy prices Heritage at Stonebridge. Current medians are not published here. Call (702) 789-6561 for a snapshot.",
  keywords: [
    "Las Vegas real estate market",
    "Las Vegas home prices 2026",
    "Henderson real estate market",
    "Nevada housing market",
    "Berkshire Hathaway market report",
  ],
};

// Report Schema
const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "Heritage at Stonebridge market questions",
  datePublished: "2026-09-23",
  author: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy",
    worksFor: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  about: {
    "@type": "Place",
    name: "Las Vegas, Nevada",
  },
};

export default function MarketReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <PageHero
            badge="Berkshire Hathaway HomeServices Market Intelligence"
            title="Las Vegas Real Estate Market Report"
            subtitle="This page does not publish a median, days on market, or inventory figure. Dr. Jan Duffy prices Heritage at Stonebridge from recent sales of the same floor plan. Call (702) 789-6561."
            priority
          />

          {/* Key Stats Overview */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Where the current numbers live
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-6">
              Medians, days on market, and inventory are not published on this page.
              The live MLS search is on the homes-for-sale page. A Heritage at Stonebridge
              snapshot is a phone call.
            </p>
            <p className="text-center">
              <a href="tel:+17027896561" className="inline-flex items-center font-bold underline">
                <Phone className="h-5 w-5 mr-2" />
                (702) 789-6561
              </a>
            </p>
          </section>

          {/* Area Breakdown */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Areas this office actually works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Heritage at Stonebridge", fact: "Guard-gated Lennar 55+ on Crossbridge Dr, Summerlin West 89138. Nine floor plans." },
                { area: "Summerlin West", fact: "Master-planned villages with trails and Red Rock Canyon access." },
                { area: "Henderson", fact: "Separate city. Green Valley, Inspirada, and Anthem are different products." },
                { area: "Sun City Anthem", fact: "Del Webb 55+ with the Anthem Center and two golf courses." },
                { area: "Southern Highlands", fact: "Robert Trent Jones Jr. golf and I-15 access." },
                { area: "The Ridges", fact: "Six guard-gated villages along Red Rock." },
              ].map((item) => (
                <div
                  key={item.area}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{item.area}</h3>
                  <p className="text-slate-600 text-sm">{item.fact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Expert Analysis */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Expert Market Analysis
            </h2>
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-6">
                "I price Heritage at Stonebridge from the last closed sales of the same floor plan.
                A valley-wide median is not the number I put on a listing."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <Home className="h-5 w-5 text-blue-600 mr-2" />
                  For Buyers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Price from recent comps, not a valley average</li>
                  <li>• Get a pre-approval before you tour</li>
                  <li>• Ask the builder for this week&apos;s incentive before the first visit</li>
                  <li>• Nevada has no state income tax</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  For Sellers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Price from the last closed sales of the same plan</li>
                  <li>• Weekend open houses still matter</li>
                  <li>• HOA dues come off the net sheet</li>
                  <li>• A current days-on-market figure is a call</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Trends */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Key Market Trends to Watch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">California Migration</h3>
                <p className="text-slate-600 text-sm">
                  Continued influx of California buyers seeking affordability and no state income
                  tax. Summerlin and Henderson remain top destinations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">New Construction</h3>
                <p className="text-slate-600 text-sm">
                  Builders change credits and rate buydowns by community and week. Confirm the
                  offer before the first model visit.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Luxury Strength</h3>
                <p className="text-slate-600 text-sm">
                  The Ridges and Southern Highlands are different products. A current luxury
                  comp is a call, not a published appreciation rate.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Market Questions We're Hearing
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is now a good time to buy in Las Vegas?",
                  a: "It depends on the neighborhood and the home. This page does not publish inventory or a rate. Call (702) 789-6561 for the floor plan you are considering.",
                },
                {
                  q: "Should I wait for prices to drop?",
                  a: "A forecast is not published here. Dr. Jan prices from recent Heritage at Stonebridge closings and tells you what is listed now.",
                },
                {
                  q: "Is this a buyer's or seller's market?",
                  a: "That label needs a current months-of-inventory figure, and this page does not publish one. Ask for the comps on the address you are buying or selling.",
                },
                {
                  q: "What's happening with interest rates?",
                  a: "Rates change by lender and loan type. A quoted rate belongs on a lender disclosure, not on this page. Dr. Jan can introduce a lender.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Personalized Market Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Want to know what these numbers mean for your specific neighborhood or situation? Dr.
              Jan Duffy provides free market consultations.
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

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: September 23, 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
