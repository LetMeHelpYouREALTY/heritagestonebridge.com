import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { guardGatedPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = guardGatedPage.metadata;

export default function GuardGatedLivingPage() {
  return <HeritageMarketingPage content={guardGatedPage} />;
}
