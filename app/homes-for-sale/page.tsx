import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { FeaturedListingCard } from "@/components/heritage/FeaturedListing";
import { homesForSalePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(homesForSalePage);

export default function HomesForSalePage() {
  return (
    <HeritageMarketingPage
      content={homesForSalePage}
      aboveSections={<FeaturedListingCard />}
    />
  );
}
