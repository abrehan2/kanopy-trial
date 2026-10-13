import { HOME_FOOTER } from '@/features/home/data/home-footer';
import { RESULTS_CASES } from '@/features/results/data/results-cases';
import { RESULTS_NAV } from '@/features/results/data/results-nav';
import { RESULTS_REVIEWS } from '@/features/results/data/results-reviews';

export function toResultsView() {
  return {
    nav: RESULTS_NAV,
    cases: RESULTS_CASES,
    reviews: RESULTS_REVIEWS,
    footer: HOME_FOOTER,
  };
}
