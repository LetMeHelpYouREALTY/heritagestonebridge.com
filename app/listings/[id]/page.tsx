import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import RealScoutSimpleSearch from "@/components/realscout/RealScoutSimpleSearch";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import StandardPageSchema from "@/components/seo/StandardPageSchema";
import AnswerEngineBlock from "@/components/seo/AnswerEngineBlock";
import { SITE_CONTACT } from "@/lib/site-contact";
import { HERITAGE_COMMUNITY } from "@/lib/heritage-stonebridge/data";
import { listingDetailFaqs } from "@/lib/seo/aeo-faqs";
import { buildPageMetadata } from "@/lib/metadata";

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

function listingLabel(id: string): string {
  const trimmed = id.trim().slice(0, 48);
  return trimmed || "requested listing";
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const label = listingLabel(id);
  return buildPageMetadata({
    title: `MLS listing ${label} | Heritage at Stonebridge | Dr. Jan Duffy`,
    description: `Open listing ${label} in live RealScout MLS search for Heritage at Stonebridge and Summerlin West (89138). No invented price, beds, or photos.`,
    path: `/listings/${encodeURIComponent(id)}`,
    robots: { index: false, follow: false },
  });
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const label = listingLabel(id);

  return (
    <>
      <StandardPageSchema
        path={`/listings/${encodeURIComponent(id)}`}
        name={`MLS listing ${label} | Heritage at Stonebridge`}
        description={`Live MLS lookup for listing ${label} in Summerlin West. Dr. Jan Duffy, ${SITE_CONTACT.brokerage}.`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Listings", url: "/listings" },
          { name: `Listing ${label}`, url: `/listings/${encodeURIComponent(id)}` },
        ]}
        faqs={listingDetailFaqs}
        dateModified="2026-08-25"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-slate-600">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/listings" className="hover:text-blue-600">
                  Listings
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-900">MLS {label}</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Heritage at Stonebridge MLS listing {label}
          </h1>
          <p className="aeo-answer text-slate-700 max-w-3xl mb-4">
            This URL does not invent a photo, sale price, or bed/bath count. Individual MLS records
            must come from the live feed with attribution. Use RealScout below for {HERITAGE_COMMUNITY.name}{" "}
            and Summerlin West ({HERITAGE_COMMUNITY.postalCode}) inventory, then call{" "}
            {SITE_CONTACT.phone.display} to confirm gate access.
          </p>
          <div className="flex items-center text-slate-600 mb-8">
            <MapPin className="h-5 w-5 mr-2" />
            {HERITAGE_COMMUNITY.masterPlan}, {HERITAGE_COMMUNITY.city}, {HERITAGE_COMMUNITY.region}{" "}
            {HERITAGE_COMMUNITY.postalCode}
          </div>

          <section className="mb-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Search listing {label} in live MLS
            </h2>
            <p className="text-slate-700 mb-6">
              Enter the address, MLS number, or zip 89138. Saved searches and showing windows go
              through Dr. Jan Duffy — {SITE_CONTACT.brokerage}.
            </p>
            <RealScoutSimpleSearch />
          </section>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How a Heritage at Stonebridge showing works
              </h2>
              <p className="text-slate-700 mb-6">
                {HERITAGE_COMMUNITY.name} is staff guard-gated. Dr. Jan Duffy coordinates visitor
                verification with the listing office, confirms HOA documents, and walks {HERITAGE_COMMUNITY.floorPlanCount}{" "}
                Lennar collections against your must-haves — pickleball access, RV garage, or single-level
                living — without quoting a canned price.
              </p>
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">What to bring to a tour</h3>
                <ul className="text-slate-700 space-y-2 text-sm">
                  <li>Pre-approval or proof of funds if you intend to write an offer</li>
                  <li>A short list of must-have floor-plan features (sq ft {HERITAGE_COMMUNITY.sqFtRange})</li>
                  <li>Questions on HOA assessments — typical range {HERITAGE_COMMUNITY.hoaRange}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Schedule a private tour</h3>
                <p className="text-slate-700 mb-4">
                  Call {SITE_CONTACT.phone.display} or use the contact form. Include listing {label} so
                  gate access can be requested in advance.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Contact Dr. Jan Duffy</Link>
                </Button>
              </div>
            </div>

            <aside className="md:col-span-1">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Listing agent contact</h3>
                <p className="text-slate-600 mb-1">{SITE_CONTACT.agentName}</p>
                <p className="text-sm text-slate-600 mb-6">{SITE_CONTACT.brokerage}</p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href={`tel:${SITE_CONTACT.phone.tel}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call {SITE_CONTACT.phone.display}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Send a message</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          <AnswerEngineBlock
            heading={`Questions about MLS listing ${label}`}
            faqs={listingDetailFaqs}
          />
        </div>
      </main>
      <RealScoutListings
        variant="both"
        title={`Office listings related to ${label}`}
        subtitle="Live MLS inventory in Summerlin West — prices and photos come from the feed, not this page"
      />
      <Footer />
    </>
  );
}
