import {
  getHeritagePageMetadata,
  HeritagePageView,
} from "@/lib/heritage-stonebridge/render-heritage-page";
import { stonebridgeHospitalityPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = getHeritagePageMetadata(stonebridgeHospitalityPage);

export default function StonebridgeHospitalityRoutePage() {
  return <HeritagePageView content={stonebridgeHospitalityPage} />;
}