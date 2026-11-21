import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SearchPageView, searchPageHead } from "~/components/community/SearchPageView";
import { SEARCH_PAGES } from "~/config/search-pages";

const page = SEARCH_PAGES["/stonebridge-summerlin-homes-with-pool/"];

export default component$(() => <SearchPageView page={page} />);

export const head: DocumentHead = searchPageHead(page);
