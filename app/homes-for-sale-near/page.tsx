import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { homesForSaleNearPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(homesForSaleNearPage);

export default function HomesForSaleNearRoutePage() {
  return <HeritagePageView content={homesForSaleNearPage} />;
}
