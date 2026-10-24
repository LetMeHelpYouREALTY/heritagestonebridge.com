import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { calendlyUrlFor } from "~/lib/calendly";

/** Inline Calendly scheduler as a plain iframe (no widget.js needed). */
export const CalendlyInline = component$<{ title: string }>(({ title }) => {
  const loc = useLocation();
  const url = new URL(calendlyUrlFor(loc.url.pathname, "inline"));
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("embed_domain", "heritagestonebridge.com");

  return (
    <iframe
      src={url.toString()}
      title={title}
      loading="lazy"
      class="h-[700px] w-full rounded-2xl border-0 bg-white"
    />
  );
});
