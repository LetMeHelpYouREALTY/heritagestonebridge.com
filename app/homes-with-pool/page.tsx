import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { homesWithPoolPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(homesWithPoolPage);

export default function HomesWithPoolRoutePage() {
  return <HeritagePageView content={homesWithPoolPage} />;
}
