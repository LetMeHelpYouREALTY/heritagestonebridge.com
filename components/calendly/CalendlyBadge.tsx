"use client";

import { useEffect, useState } from "react";
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

function titleCalendlyIframes() {
  document.querySelectorAll('iframe[name="widgetCta"]').forEach((frame) => {
    if (!frame.getAttribute("title")) {
      frame.setAttribute("title", "Schedule a consultation with Dr. Jan Duffy");
    }
  });
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
  const [loadWidget, setLoadWidget] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setLoadWidget(true);
    };

    const events: Array<keyof WindowEventMap> = [
      "pointerdown",
      "keydown",
      "scroll",
    ];
    events.forEach((event) =>
      window.addEventListener(event, enable, { once: true, passive: true }),
    );

    return () => {
      cancelled = true;
      events.forEach((event) => window.removeEventListener(event, enable));
    };
  }, []);

  if (!loadWidget) return null;

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        id="calendly-widget-js"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url,
              text,
              color,
              textColor,
              branding,
            });
            titleCalendlyIframes();
            window.setTimeout(titleCalendlyIframes, 1500);
          }
        }}
      />
    </>
  );
}
