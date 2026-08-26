import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import { Suspense } from "react";
import {
  Phone,
  MapPin,
  DollarSign,
  TrendingUp,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import StandardPageSchema from "@/components/seo/StandardPageSchema";
import AnswerEngineBlock from "@/components/seo/AnswerEngineBlock";
import ParallelHeritageBrief from "@/components/seo/ParallelHeritageBrief";
import { listingsPageFaqs } from "@/lib/seo/aeo-faqs";
import { SITE_CONTACT } from "@/lib/site-contact";
import { HERITAGE_COMMUNITY } from "@/lib/heritage-stonebridge/data";
import { getRealScoutAgentId } from "@/lib/realscout-config";

export const metadata: Metadata = {
  title: "Las Vegas Homes for Sale | MLS Property Search | Berkshire Hathaway HomeServices",
  description:
    "Browse Las Vegas, Henderson, and Summerlin homes for sale with live MLS listings. Search Heritage at Stonebridge and 89138 inventory. Dr. Jan Duffy. Call (702) 500-1942.",
  keywords: [
    "Las Vegas homes for sale",
    "Henderson real estate",
    "MLS listings Las Vegas",
    "Summerlin homes",
    "Heritage at Stonebridge listings",
    "Berkshire Hathaway listings",
  ],
};

const popularSearches = [
  { name: "Summerlin Homes", href: "/neighborhoods/summerlin" },
  { name: "Henderson Properties", href: "/neighborhoods/henderson" },
  { name: "Green Valley", href: "/neighborhoods/green-valley" },
  { name: "The Ridges Luxury", href: "/neighborhoods/the-ridges" },
  { name: "55+ Communities", href: "/55-plus-communities" },
  { name: "New Construction", href: "/new-construction" },
];

const priceRanges = [
  { range: "Under $400K", description: "Condos, townhomes, and smaller lots — confirm on live MLS" },
  { range: "$400K - $600K", description: "Common resale band across much of the valley" },
  { range: "$600K - $1M", description: "Includes many Heritage at Stonebridge and Summerlin West plans" },
  { range: "$1M - $2M", description: "Guard-gated and custom elevations — inventory varies by week" },
  { range: "$2M+", description: "Custom estates; use MLS filters rather than a canned count" },
];

const neighborhoods = [
  {
    name: "Summerlin",
    description: "Howard Hughes master plan west of the I-215 — parks, trails, Downtown Summerlin retail, Red Rock access",
  },
  {
    name: "Henderson",
    description: "Separate city southeast of the Strip — Green Valley, Anthem, and Lake Las Vegas corridors",
  },
  {
    name: "Green Valley",
    description: "Henderson village with mature landscaping, golf, and The District retail",
  },
  {
    name: "Southern Highlands",
    description: "Guard-gated southwest master plan with championship golf and mountain views",
  },
  {
    name: "North Las Vegas",
    description: "Newer tract product and growing employment nodes along the northern beltway",
  },
  {
    name: "Skye Canyon",
    description: "Northwest master plan with a town center and mountain-facing streets",
  },
];

export default function ListingsPage() {
  const agentId = getRealScoutAgentId();

  return (
    <>
      <StandardPageSchema
        path="/listings"
        name="Las Vegas Homes for Sale | Live MLS Search"
        description="Browse Las Vegas, Henderson, and Summerlin homes for sale with live MLS listings. Heritage at Stonebridge and 89138 search with Dr. Jan Duffy."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Listings", url: "/listings" },
        ]}
        faqs={listingsPageFaqs}
        dateModified="2026-08-25"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Las Vegas Homes for Sale"
            subtitle="Search live MLS inventory across Las Vegas, Henderson, and Summerlin — including Heritage at Stonebridge in 89138 — with Dr. Jan Duffy. Prices and photos come from the feed, not a canned gallery."
            priority
          >
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-1" /> Live MLS Data</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-1" /> RealScout widget</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-1" /> {HERITAGE_COMMUNITY.homeCount} Heritage homes</span>
            </div>
          </PageHero>

          {/* RealScout Widget - Live MLS Listings */}
          <section className="mb-16">
            <div className="max-w-7xl mx-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-office-listings 
                    agent-encoded-id="${agentId}" 
                    sort-order="NEWEST" 
                    listing-status="For Sale" 
                    property-types=",SFR,MF,TC"
                  ></realscout-office-listings>`,
                }}
              />
            </div>
          </section>

          {/* Popular Searches Section */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Popular Property Searches in Las Vegas
            </h2>
            <p className="aeo-answer text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Start with Heritage at Stonebridge and Summerlin West (89138), then widen to Henderson
              guard-gated plans or northwest new construction. Counts change hourly — use the widget
              above instead of a static inventory number.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {popularSearches.map((search) => (
                <Link
                  key={search.name}
                  href={search.href}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-all group flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600">
                      {search.name}
                    </h3>
                    <span className="text-sm text-slate-500">Open area guide</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </section>

          {/* Price Range Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Las Vegas Home Price Guide
            </h2>
            <p className="aeo-answer text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Nevada has no state income tax. Heritage at Stonebridge resales commonly list from the
              $500s to $850,000+ depending on plan and upgrades — verify on current MLS (August 2026).
              Valley-wide averages mix condos and different HOAs; they do not price a pickleball 55+
              plan at the gate.
            </p>
            <div className="space-y-4">
              {priceRanges.map((price) => (
                <div
                  key={price.range}
                  className="bg-white rounded-lg p-4 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between"
                >
                  <div className="flex items-center mb-2 md:mb-0">
                    <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-bold text-slate-900">{price.range}</h3>
                      <p className="text-sm text-slate-600">{price.description}</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-semibold text-sm">Confirm on MLS</span>
                </div>
              ))}
            </div>
          </section>

          {/* Neighborhood Overview */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Las Vegas Neighborhoods & Communities
            </h2>
            <p className="aeo-answer text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Match commute, HOA, floor plan, and amenity list — not a city-wide average. Dr. Jan Duffy
              has represented buyers and sellers in Summerlin and Henderson since 2008 through{" "}
              {SITE_CONTACT.brokerage}.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{neighborhood.name}</h3>
                  <p className="text-slate-600 text-sm">{neighborhood.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/neighborhoods"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Explore All Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Why Use an Agent Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Work With a Berkshire Hathaway HomeServices Agent
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              In today's competitive Las Vegas market, having expert representation can mean the 
              difference between winning your dream home and losing out. Dr. Jan Duffy brings 
              the resources of Berkshire Hathaway HomeServices—the most trusted name in real estate—
              combined with deep local market knowledge from serving Las Vegas since 2008.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Off-Market Access</h3>
                <p className="text-slate-400 text-sm">
                  See listings before they hit the MLS through our network of 50,000+ agents
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Expert Negotiation</h3>
                <p className="text-slate-400 text-sm">
                  $127M+ in closed transactions means proven negotiation skills on your behalf
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Local Expertise</h3>
                <p className="text-slate-400 text-sm">
                  Floor plans, HOA documents, and commute times for Summerlin West and Henderson 55+
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Free for Buyers</h3>
                <p className="text-slate-400 text-sm">
                  The seller pays the commission—you get full representation at no cost
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Heritage at Stonebridge listing facts
            </h2>
            <p className="aeo-answer text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Community facts below are from Lennar materials dated 2026. Valley median, DOM, and
              active-count headlines change daily — pull them from the MLS widget, not this page.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{HERITAGE_COMMUNITY.homeCount}</div>
                <div className="text-sm text-slate-600">Lennar homes</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{HERITAGE_COMMUNITY.floorPlanCount}</div>
                <div className="text-sm text-slate-600">Floor plans</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">89138</div>
                <div className="text-sm text-slate-600">Summerlin West zip</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">55+</div>
                <div className="text-sm text-slate-600">Active adult</div>
              </div>
            </div>
          </section>

          {/* Home Buying Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              The Home Buying Process in Las Vegas
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Buying a home is one of the most significant financial decisions you'll make. 
              Understanding the process helps reduce stress and ensures you're prepared at each 
              step. Here's what to expect when purchasing a home in Las Vegas with Dr. Jan Duffy 
              and Berkshire Hathaway HomeServices.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Get Pre-Approved for Financing</h3>
                  <p className="text-slate-600 text-sm">
                    A pre-approval letter shows sellers you're serious and gives you a clear budget. 
                    Dr. Jan can connect you with trusted local lenders offering competitive rates. 
                    This typically takes 1-3 days with proper documentation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Define Your Priorities & Search</h3>
                  <p className="text-slate-600 text-sm">
                    Location, size, features, and budget all factor into your search. Dr. Jan helps 
                    you identify which Las Vegas neighborhoods match your lifestyle while setting 
                    up automated MLS alerts so you never miss a new listing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Tour Properties & Make an Offer</h3>
                  <p className="text-slate-600 text-sm">
                    Visit homes that meet your criteria, either in person or virtually. When you 
                    find "the one," Dr. Jan helps you craft a competitive offer with the right 
                    price, contingencies, and terms to win in today's market.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Due Diligence & Inspections</h3>
                  <p className="text-slate-600 text-sm">
                    Once under contract, you'll have time for home inspections, appraisals, and 
                    final financing approval. Dr. Jan coordinates with all parties and helps you 
                    negotiate repairs or credits if issues arise.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Close & Get Your Keys</h3>
                  <p className="text-slate-600 text-sm">
                    The closing process typically takes 30-45 days from offer acceptance. You'll 
                    sign final documents, transfer funds, and receive the keys to your new Las Vegas 
                    home. Dr. Jan remains available for any questions even after closing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Suspense fallback={null}>
            <ParallelHeritageBrief topic="Las Vegas MLS homes for sale" />
          </Suspense>

          <AnswerEngineBlock
            heading="Questions about searching Las Vegas MLS listings"
            faqs={listingsPageFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Las Vegas Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for personalized guidance, off-market listings, and expert 
              representation backed by Berkshire Hathaway HomeServices. Free buyer consultations 
              available—the seller pays the commission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: August 2026</div>
      </main>
      <Footer />
    </>
  );
}
