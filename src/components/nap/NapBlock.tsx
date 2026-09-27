import { component$ } from "@builder.io/qwik";
import { business } from "~/config/business";

/** Full visible NAP block for page body (legal, 404, and contact-style pages). */
export const NapBlock = component$(() => {
  return (
    <address class="not-italic rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-800">
      <p class="font-bold text-gray-900">{business.name}</p>
      <p>
        <a
          href={business.mapsUrl}
          class="text-blue-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {business.addressDisplay}
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href={business.telephoneHref} class="text-blue-700 hover:underline font-semibold">
          {business.telephoneDisplay}
        </a>
      </p>
      <p>
        Text:{" "}
        <a href={business.smsHref} class="text-blue-700 hover:underline">
          {business.telephoneDisplay}
        </a>
      </p>
      <p>Hours: {business.hoursDisplay}</p>
      <p>
        Nevada Real Estate License #{business.license} · {business.broker}
      </p>
    </address>
  );
});
