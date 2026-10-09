import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { SITE_CONTACT } from "@/lib/site-contact";
import { businessInfo, gbpShortDescription } from "@/lib/gbp-schema";
import { GBP_ADVISOR } from "./advisor-decisions";

export type NapAuditIssue = {
  severity: "error" | "warn";
  code: string;
  message: string;
};

export type NapAuditResult = {
  auditedAt: string;
  passed: boolean;
  issues: NapAuditIssue[];
};

export function runNapAudit(repoRoot = process.cwd()): NapAuditResult {
  const issues: NapAuditIssue[] = [];
  const dashboardPath = join(repoRoot, "content", "gbp-dashboard-copy.md");

  if (businessInfo.name !== SITE_CONTACT.businessName) {
    issues.push({
      severity: "error",
      code: "NAME_MISMATCH",
      message: `businessInfo.name does not match SITE_CONTACT.businessName`,
    });
  }

  if (businessInfo.phone.display !== SITE_CONTACT.phone.display) {
    issues.push({
      severity: "error",
      code: "PHONE_MISMATCH",
      message: "businessInfo.phone.display does not match SITE_CONTACT",
    });
  }

  if (gbpShortDescription.length > GBP_ADVISOR.decisions.descriptionMaxChars) {
    issues.push({
      severity: "error",
      code: "DESCRIPTION_TOO_LONG",
      message: `gbpShortDescription is ${gbpShortDescription.length} chars (max ${GBP_ADVISOR.decisions.descriptionMaxChars})`,
    });
  }

  if (!gbpShortDescription.includes(SITE_CONTACT.phone.display)) {
    issues.push({
      severity: "warn",
      code: "DESCRIPTION_MISSING_PHONE",
      message: "gbpShortDescription should include visible phone for GBP paste parity",
    });
  }

  if (existsSync(dashboardPath)) {
    const md = readFileSync(dashboardPath, "utf8");
    const checks: Array<{ label: string; value: string }> = [
      { label: "business name", value: SITE_CONTACT.businessName },
      { label: "phone", value: SITE_CONTACT.phone.display },
      { label: "email", value: SITE_CONTACT.email },
    ];
    for (const { label, value } of checks) {
      if (!md.includes(value)) {
        issues.push({
          severity: "error",
          code: "DASHBOARD_COPY_DRIFT",
          message: `content/gbp-dashboard-copy.md missing ${label}: ${value}`,
        });
      }
    }
  } else {
    issues.push({
      severity: "warn",
      code: "DASHBOARD_COPY_MISSING",
      message: "content/gbp-dashboard-copy.md not found",
    });
  }

  return {
    auditedAt: new Date().toISOString(),
    passed: issues.every((i) => i.severity !== "error"),
    issues,
  };
}
