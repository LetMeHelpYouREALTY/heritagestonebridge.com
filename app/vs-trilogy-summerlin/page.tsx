import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { vsTrilogyPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(vsTrilogyPage);

export default function VsTrilogyPage() {
  return <HeritageMarketingPage content={vsTrilogyPage} />;
}
