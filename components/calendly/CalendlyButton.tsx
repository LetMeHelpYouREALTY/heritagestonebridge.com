"use client";

import { buildCalendlyUrl, CALENDLY_TOUR_URL } from "@/lib/calendly";
import "./types";

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({
  url = buildCalendlyUrl(CALENDLY_TOUR_URL, { utmSource: "cta-button" }),
  text = "Schedule time with me",
  className = "inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors",
  children,
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children || text}
    </button>
  );
}
