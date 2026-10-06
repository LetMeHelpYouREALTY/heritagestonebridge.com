import { component$ } from "@builder.io/qwik";

/**
 * Schema lives in the head graph (`~/lib/schema/page-graph`).
 * This component used to inject a second graph after hydration with the wrong
 * coordinates and the clubhouse address on the agent. It renders nothing.
 */
export const AdvancedSEO = component$(() => {
  return null;
});
