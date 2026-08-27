import { getDomainConfig, type DomainConfig } from "./domain-config";
import { getSiteHostname } from "./site-url";

/**
 * Resolve the active domain config without reading request headers.
 *
 * `headers()` in `generateMetadata` / pages opts the whole App Router tree
 * into dynamic rendering (`Cache-Control: private, no-store`). That is the
 * main TTFB hit on mobile PageSpeed Insights for this single-site deploy.
 * Hostname comes from `NEXT_PUBLIC_SITE_URL` / the canonical host instead.
 */
export async function getPageDomainConfig(): Promise<DomainConfig> {
  return getDomainConfig(getSiteHostname());
}
