import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* RealScout Script - Load globally for all pages */}
      <script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        crossOrigin="anonymous"
      />

      {/* RealScout Styles */}
      <style>
        {`
					realscout-office-listings {
						--rs-listing-divider-color: rgb(101, 141, 172);
						width: 100%;
						min-height: 400px;
						display: block;
					}
				`}
      </style>

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => {
        const { dangerouslySetInnerHTML, ...otherProps } = s.props || {};
        return (
          // eslint-disable-next-line react/no-danger
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for dynamic styles
          <style key={s.key} {...otherProps} dangerouslySetInnerHTML={s.style} />
        );
      })}
    </>
  );
});
