import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { fiftyFivePlusCommunitiesLasVegasPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(fiftyFivePlusCommunitiesLasVegasPage);

export default function fiftyFivePlusCommunitiesLasVegasRoutePage() {
  return <HeritagePageView content={fiftyFivePlusCommunitiesLasVegasPage} />;
}
