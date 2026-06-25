import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { locationPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(locationPage);

export default function LocationPage() {
  return <HeritageMarketingPage content={locationPage} />;
}
