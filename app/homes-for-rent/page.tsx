import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { homesForRentPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(homesForRentPage);

export default function HomesForRentRoutePage() {
  return <HeritagePageView content={homesForRentPage} />;
}
