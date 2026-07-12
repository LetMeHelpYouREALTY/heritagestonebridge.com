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

export function getRealScoutAgentId(): string {
  return process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID?.trim() || DEFAULT_AGENT_ID;
}

export function getRealScoutSharedSearchUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_REALSCOUT_URL?.trim() || DEFAULT_SHARED_SEARCH_URL;
  return raw.replace(/^http:\/\//i, "https://");
}

export function getRealScoutOfficeListingsMarkup(agentId = getRealScoutAgentId()): string {
  const { sortOrder, listingStatus, propertyTypes, priceMin, priceMax } =
    REALSCOUT_OFFICE_LISTINGS_ATTRS;

  return `<realscout-office-listings 
              agent-encoded-id="${agentId}" 
              sort-order="${sortOrder}" 
              listing-status="${listingStatus}" 
              property-types="${propertyTypes}" 
              price-min="${priceMin}" 
              price-max="${priceMax}"
            ></realscout-office-listings>`;
}
