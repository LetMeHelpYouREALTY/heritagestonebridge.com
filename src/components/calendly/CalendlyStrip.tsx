import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { calendlyUrlFor } from "~/lib/calendly";

/** Booking strip placed directly after a RealScout listings section. */
export const CalendlyStrip = component$<{ dark?: boolean }>(({ dark = false }) => {
  const loc = useLocation();
  const url = calendlyUrlFor(loc.url.pathname, "after-listings");

  return (
    <div
      class={`mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border px-6 py-5 sm:flex-row ${
        dark ? "border-white/20 bg-white/5" : "border-hsb-border bg-white"
      }`}
    >
      <p class={`text-base ${dark ? "text-hsb-sand" : "text-hsb-text"}`}>
        See a home you like? Pick a time with Dr. Jan Duffy.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block rounded-full bg-hsb-primary px-6 py-3 text-sm font-semibold text-white hover:bg-hsb-primary-dark"
      >
        Schedule time with me
      </a>
    </div>
  );
});
