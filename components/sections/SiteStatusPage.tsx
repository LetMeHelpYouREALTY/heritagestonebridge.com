"use client";

import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AgentPhoto from "@/components/shared/AgentPhoto";
import { SITE_CONTACT } from "@/lib/site-contact";
import { telHref } from "@/lib/phone";
import { formatBusinessHoursShort } from "@/lib/hours";

type SiteStatusPageProps = {
  title: string;
  description: string;
  digest?: string;
  onRetry?: () => void;
};

export default function SiteStatusPage({
  title,
  description,
  digest,
  onRetry,
}: SiteStatusPageProps) {
  const address = `${SITE_CONTACT.address.streetAddress}, ${SITE_CONTACT.address.addressLocality}, ${SITE_CONTACT.address.addressRegion} ${SITE_CONTACT.address.postalCode}`;

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-slate-50 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <AgentPhoto size="md" className="mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg text-slate-600 mb-8 text-pretty">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            {onRetry ? (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 font-bold text-white hover:bg-slate-800"
              >
                Try again
              </button>
            ) : null}
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-bold text-slate-900 ring-1 ring-slate-300 hover:bg-slate-100"
            >
              Heritage homepage
            </Link>
            <a
              href={telHref(SITE_CONTACT.phone.tel)}
              className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 font-bold text-white hover:bg-purple-500"
            >
              Call {SITE_CONTACT.phone.display}
            </a>
          </div>
          <section
            aria-label="Office contact"
            className="rounded-xl border border-slate-200 bg-white p-6 text-left text-sm text-slate-700"
          >
            <p className="font-semibold text-slate-900">
              {SITE_CONTACT.businessName}
            </p>
            <p className="mt-2">{address}</p>
            <p>
              <a
                className="text-purple-700 underline"
                href={telHref(SITE_CONTACT.phone.tel)}
              >
                {SITE_CONTACT.phone.display}
              </a>
              {" · "}
              <a
                className="text-purple-700 underline"
                href={`mailto:${SITE_CONTACT.email}`}
              >
                {SITE_CONTACT.email}
              </a>
            </p>
            <p className="mt-2">{formatBusinessHoursShort()}</p>
            <p className="mt-2">
              {SITE_CONTACT.brokerage} · License {SITE_CONTACT.license}
            </p>
            {digest ? (
              <p className="mt-4 font-mono text-xs text-slate-500">
                Reference: {digest}
              </p>
            ) : null}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
