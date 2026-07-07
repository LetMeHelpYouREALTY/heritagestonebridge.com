import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { bestFiftyFivePlusCommunitiesPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(bestFiftyFivePlusCommunitiesPage);

export default function bestFiftyFivePlusCommunitiesRoutePage() {
  return <HeritagePageView content={bestFiftyFivePlusCommunitiesPage} />;
}
