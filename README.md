# Heritage at Stonebridge

Next.js 14 (App Router) marketing site for Heritage at Stonebridge, a guard-gated 55+ community in Summerlin West (Las Vegas, NV 89138). Brand: Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.

Production: [heritagestonebridge.com](https://www.heritagestonebridge.com)

## Stack

- **App:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS
- **Deploy:** Vercel (native Git integration — pushes to `main` deploy production)
- **APIs:** Next.js Route Handlers in `app/api/**/route.ts` (leads, chat, webhooks)
- **IDX:** RealScout widgets
- **CRM:** Follow Up Boss (native RealScout sync — do not duplicate)

There is no Python/Flask backend. The original Vercel Next.js + Flask starter leftovers have been removed.

## Commands

```bash
npm install          # or pnpm install
npm run dev          # http://localhost:3000
npm run type-check
npm run lint
npm run validate     # type-check + lint + format:check
npm run build
```

The site renders without environment variables. Optional secrets (`OPENROUTER_API_KEY`, `ANTHROPIC_API_KEY`, `FUB_API_KEY`) enable AI chat and CRM lead capture.

## Project layout

```
app/           # App Router pages + route handlers
components/    # UI, forms, RealScout, Calendly
lib/           # SEO, FUB client, site config
middleware.ts  # redirects, trailing slash, apex → www
workers/       # optional Cloudflare Workers (edge cache/headers)
```
