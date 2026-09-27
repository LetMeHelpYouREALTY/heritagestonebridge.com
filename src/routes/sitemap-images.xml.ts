import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (requestEvent) => {
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        
    <!-- Homepage Images -->
    <url>
        <loc>https://heritagestonebridge.com/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/heritage-stonebridge-hero.jpg</image:loc>
            <image:title>Heritage at Stonebridge - Luxury 55+ Community Entrance</image:title>
            <image:caption>Beautiful gated entrance to Heritage at Stonebridge community in Summerlin, Las Vegas</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/stonebridge-amenities.jpg</image:loc>
            <image:title>Resort-Style Amenities at Heritage at Stonebridge</image:title>
            <image:caption>Luxury amenities including clubhouse, pool, and fitness center</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Summerlin, Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/red-rock-canyon-view.jpg</image:loc>
            <image:title>Red Rock Canyon Views from Heritage at Stonebridge</image:title>
            <image:caption>Stunning mountain views of Red Rock Canyon National Conservation Area</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Red Rock Canyon, Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/dr-jan-duffy-agent.jpg</image:loc>
            <image:title>Dr. Jan Duffy - Las Vegas Real Estate Expert</image:title>
            <image:caption>Professional headshot of Dr. Jan Duffy, Las Vegas real estate specialist</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
    </url>
    
    <!-- 55+ Communities Images -->
    <url>
        <loc>https://heritagestonebridge.com/55-plus-communities/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/55-plus-community-lifestyle.jpg</image:loc>
            <image:title>Active Adult Lifestyle in Las Vegas 55+ Communities</image:title>
            <image:caption>Residents enjoying active lifestyle in premier 55+ communities</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/community-activities.jpg</image:loc>
            <image:title>Community Activities and Social Events</image:title>
            <image:caption>Residents participating in community activities and social events</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
    </url>
    
    <!-- Stonebridge Homes Images -->
    <url>
        <loc>https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/stonebridge-homes-exterior.jpg</image:loc>
            <image:title>Heritage at Stonebridge Homes for Sale</image:title>
            <image:caption>Luxury single-family homes in Heritage at Stonebridge community</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/home-interior.jpg</image:loc>
            <image:title>Stonebridge Home Interior Design</image:title>
            <image:caption>Modern interior design and luxury finishes in Stonebridge homes</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
    </url>
    
    <!-- Summerlin Homes Images -->
    <url>
        <loc>https://heritagestonebridge.com/summerlin-homes/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/summerlin-master-plan.jpg</image:loc>
            <image:title>Summerlin Master-Planned Community</image:title>
            <image:caption>Beautiful master-planned community with golf courses and amenities</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/summerlin-golf-course.jpg</image:loc>
            <image:title>Golf Course Living in Summerlin</image:title>
            <image:caption>Homes with golf course views in Summerlin, Las Vegas</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
        </image:image>
    </url>
    
    <!-- Luxury Homes Images -->
    <url>
        <loc>https://heritagestonebridge.com/luxury-homes/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/luxury-home-exterior.jpg</image:loc>
            <image:title>Luxury Homes in Las Vegas</image:title>
            <image:caption>High-end luxury homes with premium finishes and features</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/luxury-kitchen.jpg</image:loc>
            <image:title>Luxury Kitchen Design</image:title>
            <image:caption>Gourmet kitchens with high-end appliances and custom finishes</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
    </url>
    
    <!-- Market Analysis Images from Simplifying the Market -->
    <url>
        <loc>https://heritagestonebridge.com/market-analysis/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/mortgage-rates-trend.jpg</image:loc>
            <image:title>Mortgage Rates Trend Chart - September 2025</image:title>
            <image:caption>Current mortgage rate trends showing 6.13% - lowest since October 2024</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>United States</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/fed-rate-cut-chart.jpg</image:loc>
            <image:title>Federal Reserve Rate Cut Expectations</image:title>
            <image:caption>CME FedWatch Tool showing 100% chance of September rate cut</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>United States</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/home-pricing-strategy.jpg</image:loc>
            <image:title>Home Pricing Strategy Chart</image:title>
            <image:caption>Data showing homes taking 60 days on market - pricing strategy is key</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>United States</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/new-home-inventory-chart.jpg</image:loc>
            <image:title>New Home Inventory vs 2008 Comparison</image:title>
            <image:caption>Chart showing new home inventory levels compared to 2008 crash</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>United States</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/housing-market-recovery-chart.jpg</image:loc>
            <image:title>Housing Market Recovery History</image:title>
            <image:caption>Historical data showing market recovery patterns from 1980s, 2008, and 2020</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>United States</image:geo_location>
        </image:image>
    </url>
    
    <!-- Blog Content Images -->
    <url>
        <loc>https://heritagestonebridge.com/blog/</loc>
        <lastmod>${currentDate}</lastmod>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/las-vegas-market-trends.jpg</image:loc>
            <image:title>Las Vegas Real Estate Market Trends</image:title>
            <image:caption>Comprehensive analysis of Las Vegas real estate market trends</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/red-rock-canyon-neighborhoods.jpg</image:loc>
            <image:title>Red Rock Canyon Neighborhoods</image:title>
            <image:caption>Premier neighborhoods near Red Rock Canyon with luxury amenities</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Red Rock Canyon, Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/summerlin-luxury-communities.jpg</image:loc>
            <image:title>Summerlin Luxury 55+ Communities</image:title>
            <image:caption>Resort-style amenities and championship golf courses in Summerlin</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Summerlin, Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/gated-community-comparison.jpg</image:loc>
            <image:title>Gated vs Non-Gated Community Comparison</image:title>
            <image:caption>Security features, amenities, and lifestyle benefits comparison</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/market-reports-dashboard.jpg</image:loc>
            <image:title>Las Vegas Real Estate Market Reports</image:title>
            <image:caption>Comprehensive market reports covering all Las Vegas areas</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/henderson-community-guide.jpg</image:loc>
            <image:title>Henderson Real Estate Community Guide</image:title>
            <image:caption>Master-planned communities and established neighborhoods in Henderson</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Henderson, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/home-selling-strategies.jpg</image:loc>
            <image:title>Home Selling Strategies</image:title>
            <image:caption>Expert tips for staging, pricing, and marketing your home</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
        <image:image>
            <image:loc>https://heritagestonebridge.com/images/first-time-buyer-guide.jpg</image:loc>
            <image:title>First Time Home Buyer Guide</image:title>
            <image:caption>Complete guide covering financing, inspections, and closing procedures</image:caption>
            <image:license>https://heritagestonebridge.com/license</image:license>
            <image:geo_location>Las Vegas, NV</image:geo_location>
        </image:image>
    </url>
    
</urlset>`;

  requestEvent.headers.set("Content-Type", "application/xml");
  requestEvent.headers.set("Cache-Control", "public, max-age=1800"); // 30 minutes cache
  requestEvent.send(200, sitemap);
};
