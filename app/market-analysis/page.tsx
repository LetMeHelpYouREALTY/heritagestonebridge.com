import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { marketAnalysisPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(marketAnalysisPage);

export default function marketAnalysisRoutePage() {
  return <HeritagePageView content={marketAnalysisPage} />;
}
