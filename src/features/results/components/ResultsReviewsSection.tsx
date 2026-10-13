import { ResultsReviewCard } from '@/features/results/components/ResultsReviewCard';
import { RESULTS_PAGE } from '@/features/results/data/results-copy';
import type { ResultsReview } from '@/features/results/data/results-reviews';

type ResultsReviewsSectionProps = { reviews: ResultsReview[] };

export function ResultsReviewsSection({ reviews }: ResultsReviewsSectionProps) {
  const left = reviews.slice(0, 2);
  const right = reviews.slice(2);

  return (
    <section
      id="reviews"
      data-testid="results-reviews"
      className="flex min-w-0 flex-col gap-12 overflow-x-clip bg-pine px-page-x py-section-y max-compact:gap-3 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <h2 className="font-heading text-quote font-normal text-paper max-compact:hidden">
        {RESULTS_PAGE.reviewsTitle}
      </h2>
      <div className="flex min-w-0 items-start gap-16 max-compact:hidden">
        <div className="flex min-w-px flex-1 flex-col">
          {left.map((review) => (
            <ResultsReviewCard key={review.byline} review={review} />
          ))}
        </div>
        <div className="flex min-w-px flex-1 flex-col">
          {right.map((review) => (
            <ResultsReviewCard key={review.byline} review={review} />
          ))}
        </div>
      </div>
      <a
        href={RESULTS_PAGE.googleHref}
        target="_blank"
        rel="noreferrer"
        className="font-jost text-when font-medium text-paper underline max-compact:hidden"
      >
        {RESULTS_PAGE.googleLabel}
      </a>
      <div className="hidden flex-col gap-3 max-compact:flex" data-testid="results-review-sm">
        <p className="font-heading text-case-sm font-normal text-paper">
          {RESULTS_PAGE.reviewQuoteSm}
        </p>
        <p className="font-jost text-legal text-moss">{RESULTS_PAGE.reviewBylineSm}</p>
        <div className="h-1 w-2.5" aria-hidden />
        <a
          href={RESULTS_PAGE.googleHref}
          target="_blank"
          rel="noreferrer"
          className="font-jost text-nav font-medium text-paper underline"
        >
          {RESULTS_PAGE.googleLabelSm}
        </a>
      </div>
    </section>
  );
}
