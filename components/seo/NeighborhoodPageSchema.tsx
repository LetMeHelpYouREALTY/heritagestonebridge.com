import StandardPageSchema from "@/components/seo/StandardPageSchema";
import { generateNeighborhoodSchema } from "@/lib/schema";
import type { FAQItem } from "@/lib/schema";

type NeighborhoodPageSchemaProps = {
  slug: string;
  name: string;
  description: string;
  faqs?: FAQItem[];
  latitude?: number;
  longitude?: number;
  containedIn?: string;
  dateModified?: string;
};

export default function NeighborhoodPageSchema({
  slug,
  name,
  description,
  faqs,
  latitude,
  longitude,
  containedIn = "Las Vegas",
  dateModified = "2026-07-01",
}: NeighborhoodPageSchemaProps) {
  const path = `/neighborhoods/${slug}`;

  return (
    <StandardPageSchema
      path={path}
      name={`${name} NV Real Estate`}
      description={description}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Neighborhoods", url: "/neighborhoods" },
        { name, url: path },
      ]}
      faqs={faqs}
      dateModified={dateModified}
      extraSchemas={[
        generateNeighborhoodSchema({
          name,
          slug,
          description,
          latitude,
          longitude,
          containedIn,
        }),
      ]}
      id={`neighborhood-${slug}-schema`}
    />
  );
}
