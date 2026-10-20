import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

const META_PIXEL_ID = "1751251572842748";

const FONT_STYLESHEET =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap";

/**
 * RealScout's UMD pulls listing photos and a second font as soon as it runs.
 * Wait until a listings element is near the viewport so the hero can paint first.
 */
const REALSCOUT_LOADER = `(function(){var src="https://em.realscout.com/widgets/realscout-web-components.umd.js";function load(){if(document.querySelector("script[data-realscout]"))return;var s=document.createElement("script");s.src=src;s.async=true;s.defer=true;s.dataset.realscout="1";document.body.appendChild(s);}function loadIdle(){var run=function(){load();};if("requestIdleCallback" in window)requestIdleCallback(run,{timeout:1500});else setTimeout(run,1);}function arm(){var nodes=document.querySelectorAll("realscout-office-listings,realscout-simple-search,realscout-advanced-search");if(!nodes.length)return;if(!("IntersectionObserver" in window)){loadIdle();return;}var io=new IntersectionObserver(function(entries){for(var i=0;i<entries.length;i++){if(entries[i].isIntersecting){loadIdle();io.disconnect();break;}}}, {rootMargin:"200px"});nodes.forEach(function(n){io.observe(n);});}function start(){arm();if(!("MutationObserver" in window))return;new MutationObserver(arm).observe(document.body,{childList:true,subtree:true});}if(document.readyState==="complete")start();else window.addEventListener("load",start,{once:true});})();`;

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://imagedelivery.net" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href={FONT_STYLESHEET}
          media="print"
          {...{ onload: "this.media='all'" }}
        />
        <noscript>
          <link rel="stylesheet" href={FONT_STYLESHEET} />
        </noscript>
        <link rel="manifest" href="/manifest.json" />
                {/* Google Tag — inert until NEXT_PUBLIC_GOOGLE_TAG_ID is set */}
        {typeof process !== 'undefined' && process.env.NEXT_PUBLIC_GOOGLE_TAG_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
            />
            <script
              dangerouslySetInnerHTML={`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');`}
            />
          </>
        )}
        {/* Meta Pixel — shared "Dr Jan Duffy - All Websites" dataset */}
        <script
          dangerouslySetInnerHTML={`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <script dangerouslySetInnerHTML={REALSCOUT_LOADER} />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
