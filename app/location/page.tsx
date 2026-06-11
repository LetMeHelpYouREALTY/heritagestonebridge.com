import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { locationPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = locationPage.metadata;

export default function LocationPage() {
  return <HeritageMarketingPage content={locationPage} />;
}
