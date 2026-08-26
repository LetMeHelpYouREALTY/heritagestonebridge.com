import Script from "next/script";

/** Load RealScout web components once site-wide after idle so they don't contend with LCP. */
export default function RealScoutScript() {
  return (
    <Script
      id="realscout-web-components"
      src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
      type="module"
      strategy="lazyOnload"
    />
  );
}
