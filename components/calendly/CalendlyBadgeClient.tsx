"use client";

import dynamic from "next/dynamic";

// Next 15: `ssr: false` is only allowed inside a Client Component.
const CalendlyBadgeClient = dynamic(
  () => import("@/components/calendly/CalendlyBadge"),
  {
    ssr: false,
    loading: () => null,
  },
);

export default CalendlyBadgeClient;
