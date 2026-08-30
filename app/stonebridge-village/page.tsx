import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { stonebridgeVillagePage } from "@/lib/heritage-stonebridge/topic-pages";

export const metadata = heritagePageMetadata(stonebridgeVillagePage);

export default function StonebridgeVillagePage() {
  return <HeritageMarketingPage content={stonebridgeVillagePage} />;
}
