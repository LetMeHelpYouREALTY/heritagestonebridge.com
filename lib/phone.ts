/** Build a tel: href from E.164 or display phone values. */
export function telHref(phone: string): string {
  if (phone.startsWith("tel:")) return phone;
  return `tel:${phone}`;
}
