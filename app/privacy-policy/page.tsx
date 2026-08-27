import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import { privacyPolicyPage } from "@/lib/heritage-stonebridge/realtor-pages";

export const metadata = heritagePageMetadata(privacyPolicyPage);

export default function PrivacyPolicyPage() {
  return <HeritageMarketingPage content={privacyPolicyPage} />;
}
