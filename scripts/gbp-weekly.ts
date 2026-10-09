/**
 * Weekly GBP pack generator + NAP audit.
 * Run: npm run gbp:weekly
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  formatWeeklyPackMarkdown,
  generateWeeklyPosts,
} from "../lib/gbp/generate-weekly-posts";
import { runNapAudit } from "../lib/gbp/nap-audit";
import { GBP_ADVISOR } from "../lib/gbp/advisor-decisions";

const repoRoot = process.cwd();
const outDir = join(repoRoot, "content", "gbp", "generated");

function main(): void {
  mkdirSync(outDir, { recursive: true });

  const pack = generateWeeklyPosts();
  const markdown = formatWeeklyPackMarkdown(pack);
  const mdPath = join(outDir, `${pack.weekLabel}.md`);
  const jsonPath = join(outDir, `${pack.weekLabel}.json`);
  const latestMdPath = join(outDir, "latest.md");
  const auditPath = join(outDir, "latest-audit.json");

  writeFileSync(mdPath, markdown, "utf8");
  writeFileSync(jsonPath, JSON.stringify(pack, null, 2), "utf8");
  writeFileSync(latestMdPath, markdown, "utf8");

  const audit = runNapAudit(repoRoot);
  writeFileSync(auditPath, JSON.stringify(audit, null, 2), "utf8");

  console.log(`GBP weekly pack: ${mdPath}`);
  console.log(`Advisor v${GBP_ADVISOR.advisorVersion} — ${pack.posts.length} posts for ${pack.weekLabel}`);
  console.log(`NAP audit: ${audit.passed ? "PASS" : "FAIL"} (${audit.issues.length} issue(s))`);

  for (const issue of audit.issues) {
    console.log(`  [${issue.severity}] ${issue.code}: ${issue.message}`);
  }

  if (!audit.passed) {
    process.exitCode = 1;
  }
}

main();
