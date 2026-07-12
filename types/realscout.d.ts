// TypeScript declarations for RealScout Web Components

declare namespace JSX {
  interface IntrinsicElements {
    "realscout-simple-search": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        "agent-encoded-id": string;
      },
      HTMLElement
    >;
    "realscout-advanced-search": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        "agent-encoded-id": string;
      },
      HTMLElement
    >;
    "realscout-your-listings": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        "agent-encoded-id"?: string;
        "sort-order"?: string;
        "listing-status"?: string;
        "include-seller-listings"?: boolean;
        "include-co-listings"?: boolean;
      },
      HTMLElement
    >;
    "realscout-office-listings": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        "agent-encoded-id"?: string;
        "office-encoded-id"?: string;
        "sort-order"?: string;
        "listing-status"?: string;
        "property-types"?: string;
        "price-min"?: string;
        "price-max"?: string;
        "include-seller-listings"?: boolean;
      },
      HTMLElement
    >;
  }
}
