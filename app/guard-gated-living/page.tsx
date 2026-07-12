import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { guardGatedPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(guardGatedPage);

export default function GuardGatedLivingPage() {
  return <HeritageMarketingPage content={guardGatedPage} />;
}
