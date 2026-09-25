import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { MapPin, Phone, Home, GraduationCap } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import StandardPageSchema from "@/components/seo/StandardPageSchema";

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
    fact: "89138 village map",
    description:
      "Summerlin West villages around Heritage at Stonebridge on Crossbridge Dr.",
    highlights: ["421 Heritage homes", "Red Rock access", "Downtown Summerlin", "Guard-gated 55+"],
  },
  {
    name: "Henderson",
    slug: "henderson",
    fact: "Village comparison",
    description:
      "Green Valley, Inspirada, Anthem, and Lake Las Vegas set next to Heritage in Summerlin West.",
    highlights: ["22 miles to 89138", "The District", "Airport drive", "Own city"],
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    fact: "1988 master plan",
    description:
      "The original Henderson streets, The District, and the split with Green Valley Ranch and Green Valley South.",
    highlights: ["Mature trees", "The District", "Legacy Golf", "Three pockets"],
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    fact: "Guard-gated Summerlin",
    description:
      "Six villages along Red Rock, including Bear's Best, separate from the 421-home Heritage community.",
    highlights: ["Guard gate", "Bear's Best", "Six villages", "Strip views"],
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    fact: "Southwest golf",
    description:
      "Robert Trent Jones Jr. golf and both gated and non-gated sections off the south I-15 corridor.",
    highlights: ["Golf club", "Guard-gated sections", "I-15", "Southwest valley"],
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    fact: "Separate city",
    description:
      "Aliante, Tule Springs, and other North Las Vegas communities, not Skye Canyon or Centennial Hills.",
    highlights: ["Aliante", "Tule Springs", "New construction", "Own city limits"],
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    fact: "Northwest Las Vegas",
    description:
      "The 15-acre Skye Center and trails next to Floyd Lamb Park, northwest of Summerlin.",
    highlights: ["Skye Center", "Floyd Lamb Park", "Trails", "New homes"],
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    fact: "US-95 corridor",
    description:
      "Centennial Hills Park and Centennial Center along US-95, a different drive than Skye Canyon.",
    highlights: ["US-95", "Centennial Center", "Centennial Hills Park", "Northwest Las Vegas"],
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    fact: "Henderson resort plan",
    description:
      "Resort pools and trails in west Henderson, a later product than the 1988 Green Valley streets.",
    highlights: ["Resort pools", "Trails", "West Henderson", "Newer streets"],
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    fact: "Exploration Peak",
    description:
      "The 120-acre Exploration Peak Park and I-215 in southwest Las Vegas.",
    highlights: ["120-acre park", "I-215", "Marketplace", "Southwest Las Vegas"],
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
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PageHero
            badge="Berkshire Hathaway HomeServices Nevada Properties"
            title="Las Vegas & Henderson Neighborhoods"
            subtitle="Pick a neighborhood page by place: Heritage at Stonebridge in 89138, then the Summerlin, Henderson, northwest, and southwest pages that sit around it."
            priority
          />

          {/* Neighborhood Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {neighborhood.name}
                      </h2>
                      <p className="text-sm text-slate-500">/neighborhoods/{neighborhood.slug}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-700">{neighborhood.fact}</div>
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
                "Start with the address. Heritage at Stonebridge is Crossbridge Dr in 89138.
                The Ridges, Skye Canyon, Inspirada, and Southern Highlands are different gates
                and different drives. I keep each one on its own page so the comps stay with the right streets."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Neighborhood Services */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Neighborhood Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Area Tours</h3>
                <p className="text-slate-400 text-sm">
                  Personalized neighborhood tours to help you experience each community firsthand
                </p>
              </div>
              <div className="text-center">
                <GraduationCap className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">School Research</h3>
                <p className="text-slate-400 text-sm">
                  Campus names and the drive time for a specific address. Confirm the assigned school before you write an offer.
                </p>
              </div>
              <div className="text-center">
                <Home className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Home Matching</h3>
                <p className="text-slate-400 text-sm">
                  Find homes that match your criteria in the neighborhoods you love
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing a Neighborhood?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dr. Jan Duffy knows every Las Vegas community inside and out. Call for personalized
              neighborhood recommendations.
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
