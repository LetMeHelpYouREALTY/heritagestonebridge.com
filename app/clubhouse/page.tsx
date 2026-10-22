import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { clubhousePage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(clubhousePage);

export default function ClubhouseRoutePage() {
  return <HeritagePageView content={clubhousePage} />;
}
