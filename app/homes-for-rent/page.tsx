import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { homesForRentPage } from "@/lib/heritage-stonebridge/search-intent-pages";

export const metadata = heritagePageMetadata(homesForRentPage);

export default function HomesForRentPage() {
  return <HeritageMarketingPage content={homesForRentPage} />;
}
