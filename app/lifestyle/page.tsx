import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { lifestylePage } from "@/lib/heritage-stonebridge/pages";

export const metadata = lifestylePage.metadata;

export default function LifestylePage() {
  return <HeritageMarketingPage content={lifestylePage} />;
}
