const DEFAULT_APPOINTMENT_URL = "https://calendly.com/drjanduffy/appointment";
const DEFAULT_CONSULTATION_URL = "https://calendly.com/drjanduffy/consultation";

export const CALENDLY_TOUR_URL =
  process.env.NEXT_PUBLIC_CALENDLY_APPOINTMENT_URL ?? DEFAULT_APPOINTMENT_URL;

export const CALENDLY_CONSULTATION_URL =
  process.env.NEXT_PUBLIC_CALENDLY_CONSULTATION_URL ?? DEFAULT_CONSULTATION_URL;

type CalendlyUrlOptions = {
  utmSource?: string;
  utmCampaign?: string;
};

export function buildCalendlyUrl(
  baseUrl: string = CALENDLY_TOUR_URL,
  options: CalendlyUrlOptions = {},
): string {
  const url = new URL(baseUrl);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("primary_color", "2563eb");
  url.searchParams.set("utm_source", options.utmSource ?? "heritagestonebridge");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set(
    "utm_campaign",
    options.utmCampaign ?? "heritagestonebridge",
  );
  return url.toString();
}
