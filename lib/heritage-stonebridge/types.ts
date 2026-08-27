import type { Metadata } from "next";
import type { FAQItem } from "@/lib/schema";

export type HeritageImage = {
  src: string;
  alt: string;
};

export type HeritageStat = {
  value: string;
  label: string;
};

export type HeritageGridCard = {
  title: string;
  items: string[];
  image?: HeritageImage;
};

export type HeritageChecklistItem = {
  title: string;
  description: string;
};

export type HeritageComparisonRow = {
  label: string;
  heritage: string;
  other: string;
};

export type HeritageSection =
  | {
      type: "prose";
      heading: string;
      paragraphs: string[];
      image?: HeritageImage;
    }
  | {
      type: "stats";
      heading: string;
      stats: HeritageStat[];
      image?: HeritageImage;
    }
  | {
      type: "grid";
      heading: string;
      cards: HeritageGridCard[];
      image?: HeritageImage;
    }
  | {
      type: "checklist";
      heading: string;
      items: HeritageChecklistItem[];
      image?: HeritageImage;
    }
  | {
      type: "comparison";
      heading: string;
      otherLabel: string;
      rows: HeritageComparisonRow[];
      image?: HeritageImage;
    }
  | {
      type: "quote";
      text: string;
      author: string;
    }
  | {
      type: "links";
      heading: string;
      links: { href: string; label: string }[];
      image?: HeritageImage;
    };

export type HeritagePageContent = {
  slug: string;
  metadata: Metadata;
  breadcrumbs: { name: string; url: string }[];
  badge?: string;
  h1: string;
  subtitle: string;
  heroImage?: HeritageImage;
  sections: HeritageSection[];
  faqs?: FAQItem[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  includeCommunitySchema?: boolean;
  /** Set false on legal pages that should not load MLS widgets. */
  includeListings?: boolean;
  lastUpdated?: string;
};
