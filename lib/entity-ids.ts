import { getSiteUrl } from "@/lib/site-url";

export function organizationId(): string {
  return `${getSiteUrl()}/#organization`;
}
