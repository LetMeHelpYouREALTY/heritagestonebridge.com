import { type RequestHandler } from "@builder.io/qwik-city";
import { sitemapIndexXml } from "~/lib/seo/search-files";

export const onGet: RequestHandler = async (requestEvent) => {
  requestEvent.headers.set("Content-Type", "application/xml; charset=utf-8");
  requestEvent.headers.set("Cache-Control", "public, max-age=3600");
  requestEvent.send(200, sitemapIndexXml());
};
