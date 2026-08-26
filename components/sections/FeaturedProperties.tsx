import Link from "next/link";
import { Shield, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERITAGE_COMMUNITY } from "@/lib/heritage-stonebridge/data";

const highlights = [
  {
    title: "Staff guard-gated entry",
    location: `${HERITAGE_COMMUNITY.masterPlan}, ${HERITAGE_COMMUNITY.postalCode}`,
    icon: Shield,
    detail: HERITAGE_COMMUNITY.security,
    href: "/guard-gated-living",
  },
  {
    title: "Lennar 55+ floor plans",
    location: `${HERITAGE_COMMUNITY.homeCount} homes · ${HERITAGE_COMMUNITY.floorPlanCount} plans`,
    icon: MapPin,
    detail: `${HERITAGE_COMMUNITY.sqFtRange} sq ft, ${HERITAGE_COMMUNITY.bedroomRange} bedrooms. ${HERITAGE_COMMUNITY.priceRange}`,
    href: "/floor-plans",
  },
  {
    title: "Clubhouse and courts",
    location: `${HERITAGE_COMMUNITY.clubhouseSqFt.toLocaleString()} sq ft clubhouse`,
    icon: Users,
    detail: "Pickleball, bocce, heated lap pool, fitness, and organized social calendars.",
    href: "/amenities",
  },
] as const;

/**
 * Original Heritage at Stonebridge highlights — not canned MLS cards.
 * Live prices and photos stay in the RealScout widget.
 */
export default function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Heritage at Stonebridge highlights
            </h2>
            <p className="aeo-answer text-slate-600 text-lg max-w-2xl">
              {HERITAGE_COMMUNITY.name} is Lennar&apos;s guard-gated 55+ neighborhood in Summerlin
              West. Search live MLS on the listings page instead of a placeholder photo gallery.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/homes-for-sale">Search live listings</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-3 text-sm">{item.location}</p>
                <p className="text-slate-700 text-sm mb-4">{item.detail}</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={item.href}>Read this guide</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
