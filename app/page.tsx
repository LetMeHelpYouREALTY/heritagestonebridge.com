import Link from "next/link";
import dynamic from "next/dynamic";
import { Phone, Shield, MapPin, Home as HomeIcon, Users } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import HeroBackground from "@/components/sections/HeroBackground";
import FAQSection from "@/components/sections/FAQSection";
import RealScoutSimpleSearch from "@/components/realscout/RealScoutSimpleSearch";
import SchemaScript from "@/components/SchemaScript";
import {
  combineSchemas,
  generateFAQSchema,
  generateRealEstateAgentSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import { buildPageMetadata, canonicalUrl } from "@/lib/metadata";
import { SITE_CONTACT } from "@/lib/site-contact";
import { HERITAGE_COMMUNITY, HERITAGE_FAQS } from "@/lib/heritage-stonebridge/data";
import { HERITAGE_COMMUNITY_NAV, HERITAGE_BUYER_NAV } from "@/lib/heritage-stonebridge/routes";
import type { Metadata } from "next";

const RealScoutListings = dynamic(
  () => import("@/components/realscout/RealScoutListings"),
  {
    ssr: false,
    loading: () => (
      <section className="py-16 bg-slate-50" aria-hidden="true">
        <div className="container mx-auto px-4 h-48 rounded-xl bg-slate-200 animate-pulse" />
      </section>
    ),
  },
);

export const metadata: Metadata = buildPageMetadata({
  title:
    "Heritage at Stonebridge | Guard-Gated 55+ Summerlin | Dr. Jan Duffy",
  description: `Lennar-built guard-gated 55+ community in Summerlin West (89138). 421 homes, resort amenities, near Downtown Summerlin. Dr. Jan Duffy, BHHS. Call ${SITE_CONTACT.phone.display}.`,
  path: "/",
});

const homepageFaqs = HERITAGE_FAQS.map((f) => ({
  question: f.question,
  answer: f.answer,
}));

export default function HomePage() {
  const pageSchema = combineSchemas(
    generateRealEstateAgentSchema(),
    generateWebPageSchema({
      name: "Heritage at Stonebridge | Guard-Gated 55+ Summerlin",
      description: `Lennar guard-gated 55+ community in Summerlin West (89138). Dr. Jan Duffy, ${SITE_CONTACT.brokerage}.`,
      url: canonicalUrl("/"),
      dateModified: "July 2026",
    }),
    generateFAQSchema(homepageFaqs),
  );

  return (
    <>
      <SchemaScript schema={pageSchema} id="homepage-schema" />
      <Navbar />
      <main>
        <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden min-h-[480px]">
          <div className="absolute inset-0" aria-hidden="true">
            <HeroBackground />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <span className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4" />
              Guard-Gated 55+ in Summerlin West
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Heritage at Stonebridge — Guard-Gated 55+ Summerlin
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
              Lennar&apos;s boutique active adult community in zip 89138 — staff
              guard-gated security, modern floor plans, and minutes from Downtown
              Summerlin. Search live MLS listings on our homes-for-sale page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/homes-for-sale"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                Search Listings
              </Link>
              <a
                href={`tel:${SITE_CONTACT.phone.tel}`}
                className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-purple-500 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {SITE_CONTACT.phone.display}
              </a>
            </div>
            <RealScoutSimpleSearch />
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div>
                <span className="font-semibold text-white">
                  {HERITAGE_COMMUNITY.homeCount}
                </span>{" "}
                homes
              </div>
              <div>
                <span className="font-semibold text-white">55+</span> active adult
              </div>
              <div>
                <span className="font-semibold text-white">89138</span> Summerlin
                West
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
              Heritage at Stonebridge at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: String(HERITAGE_COMMUNITY.homeCount), label: "Lennar Homes" },
                { value: HERITAGE_COMMUNITY.sqFtRange, label: "Sq. Ft. Range" },
                { value: "Guard-Gated", label: "Staffed Entry" },
                {
                  value: `${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sf`,
                  label: "Clubhouse",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl border border-slate-200"
                >
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
              Explore the Community
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {HERITAGE_COMMUNITY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl bg-white border border-slate-200 p-5 hover:border-purple-400 hover:shadow-sm transition-all"
                >
                  <h3 className="font-semibold text-slate-900">{item.label}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Guard-Gated Privacy",
                  desc: "Staffed entry with visitor verification — not just a shared gate code.",
                },
                {
                  icon: MapPin,
                  title: "Summerlin West Location",
                  desc: "Downtown Summerlin, Red Rock Canyon, and pay-as-you-play golf nearby.",
                },
                {
                  icon: Users,
                  title: "Active Adult Lifestyle",
                  desc: "Pickleball, fitness, pools, and a social scale where you know your neighbors.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-6">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RealScoutListings
          variant="both"
          title="Search Heritage Listings"
          subtitle="Filter live MLS inventory in Summerlin West (89138) or browse Dr. Jan's active listings"
        />

        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Buyer & Seller Guides</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-left">
              {HERITAGE_BUYER_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-slate-700 px-4 py-3 hover:bg-slate-800 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          faqs={homepageFaqs}
          title="Heritage at Stonebridge FAQ"
          subtitle="Common questions about Summerlin's Lennar 55+ guard-gated community"
        />

        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <HomeIcon className="h-10 w-10 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tour Heritage at Stonebridge
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Dr. Jan Duffy — {SITE_CONTACT.brokerage}. Hyperlocal guidance for
              guard-gated 55+ moves in Summerlin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Schedule a Consultation
              </Link>
              <a
                href={`tel:${SITE_CONTACT.phone.tel}`}
                className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {SITE_CONTACT.phone.display}
              </a>
            </div>
            <p className="mt-6 text-white/90 text-sm">
              Dr. Jan Duffy | License {SITE_CONTACT.license} | {SITE_CONTACT.brokerage}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
