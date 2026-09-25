import { getDomainConfig, type DomainConfig } from "./domain-config";

/**
 * Canonical site config for heritagestonebridge.com.
 * Do not read request headers here. headers() opts every page into dynamic
 * rendering and Cache-Control: no-store, which fails mobile Core Web Vitals.
 */
export function getPageDomainConfig(): DomainConfig {
  return getDomainConfig("heritagestonebridge.com");
}
