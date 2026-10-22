import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { stonebridgeParkPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(stonebridgeParkPage);

export default function StonebridgeParkRoutePage() {
  return <HeritagePageView content={stonebridgeParkPage} />;
}
