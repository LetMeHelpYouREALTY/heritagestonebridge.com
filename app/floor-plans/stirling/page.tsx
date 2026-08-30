import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { stirlingPage } from "@/lib/heritage-stonebridge/topic-pages";

export const metadata = heritagePageMetadata(stirlingPage);

export default function StirlingFloorPlansPage() {
  return <HeritageMarketingPage content={stirlingPage} />;
}
