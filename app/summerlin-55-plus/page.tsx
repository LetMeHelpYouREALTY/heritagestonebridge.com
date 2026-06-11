import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { summerlin55Page } from "@/lib/heritage-stonebridge/pages";

export const metadata = summerlin55Page.metadata;

export default function Summerlin55PlusPage() {
  return <HeritageMarketingPage content={summerlin55Page} />;
}
