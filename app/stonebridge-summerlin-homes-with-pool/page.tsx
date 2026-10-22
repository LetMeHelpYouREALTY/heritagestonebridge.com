import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { stonebridgePoolPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(stonebridgePoolPage);

export default function StonebridgePoolRoutePage() {
  return <HeritagePageView content={stonebridgePoolPage} />;
}
