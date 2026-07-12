import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { downsizingPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(downsizingPage);

export default function DownsizingPage() {
  return <HeritageMarketingPage content={downsizingPage} />;
}
