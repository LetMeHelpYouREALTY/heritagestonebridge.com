import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SchemaScript from "@/components/SchemaScript";
import HeadingImage from "@/components/heritage/HeadingImage";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import { SITE_CONTACT } from "@/lib/site-contact";
import { HERITAGE_COMMUNITY } from "@/lib/heritage-stonebridge/data";
import { canonicalUrl } from "@/lib/metadata";
import { matchHeritageImage } from "@/lib/heritage-stonebridge/images";
import type {
  HeritageImage,
  HeritagePageContent,
  HeritageSection,
} from "@/lib/heritage-stonebridge/types";

type HeritageMarketingPageProps = {
  content: HeritagePageContent;
};

function HeadingBlock({
  heading,
  image,
}: {
  heading: string;
  image?: HeritageImage;
}) {
  return (
    <>
      <h2 className="text-3xl font-bold text-slate-900 mb-6">{heading}</h2>
      {image ? <HeadingImage image={image} headingLevel="h2" /> : null}
    </>
  );
}

function resolveSectionImage(
  heading: string,
  explicit: HeritageImage | undefined,
  infer: boolean,
): HeritageImage | undefined {
  return explicit ?? (infer ? matchHeritageImage(heading) : undefined);
}

function resolveCardImage(
  title: string,
  explicit: HeritageImage | undefined,
  infer: boolean,
): HeritageImage | undefined {
  return (
    explicit ??
    (infer ? matchHeritageImage(title, { requireSpecific: true }) : undefined)
  );
}

