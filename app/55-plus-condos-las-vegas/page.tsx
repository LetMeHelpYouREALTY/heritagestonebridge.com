import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { fiftyFivePlusCondosLasVegasPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(fiftyFivePlusCondosLasVegasPage);

export default function fiftyFivePlusCondosLasVegasRoutePage() {
  return <HeritagePageView content={fiftyFivePlusCondosLasVegasPage} />;
}
