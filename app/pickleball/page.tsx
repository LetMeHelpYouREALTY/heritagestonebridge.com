import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { pickleballPage } from "@/lib/heritage-stonebridge/topic-pages";

export const metadata = heritagePageMetadata(pickleballPage);

export default function PickleballPage() {
  return <HeritageMarketingPage content={pickleballPage} />;
}
