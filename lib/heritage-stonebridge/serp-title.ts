/**
 * Unique Google title strings.
 *
 * Do not append "Heritage at Stonebridge Summerlin | Dr. Jan Duffy" — that
 * duplicates the brand, blows past ~60 characters, and Google rewrites the SERP.
 */
export const SERP_TITLE_MAX_CHARS = 60;

export function serpTitle(title: string): string {
  return title;
}
