import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { stonebridgeLasVegasPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(stonebridgeLasVegasPage);

export default function StonebridgeLasVegasRoutePage() {
  return <HeritagePageView content={stonebridgeLasVegasPage} />;
}
