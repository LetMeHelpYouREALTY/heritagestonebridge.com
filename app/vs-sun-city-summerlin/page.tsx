import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { vsSunCityPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = vsSunCityPage.metadata;

export default function VsSunCityPage() {
  return <HeritageMarketingPage content={vsSunCityPage} />;
}
