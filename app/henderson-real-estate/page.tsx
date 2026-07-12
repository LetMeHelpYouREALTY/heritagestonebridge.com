import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { hendersonRealEstatePage } from "@/lib/heritage-stonebridge/seo-landing-pages";

export const metadata = getHeritagePageMetadata(hendersonRealEstatePage);

export default function HendersonRealEstatePage() {
  return <HeritagePageView content={hendersonRealEstatePage} />;
}
