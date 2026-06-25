import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { buyingGuidePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(buyingGuidePage);

export default function BuyingGuidePage() {
  return <HeritageMarketingPage content={buyingGuidePage} />;
}
