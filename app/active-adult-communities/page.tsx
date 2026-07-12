import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { activeAdultCommunitiesPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(activeAdultCommunitiesPage);

export default function activeAdultCommunitiesRoutePage() {
  return <HeritagePageView content={activeAdultCommunitiesPage} />;
}
