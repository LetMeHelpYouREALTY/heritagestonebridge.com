import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { summerlin55Page } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(summerlin55Page);

export default function Summerlin55PlusPage() {
  return <HeritageMarketingPage content={summerlin55Page} />;
}
