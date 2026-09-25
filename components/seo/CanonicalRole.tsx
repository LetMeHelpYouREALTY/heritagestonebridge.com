import Link from "next/link";

type RelatedPage = {
  href: string;
  label: string;
  note: string;
};

type CanonicalRoleProps = {
  path: string;
  answer: string;
  related: RelatedPage[];
};

/**
 * Answer-first block that states this URL's job and links sibling pages
 * with their own anchors. Keeps near-duplicate templates distinguishable.
 */
export function CanonicalRole({ path, answer, related }: CanonicalRoleProps) {
  return (
    <section className="mb-12 max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
      <p className="text-lg leading-relaxed text-slate-800">
        <strong>{path}.</strong> {answer}
      </p>
      <ul className="mt-4 space-y-2 text-slate-700">
        {related.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-semibold text-blue-700 hover:underline"
            >
              {item.label}
            </Link>
            {" — "}
            {item.note}
          </li>
        ))}
      </ul>
    </section>
  );
}
