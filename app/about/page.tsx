import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { aboutPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(aboutPage);

export default function AboutPage() {
  return <HeritageMarketingPage content={aboutPage} />;
}
