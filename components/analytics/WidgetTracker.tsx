"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    WidgetTrackerObject?: string;
    widgetTracker?: {
      (...args: unknown[]): void;
      q?: unknown[];
      ds?: number;
    };
  }
}

/**
 * WidgetBe tracker — load only after a real user gesture so mobile PSI
 * does not download ~350KB of unused third-party JS during LCP/TTI.
 */
export default function WidgetTracker() {
  useEffect(() => {
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      window.WidgetTrackerObject = "widgetTracker";
      window.widgetTracker =
        window.widgetTracker ||
        function widgetTracker(...args: unknown[]) {
          (window.widgetTracker!.q = window.widgetTracker!.q || []).push(args);
        };
      window.widgetTracker.ds = Date.now();
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://widgetbe.com/agent";
      document.body.appendChild(script);
      window.widgetTracker("create", "WT-XQHVYQWW");
      window.widgetTracker("send", "pageview");
    };

    const events: Array<keyof WindowEventMap> = [
      "pointerdown",
      "keydown",
      "scroll",
    ];
    events.forEach((event) =>
      window.addEventListener(event, load, { once: true, passive: true }),
    );
    return () => {
      events.forEach((event) => window.removeEventListener(event, load));
    };
  }, []);

  return null;
}
