import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { AgentPortrait } from "~/components/community/AgentPortrait";
import { NapBar } from "~/components/nap/NapBar";
import { business } from "~/config/business";

const links = [
  { href: "https://heritagestonebridge.com/", label: "Home" },
  { href: "https://heritagestonebridge.com/buy-heritage-at-stonebridge/", label: "Buy" },
  { href: "https://heritagestonebridge.com/sell-heritage-at-stonebridge/", label: "Sell" },
  { href: "https://heritagestonebridge.com/new-listing-heritage-at-stonebridge/", label: "New listing" },
] as const;

export default component$(() => {
  const isSticky = useSignal(false);
  const menuOpen = useSignal(false);

  useVisibleTask$(() => {
    const handleScroll = () => {
      isSticky.value = window.scrollY > 80;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      class={[
        "z-40 border-b border-hsb-border bg-white transition-shadow duration-300",
        isSticky.value ? "fixed inset-x-0 top-0 shadow-sm" : "relative",
      ]}
    >
      <NapBar />
      <div class="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 lg:gap-10 lg:py-4">
        <a
          href="https://heritagestonebridge.com/"
          title={business.name}
          class="flex min-w-0 shrink items-center gap-3"
        >
          <span class="rounded-full ring-1 ring-hsb-sand">
            <AgentPortrait size="sm" />
          </span>
          <span class="min-w-0">
            <span class="block truncate font-display text-xl leading-none text-hsb-dark sm:text-2xl">
              Heritage Stonebridge
            </span>
            <span class="mt-1 block truncate text-[11px] uppercase tracking-[0.18em] text-hsb-primary">
              Homes by Dr. Jan Duffy
            </span>
          </span>
        </a>

        <nav class="ml-auto hidden items-center gap-8 md:flex" aria-label="Primary">
          <ul class="flex items-center gap-7">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  class="text-sm uppercase tracking-[0.14em] text-hsb-dark hover:text-hsb-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="http://drjanduffy.realscout.com/onboarding"
            target="_blank"
            rel="noopener"
            class="rounded-full bg-hsb-primary px-5 py-2.5 text-sm font-medium tracking-wide text-white hover:bg-hsb-primary-dark"
          >
            Schedule a tour
          </a>
        </nav>

        <button
          type="button"
          class="ml-auto inline-flex h-11 items-center rounded-full border border-hsb-border bg-white px-4 py-0 text-sm uppercase tracking-[0.14em] text-hsb-dark md:hidden"
          aria-expanded={menuOpen.value}
          aria-controls="site-menu"
          onClick$={() => {
            menuOpen.value = !menuOpen.value;
          }}
        >
          {menuOpen.value ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="site-menu"
        class={["border-t border-hsb-border bg-hsb-cream md:hidden", menuOpen.value ? "block" : "hidden"]}
        aria-label="Mobile"
      >
        <ul class="mx-auto flex max-w-7xl flex-col px-4 py-3">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                class="block py-3 text-sm uppercase tracking-[0.14em] text-hsb-dark"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li class="py-3">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              class="inline-flex rounded-full bg-hsb-primary px-5 py-2.5 text-sm font-medium text-white"
            >
              Schedule a tour
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
});