function renderSection(
  section: HeritageSection,
  index: number,
  inferImages: boolean,
) {
  const headingImage =
    section.type === "quote"
      ? undefined
      : resolveSectionImage(section.heading, section.image, inferImages);

  switch (section.type) {
    case "prose":
      return (
        <section key={index} className="mb-16 max-w-4xl mx-auto">
          <HeadingBlock heading={section.heading} image={headingImage} />
          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </section>
      );
    case "stats":
      return (
        <section
          key={index}
          className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            {section.heading}
          </h2>
          {headingImage ? (
            <div className="mb-8 overflow-hidden rounded-xl">
              <HeadingImage
                image={headingImage}
                headingLevel="h2"
                className="mb-0"
              />
            </div>
          ) : null}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {section.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      );
    case "grid":
      return (
        <section key={index} className="mb-16 max-w-5xl mx-auto">
          <HeadingBlock heading={section.heading} image={headingImage} />
          <div className="grid md:grid-cols-3 gap-6">
            {section.cards.map((card) => {
              const cardImage = resolveCardImage(
                card.title,
                card.image,
                inferImages,
              );
              return (
                <div
                  key={card.title}
                  className="bg-white border border-slate-200 rounded-xl p-6"
                >
                  <h3 className="font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  {cardImage ? (
                    <HeadingImage
                      image={cardImage}
                      headingLevel="h3"
                      className="mb-3"
                    />
                  ) : null}
                  <ul className="text-slate-600 text-sm space-y-1">
                    {card.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      );
    case "checklist":
      return (
        <section key={index} className="mb-16 max-w-4xl mx-auto">
          <HeadingBlock heading={section.heading} image={headingImage} />
          <div className="space-y-4">
            {section.items.map((item) => (
              <div key={item.title} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">{item.title}</strong>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    case "comparison":
      return (
        <section
          key={index}
          className="mb-16 max-w-5xl mx-auto overflow-x-auto"
        >
          <HeadingBlock heading={section.heading} image={headingImage} />
          <table className="w-full min-w-[560px] border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-4 text-left">Factor</th>
                <th className="p-4 text-left">Heritage at Stonebridge</th>
                <th className="p-4 text-left">{section.otherLabel}</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.label} className="border-t border-slate-200">
                  <td className="p-4 font-medium text-slate-900">
                    {row.label}
                  </td>
                  <td className="p-4 text-slate-700">{row.heritage}</td>
                  <td className="p-4 text-slate-700">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      );
    case "quote":
      return (
        <section key={index} className="mb-16 max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
            <blockquote className="text-lg text-slate-700 italic mb-4">
              {section.text}
            </blockquote>
            <cite className="text-slate-900 font-semibold">
              — {section.author}
            </cite>
          </div>
        </section>
      );
    case "links":
      return (
        <section key={index} className="mb-16 max-w-4xl mx-auto">
          <HeadingBlock heading={section.heading} image={headingImage} />
          <div className="grid sm:grid-cols-2 gap-3">
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 px-4 py-3 text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      );
    default: {
      const _exhaustive: never = section;
      return _exhaustive;
    }
  }
}

export function HeritageMarketingPage({ content }: HeritageMarketingPageProps) {
  const schemas: Record<string, unknown>[] = [
    generateBreadcrumbSchema(content.breadcrumbs),
    generateWebPageSchema({
      name:
        typeof content.metadata.title === "string"
          ? content.metadata.title
          : content.h1,
      description:
        typeof content.metadata.description === "string"
          ? content.metadata.description
          : content.subtitle,
      url: canonicalUrl(content.slug),
      dateModified: content.lastUpdated ?? "2026-06-11",
    }),
  ];

  if (content.faqs?.length) {
    schemas.push(generateFAQSchema(content.faqs));
  }

  if (content.includeCommunitySchema) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Residence",
      name: HERITAGE_COMMUNITY.name,
      description: `${HERITAGE_COMMUNITY.name} — Lennar 55+ guard-gated community in Summerlin West`,
      address: {
        "@type": "PostalAddress",
        addressLocality: HERITAGE_COMMUNITY.city,
        addressRegion: HERITAGE_COMMUNITY.region,
        postalCode: HERITAGE_COMMUNITY.postalCode,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: HERITAGE_COMMUNITY.geo.latitude,
        longitude: HERITAGE_COMMUNITY.geo.longitude,
      },
      numberOfRooms: HERITAGE_COMMUNITY.homeCount,
    });
  }

  const pageSchema = combineSchemas(...schemas);
  const inferImages = content.includeListings !== false;
  const heroImage =
    content.heroImage ??
    (inferImages ? matchHeritageImage(content.h1) : undefined);

  return (
    <>
      <SchemaScript schema={pageSchema} id={`${content.slug}-schema`} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <nav className="max-w-6xl mx-auto mb-6 text-sm text-slate-500">
            {content.breadcrumbs.map((crumb, i) => (
              <span key={crumb.url}>
                {i > 0 && " / "}
                {i < content.breadcrumbs.length - 1 ? (
                  <Link href={crumb.url} className="hover:text-blue-600">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-slate-900">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>

          <PageHero
            badge={content.badge}
            title={content.h1}
            subtitle={content.subtitle}
            imageSrc={heroImage?.src}
            imageAlt={heroImage?.alt}
            priority
          />

          {content.sections.map((section, index) =>
            renderSection(section, index, inferImages),
          )}

          {content.faqs && content.faqs.length > 0 && (
            <section className="mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {content.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="bg-slate-50 rounded-lg p-6"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate-700 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="text-center bg-purple-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.ctaTitle ??
                "Talk With Dr. Jan About Heritage at Stonebridge"}
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              {content.ctaSubtitle ??
                "Guard-gated 55+ living in Summerlin — tours, market snapshots, and listing alerts."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${SITE_CONTACT.phone.tel}`}
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {SITE_CONTACT.phone.display}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-purple-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-purple-400 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </section>

          {content.lastUpdated && (
            <p className="text-center text-sm text-slate-500 mt-8">
              Last updated: {content.lastUpdated}
            </p>
          )}
        </div>
      </main>
      {content.includeListings !== false && (
        <RealScoutListings
          variant="both"
          title="Search Heritage Listings"
          subtitle="Filter live MLS inventory in Summerlin West (89138), then browse office listings $600k–$900k"
        />
      )}
      <Footer />
    </>
  );
}
