import { type RequestHandler } from "@builder.io/qwik-city";
import { robotsTxt } from "~/lib/seo/search-files";

export const onGet: RequestHandler = async (requestEvent) => {
  requestEvent.headers.set("Content-Type", "text/plain; charset=utf-8");
  requestEvent.headers.set("Cache-Control", "public, max-age=86400");
  requestEvent.send(200, robotsTxt());
};
