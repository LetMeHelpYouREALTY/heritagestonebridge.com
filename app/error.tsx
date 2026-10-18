"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import SiteStatusPage from "@/components/sections/SiteStatusPage";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <SiteStatusPage
      title="This page hit a snag"
      description="The Summerlin listing or form did not load. Try again, or call Dr. Jan Duffy and she will pull the same MLS data."
      digest={error.digest}
      onRetry={reset}
    />
  );
}
