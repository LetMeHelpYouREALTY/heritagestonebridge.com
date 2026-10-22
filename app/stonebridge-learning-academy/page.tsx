import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { stonebridgeLearningAcademyPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(stonebridgeLearningAcademyPage);

export default function StonebridgeLearningAcademyRoutePage() {
  return <HeritagePageView content={stonebridgeLearningAcademyPage} />;
}
