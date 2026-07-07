import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { fiftyFiveAndOverSummerlinPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(fiftyFiveAndOverSummerlinPage);

export default function FiftyFiveAndOverSummerlinRoutePage() {
  return <HeritagePageView content={fiftyFiveAndOverSummerlinPage} />;
}
