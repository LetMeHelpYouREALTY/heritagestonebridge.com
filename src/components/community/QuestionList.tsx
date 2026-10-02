import { component$ } from "@builder.io/qwik";
import type { QA } from "~/config/questions";

type QuestionListProps = {
  items: ReadonlyArray<QA>;
};

export const QuestionList = component$<QuestionListProps>(({ items }) => {
  return (
    <div class="mt-8 space-y-6">
      {items.map((item) => (
        <article key={item.question}>
          <h3 class="font-display text-2xl text-hsb-dark">{item.question}</h3>
          <p class="mt-2 text-hsb-text">{item.answer}</p>
        </article>
      ))}
    </div>
  );
});
