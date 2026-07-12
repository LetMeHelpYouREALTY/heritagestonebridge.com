import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { lasVegasRealEstatePage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(lasVegasRealEstatePage);

export default function lasVegasRealEstateRoutePage() {
  return <HeritagePageView content={lasVegasRealEstatePage} />;
}
