import { type RequestHandler } from "@builder.io/qwik-city";

/** Old property sitemap duplicated the page list. Search Console should use sitemap.xml. */
export const onGet: RequestHandler = async ({ redirect }) => {
  throw redirect(301, "https://heritagestonebridge.com/sitemap-pages.xml");
};
