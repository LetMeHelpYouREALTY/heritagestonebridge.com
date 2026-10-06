import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { pageSchemaGraph } from "~/lib/schema/page-graph";

const CANONICAL_HOST = "heritagestonebridge.com";

/** One https apex URL with a trailing slash. Matches the URLs Search Console already crawled. */
export function toCanonicalHref(href: string): string {
  try {
    const url = new URL(href);
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    url.search = "";
    url.hash = "";
    if (url.pathname !== "/" && !url.pathname.endsWith("/")) {
      url.pathname = `${url.pathname}/`;
    }
    return url.href;
  } catch {
    return `https://${CANONICAL_HOST}/`;
  }
}

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const canonical = toCanonicalHref(loc.url.href);

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={pageSchemaGraph(loc.url.href, head.title)} />
      <link rel="icon" type="image/png" href="https://heritagestonebridge.com/favicon.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://heritagestonebridge.com/favicon.png" />

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

      {head.meta
        .filter((m) => m.name !== "canonical")
        .map((m) =>
          m.property === "og:url" ? (
            <meta key={m.key} {...m} content={canonical} />
          ) : (
            <meta key={m.key} {...m} />
          ),
        )}

      {head.links
        .filter((l) => l.rel !== "canonical")
        .map((l) => (
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
