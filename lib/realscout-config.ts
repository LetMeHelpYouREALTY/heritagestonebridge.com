const DEFAULT_AGENT_ID = "QWdlbnQtMjI1MDUw";
const DEFAULT_SHARED_SEARCH_URL = "https://drjanduffy.realscout.com/";

export function getRealScoutAgentId(): string {
  return process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID?.trim() || DEFAULT_AGENT_ID;
}

export function getRealScoutSharedSearchUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_REALSCOUT_URL?.trim() || DEFAULT_SHARED_SEARCH_URL;
  return raw.replace(/^http:\/\//i, "https://");
}
