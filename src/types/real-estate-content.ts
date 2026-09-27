export interface RealScoutContentBlock {
  id: string;
  type: "simple-search" | "advanced-search" | "home-value" | "office-listings";
  title: string;
  description: string;
  agentEncodedId: string;
  className?: string;
  // Widget-specific properties
  widgetProps?: {
    sortOrder?: "STATUS_AND_SIGNIFICANT_CHANGE" | "PRICE_ASC" | "PRICE_DESC" | "DATE_DESC";
    listingStatus?: "For Sale" | "Pending" | "Sold" | "All";
    propertyTypes?: string;
    priceMin?: number;
    priceMax?: number;
  };
  // Layout properties
  layout?: {
    columns?: 1 | 2;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    shadow?: boolean;
  };
  // Content customization
  content?: {
    ctaText?: string;
    ctaLink?: string;
    features?: string[];
    badges?: string[];
  };
}

export interface RealScoutContentConfig {
  blocks: RealScoutContentBlock[];
  layout: {
    containerMaxWidth?: string;
    spacing?: string;
    background?: string;
  };
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
    accentColor?: string;
  };
}
