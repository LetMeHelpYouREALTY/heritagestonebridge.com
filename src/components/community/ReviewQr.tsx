import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";

/** QR from the Business Profile "Get more reviews" card. Same destination as writeReviewUrl. */
export const ReviewQr = component$(() => {
  return (
    <figure class="mt-8 flex flex-col items-center text-center">
      <a href={business.writeReviewUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="/images/google-review-qr.png"
          width={176}
          height={176}
          alt={`QR code that opens the Google review form for ${business.name}`}
          class="h-44 w-44 bg-white p-2"
        />
      </a>
      <figcaption class="mt-3 max-w-xs text-sm text-hsb-muted">
        Scan to write a Google review for {business.name}.
      </figcaption>
    </figure>
  );
});
