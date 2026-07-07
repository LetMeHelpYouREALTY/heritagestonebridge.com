import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { summerlinHomesPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(summerlinHomesPage);

export default function summerlinHomesRoutePage() {
  return <HeritagePageView content={summerlinHomesPage} />;
}
