import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { stonebridgeSummerlinHomesPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(stonebridgeSummerlinHomesPage);

export default function StonebridgeSummerlinHomesRoutePage() {
  return <HeritagePageView content={stonebridgeSummerlinHomesPage} />;
}
