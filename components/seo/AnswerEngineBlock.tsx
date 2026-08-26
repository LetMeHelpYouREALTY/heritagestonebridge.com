import type { FAQItem } from "@/lib/schema";

type AnswerEngineBlockProps = {
  /** Unique H2 — include the page topic, not a generic "FAQ". */
  heading: string;
  faqs: FAQItem[];
};

/**
 * Visible Q&A with H2/H3 for AEO/GEO extractors (Google, Perplexity, ChatGPT).
 * Pair with FAQPage JSON-LD from StandardPageSchema or HeritageMarketingPage.
 */
export default function AnswerEngineBlock({ heading, faqs }: AnswerEngineBlockProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="aeo-faq-heading">
      <h2 id="aeo-faq-heading" className="text-3xl font-bold text-slate-900 mb-8 text-center">
        {heading}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="bg-slate-50 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
            <p className="aeo-answer text-slate-700 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
