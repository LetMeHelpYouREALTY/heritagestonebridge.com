import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { redRockCanyonCommunitiesPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(redRockCanyonCommunitiesPage);

export default function redRockCanyonCommunitiesRoutePage() {
  return <HeritagePageView content={redRockCanyonCommunitiesPage} />;
}
