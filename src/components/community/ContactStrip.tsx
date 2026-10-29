import { component$ } from "@builder.io/qwik";
import { AgentPortrait } from "~/components/community/AgentPortrait";
import { ReviewQr } from "~/components/community/ReviewQr";
import { business } from "~/config/business";

/** Call, text, and reviews for campaign pages. The office address stays in the footer. */
export const ContactStrip = component$(() => {
  return (
    <section class="bg-white py-16">
      <div class="mx-auto max-w-5xl px-4">
        <div class="flex items-center gap-4">
          <AgentPortrait size="lg" />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.15em] text-hsb-accent">
              {business.name}
            </p>
            <h2 class="mt-3 font-display text-3xl text-hsb-dark">Talk with Dr. Jan Duffy</h2>
          </div>
        </div>
        <p class="mt-4 text-lg text-hsb-text">
          {business.hoursDisplay}. Use the office listings above, or pick a time on the calendar.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={business.telephoneHref}
            class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
          >
            Call {business.telephoneDisplay}
          </a>
          <a
            href={business.smsHref}
            class="rounded-full border border-hsb-border px-6 py-3 text-center font-medium text-hsb-primary hover:bg-hsb-sand"
          >
            Text {business.telephoneDisplay}
          </a>
          <a
            href={business.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border border-hsb-border px-6 py-3 text-center font-medium text-hsb-primary hover:bg-hsb-sand"
          >
            View Google Reviews
          </a>
          <a
            href={business.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border border-hsb-border px-6 py-3 text-center font-medium text-hsb-primary hover:bg-hsb-sand"
          >
            Write a Google review
          </a>
        </div>
        <ReviewQr />
        <p class="mt-4 text-sm text-hsb-muted">
          Wheelchair accessible parking lot and wheelchair accessible entrance. Listing data on
          this site comes from the MLS through RealScout and can change without notice.
        </p>
      </div>
    </section>
  );
});
