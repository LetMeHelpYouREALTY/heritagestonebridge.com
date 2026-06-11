import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { faqPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = faqPage.metadata;

export default function FaqPage() {
  return <HeritageMarketingPage content={faqPage} />;
}
