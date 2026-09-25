import { SITE_CONTACT } from "@/lib/site-contact";

const DAY_LABELS: Record<keyof typeof SITE_CONTACT.hours, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

type HoursRange = { opens: string; closes: string };

function parseHoursRange(value: string): HoursRange | null {
  if (!value || value.toLowerCase().includes("appointment")) {
    return null;
  }

  const [opens, closes] = value.split("-");
  if (!opens || !closes) return null;

  return { opens: opens.trim(), closes: closes.trim() };
}

/** Schema.org OpeningHoursSpecification[] from SITE_CONTACT.hours */
export function openingHoursSpecification() {
  return (Object.keys(SITE_CONTACT.hours) as Array<keyof typeof SITE_CONTACT.hours>)
    .map((day) => {
      const range = parseHoursRange(SITE_CONTACT.hours[day]);
      if (!range) return null;

      return {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: DAY_LABELS[day],
        opens: range.opens,
        closes: range.closes,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
}

export function formatBusinessHoursShort(): string {
  return "Monday–Sunday 8:00 AM–8:00 PM";
}

export function formatBusinessHoursLines(): string[] {
  return ["Monday - Sunday: 8:00 AM - 8:00 PM"];
}
