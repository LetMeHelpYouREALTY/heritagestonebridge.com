import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { recentSalesPage } from "@/lib/heritage-stonebridge/realtor-pages";

export const metadata = heritagePageMetadata(recentSalesPage);

export default function RecentSalesPage() {
  return <HeritageMarketingPage content={recentSalesPage} />;
}
