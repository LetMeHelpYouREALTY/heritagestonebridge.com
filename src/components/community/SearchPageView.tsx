import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { QuestionList } from "~/components/community/QuestionList";
import { business } from "~/config/business";
import { breadcrumbJsonLd, faqJsonLd } from "~/config/community";
import type { SearchPage } from "~/config/search-pages";

const BANDS = ["bg-hsb-cream", "bg-white"];

export const SearchPageView = component$<{ page: SearchPage }>(({ page }) => {
  const crumbs = breadcrumbJsonLd(
    page.breadcrumbs.map((c) => ({ name: c.name, item: `${business.canonicalUrl}${c.url}` })),
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={crumbs} />
      {page.faqs && <script type="application/ld+json" dangerouslySetInnerHTML={faqJsonLd(page.faqs)} />}
      <CampaignHero eyebrow={page.badge ?? "Summerlin West 89138"} title={page.h1} lede={page.subtitle}>
        <a
          href={business.telephoneHref}
          class="rounded-full bg-hsb-primary px-6 py-3 text-center font-medium text-white hover:bg-hsb-primary-dark"
        >
          Call {business.telephoneDisplay}
        </a>
        <a
          href={business.smsHref}
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Text a question
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      {page.sections.map((s, i) => (
        <section key={s.heading} class={`${BANDS[i % 2]} py-16`}>
          <div class="mx-auto max-w-5xl px-4">
            <h2 class="font-display text-3xl text-hsb-dark">{s.heading}</h2>
            {s.type === "prose" &&
              s.paragraphs.map((p) => (
                <p key={p} class="mt-4 max-w-3xl leading-relaxed text-hsb-text">
                  {p}
                </p>
              ))}
            {s.type === "checklist" && (
              <ol class="mt-8 space-y-5 text-hsb-text">
                {s.items.map((item, n) => (
                  <li key={item.title}>
                    <span class="font-semibold text-hsb-dark">
                      {n + 1}. {item.title}.
                    </span>{" "}
                    {item.description}
                  </li>
                ))}
              </ol>
            )}
            {s.type === "grid" && (
              <div class="mt-8 grid gap-6 sm:grid-cols-2">
                {s.cards.map((card) => (
                  <div key={card.title} class="rounded-2xl border border-hsb-sand bg-white p-6">
                    <h3 class="font-display text-xl text-hsb-dark">{card.title}</h3>
                    <ul class="mt-3 list-disc space-y-1 pl-5 text-hsb-text">
                      {card.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {s.type === "links" && (
              <ul class="mt-6 grid gap-3 sm:grid-cols-2">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <a class="text-hsb-primary underline hover:text-hsb-primary-dark" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {page.faqs && (
        <section class="bg-hsb-sand py-16">
          <div class="mx-auto max-w-5xl px-4">
            <h2 class="font-display text-3xl text-hsb-dark">Questions</h2>
            <QuestionList items={page.faqs} />
            {page.lastUpdated && <p class="mt-8 text-sm text-hsb-muted">Updated {page.lastUpdated}.</p>}
          </div>
        </section>
      )}
      <ContactStrip />
    </>
  );
});

export function searchPageHead(page: SearchPage): DocumentHead {
  const url = `${business.canonicalUrl}${page.slug}`;
  return {
    title: page.metadata.title,
    meta: [
      { name: "description", content: page.metadata.description },
      { property: "og:title", content: page.h1 },
      { property: "og:description", content: page.metadata.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
