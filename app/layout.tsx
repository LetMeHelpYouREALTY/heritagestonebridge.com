import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { SITE_CONTACT } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: `${SITE_CONTACT.businessName} | Summerlin 55+`,
    description: `${SITE_CONTACT.businessName} — guard-gated Lennar 55+ homes on Crossbridge Dr, Las Vegas, NV 89138. Dr. Jan Duffy, ${SITE_CONTACT.brokerage}.`,
    keywords: config.keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      type: "website",
      url: siteUrl,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        {/* WidgetTracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </head>
      <body>
        {children}
        <CalendlyBadge />
        <Analytics />
      </body>
    </html>
  );
}
