import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CampaignHero } from "~/components/community/CampaignHero";
import { ContactStrip } from "~/components/community/ContactStrip";
import { QuestionList } from "~/components/community/QuestionList";
import { business } from "~/config/business";
import { faqJsonLd } from "~/config/community";
import { questionGroups } from "~/config/questions";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";

const allQuestions = questionGroups.flatMap((group) => [...group.items]);
const faqScript = faqJsonLd(allQuestions);

export default component$(() => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={faqScript} />
      <CampaignHero
        eyebrow="Questions and answers · Summerlin West 89138"
        title="Heritage at Stonebridge questions, answered"
        lede="Straight answers on location, age rules, HOA costs, floor plans, the clubhouse, and how buying works. Where a number changes, I tell you where to confirm it."
      >
        <a
          href={business.telephoneHref}
          class="rounded-full bg-hsb-accent px-6 py-3 text-center font-medium text-white hover:bg-hsb-accent-dark"
        >
          Call {business.telephoneDisplay}
        </a>
        <a
          href={business.smsHref}
          class="rounded-full border border-white px-6 py-3 text-center font-medium text-white hover:bg-white hover:text-hsb-dark"
        >
          Text Dr. Jan
        </a>
      </CampaignHero>
      <OfficeListingsBelowHero />

      <nav class="bg-hsb-cream py-8" aria-label="Question topics">
        <ul class="mx-auto flex max-w-5xl flex-wrap gap-3 px-4">
          {questionGroups.map((group) => (
            <li key={group.id}>
              <a
                class="inline-block rounded-full bg-white px-4 py-2 text-sm text-hsb-dark shadow-sm hover:underline"
                href={`#${group.id}`}
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {questionGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          class={index % 2 === 0 ? "bg-white py-16" : "bg-hsb-sand py-16"}
        >
          <div class="mx-auto max-w-5xl px-4">
            <h2 class="font-display text-3xl text-hsb-dark">{group.title}</h2>
            <QuestionList items={group.items} />
            {group.more && (
              <p class="mt-8 text-hsb-text">
                More:{" "}
                <a class="underline" href={group.more.href}>
                  {group.more.label}
                </a>
              </p>
            )}
          </div>
        </section>
      ))}
      <ContactStrip />
    </>
  );
});

export const head: DocumentHead = {
  title: "Heritage at Stonebridge Questions & Answers | Dr. Jan Duffy",
  meta: [
    {
      name: "description",
      content:
        "Answers to 22 common Heritage at Stonebridge questions: location, 55+ age rules, HOA fees, floor plans, clubhouse and buying. Call (702) 789-6561.",
    },
    { property: "og:title", content: "Heritage at Stonebridge questions, answered" },
    {
      property: "og:description",
      content: "Location, age rules, HOA costs, floor plans and the clubhouse. Call (702) 789-6561.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://heritagestonebridge.com/questions" },
  ],
  links: [{ rel: "canonical", href: "https://heritagestonebridge.com/questions" }],
};
