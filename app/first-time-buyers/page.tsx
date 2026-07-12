import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { firstTimeBuyersPage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(firstTimeBuyersPage);

export default function FirstTimeBuyersPage() {
  return <HeritagePageView content={firstTimeBuyersPage} />;
}
