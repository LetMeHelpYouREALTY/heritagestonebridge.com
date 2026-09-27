import { component$, useVisibleTask$ } from "@builder.io/qwik";

export const AdvancedSEO = component$(() => {
  useVisibleTask$(() => {
    // Advanced Schema.org markup injection for 2025
    const injectAdvancedSchema = () => {
      const schema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "RealEstateAgent",
            "@id": "https://heritagestonebridge.com/#agent",
            name: "Heritage Stonebridge | Homes By Dr. Jan Duffy",
            email: "DrDuffySells@HeritageStonebridge.com",
            telephone: "702-789-6561",
            url: "https://heritagestonebridge.com",
            image: "https://heritagestonebridge.com/images/dr-jan-duffy.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Crossbridge Dr",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89138",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 36.1699,
              longitude: -115.1398,
            },
            areaServed: [
              {
                "@type": "City",
                name: "Las Vegas",
                containedInPlace: {
                  "@type": "State",
                  name: "Nevada",
                },
              },
              {
                "@type": "City",
                name: "Summerlin",
                containedInPlace: {
                  "@type": "State",
                  name: "Nevada",
                },
              },
            ],
            knowsAbout: [
              "55+ Active Adult Communities",
              "Luxury Real Estate",
              "Gated Communities",
              "Red Rock Canyon Area",
              "Summerlin Real Estate",
            ],
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Real Estate Consultation",
                  description: "Professional real estate services for 55+ communities",
                },
              },
            ],
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Real Estate License",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Nevada Real Estate Division",
                },
                identifier: "S.0197614.LLC",
              },
            ],
          },
          {
            "@type": "ResidentialComplex",
            "@id": "https://heritagestonebridge.com/#community",
            name: "Heritage at Stonebridge",
            description: "Luxury 55+ active adult community in Summerlin, Las Vegas",
            url: "https://heritagestonebridge.com",
            image: "https://heritagestonebridge.com/images/stonebridge-entrance.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Crossbridge Dr",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89138",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 36.1699,
              longitude: -115.1398,
            },
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Clubhouse",
                value: "8,000 sq ft",
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Pickleball Courts",
                value: "Multiple courts",
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Swimming Pool",
                value: "Resort-style pool",
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Fitness Center",
                value: "State-of-the-art equipment",
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Walking Trails",
                value: "Scenic walking paths",
              },
            ],
            numberOfUnits: 421,
            priceRange: "$489,000 - $800,000+",
            developer: {
              "@type": "Organization",
              name: "Heritage at Stonebridge Development",
            },
            propertyType: "Gated Community",
            ageRestriction: "55+",
            map: "https://maps.google.com/?q=Crossbridge+Dr,+Las+Vegas,+NV+89138",
          },
        ],
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      script.id = "advanced-schema-markup";
      document.head.appendChild(script);
    };

    // Advanced Meta Tags for AI and Search Engines
    const injectAdvancedMetaTags = () => {
      const metaTags = [
        // Advanced AI-friendly tags
        { name: "ai-content-type", content: "real-estate-community" },
        { name: "ai-audience", content: "adults-55-plus" },
        { name: "ai-location", content: "Las Vegas, Nevada" },
        { name: "ai-community-type", content: "active-adult-gated-community" },
        { name: "ai-price-range", content: "$489,000 - $800,000+" },
        { name: "ai-agent", content: "Dr. Jan Duffy" },
        { name: "ai-phone", content: "702-789-6561" },
        { name: "ai-email", content: "DrDuffySells@HeritageStonebridge.com" },

        // Advanced search engine directives
        {
          name: "robots",
          content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        {
          name: "googlebot",
          content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },
        {
          name: "bingbot",
          content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },

        // Advanced content classification
        { name: "content-type", content: "real-estate" },
        { name: "audience", content: "adults-55-plus" },
        { name: "location", content: "Las Vegas, Nevada" },
        { name: "community-type", content: "active-adult-gated-community" },

        // Advanced geo tags
        { name: "geo.region", content: "US-NV" },
        { name: "geo.placename", content: "Las Vegas" },
        { name: "geo.position", content: "36.1699;-115.1398" },
        { name: "ICBM", content: "36.1699, -115.1398" },

        // Advanced language and locale
        { name: "language", content: "en-US" },
        { name: "locale", content: "en_US" },

        // Advanced mobile optimization
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },

        // Advanced security
        { name: "referrer", content: "strict-origin-when-cross-origin" },
        {
          name: "content-security-policy",
          content:
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;",
        },
      ];

      metaTags.forEach((tag) => {
        const meta = document.createElement("meta");
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    };

    // Advanced Structured Data for AI Understanding
    const injectAIStructuredData = () => {
      const aiData = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        name: "Heritage at Stonebridge Community Data",
        description: "Comprehensive data about Heritage at Stonebridge 55+ community",
        keywords: [
          "55+ communities",
          "active adult",
          "gated community",
          "Summerlin",
          "Las Vegas",
          "Red Rock Canyon",
          "luxury homes",
          "real estate",
        ],
        spatialCoverage: {
          "@type": "Place",
          name: "Las Vegas, Nevada",
          geo: {
            "@type": "GeoCoordinates",
            latitude: 36.1699,
            longitude: -115.1398,
          },
        },
        temporalCoverage: "2025-01-01/2025-12-31",
        distribution: {
          "@type": "DataDownload",
          contentUrl: "https://heritagestonebridge.com/api/community-data",
          encodingFormat: "application/json",
        },
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(aiData);
      script.id = "ai-structured-data";
      document.head.appendChild(script);
    };

    // Inject all advanced SEO elements
    injectAdvancedSchema();
    injectAdvancedMetaTags();
    injectAIStructuredData();

    // Advanced Analytics and Tracking
    const initAdvancedAnalytics = () => {
      // Enhanced event tracking for real estate
      const trackRealEstateEvent = (eventName: string, properties: Record<string, any>) => {
        console.log("Real Estate Event:", eventName, properties);
        // In production, send to analytics service
        // analytics.track(eventName, properties);
      };

      // Track page interactions
      document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === "A") {
          const href = target.getAttribute("href");
          if (href?.includes("realscout")) {
            trackRealEstateEvent("schedule_tour_click", {
              url: href,
              text: target.textContent,
            });
          }
        }
      });

      // Track phone number clicks
      document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === "A" && target.getAttribute("href")?.startsWith("tel:")) {
          trackRealEstateEvent("phone_click", {
            phone: target.getAttribute("href"),
          });
        }
      });
    };

    initAdvancedAnalytics();
  });

  return null; // This component doesn't render anything visible
});
