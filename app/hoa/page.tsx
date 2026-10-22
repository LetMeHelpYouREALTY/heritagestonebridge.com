import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { hoaPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(hoaPage);

export default function HoaRoutePage() {
  return <HeritagePageView content={hoaPage} />;
}
