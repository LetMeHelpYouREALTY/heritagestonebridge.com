import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Suspense } from "react";
import { MapPin, Phone, Home } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import StandardPageSchema from "@/components/seo/StandardPageSchema";
import AnswerEngineBlock from "@/components/seo/AnswerEngineBlock";
import ParallelHeritageBrief from "@/components/seo/ParallelHeritageBrief";
import { neighborhoodsHubFaqs } from "@/lib/seo/aeo-faqs";

export const metadata = buildPageMetadata({
  title:
    "Las Vegas Neighborhoods | Summerlin & Heritage Stonebridge Area | Dr. Jan Duffy",
  description:
    "Explore Las Vegas and Summerlin neighborhoods near Heritage at Stonebridge — Summerlin West, Centennial Hills, Mountains Edge, and more with Dr. Jan Duffy, BHHS.",
  path: "/neighborhoods",
});

const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    description: "Howard Hughes master plan west of I-215 — 150+ parks, trail network, Downtown Summerlin, Red Rock Canyon access",
    highlights: ["150+ Parks", "Trail Network", "Red Rock Views", "Downtown Summerlin"],
    fit: "Commuters to the west valley, 55+ buyers comparing Heritage at Stonebridge",
  },
  {
    name: "Henderson",
    slug: "henderson",
    description: "Separate city southeast of the Strip — Green Valley, Anthem, Lake Las Vegas, and employment along I-215",
    highlights: ["Green Valley", "Lake Las Vegas", "Anthem corridor", "I-215 access"],
    fit: "Buyers who want a municipal identity distinct from Las Vegas city limits",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description: "Henderson village with mature landscaping, golf, walking trails, and The District retail",
    highlights: ["Golf Courses", "Walking Trails", "The District", "Mature Trees"],
    fit: "Golfers and buyers who want older-tree streetscapes",
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    description: "Guard-gated custom estate village in Summerlin with golf and Strip-facing lots",
    highlights: ["Guard-Gated", "Custom Estates", "Bear's Best Golf", "Strip Views"],
    fit: "Custom-home buyers comparing Summerlin west villages",
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    description: "Guard-gated southwest master plan with championship golf and mountain views",
    highlights: ["Golf Community", "Guard-Gated", "Mountain Views", "Club amenities"],
    fit: "Golfers and luxury buyers on the southwest beltway",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description: "Newer tract product and growing employment nodes along the northern beltway",
    highlights: ["New Construction", "Beltway access", "Growing Area", "Townhome mix"],
    fit: "First-time buyers and investors seeking newer inventory",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    description: "Northwest master plan with a town center and mountain-facing streets",
    highlights: ["New Homes", "Mountain Views", "Skye Center", "Trail access"],
    fit: "Buyers who want a newer town-center layout in the northwest",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description: "Northwest Las Vegas village with mountain proximity, parks, and retail along the 215",
    highlights: ["Mountain Access", "Parks", "Shopping", "215 corridor"],
    fit: "Northwest commuters comparing vs Summerlin West 89138",
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    description: "Henderson master plan with resort-style pools, trails, and newer production homes",
    highlights: ["Resort Pools", "Walking Trails", "New Construction", "Town center"],
    fit: "Active-adult and move-up buyers comparing Henderson vs Summerlin",
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    description: "Southwest Las Vegas master plan with mountain views, parks, and production homes",
    highlights: ["Mountain Views", "Parks", "Growing Area", "Production homes"],
    fit: "Southwest commuters comparing value vs Summerlin West",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <StandardPageSchema
        path="/neighborhoods"
        name="Las Vegas Neighborhoods"
        description="Explore Las Vegas and Summerlin neighborhoods near Heritage at Stonebridge with Dr. Jan Duffy, BHHS."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Neighborhoods", url: "/neighborhoods" },
        ]}
        faqs={neighborhoodsHubFaqs}
        dateModified="2026-08-25"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Las Vegas & Henderson Neighborhoods"
            subtitle="Compare Summerlin West (89138), Henderson, and northwest villages next to Heritage at Stonebridge — parks, trail miles, commute, and HOA — with Dr. Jan Duffy, Berkshire Hathaway HomeServices."
            priority
          />

          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Neighborhoods near Heritage at Stonebridge
            </h2>
            <p className="aeo-answer text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Heritage at Stonebridge sits in Summerlin West. Use these area guides for commute,
              amenities, and housing mix — then confirm live prices on MLS. Medians are not listed
              here because they go stale faster than this page.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {neighborhood.name}
                      </h3>
                      <p className="text-sm text-slate-500">{neighborhood.fit}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Every Las Vegas neighborhood has its own street pattern and amenity mix. Whether you want Summerlin trail miles, Green Valley golf, or The Ridges custom lots, I'll map commute and HOA against Heritage at Stonebridge in 89138. That's the Berkshire Hathaway HomeServices difference—hyperlocal guidance, not a city-wide average."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Neighborhood Services */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Neighborhood tour services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Area Tours</h3>
                <p className="text-slate-400 text-sm">
                  Personalized neighborhood tours to help you experience each community firsthand
                </p>
              </div>
              <div className="text-center">
                <Home className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">HOA and commute brief</h3>
                <p className="text-slate-400 text-sm">
                  Assessments, gate procedures, and drive times to Downtown Summerlin or the airport
                </p>
              </div>
              <div className="text-center">
                <Home className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Home Matching</h3>
                <p className="text-slate-400 text-sm">
                  Find homes that match your floor-plan criteria in the neighborhoods you shortlist
                </p>
              </div>
            </div>
          </section>

          <Suspense fallback={null}>
            <ParallelHeritageBrief topic="Las Vegas neighborhoods near Heritage Stonebridge" />
          </Suspense>

          <AnswerEngineBlock
            heading="Questions about Las Vegas neighborhoods near Heritage at Stonebridge"
            faqs={neighborhoodsHubFaqs}
          />
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing a Neighborhood?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dr. Jan Duffy knows every Las Vegas community inside and out. Call for personalized
              neighborhood recommendations.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1942
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: August 2026</div>
      </main>
      <RealScoutListings
        variant="both"
        title="Live listings near these neighborhoods"
        subtitle="MLS inventory for Summerlin West, Henderson, and northwest Las Vegas — prices from the feed"
      />
      <Footer />
    </>
  );
}
