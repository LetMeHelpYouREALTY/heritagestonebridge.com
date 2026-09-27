import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NapBlock } from "~/components/nap/NapBlock";
import { business } from "~/config/business";

export const head: DocumentHead = {
  title: `Page Not Found | ${business.name}`,
  meta: [
    {
      name: "description",
      content: `That page was not found. Contact ${business.name} at ${business.telephoneDisplay}. ${business.addressDisplay}.`,
    },
    {
      name: "robots",
      content: "noindex, follow",
    },
  ],
};

export default component$(() => {
  return (
    <section class="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p class="text-gray-600 mb-8">
        That URL is not on heritagestonebridge.com. Call or visit us using the details below.
      </p>
      <div class="text-left">
        <NapBlock />
      </div>
      <p class="mt-8">
        <a href="/" class="text-blue-700 font-semibold hover:underline">
          Return home
        </a>
      </p>
    </section>
  );
});
