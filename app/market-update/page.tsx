import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { marketUpdatePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = marketUpdatePage.metadata;

export default function MarketUpdatePage() {
  return <HeritageMarketingPage content={marketUpdatePage} />;
}
