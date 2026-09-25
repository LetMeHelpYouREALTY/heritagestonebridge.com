import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, TrendingUp, DollarSign, Building, BarChart, CheckCircle, Calculator } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas Investment Properties | Berkshire Hathaway HomeServices",
  description:
    "Invest in Las Vegas real estate with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Rental properties, ROI analysis, 1031 exchanges. No state income tax. Call (702) 789-6561.",
  keywords: [
    "Las Vegas investment property",
    "Las Vegas rental property",
    "Henderson real estate investing",
    "Nevada investment homes",
    "1031 exchange Las Vegas",
    "cash flow properties Las Vegas",
  ],
};

export default function InvestmentPropertiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Las Vegas Investment Properties"
            subtitle="Nevada has no state income tax. Rent, price, and cap rate are calculated per address. Call (702) 789-6561."
            priority
          />

          {/* Why Las Vegas */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Invest in Las Vegas?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">No State Income Tax</h3>
                <p className="text-slate-400 text-sm">Keep more of your rental income</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">Comps, not a published yield</h3>
                <p className="text-slate-400 text-sm">Call (702) 789-6561 for a rent and price snapshot</p>
              </div>
              <div className="text-center">
                <Building className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">Growing Population</h3>
                <p className="text-slate-400 text-sm">Constant rental demand</p>
              </div>
              <div className="text-center">
                <BarChart className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold mb-1">Cap rate is property-specific</h3>
                <p className="text-slate-400 text-sm">NOI divided by price, calculated per address</p>
              </div>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              How an investment number gets built
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto">
              This page does not publish average price, rent, cap rate, or appreciation by area.
              Dr. Jan runs those from the current list price, a rent comp, taxes, insurance, and HOA
              for the address you are underwriting. Call (702) 789-6561.
            </p>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I underwrite each address from the current rent comp, HOA, and taxes. A valley
                cap rate is not a number I put on a property."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Investment Services */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Investment Property Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Property identification based on your criteria",
                "Cash flow and ROI analysis",
                "Neighborhood appreciation research",
                "Rental market comparisons",
                "1031 exchange coordination",
                "Property management referrals",
                "Multi-family opportunity sourcing",
                "Fix-and-flip opportunity identification",
                "Portfolio building strategy",
                "Out-of-state investor support",
              ].map((service) => (
                <div key={service} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Investment Types */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Investment Strategies We Support
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Buy & Hold Rentals</h3>
                <p className="text-blue-200 text-sm">
                  Long-term wealth building through rental income and appreciation. Ideal for
                  passive investors seeking steady cash flow.
                </p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Fix & Flip</h3>
                <p className="text-blue-200 text-sm">
                  Value-add opportunities for active investors. We identify underpriced properties
                  with renovation potential.
                </p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Short-Term Rentals</h3>
                <p className="text-blue-200 text-sm">
                  Vacation rental opportunities in tourist-friendly areas. Higher yields with
                  active management.
                </p>
              </div>
            </div>
          </section>

          {/* Detailed Investment Analysis */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Understanding Las Vegas Investment Metrics
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 mb-8">
              <p>
                Successful real estate investing requires understanding key metrics and how they apply
                to the Las Vegas market specifically. Dr. Jan Duffy provides detailed analysis on every
                property, helping you make data-driven decisions rather than emotional ones.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <Calculator className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Cap Rate (Capitalization Rate)</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Net operating income divided by price. The rate is calculated for one address
                  after taxes, insurance, HOA, and a vacancy allowance. This page does not publish a valley range.
                </p>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  Call (702) 789-6561 for the worksheet on a specific property.
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Cash-on-Cash Return</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Annual cash flow divided by cash invested. The result depends on the down payment,
                  rate, and rent for that property.
                </p>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  A sample return is not published here.
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <BarChart className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Total Return</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Cash flow, loan paydown, and tax treatment are separate lines. Appreciation is
                  not a published annual rate on this page.
                </p>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  <strong>Note:</strong> Tax benefits include depreciation, mortgage interest, and expense deductions
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <DollarSign className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Price-to-Rent Ratio</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Price divided by annual rent. Use the rent comp for the address, not a valley ratio.
                </p>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  A sample ratio is not published here.
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhood Deep Dives */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Las Vegas Investment Neighborhoods: Deep Dive
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">North Las Vegas</h3>
                <p className="text-slate-600">
                  Includes Aliante and newer production neighborhoods with I-15 access. Employers
                  such as Amazon have distribution sites in the north valley. Rent and price are
                  underwritten per address. Ask for the zoned campus name rather than a school rating.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Henderson</h3>
                <p className="text-slate-600">
                  A separate city. Green Valley, Inspirada, and Anthem are different products.
                  Confirm HOA rules on leases before you underwrite a rental.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Summerlin</h3>
                <p className="text-slate-600">
                  Master-planned villages with trails and Red Rock access. Heritage at Stonebridge
                  is 55+ and guard-gated. Lease rules are in the HOA documents. Call (702) 789-6561
                  for a rent and price snapshot.
                </p>
              </div>
            </div>
          </section>

          {/* 1031 Exchange Section */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              1031 Exchanges in Las Vegas
            </h2>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <p className="text-slate-700 mb-6">
                A 1031 exchange lets you defer capital gains taxes by reinvesting proceeds from
                a sold investment property into a "like-kind" replacement property. Las Vegas is a
                popular destination for 1031 exchanges due to no state income tax, strong cash flow,
                and appreciation potential.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Key Deadlines</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div><strong>45 days:</strong> Identify replacement properties</div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div><strong>180 days:</strong> Close on replacement property</div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div><strong>Day 1:</strong> Begin with qualified intermediary</div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Why Las Vegas for 1031s?</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>No state income tax on rental income</div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>Strong appreciation outpaces many markets</div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>Excellent cash flow in most neighborhoods</div>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Dr. Jan works with qualified intermediaries and can help identify replacement properties
                within the 45-day window. Berkshire Hathaway's nationwide network is invaluable for
                clients exchanging into or out of Las Vegas.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Investment Property FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What returns can I expect from Las Vegas rental property?",
                  a: "Typical cap rates range from 4-6%, with appreciation adding another 4-5% annually in recent years. Total returns of 8-10% are achievable in the right neighborhoods. Dr. Jan provides detailed ROI analysis on any property you're considering.",
                },
                {
                  q: "Do you help out-of-state investors?",
                  a: "Yes! Many of Dr. Jan's investment clients are out-of-state buyers. She provides video tours, detailed market analysis, and coordinates with property managers so you can invest remotely with confidence.",
                },
                {
                  q: "Can you help with 1031 exchanges?",
                  a: "Absolutely. Dr. Jan works with qualified intermediaries and can help identify replacement properties within the 45-day identification window. Berkshire Hathaway's nationwide network is particularly valuable for exchanging into or out of Las Vegas.",
                },
                {
                  q: "What's the best area for investment properties?",
                  a: "It depends on your strategy. North Las Vegas offers the best cap rates, while Summerlin provides stronger appreciation. Henderson balances both. Dr. Jan analyzes your goals to recommend the right areas.",
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
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Invest in Las Vegas?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get expert guidance on Las Vegas investment properties from Dr. Jan Duffy and
              Berkshire Hathaway HomeServices.
            </p>
            <a
              href="tel:+17027896561"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 789-6561
            </a>
            <p className="mt-4 text-slate-400 text-sm">
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
