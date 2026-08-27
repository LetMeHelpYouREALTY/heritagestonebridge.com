import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { openHousesPage } from "@/lib/heritage-stonebridge/realtor-pages";

export const metadata = heritagePageMetadata(openHousesPage);

export default function OpenHousesPage() {
  return <HeritageMarketingPage content={openHousesPage} />;
}
