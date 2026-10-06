import { component$ } from "@builder.io/qwik";

/**
 * The agent, community, person, and page nodes are one JSON-LD graph in
 * RouterHead. Rendering a second script here would duplicate that graph.
 */
export const LocalBusinessSchema = component$(() => {
  return null;
});
