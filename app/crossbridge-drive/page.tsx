import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { crossbridgeDrivePage } from "@/lib/heritage-stonebridge/topic-pages";

export const metadata = heritagePageMetadata(crossbridgeDrivePage);

export default function CrossbridgeDrivePage() {
  return <HeritageMarketingPage content={crossbridgeDrivePage} />;
}
