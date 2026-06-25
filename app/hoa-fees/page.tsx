import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { hoaFeesPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(hoaFeesPage);

export default function HoaFeesPage() {
  return <HeritageMarketingPage content={hoaFeesPage} />;
}
