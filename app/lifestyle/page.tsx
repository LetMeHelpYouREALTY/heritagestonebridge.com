import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { lifestylePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(lifestylePage);

export default function LifestylePage() {
  return <HeritageMarketingPage content={lifestylePage} />;
}
