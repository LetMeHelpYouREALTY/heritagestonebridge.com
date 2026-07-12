const DEFAULT_AGENT_ID = "QWdlbnQtMjI1MDUw";
const DEFAULT_SHARED_SEARCH_URL = "https://drjanduffy.realscout.com/";

/** Office listings carousel — matches RealScout dashboard widget config. */
export const REALSCOUT_OFFICE_LISTINGS_ATTRS = {
  sortOrder: "SOLD_DATE_NEWEST",
  listingStatus: "For Sale",
  propertyTypes: ",SFR,LAL",
  priceMin: "600000",
  priceMax: "900000",
} as const;

function encodeAgentId(value: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "utf8").toString("base64");
  }

  return btoa(value);
}

/**
 * RealScout widgets require the base64-encoded agent id (e.g. QWdlbnQtMjI1MDUw),
 * not the plain numeric id (225050). Normalize env values from Vercel/dashboard.
 */
export function normalizeRealScoutAgentId(raw?: string): string {
  const value = raw?.trim();
  if (!value) return DEFAULT_AGENT_ID;

  if (value === DEFAULT_AGENT_ID) return value;

  // Plain numeric id from dashboard (e.g. NEXT_PUBLIC_REALSCOUT_AGENT_ID=225050)
  if (/^\d+$/.test(value)) {
    return encodeAgentId(`Agent-${value}`);
  }

  // Plain Agent-225050 format
  if (/^Agent-\d+$/i.test(value)) {
    return encodeAgentId(value);
  }

  // Already base64-encoded
  return value;
}

export function getRealScoutAgentId(): string {
  return normalizeRealScoutAgentId(process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID);
}

export function getRealScoutSharedSearchUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_REALSCOUT_URL?.trim() || DEFAULT_SHARED_SEARCH_URL;
  return raw.replace(/^http:\/\//i, "https://");
}

export function getRealScoutOfficeListingsMarkup(agentId = getRealScoutAgentId()): string {
  const { sortOrder, listingStatus, propertyTypes, priceMin, priceMax } =
    REALSCOUT_OFFICE_LISTINGS_ATTRS;

  return `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="${sortOrder}" listing-status="${listingStatus}" property-types="${propertyTypes}" price-min="${priceMin}" price-max="${priceMax}"></realscout-office-listings>`;
}

export function getRealScoutSimpleSearchMarkup(agentId = getRealScoutAgentId()): string {
  return `<realscout-simple-search agent-encoded-id="${agentId}"></realscout-simple-search>`;
}

export function getRealScoutAdvancedSearchMarkup(agentId = getRealScoutAgentId()): string {
  return `<realscout-advanced-search agent-encoded-id="${agentId}"></realscout-advanced-search>`;
}
