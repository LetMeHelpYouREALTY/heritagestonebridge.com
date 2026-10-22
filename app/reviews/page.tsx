import GBPMapCard from "@/components/gbp/GBPMapCard";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { heritagePageMetadata } from "@/lib/metadata";
import { reviewsPage } from "@/lib/heritage-stonebridge/pasf-pages";

export const metadata = heritagePageMetadata(reviewsPage);

export default function ReviewsRoutePage() {
  return (
    <HeritageMarketingPage
      content={reviewsPage}
      aboveSections={<GBPMapCard />}
    />
  );
}
