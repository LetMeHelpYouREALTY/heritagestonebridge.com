import { component$ } from "@builder.io/qwik";

/** Dr. Jan Duffy. Cloudflare Images, with a git copy at public/images/dr-jan-duffy.png. */
export const DR_JAN_PORTRAIT =
  "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/fc4911a4-7842-470b-a54d-4589039a2a00/tablet";

const sizeClass = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-24 w-24",
} as const;

type PortraitSize = keyof typeof sizeClass;

/** Circular portrait. Use beside her name, not in place of a community or listing photo. */
export const AgentPortrait = component$<{ size?: PortraitSize }>(({ size = "md" }) => {
  const px = size === "lg" ? 96 : size === "md" ? 64 : 40;
  return (
    <img
      src={DR_JAN_PORTRAIT}
      alt="Dr. Jan Duffy"
      width={px}
      height={px}
      decoding="async"
      loading={size === "sm" ? "eager" : "lazy"}
      class={`${sizeClass[size]} shrink-0 rounded-full object-cover`}
    />
  );
});
