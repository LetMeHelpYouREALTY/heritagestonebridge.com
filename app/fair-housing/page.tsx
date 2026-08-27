import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { fairHousingPage } from "@/lib/heritage-stonebridge/realtor-pages";

export const metadata = heritagePageMetadata(fairHousingPage);

export default function FairHousingPage() {
  return <HeritageMarketingPage content={fairHousingPage} />;
}
