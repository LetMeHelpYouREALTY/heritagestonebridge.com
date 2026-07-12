import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { downtownSummerlinPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(downtownSummerlinPage);

export default function DowntownSummerlinPage() {
  return <HeritageMarketingPage content={downtownSummerlinPage} />;
}
