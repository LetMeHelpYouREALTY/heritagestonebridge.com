import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { northwestLasVegasPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(northwestLasVegasPage);

export default function northwestLasVegasRoutePage() {
  return <HeritagePageView content={northwestLasVegasPage} />;
}
