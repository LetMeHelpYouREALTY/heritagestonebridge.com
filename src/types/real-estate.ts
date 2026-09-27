export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  neighborhood?: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  brokerage?: string;
  encodedId?: string;
}

export interface ListingProps {
  mls: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  photos: string[];
  address: Address;
  agent: Agent;
  status: "for-sale" | "pending" | "sold";
  description?: string;
  features?: string[];
  listDate?: string;
  openHouse?: {
    date: string;
    startTime: string;
    endTime: string;
  };
}

export interface SearchFilters {
  priceMin: number;
  priceMax: number;
  beds: number;
  baths: number;
  neighborhood: string;
  propertyType: "all" | "house" | "condo" | "townhouse";
  status: "all" | "for-sale" | "pending" | "sold";
}

export interface MarketData {
  neighborhood: string;
  medianPrice: number;
  avgDaysOnMarket: number;
  pricePerSqft: number;
  totalListings: number;
  marketTrend: "up" | "down" | "stable";
}

export interface PropertySearchResult {
  listings: ListingProps[];
  total: number;
  page: number;
  hasMore: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyMls?: string;
  agentId?: string;
}
