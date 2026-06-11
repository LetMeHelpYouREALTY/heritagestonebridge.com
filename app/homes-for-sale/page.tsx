import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { homesForSalePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = homesForSalePage.metadata;

export default function HomesForSalePage() {
  return <HeritageMarketingPage content={homesForSalePage} />;
}
