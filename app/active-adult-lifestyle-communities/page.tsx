import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { activeAdultLifestyleCommunitiesPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(activeAdultLifestyleCommunitiesPage);

export default function activeAdultLifestyleCommunitiesRoutePage() {
  return <HeritagePageView content={activeAdultLifestyleCommunitiesPage} />;
}
