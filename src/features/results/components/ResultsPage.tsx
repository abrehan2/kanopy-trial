import { ClosingCta } from '@/features/home/components/ClosingCta';
import { HomeFooter } from '@/features/home/components/HomeFooter';
import { ResultsCasesSection } from '@/features/results/components/ResultsCasesSection';
import { ResultsReviewsSection } from '@/features/results/components/ResultsReviewsSection';
import { getResultsView } from '@/features/results/data/use-results';

export function ResultsPage() {
  const view = getResultsView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <ResultsCasesSection nav={view.nav} cases={view.cases} />
        <div className="bg-pine">
          <ResultsReviewsSection reviews={view.reviews} />
          <ClosingCta ctaHref="/#review-form" />
        </div>
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
