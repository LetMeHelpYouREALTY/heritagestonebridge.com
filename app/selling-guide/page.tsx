import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { sellingGuidePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = sellingGuidePage.metadata;

export default function SellingGuidePage() {
  return <HeritageMarketingPage content={sellingGuidePage} />;
}
