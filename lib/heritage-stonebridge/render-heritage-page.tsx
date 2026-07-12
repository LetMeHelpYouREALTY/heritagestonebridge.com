import type { Metadata } from "next";
import { heritagePageMetadata } from "@/lib/metadata";
import { HeritageMarketingPage } from "@/components/heritage/HeritageMarketingPage";
import type { HeritagePageContent } from "./types";

export function getHeritagePageMetadata(content: HeritagePageContent): Metadata {
  return heritagePageMetadata(content);
}

export function HeritagePageView({ content }: { content: HeritagePageContent }) {
  return <HeritageMarketingPage content={content} />;
}
