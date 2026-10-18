import type { Metadata } from "next";
import SiteStatusPage from "@/components/sections/SiteStatusPage";

export const metadata: Metadata = {
  title: "Page not found | Heritage Stonebridge",
  description:
    "That Heritage at Stonebridge page is gone. Call Dr. Jan Duffy at (702) 500-1942 or return to the homepage.",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <SiteStatusPage
      title="That page is not on this site"
      description="The Heritage at Stonebridge URL may have moved. Use the homepage search, or call Dr. Jan Duffy for the current MLS list."
    />
  );
}
