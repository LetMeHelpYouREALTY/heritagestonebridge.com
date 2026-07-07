import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { neighborhoodInsightsPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(neighborhoodInsightsPage);

export default function NeighborhoodInsightsPage() {
  return <HeritagePageView content={neighborhoodInsightsPage} />;
}
