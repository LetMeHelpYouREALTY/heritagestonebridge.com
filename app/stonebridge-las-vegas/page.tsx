import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { stonebridgeLasVegasPage } from "@/lib/heritage-stonebridge/search-intent-pages";

export const metadata = heritagePageMetadata(stonebridgeLasVegasPage);

export default function StonebridgeLasVegasPage() {
  return <HeritageMarketingPage content={stonebridgeLasVegasPage} />;
}
