// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    // Low sample rate: Replay + 100% traces add hundreds of KB and TBT on mobile PSI.
    tracesSampleRate: 0.05,
    debug: false,
    replaysOnErrorSampleRate: 0,
    replaysSessionSampleRate: 0,
  });
}
