import { component$ } from "@builder.io/qwik";
import { LOCAL_BUSINESS_JSON_LD } from "~/config/business";

export const LocalBusinessSchema = component$(() => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={LOCAL_BUSINESS_JSON_LD} />
  );
});
