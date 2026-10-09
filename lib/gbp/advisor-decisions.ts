/**
 * GBP strategy decisions — synthesized June 2026 from Parallel Search + official Google docs.
 * Treat as the advisor layer: when automation or copy conflicts, these decisions win.
 *
 * Sources checked:
 * - Google Business Profile APIs latest updates (developers.google.com, Apr–May 2026)
 * - Real-estate GBP guides (Jeff Lenney, DMR Media, Social Realtr, 2026)
 * - Q&A API sunset (Reputation.com, Feedcast, Nov 2025)
 */
export const GBP_ADVISOR = {
  researchedAt: "2026-06-25",
  advisorVersion: "1.0.0",

  sources: [
    {
      title: "Google Business Profile APIs — Latest updates",
      url: "https://developers.google.com/my-business/content/latest-updates",
      note: "RecurrenceInfo for recurring Local Posts (Apr 2026); Q&A API not listed as active.",
    },
    {
      title: "Google Business Profile for Real Estate Agents (2026)",
      url: "https://jefflenney.com/real-estate/google-business-profile/",
      note: "2–3 posts/week; posts expire ~7 days; batch on Sundays.",
    },
    {
      title: "GBP Posts Weekly Playbook — Real Estate",
      url: "https://socialrealtr.com/google-business-profile-posts-real-estate/",
      note: "Weekly minimum; keyword-rich local content; consistency over volume spikes.",
    },
    {
      title: "Q&A API sunset",
      url: "https://reputation.com/resources/articles/what-googles-qa-api-sunset-means-for-online-reputation-management-1ece1",
      note: "No programmatic Q&A after Nov 2025 — mirror Q&A on site FAQ + schema.",
    },
  ],

  decisions: {
    primaryCategory: "Real Estate Agent",
    additionalCategories: ["Real Estate Agency", "Real Estate Consultant"],
    descriptionMaxChars: 750,
    postsPerWeek: 3,
    postMinIntervalDays: 2,
    postLifespanDays: 7,
    batchDay: "Sunday",
    publishDays: ["Tuesday", "Thursday", "Saturday"] as const,
    postBodyWordRange: { min: 80, max: 280 },
    imageMinPx: { width: 720, height: 540 },
    reviewResponse: "Reply to every review within 48h; include Summerlin / 89138 / Heritage naturally.",
    qAndA: "Manual GBP dashboard only; site FAQPage JSON-LD is the durable Q&A layer.",
    apiAutomation: {
      localPosts: "Use GBP Local Posts API + RecurrenceInfo when OAuth credentials are configured.",
      qAndA: "Not available via API — do not build custom Q&A sync.",
      quota: "Request GBP API quota before production automation.",
    },
    contentThemes: [
      "Heritage at Stonebridge inventory / homes for sale",
      "Summerlin West 55+ lifestyle & guard-gated living",
      "Seller / downsizing in 89138",
      "Community comparison (Sun City Summerlin, Trilogy)",
      "Buyer education (HOA, age restriction, Lennar plans)",
    ],
    napRule: "Single source of truth: lib/site-contact.ts — mirror to GBP dashboard and content/gbp-dashboard-copy.md.",
    hyperlocalKeywords: [
      "Heritage at Stonebridge",
      "Summerlin West",
      "89138",
      "55+",
      "guard-gated",
      "Lennar",
    ],
  },
} as const;

export type GbpPublishDay = (typeof GBP_ADVISOR.decisions.publishDays)[number];
