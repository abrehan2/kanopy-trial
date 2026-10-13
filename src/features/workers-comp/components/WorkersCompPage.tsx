import { CaseReviewSection } from '@/features/home/components/CaseReviewSection';
import { ClosingCta } from '@/features/home/components/ClosingCta';
import { HomeFooter } from '@/features/home/components/HomeFooter';
import { PracticeCasesSection } from '@/features/practice/components/PracticeCasesSection';
import { PracticeFaqSection } from '@/features/practice/components/PracticeFaqSection';
import { PracticeHero } from '@/features/practice/components/PracticeHero';
import { PracticeNowSection } from '@/features/practice/components/PracticeNowSection';
import { PracticeResultsSection } from '@/features/practice/components/PracticeResultsSection';
import { PracticeStatesSection } from '@/features/practice/components/PracticeStatesSection';
import { WC_ASSETS, WC_PAGE } from '@/features/workers-comp/data/wc-copy';
import { getWcView } from '@/features/workers-comp/data/use-workers-comp';

export function WorkersCompPage() {
  const view = getWcView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <PracticeHero
          nav={view.nav}
          crumb={WC_PAGE.crumb}
          title={WC_PAGE.title}
          lead={WC_PAGE.lead}
          leadSm={WC_PAGE.leadSm}
          photo={WC_ASSETS.warehouse}
          photoAlt={WC_PAGE.photoAlt}
          testId="wc-hero"
        />
        <PracticeCasesSection
          title={WC_PAGE.casesTitle}
          left={view.casesLeft}
          right={view.casesRight}
        />
        <PracticeResultsSection
          title={WC_PAGE.resultsTitle}
          titleSm={WC_PAGE.resultsTitleSm}
          results={view.results}
        />
        <PracticeNowSection title={WC_PAGE.nowTitle} lead={WC_PAGE.nowLead} steps={view.now} />
        <PracticeStatesSection
          title={WC_PAGE.statesTitle}
          titleSm={WC_PAGE.statesTitleSm}
          lead={WC_PAGE.statesLead}
          rows={view.states}
        />
        <CaseReviewSection />
        <PracticeFaqSection faq={view.faq} />
        <ClosingCta />
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
