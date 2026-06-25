import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { marketUpdatePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(marketUpdatePage);

export default function MarketUpdatePage() {
  return <HeritageMarketingPage content={marketUpdatePage} />;
}
