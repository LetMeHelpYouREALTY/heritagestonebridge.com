import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { downsizingPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = downsizingPage.metadata;

export default function DownsizingPage() {
  return <HeritageMarketingPage content={downsizingPage} />;
}
