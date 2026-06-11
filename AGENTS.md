# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 14 (App Router) real‑estate marketing/lead‑gen site** (package name `heritagestonebridge`, brand "Dr. Jan Duffy / Berkshire Hathaway HomeServices"). Standard commands live in `package.json` `scripts`; the notes below only cover non‑obvious caveats for working in the Cloud VM.

### Dependencies / install
- Install **must** use `npm install --legacy-peer-deps`. A plain `npm install`/`npm ci` fails with `ERESOLVE`: the repo pins `@types/node@20.11.24`, but `vite@7` (pulled transitively by `vitest@4` / `@vitejs/plugin-react@5`) requires a newer `@types/node`. The update script already runs this on startup.
- Both `package-lock.json` and `pnpm-lock.yaml` are committed; this setup uses **npm** (matches the `package.json` scripts and README).
- `.nvmrc` pins Node 20, but only Node 22 is available in the VM and everything (type‑check, lint, dev server) works on Node 22 — installing Node 20 is not required.

### Running the app
- Dev server: `npm run dev` → http://localhost:3000 (Next.js, port 3000). This is the product; it renders fully with **no environment variables** configured. The committed `.env` only contains stale template vars plus a malformed/invalid `OPENROUTER_API_KEY`.

### Lint / type-check / build
- `npm run lint` (passes with `no-explicit-any` warnings only), `npm run type-check` (clean), `npm run validate` (type-check + lint + format:check).
- For production builds the user prefers the Vercel CLI (`vercel build`); local `npm run build` also works.

### Tests (pre-existing breakage)
- `npm run test:run` (Vitest) currently **fails to collect** every suite: `tests/setup.ts` contains JSX (`<img {...props} />`) but uses a `.ts` extension, so esbuild rejects it (`Expected ">" but found "{"`). This is a pre‑existing repo issue (the file should be `.tsx`, or vitest needs an esbuild `loader: 'tsx'` override), not an environment problem. Fix the file/config before relying on the test suite.

### Integrations require real secrets (optional, not needed to run the site)
- AI chat (`/api/chat`, `/api/claude/chat`) needs a valid `OPENROUTER_API_KEY` / `ANTHROPIC_API_KEY`.
- Lead capture (`/api/leads/capture`) and CRM webhooks need valid `FUB_API_KEY` (+ optional `FUB_SYSTEM_KEY`); without them the API returns `FUB API Error (401)`. The lead form UI still works client‑side.
- Rate limiting (Upstash), CAPTCHA (Turnstile), and Sentry are all env‑guarded and no‑op when unset.
- A legacy Python Flask app (`api/index.py`, `npm run flask-dev`, port 5328) is leftover from the original template and is **not** part of the real‑estate product flow.
