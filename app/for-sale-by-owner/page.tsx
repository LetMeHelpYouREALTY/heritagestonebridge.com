import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { fsboPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(fsboPage);

export default function ForSaleByOwnerRoutePage() {
  return <HeritagePageView content={fsboPage} />;
}
