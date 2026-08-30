import type { Metadata } from "next";
import type { FAQItem } from "@/lib/schema";

export type HeritageStat = {
  value: string;
  label: string;
};

export type HeritageGridCard = {
  title: string;
  items: string[];
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

export type HeritageProseSubheading = {
  heading: string;
  paragraphs: string[];
};

export type HeritageSection =
  | {
      type: "prose";
      heading: string;
      paragraphs: string[];
      /** H3 blocks under this H2 — used for AEO/snippet extractability. */
      subheadings?: HeritageProseSubheading[];
    }
  | {
      type: "figure";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "stats";
      heading: string;
      stats: HeritageStat[];
    }
  | {
      type: "grid";
      heading: string;
      cards: HeritageGridCard[];
    }
  | {
      type: "checklist";
      heading: string;
      items: HeritageChecklistItem[];
    }
  | {
      type: "comparison";
      heading: string;
      otherLabel: string;
      rows: HeritageComparisonRow[];
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
    };

export type HeritagePageContent = {
  slug: string;
  metadata: Metadata;
  breadcrumbs: { name: string; url: string }[];
  badge?: string;
  h1: string;
  subtitle: string;
  sections: HeritageSection[];
  faqs?: FAQItem[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  includeCommunitySchema?: boolean;
  lastUpdated?: string;
  /** Hero background; defaults to the 55+ community aerial. */
  heroImage?: string;
  heroImageAlt?: string;
  extraSchemas?: Record<string, unknown>[];
};
