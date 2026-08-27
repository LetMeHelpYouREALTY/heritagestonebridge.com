import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { reviewsPage } from "@/lib/heritage-stonebridge/realtor-pages";

export const metadata = heritagePageMetadata(reviewsPage);

export default function ReviewsPage() {
  return <HeritageMarketingPage content={reviewsPage} />;
}
