import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { buyingGuidePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = buyingGuidePage.metadata;

export default function BuyingGuidePage() {
  return <HeritageMarketingPage content={buyingGuidePage} />;
}
