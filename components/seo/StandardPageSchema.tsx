import SchemaScript from "@/components/SchemaScript";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  type BreadcrumbItem,
  type FAQItem,
} from "@/lib/schema";
import { canonicalUrl } from "@/lib/metadata";

type StandardPageSchemaProps = {
  path: string;
  name: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: FAQItem[];
  dateModified?: string;
  extraSchemas?: Record<string, unknown>[];
  id?: string;
};

/**
 * GSC-ready JSON-LD stack: BreadcrumbList + WebPage + optional FAQPage.
 * Per Google Search Central (2026): JSON-LD in head, one graph per page.
 */
export default function StandardPageSchema({
  path,
  name,
  description,
  breadcrumbs,
  faqs,
  dateModified = "2026-07-01",
  extraSchemas = [],
  id = "page-schema",
}: StandardPageSchemaProps) {
  const url = canonicalUrl(path);
  const schemas: Record<string, unknown>[] = [
    generateBreadcrumbSchema(breadcrumbs),
    generateWebPageSchema({
      name,
      description,
      url,
      dateModified,
    }),
    ...extraSchemas,
  ];

  if (faqs?.length) {
    schemas.push(generateFAQSchema(faqs));
  }

  return <SchemaScript schema={combineSchemas(...schemas)} id={id} />;
}
