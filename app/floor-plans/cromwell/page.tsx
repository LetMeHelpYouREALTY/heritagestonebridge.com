import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { cromwellPage } from "@/lib/heritage-stonebridge/topic-pages";

export const metadata = heritagePageMetadata(cromwellPage);

export default function CromwellFloorPlansPage() {
  return <HeritageMarketingPage content={cromwellPage} />;
}
