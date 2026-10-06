import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";
import { CommunityFacts } from "~/components/community/CommunityFacts";

export const head: DocumentHead = {
  title: "Home Selling Guide Las Vegas | Expert Tips - Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content: "Complete home selling guide for Las Vegas real estate. Expert tips on pricing, staging, marketing, and closing. Maximize your home's value with Dr. Jan Duffy's proven strategies.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Home Selling Guide Las Vegas | Expert Tips",
    },
    {
      property: "og:description",
      content: "Complete home selling guide for Las Vegas real estate with expert tips on pricing, staging, and marketing.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/home-selling-guide",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Home Selling Guide Las Vegas | Expert Tips",
    },
    {
      name: "twitter:description",
      content: "Complete home selling guide for Las Vegas real estate with expert tips on pricing, staging, and marketing.",
    },
  ],
};

export default component$(() => {


  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Home Selling Guide"
        lede="Expert strategies to maximize your home's value and sell quickly"
      />
      <OfficeListingsBelowHero />
      <CommunityFacts />

      {/* AI Selling Content */}
      

      {/* Comprehensive Service Schema - September 2025 Google "Perspective" Compliant */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Home Selling Services",
          "description": "Professional home selling services in Las Vegas, Henderson, and Summerlin. Expert guidance through every step of the selling process with proven results and market expertise.",
          "provider": {
            "@type": "RealEstateAgent",
            "@id": "https://heritagestonebridge.com/#organization",
            "name": "Dr. Jan Duffy",
            "telephone": "702-789-6561",
            "email": "DrDuffySells@HeritageStonebridge.com"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Las Vegas",
              "containedInPlace": {
                "@type": "State", 
                "name": "Nevada"
              }
            },
            {
              "@type": "City",
              "name": "Henderson",
              "containedInPlace": {
                "@type": "State", 
                "name": "Nevada"
              }
            },
            {
              "@type": "City",
              "name": "Summerlin",
              "containedInPlace": {
                "@type": "State", 
                "name": "Nevada"
              }
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Home Selling Service Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Market Analysis & Pricing Strategy",
                  "description": "Comprehensive market analysis to determine optimal listing price and pricing strategy"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Home Staging Consultation",
                  "description": "Professional staging advice to maximize home appeal and market value"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Marketing & Advertising",
                  "description": "Multi-channel marketing strategy including online listings, social media, and traditional advertising"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Negotiation & Closing Support",
                  "description": "Expert negotiation skills and comprehensive closing support throughout the transaction"
                }
              }
            ]
          },
          "serviceType": "Real Estate Sales",
          "serviceOutput": "Successful home sale at optimal market value",
          "potentialAction": {
            "@type": "ContactAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "tel:+1-702-789-6561",
              "name": "Call Dr. Jan Duffy for Home Selling Services"
            }
          }
        })}
      />

      {/* FAQ Schema for Home Selling Guide */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I determine the right price for my home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dr. Jan Duffy provides comprehensive market analysis including comparable sales, current market conditions, and property-specific factors to determine the optimal listing price for your home."
              }
            },
            {
              "@type": "Question",
              "name": "What should I do to prepare my home for sale?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Preparing your home for sale includes decluttering, deep cleaning, minor repairs, professional staging, and enhancing curb appeal. Dr. Jan Duffy provides detailed guidance for each step."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it typically take to sell a home in Las Vegas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The time to sell varies based on market conditions, pricing, and property condition. With proper pricing and marketing, most homes in Las Vegas sell within 30-60 days."
              }
            },
            {
              "@type": "Question",
              "name": "What marketing strategies do you use to sell homes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dr. Jan Duffy uses a comprehensive marketing approach including MLS listings, professional photography, virtual tours, social media marketing, and targeted advertising to reach qualified buyers."
              }
            }
          ]
        })}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://heritagestonebridge.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Home Selling Guide",
              "item": "https://heritagestonebridge.com/home-selling-guide"
            }
          ]
        })}
      />

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Home Selling Guide"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
