import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { communityComparisonPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(communityComparisonPage);

export default function CommunityComparisonPage() {
  return <HeritagePageView content={communityComparisonPage} />;
}
