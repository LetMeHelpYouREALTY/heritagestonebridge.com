import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { vsTrilogyPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = vsTrilogyPage.metadata;

export default function VsTrilogyPage() {
  return <HeritageMarketingPage content={vsTrilogyPage} />;
}
