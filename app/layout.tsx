import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { SITE_CONTACT } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";
import {
  generateWebSiteSchema,
  generateRealEstateAgentSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import { absoluteOgImage, DEFAULT_OG_IMAGE_PATH } from "@/lib/metadata";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import RealScoutScript from "@/components/realscout/RealScoutScript";
import WidgetTracker from "@/components/analytics/WidgetTracker";

const CalendlyBadge = dynamic(
  () => import("@/components/calendly/CalendlyBadge"),
  {
    ssr: false,
    loading: () => null,
  },
);

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  const siteUrl = getSiteUrl();
  const defaultTitle = `${SITE_CONTACT.businessName} | Summerlin 55+`;
  const defaultDescription = `${SITE_CONTACT.businessName} — guard-gated Lennar 55+ homes on Crossbridge Dr, Las Vegas, NV 89138. Dr. Jan Duffy, ${SITE_CONTACT.brokerage}.`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: "%s",
    },
    description: defaultDescription,
    keywords: config.keywords,
    alternates: {
      canonical: siteUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
        ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
        : {}),
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? {
            other: {
              "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
            },
          }
        : {}),
    },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      type: "website",
      siteName: SITE_CONTACT.businessName,
      locale: "en_US",
      url: siteUrl,
      images: [
        {
          url: absoluteOgImage(DEFAULT_OG_IMAGE_PATH),
          width: 1200,
          height: 630,
          alt: SITE_CONTACT.businessName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroHeadline,
      description: config.description,
      images: [absoluteOgImage(DEFAULT_OG_IMAGE_PATH)],
    },
  };
}

// ISR: layout used to call headers(), which forced every page dynamic.
export const revalidate = 3600;

// Same Geist variable file the package ships, with `optional` so a late
// webfont swap cannot become the mobile LCP (swap was keeping LCP at 3s).
const geistSans = localFont({
  src: "../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "optional",
  adjustFontFallback: "Arial",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistSans.className}`}>
      <head>
        <SchemaScript
          schema={combineSchemas(
            generateWebSiteSchema(),
            generateRealEstateAgentSchema(),
          )}
          id="site-schema"
        />
      </head>
      <body>
        {children}
        <CalendlyBadge />
        <Analytics />
        <RealScoutScript />
        <WidgetTracker />
      </body>
    </html>
  );
}
