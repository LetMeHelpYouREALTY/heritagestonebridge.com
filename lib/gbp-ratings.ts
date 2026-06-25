export type GbpAggregateRating = {
  ratingValue: string;
  reviewCount: string;
};

/** Emit aggregateRating JSON-LD only when verified GBP env vars are set. */
export function getGbpAggregateRating(): GbpAggregateRating | null {
  const ratingValue = process.env.NEXT_PUBLIC_GBP_AGGREGATE_RATING_VALUE?.trim();
  const reviewCount = process.env.NEXT_PUBLIC_GBP_AGGREGATE_RATING_COUNT?.trim();

  if (!ratingValue || !reviewCount) {
    return null;
  }

  return { ratingValue, reviewCount };
}

export function getGbpAggregateRatingNumber(): {
  ratingValue: number;
  reviewCount: number;
} | null {
  const rating = getGbpAggregateRating();
  if (!rating) return null;

  const ratingValue = Number.parseFloat(rating.ratingValue);
  const reviewCount = Number.parseInt(rating.reviewCount, 10);

  if (Number.isNaN(ratingValue) || Number.isNaN(reviewCount) || reviewCount < 1) {
    return null;
  }

  return { ratingValue, reviewCount };
}
