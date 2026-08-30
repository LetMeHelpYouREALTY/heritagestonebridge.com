import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { everythingsIncludedPage } from "@/lib/heritage-stonebridge/topic-pages";

export const metadata = heritagePageMetadata(everythingsIncludedPage);

export default function EverythingsIncludedPage() {
  return <HeritageMarketingPage content={everythingsIncludedPage} />;
}
