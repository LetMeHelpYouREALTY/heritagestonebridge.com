import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { clubhousePage } from "@/lib/heritage-stonebridge/topic-pages";

export const metadata = heritagePageMetadata(clubhousePage);

export default function ClubhousePage() {
  return <HeritageMarketingPage content={clubhousePage} />;
}
