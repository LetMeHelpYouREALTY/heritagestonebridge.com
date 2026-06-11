import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { aboutPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = aboutPage.metadata;

export default function AboutPage() {
  return <HeritageMarketingPage content={aboutPage} />;
}
