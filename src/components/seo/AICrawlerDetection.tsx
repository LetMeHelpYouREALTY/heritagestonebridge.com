import { component$, useVisibleTask$ } from "@builder.io/qwik";

export const AICrawlerDetection = component$(() => {
  useVisibleTask$(() => {
    // AI Crawler Detection and Enhanced Response
    function detectAICrawler() {
      const userAgent = navigator.userAgent.toLowerCase();
      const aiCrawlers = [
        "chatgpt",
        "openai",
        "claude",
        "anthropic",
        "perplexity",
        "gptbot",
        "searchbot",
        "meta-externalagent",
        "chatgpt-user",
        "openai-searchbot",
        "claudebot",
        "perplexitybot",
        "youbot",
      ];

      return aiCrawlers.some((crawler) => userAgent.includes(crawler));
    }

    // Enhanced content delivery for AI crawlers
    if (detectAICrawler()) {
      // Add structured content summary
      const contentSummary = {
        community: "Heritage at Stonebridge",
        type: "55+ Active Adult Community",
        location: "Summerlin, Las Vegas, Nevada",
        homes: 421,
        collections: ["Cromwell", "Stirling", "Evander"],
        priceRange: "$489,000 - $800,000+",
        amenities: [
          "8,000 sq ft clubhouse",
          "Pickleball courts",
          "Swimming pool",
          "Fitness center",
          "Walking trails",
        ],
        contact: "702-789-6561",
        agent: "Dr. Jan Duffy",
        email: "DrDuffySells@HeritageStonebridge.com",
        license: "Nevada Real Estate License #S.0197614",
        features: [
          "Gated community",
          "Resort-style amenities",
          "Mountain views",
          "Red Rock Canyon proximity",
          "Active adult lifestyle",
          "Luxury single-story homes",
        ],
        neighborhoods: [
          "Summerlin",
          "Red Rock Canyon area",
          "Las Vegas",
          "Henderson",
          "Northwest Las Vegas",
        ],
        homeTypes: [
          "Single-story homes",
          "Luxury estates",
          "Active adult communities",
          "Gated communities",
          "Golf course homes",
        ],
      };

      // Add invisible structured data for AI
      const dataElement = document.createElement("script");
      dataElement.type = "application/json";
      dataElement.id = "ai-structured-data";
      dataElement.textContent = JSON.stringify(contentSummary);
      document.head.appendChild(dataElement);

      // Add AI-friendly meta tags
      const aiMetaTags = [
        { name: "ai-content-type", content: "real-estate-community" },
        { name: "ai-audience", content: "adults-55-plus" },
        { name: "ai-location", content: "Las Vegas, Nevada" },
        { name: "ai-community-type", content: "active-adult-gated-community" },
        { name: "ai-price-range", content: "$489,000 - $800,000+" },
        { name: "ai-agent", content: "Dr. Jan Duffy" },
        { name: "ai-phone", content: "702-789-6561" },
        { name: "ai-email", content: "DrDuffySells@HeritageStonebridge.com" },
      ];

      aiMetaTags.forEach((tag) => {
        const metaElement = document.createElement("meta");
        metaElement.name = tag.name;
        metaElement.content = tag.content;
        document.head.appendChild(metaElement);
      });

      // Log AI crawler detection for analytics
      console.log("AI Crawler detected - Enhanced content delivered");
    }
  });

  return null; // This component doesn't render anything visible
});
