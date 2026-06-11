import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { communityPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = communityPage.metadata;

export default function CommunityPage() {
  return <HeritageMarketingPage content={communityPage} />;
}
