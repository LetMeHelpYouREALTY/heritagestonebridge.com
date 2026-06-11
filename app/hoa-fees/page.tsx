import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { hoaFeesPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = hoaFeesPage.metadata;

export default function HoaFeesPage() {
  return <HeritageMarketingPage content={hoaFeesPage} />;
}
