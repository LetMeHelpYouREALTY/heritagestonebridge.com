import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

const META_PIXEL_ID = "1751251572842748";

const GOOGLE_TAG_ID =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_GOOGLE_TAG_ID : undefined;

/**
 * Queue the ads tag and the Meta pixel immediately. Download the libraries
 * on the first tap, or 15 seconds after load, so they stay off the hero paint.
 * A click still calls gtag() before gtag.js arrives, and that click starts the download.
 */
function deferredTagScript(tagId: string | undefined): string {
  const gtagSetup = tagId
    ? `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${tagId}');`
    : "";
  const gtagLoad = tagId
    ? `var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=${tagId}';document.head.appendChild(g);`
    : "";
  const conversion = tagId
    ? `document.addEventListener('click',function(e){loadTags();var a=e.target&&e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href')||'';var s=/realscout\\.com/i.test(h)?'AW-10990620522/oggzCNmKmKUdEOqe3vgo':/^tel:/i.test(h)?'AW-10990620522/PHRcCNyKmKUdEOqe3vgo':null;if(s)gtag('event','conversion',{send_to:s,transport_type:'beacon'});},true);`
    : "";
  return `(function(){${gtagSetup}!function(f,n){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];}(window);fbq('init','${META_PIXEL_ID}');fbq('track','PageView');function loadTags(){if(window.__hsbTags)return;window.__hsbTags=1;${gtagLoad}var t=document.createElement('script');t.async=true;t.src='https://connect.facebook.net/en_US/fbevents.js';document.head.appendChild(t);}['pointerdown','keydown'].forEach(function(ev){document.addEventListener(ev,loadTags,{once:true,passive:true,capture:true});});${conversion}function late(){setTimeout(loadTags,15000);}if(document.readyState==='complete')late();else window.addEventListener('load',late,{once:true});})();`;
}

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
        <link
          rel="preload"
          href="/fonts/playfair-display-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link rel="manifest" href="/manifest.json" />
        <script dangerouslySetInnerHTML={deferredTagScript(GOOGLE_TAG_ID)} />
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
