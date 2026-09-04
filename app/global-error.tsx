"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { GeistSans } from "geist/font/sans";
import { SITE_CONTACT } from "@/lib/site-contact";
import { telHref } from "@/lib/phone";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  const address = `${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}`;

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-slate-900 text-white">
        <main className="mx-auto min-h-screen max-w-xl px-5 py-16 text-center">
          <h1 className="mb-4 text-3xl font-bold text-balance">
            Heritage Stonebridge is pausing
          </h1>
          <p className="mb-8 text-lg text-slate-300 text-pretty">
            The site did not finish layout. Call Dr. Jan Duffy and she will send
            the current Summerlin 55+ list.
          </p>
          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-bold text-slate-900"
            >
              Try again
            </button>
            <a
              href={telHref(SITE_CONTACT.phone.tel)}
              className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 font-bold text-white"
            >
              Call {SITE_CONTACT.phone.display}
            </a>
          </div>
          <section
            aria-label="Office contact"
            className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-left text-sm text-slate-200"
          >
            <p className="font-semibold text-white">
              {SITE_CONTACT.businessName}
            </p>
            <p className="mt-2">{address}</p>
            <p>
              <a href={telHref(SITE_CONTACT.phone.tel)}>
                {SITE_CONTACT.phone.display}
              </a>
              {" · "}
              <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>
            </p>
            <p className="mt-2">
              {SITE_CONTACT.brokerage} · License {SITE_CONTACT.license}
            </p>
            {error.digest ? (
              <p className="mt-4 font-mono text-xs text-slate-400">
                Reference: {error.digest}
              </p>
            ) : null}
          </section>
        </main>
      </body>
    </html>
  );
}
