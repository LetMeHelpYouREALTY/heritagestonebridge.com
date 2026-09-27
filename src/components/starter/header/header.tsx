import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { NapBar } from "~/components/nap/NapBar";
import { business } from "~/config/business";
import styles from "./header.module.css";

export default component$(() => {
  const isSticky = useSignal(false);

  useVisibleTask$(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      isSticky.value = window.scrollY > 100;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header 
      class={`${styles.header} ${
        isSticky.value 
          ? "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "relative bg-white"
      } transition-all duration-300`}
    >
      <NapBar />
      <div class={["container", styles.wrapper]}>
        {/* Clean Brand Logo */}
        <div class={styles.logo}>
          <a href="/" title={business.name}>
            <div class="flex items-center space-x-2">
              <div class="bg-hsb-primary rounded-lg p-2">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div class="text-left max-w-[11rem] sm:max-w-xs lg:max-w-sm">
                <div class="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                  {business.name}
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Clean Navigation */}
        <nav class="flex items-center space-x-8">
          <ul class="flex items-center space-x-8">
            <li>
              <a href="/" class="font-semibold transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/buy-heritage-at-stonebridge" class="font-semibold transition-colors">
                Buy
              </a>
            </li>
            <li>
              <a href="/sell-heritage-at-stonebridge" class="font-semibold transition-colors">
                Sell
              </a>
            </li>
            <li>
              <a href="/new-listing-heritage-at-stonebridge" class="font-semibold transition-colors">
                New Listing
              </a>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div class="flex items-center space-x-3">
            <a
              href={business.telephoneHref}
              class="flex items-center space-x-2 bg-hsb-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-hsb-primary-dark transition-colors"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{business.telephoneDisplay}</span>
            </a>
            
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              class="bg-hsb-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-hsb-accent-dark transition-colors"
            >
              Schedule Tour
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
});
