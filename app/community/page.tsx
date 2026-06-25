import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { communityPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(communityPage);

export default function CommunityPage() {
  return <HeritageMarketingPage content={communityPage} />;
}
