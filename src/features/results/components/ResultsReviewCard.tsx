import type { ResultsReview } from '@/features/results/data/results-reviews';

type ResultsReviewCardProps = { review: ResultsReview };

export function ResultsReviewCard({ review }: ResultsReviewCardProps) {
  return (
    <article
      data-testid="results-review"
      className="flex w-full flex-col gap-3 border-t border-pine-line py-7"
    >
      <p className="font-heading text-sign font-normal text-paper">{review.quote}</p>
      <p className="font-jost text-label text-moss">{review.byline}</p>
    </article>
  );
}
