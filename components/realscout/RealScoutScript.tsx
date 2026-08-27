"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

/**
 * Load RealScout once in the root layout, but skip the homepage so mobile PSI
 * is not charged for the widget UMD during LCP. Other routes still upgrade
 * custom elements after idle.
 */
export default function RealScoutScript() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <Script
      id="realscout-web-components"
      src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
      type="module"
      strategy="lazyOnload"
    />
  );
}
