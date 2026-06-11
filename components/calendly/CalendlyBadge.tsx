"use client";

import { useEffect } from "react";
import Script from "next/script";
import { buildCalendlyUrl, CALENDLY_CONSULTATION_URL } from "@/lib/calendly";
import "./types";

interface CalendlyBadgeProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

export default function CalendlyBadge({
  url = buildCalendlyUrl(CALENDLY_CONSULTATION_URL, {
    utmSource: "floating-badge",
  }),
  text = "Schedule with Dr. Jan",
  color = "#2563eb",
  textColor = "#ffffff",
  branding = true,
}: CalendlyBadgeProps) {
  useEffect(() => {
    const initBadge = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        });
      }
    };

    if (window.Calendly) {
      initBadge();
    }
  }, [url, text, color, textColor, branding]);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        id="calendly-widget-js"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url,
              text,
              color,
              textColor,
              branding,
            });
          }
        }}
      />
    </>
  );
}
