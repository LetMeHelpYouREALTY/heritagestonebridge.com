import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { newFiftyFivePlusCommunitiesPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(newFiftyFivePlusCommunitiesPage);

export default function newFiftyFivePlusCommunitiesRoutePage() {
  return <HeritagePageView content={newFiftyFivePlusCommunitiesPage} />;
}
