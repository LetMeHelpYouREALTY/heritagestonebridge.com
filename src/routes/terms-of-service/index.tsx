import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NapBlock } from "~/components/nap/NapBlock";
import { business } from "~/config/business";

export const head: DocumentHead = {
  title: `Terms of Service | ${business.name}`,
  meta: [
    {
      name: "description",
      content: `Terms of service for ${business.name}. Contact ${business.telephoneDisplay}. ${business.addressDisplay}.`,
    },
  ],
};

export default component$(() => {
  return (
    <article class="max-w-3xl mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <p class="text-gray-600 mb-8">
        Use of heritagestonebridge.com is subject to these terms. Real estate services are provided
        by Dr. Jan Duffy with {business.broker}.
      </p>
      <NapBlock />
      <div class="mt-8 space-y-4 text-gray-700">
        <p>
          Listings, prices, and availability change. Confirm current information before making a
          decision. Nevada Real Estate License #{business.license}.
        </p>
        <p>
          Contact:{" "}
          <a href={business.telephoneHref} class="text-blue-700 hover:underline">
            {business.telephoneDisplay}
          </a>
          , {business.addressDisplay}.
        </p>
      </div>
    </article>
  );
});
