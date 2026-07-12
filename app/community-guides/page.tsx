import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { communityGuidesPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(communityGuidesPage);

export default function CommunityGuidesPage() {
  return <HeritagePageView content={communityGuidesPage} />;
}
