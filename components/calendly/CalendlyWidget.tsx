"use client";

import { useEffect, useRef } from "react";
import { buildCalendlyUrl, CALENDLY_TOUR_URL } from "@/lib/calendly";

interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({
  url = buildCalendlyUrl(CALENDLY_TOUR_URL, { utmSource: "contact-embed" }),
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWidget = () => {
      if (window.Calendly && widgetRef.current) {
        widgetRef.current.innerHTML = "";

        const widgetDiv = document.createElement("div");
        widgetDiv.className = "calendly-inline-widget";
        widgetDiv.setAttribute("data-url", url);
        widgetDiv.style.minWidth = minWidth;
        widgetDiv.style.height = height;
        widgetDiv.style.width = "100%";

        widgetRef.current.appendChild(widgetDiv);

        window.Calendly.initInlineWidget({
          url,
          parentElement: widgetDiv,
        });
      }
    };

    if (window.Calendly) {
      initWidget();
    } else {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initWidget();
        }
      }, 100);

      setTimeout(() => clearInterval(checkCalendly), 10000);
    }
  }, [url, minWidth, height]);

  return (
    <div ref={widgetRef} style={{ minWidth, height, width: "100%" }} />
  );
}
