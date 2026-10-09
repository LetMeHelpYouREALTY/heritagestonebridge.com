import { GBP_ADVISOR } from "./advisor-decisions";
import { GBP_POST_POOL, type GbpPostDraft } from "./post-templates";

export type WeeklyGbpPack = {
  isoYear: number;
  isoWeek: number;
  weekLabel: string;
  generatedAt: string;
  advisorVersion: string;
  postsPerWeek: number;
  posts: GbpPostDraft[];
};

/** ISO week number (UTC). */
export function getIsoWeek(date = new Date()): { year: number; week: number } {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return { year: d.getUTCFullYear(), week };
}

function weekLabel(year: number, week: number): string {
  return `${year}-W${String(week).padStart(2, "0")}`;
}

/**
 * Pick `postsPerWeek` posts by rotating through the pool using ISO week as seed.
 * Ensures one post per publish day slot when pool is large enough.
 */
export function generateWeeklyPosts(date = new Date()): WeeklyGbpPack {
  const { year, week } = getIsoWeek(date);
  const postsPerWeek = GBP_ADVISOR.decisions.postsPerWeek;
  const publishDays = GBP_ADVISOR.decisions.publishDays;
  const pool = GBP_POST_POOL;
  const startIndex = ((year * 53 + week) * postsPerWeek) % pool.length;

  const selected: GbpPostDraft[] = [];
  const usedIds = new Set<string>();

  for (let i = 0; i < postsPerWeek; i++) {
    let idx = (startIndex + i) % pool.length;
    let guard = 0;
    while (usedIds.has(pool[idx].id) && guard < pool.length) {
      idx = (idx + 1) % pool.length;
      guard++;
    }
    const post = { ...pool[idx], publishDay: publishDays[i] ?? pool[idx].publishDay };
    usedIds.add(post.id);
    selected.push(post);
  }

  return {
    isoYear: year,
    isoWeek: week,
    weekLabel: weekLabel(year, week),
    generatedAt: date.toISOString(),
    advisorVersion: GBP_ADVISOR.advisorVersion,
    postsPerWeek,
    posts: selected,
  };
}

export function formatWeeklyPackMarkdown(pack: WeeklyGbpPack): string {
  const lines: string[] = [
    `# GBP Weekly Posts — ${pack.weekLabel}`,
    "",
    `Generated: ${pack.generatedAt}`,
    `Advisor: v${pack.advisorVersion} (${GBP_ADVISOR.researchedAt})`,
    `Posts: ${pack.postsPerWeek} (advisor target: ${GBP_ADVISOR.decisions.postsPerWeek}/week)`,
    "",
    "Paste each post into Google Business Profile → **Add update**. Posts expire in ~7 days.",
    "",
    "---",
    "",
  ];

  for (const [i, post] of pack.posts.entries()) {
    lines.push(`## Post ${i + 1} — ${post.publishDay} — ${post.theme}`);
    lines.push("");
    lines.push(`**Title:** ${post.title}`);
    lines.push("");
    lines.push("**Body:**");
    lines.push("");
    lines.push(post.body);
    lines.push("");
    lines.push(`**CTA:** ${post.cta.label} (${post.cta.type})`);
    if (post.cta.url) {
      lines.push(`**URL:** ${post.cta.url}`);
    }
    lines.push("");
    lines.push(`**Photo alt:** ${post.suggestedPhotoAlt}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  lines.push("## Advisor reminders");
  lines.push("");
  lines.push(`- Post ${GBP_ADVISOR.decisions.postsPerWeek}x/week on ${GBP_ADVISOR.decisions.publishDays.join(", ")}`);
  lines.push(`- Batch on ${GBP_ADVISOR.decisions.batchDay}s`);
  lines.push(`- Image minimum ${GBP_ADVISOR.decisions.imageMinPx.width}×${GBP_ADVISOR.decisions.imageMinPx.height}px`);
  lines.push(`- Q&A: ${GBP_ADVISOR.decisions.qAndA}`);
  lines.push("");

  return lines.join("\n");
}
