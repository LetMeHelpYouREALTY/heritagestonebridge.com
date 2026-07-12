import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { sellingGuidePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(sellingGuidePage);

export default function SellingGuidePage() {
  return <HeritageMarketingPage content={sellingGuidePage} />;
}
