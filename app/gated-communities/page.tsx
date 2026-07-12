import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { gatedCommunitiesPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(gatedCommunitiesPage);

export default function GatedCommunitiesPage() {
  return <HeritagePageView content={gatedCommunitiesPage} />;
}
