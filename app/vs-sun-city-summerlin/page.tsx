import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { vsSunCityPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(vsSunCityPage);

export default function VsSunCityPage() {
  return <HeritageMarketingPage content={vsSunCityPage} />;
}
