import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { floorPlansPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(floorPlansPage);

export default function FloorPlansPage() {
  return <HeritageMarketingPage content={floorPlansPage} />;
}
