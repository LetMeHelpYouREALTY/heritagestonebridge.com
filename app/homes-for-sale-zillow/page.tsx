import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { zillowPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(zillowPage);

export default function ZillowRoutePage() {
  return <HeritagePageView content={zillowPage} />;
}
