import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { luxuryLivingGuidePage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(luxuryLivingGuidePage);

export default function LuxuryLivingGuidePage() {
  return <HeritagePageView content={luxuryLivingGuidePage} />;
}
