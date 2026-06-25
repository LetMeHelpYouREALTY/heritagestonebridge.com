import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { amenitiesPage } from "@/lib/heritage-stonebridge/pages";

export const metadata = heritagePageMetadata(amenitiesPage);

export default function AmenitiesPage() {
  return <HeritageMarketingPage content={amenitiesPage} />;
}
