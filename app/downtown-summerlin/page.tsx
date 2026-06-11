import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { downtownSummerlinPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = downtownSummerlinPage.metadata;

export default function DowntownSummerlinPage() {
  return <HeritageMarketingPage content={downtownSummerlinPage} />;
}
