import { headers } from "next/headers";
import { getDomainConfig, type DomainConfig } from "./domain-config";
import { getSiteHostname } from "./site-url";

function resolveHostname(rawHost: string): string {
  const host = rawHost.replace(/^www\./, "").toLowerCase();
  if (!host || host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
    return getSiteHostname();
  }
  return host;
}

export async function getPageDomainConfig(): Promise<DomainConfig> {
  const headersList = headers();
  const domain = headersList.get("x-domain") || "";
  return getDomainConfig(resolveHostname(domain));
}
