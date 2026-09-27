import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (requestEvent) => {
  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Main pages sitemap - All website pages -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-pages.xml</loc>
        <lastmod>${currentDate}</lastmod>
    </sitemap>
    
    <!-- Property listings sitemap - Real estate focused pages -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-properties.xml</loc>
        <lastmod>${currentDate}</lastmod>
    </sitemap>
    
    <!-- Images sitemap - All images for better SEO -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-images.xml</loc>
        <lastmod>${currentDate}</lastmod>
    </sitemap>
    
</sitemapindex>`;

  requestEvent.headers.set("Content-Type", "application/xml");
  requestEvent.headers.set("Cache-Control", "public, max-age=1800"); // 30 minutes cache
  requestEvent.send(200, sitemap);
};
