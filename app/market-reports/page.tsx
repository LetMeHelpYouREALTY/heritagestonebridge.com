import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { marketReportsPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(marketReportsPage);

export default function marketReportsRoutePage() {
  return <HeritagePageView content={marketReportsPage} />;
}
