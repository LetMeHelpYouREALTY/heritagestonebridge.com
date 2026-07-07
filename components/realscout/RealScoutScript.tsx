import Script from "next/script";

/** Load RealScout UMD bundle once on pages that render listing widgets (lazyOnload). */
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
