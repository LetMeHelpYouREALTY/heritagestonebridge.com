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

const SCHEMA_DAYS: Record<keyof typeof SITE_CONTACT.hours, string> = {
  monday: "https://schema.org/Monday",
  tuesday: "https://schema.org/Tuesday",
  wednesday: "https://schema.org/Wednesday",
  thursday: "https://schema.org/Thursday",
  friday: "https://schema.org/Friday",
  saturday: "https://schema.org/Saturday",
  sunday: "https://schema.org/Sunday",
};

type HoursRange = { opens: string; closes: string };

function parseHoursRange(value: string): HoursRange | null {
  if (!value || /appointment|closed/i.test(value)) {
    return null;
  }

  const [opens, closes] = value.split("-");
  if (!opens || !closes) return null;

  return { opens: opens.trim(), closes: closes.trim() };
}

function formatClock(value: string): string {
  const [hourPart, minutePart] = value.split(":");
  const hour = Number(hourPart);
  const minute = Number(minutePart);
  const suffix = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function formatRange(value: string): string {
  const range = parseHoursRange(value);
  if (!range) return "Closed";
  return `${formatClock(range.opens)}–${formatClock(range.closes)}`;
}

/** Schema.org OpeningHoursSpecification[] from SITE_CONTACT.hours */
export function openingHoursSpecification() {
  return (Object.keys(SITE_CONTACT.hours) as Array<keyof typeof SITE_CONTACT.hours>)
    .map((day) => {
      const range = parseHoursRange(SITE_CONTACT.hours[day]);
      if (!range) return null;

      return {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: SCHEMA_DAYS[day],
        opens: range.opens,
        closes: range.closes,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
}

export function formatBusinessHoursShort(): string {
  const weekday = formatRange(SITE_CONTACT.hours.monday);
  const saturday = formatRange(SITE_CONTACT.hours.saturday);
  const sunday = formatRange(SITE_CONTACT.hours.sunday);
  return `Monday–Friday ${weekday}, Saturday ${saturday}, Sunday ${sunday.toLowerCase()}`;
}

export function formatBusinessHoursLines(): string[] {
  return (Object.keys(DAY_LABELS) as Array<keyof typeof DAY_LABELS>).map(
    (day) => `${DAY_LABELS[day]}: ${formatRange(SITE_CONTACT.hours[day])}`,
  );
}
