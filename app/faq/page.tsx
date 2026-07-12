import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { faqPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(faqPage);

export default function FaqPage() {
  return <HeritageMarketingPage content={faqPage} />;
}
