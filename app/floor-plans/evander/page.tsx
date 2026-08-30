import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { evanderPage } from "@/lib/heritage-stonebridge/topic-pages";

export const metadata = heritagePageMetadata(evanderPage);

export default function EvanderFloorPlansPage() {
  return <HeritageMarketingPage content={evanderPage} />;
}
