import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { stonebridgeFloorPlansPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(stonebridgeFloorPlansPage);

export default function StonebridgeFloorPlansRoutePage() {
  return <HeritagePageView content={stonebridgeFloorPlansPage} />;
}
