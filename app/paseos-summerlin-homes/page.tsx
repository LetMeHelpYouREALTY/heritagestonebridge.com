import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { paseosPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(paseosPage);

export default function PaseosRoutePage() {
  return <HeritagePageView content={paseosPage} />;
}
