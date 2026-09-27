import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (requestEvent) => {
  const robots = `# Robots.txt for Heritage at Stonebridge
# Updated: ${new Date().toISOString().split('T')[0]}

User-agent: *
Allow: /

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# Allow AI crawlers
User-agent: ChatGPT-User
Allow: /

User-agent: OpenAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: YouBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

# Block unnecessary crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Disallow admin and temporary files
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /temp/
Disallow: /cache/
Disallow: /*.pdf$

# Crawl delay for polite crawling
Crawl-delay: 1

# Sitemap locations - Optimized for Google Search Console
Sitemap: https://heritagestonebridge.com/sitemap.xml
Sitemap: https://heritagestonebridge.com/sitemap-pages.xml
Sitemap: https://heritagestonebridge.com/sitemap-properties.xml
Sitemap: https://heritagestonebridge.com/sitemap-images.xml

# Host directive
Host: https://heritagestonebridge.com`;

  requestEvent.headers.set("Content-Type", "text/plain");
  requestEvent.headers.set("Cache-Control", "public, max-age=86400");
  requestEvent.send(200, robots);
};
