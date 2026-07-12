"use client";

import { Button } from "@/components/ui/button";
import RealScoutAdvancedSearch from "@/components/realscout/RealScoutAdvancedSearch";
import {
  getRealScoutAgentId,
  getRealScoutSharedSearchUrl,
} from "@/lib/realscout-config";

export type RealScoutListingsVariant = "listings" | "search" | "both";

type RealScoutListingsProps = {
  variant?: RealScoutListingsVariant;
  title?: string;
  subtitle?: string;
};

export default function RealScoutListings({
  variant = "both",
  title = "Featured Properties",
  subtitle = "Search live MLS inventory or browse Dr. Jan's active listings",
}: RealScoutListingsProps) {
  const agentId = getRealScoutAgentId();
  const sharedSearchUrl = getRealScoutSharedSearchUrl();
  const showSearch = variant === "search" || variant === "both";
  const showListings = variant === "listings" || variant === "both";

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
            <p className="text-slate-600 text-lg">{subtitle}</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 border-slate-300 text-slate-900 hover:bg-slate-100"
          >
            <a href={sharedSearchUrl} target="_blank" rel="noopener noreferrer">
              View All Properties
            </a>
          </Button>
        </div>

        {showSearch && (
          <div className="mb-10">
            <RealScoutAdvancedSearch className="w-full max-w-5xl mx-auto" />
          </div>
        )}

        {showListings && (
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-your-listings 
              agent-encoded-id="${agentId}" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              include-seller-listings
              include-co-listings
            ></realscout-your-listings>`,
            }}
          />
        )}
      </div>
    </section>
  );
}
