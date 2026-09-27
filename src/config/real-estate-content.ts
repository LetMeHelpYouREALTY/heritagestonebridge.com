import type { RealScoutContentConfig } from "../types/real-estate-content";

export const realEstateContentConfig: RealScoutContentConfig = {
  layout: {
    containerMaxWidth: "7xl",
    spacing: "12",
    background: "white",
  },
  theme: {
    primaryColor: "blue",
    secondaryColor: "gray",
    textColor: "gray-900",
    accentColor: "blue-600",
  },
  blocks: [
    {
      id: "hero-search",
      type: "simple-search",
      title: "Find Your Dream Home in Heritage at Stonebridge",
      description:
        "Discover luxury homes in one of Las Vegas's most prestigious communities. Search by location, price, and features to find your perfect match.",
      agentEncodedId: "QWdlbnQtMjI1MDUw",
      className: "min-h-[400px]",
      layout: {
        columns: 1,
        height: "400px",
        backgroundColor: "white",
        borderRadius: "lg",
        shadow: true,
      },
      content: {
        features: ["Luxury Homes", "Gated Community", "Premium Location"],
        badges: ["New Listings", "Price Reduced"],
        ctaText: "Schedule a Tour",
        ctaLink: "/contact",
      },
    },
    {
      id: "advanced-search",
      type: "advanced-search",
      title: "Advanced Property Search",
      description:
        "Use our comprehensive search tools with detailed filters to find properties that match your exact criteria.",
      agentEncodedId: "QWdlbnQtMjI1MDUw",
      className: "min-h-[600px]",
      layout: {
        columns: 1,
        height: "600px",
        backgroundColor: "white",
        borderRadius: "lg",
        shadow: true,
      },
      content: {
        features: ["Detailed Filters", "Map Search", "Saved Searches"],
        badges: ["MLS Connected", "Real-time Data"],
      },
    },
    {
      id: "home-value-estimator",
      type: "home-value",
      title: "What's Your Home Worth?",
      description:
        "Get an instant, accurate home valuation powered by advanced market analysis and comparable sales data.",
      agentEncodedId: "QWdlbnQtMjI1MDUw",
      className: "min-h-[500px]",
      layout: {
        columns: 1,
        height: "500px",
        backgroundColor: "white",
        borderRadius: "lg",
        shadow: true,
      },
      content: {
        features: ["Instant Valuation", "Market Analysis", "Comparable Sales"],
        badges: ["Free Report", "No Obligation"],
        ctaText: "Get Detailed Report",
        ctaLink: "/home-valuation",
      },
    },
    {
      id: "featured-listings",
      type: "office-listings",
      title: "Featured Properties in Heritage at Stonebridge",
      description:
        "Explore our curated selection of premium properties currently available in the Heritage at Stonebridge community.",
      agentEncodedId: "QWdlbnQtMjI1MDUw",
      className: "min-h-[480px]",
      widgetProps: {
        sortOrder: "STATUS_AND_SIGNIFICANT_CHANGE",
        listingStatus: "For Sale",
        propertyTypes: "SFR,MF",
        priceMin: 500000,
        priceMax: 2000000,
      },
      layout: {
        columns: 1,
        height: "480px",
        backgroundColor: "white",
        borderRadius: "lg",
        shadow: true,
      },
      content: {
        features: ["Premium Properties", "Gated Community", "Luxury Amenities"],
        badges: ["Featured", "Price Reduced", "New Listing"],
        ctaText: "View All Properties",
        ctaLink: "/properties",
      },
    },
    {
      id: "luxury-homes",
      type: "office-listings",
      title: "Luxury Homes Over $1M",
      description:
        "Discover our exclusive collection of luxury homes priced over $1 million in Heritage at Stonebridge.",
      agentEncodedId: "QWdlbnQtMjI1MDUw",
      className: "min-h-[450px]",
      widgetProps: {
        sortOrder: "PRICE_DESC",
        listingStatus: "For Sale",
        propertyTypes: "SFR",
        priceMin: 1000000,
        priceMax: 5000000,
      },
      layout: {
        columns: 2,
        height: "450px",
        backgroundColor: "white",
        borderRadius: "lg",
        shadow: true,
      },
      content: {
        features: ["Luxury Estates", "Custom Builds", "Premium Lots"],
        badges: ["Exclusive", "High-End"],
      },
    },
    {
      id: "condo-townhomes",
      type: "office-listings",
      title: "Condos & Townhomes",
      description:
        "Explore modern condos and townhomes perfect for those seeking low-maintenance luxury living.",
      agentEncodedId: "QWdlbnQtMjI1MDUw",
      className: "min-h-[450px]",
      widgetProps: {
        sortOrder: "PRICE_ASC",
        listingStatus: "For Sale",
        propertyTypes: "CONDO,TOWNHOUSE",
        priceMin: 300000,
        priceMax: 800000,
      },
      layout: {
        columns: 2,
        height: "450px",
        backgroundColor: "white",
        borderRadius: "lg",
        shadow: true,
      },
      content: {
        features: ["Low Maintenance", "Modern Design", "Community Amenities"],
        badges: ["Move-in Ready", "Updated"],
      },
    },
  ],
};
