import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { stonebridgePricePage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(stonebridgePricePage);

export default function StonebridgePriceRoutePage() {
  return <HeritagePageView content={stonebridgePricePage} />;
}
