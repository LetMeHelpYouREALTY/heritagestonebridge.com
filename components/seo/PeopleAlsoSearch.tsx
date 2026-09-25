import Link from "next/link";
import { SEARCH_INTENT_LINKS } from "@/lib/search-intent";

export default function PeopleAlsoSearch() {
  return (
    <nav aria-label="People also search for" className="mt-10">
      <h2 className="font-bold text-lg mb-3">People also search for</h2>
      <ul className="flex flex-wrap gap-2">
        {SEARCH_INTENT_LINKS.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="inline-block rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200 hover:bg-slate-700 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
