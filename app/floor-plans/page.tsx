import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { floorPlansPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = floorPlansPage.metadata;

export default function FloorPlansPage() {
  return <HeritageMarketingPage content={floorPlansPage} />;
}
