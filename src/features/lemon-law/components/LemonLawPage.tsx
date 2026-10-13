import { CaseReviewSection } from '@/features/home/components/CaseReviewSection';
import { ClosingCta } from '@/features/home/components/ClosingCta';
import { HomeFooter } from '@/features/home/components/HomeFooter';
import { LEMON_ASSETS, LEMON_PAGE } from '@/features/lemon-law/data/lemon-copy';
import { getLemonView } from '@/features/lemon-law/data/use-lemon-law';
import { PracticeCasesSection } from '@/features/practice/components/PracticeCasesSection';
import { PracticeFaqSection } from '@/features/practice/components/PracticeFaqSection';
import { PracticeHero } from '@/features/practice/components/PracticeHero';
import { PracticeNowSection } from '@/features/practice/components/PracticeNowSection';
import { PracticeResultsSection } from '@/features/practice/components/PracticeResultsSection';
import { PracticeStatesSection } from '@/features/practice/components/PracticeStatesSection';

export function LemonLawPage() {
  const view = getLemonView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <PracticeHero
          nav={view.nav}
          crumb={LEMON_PAGE.crumb}
          title={LEMON_PAGE.title}
          titleSm={LEMON_PAGE.titleSm}
          lead={LEMON_PAGE.lead}
          leadSm={LEMON_PAGE.leadSm}
          photo={LEMON_ASSETS.shop}
          photoAlt={LEMON_PAGE.photoAlt}
          testId="lemon-hero"
        />
        <PracticeCasesSection
          title={LEMON_PAGE.casesTitle}
          left={view.casesLeft}
          right={view.casesRight}
        />
        <PracticeResultsSection
          title={LEMON_PAGE.resultsTitle}
          titleSm={LEMON_PAGE.resultsTitleSm}
          results={view.results}
        />
        <PracticeNowSection title={LEMON_PAGE.nowTitle} lead={LEMON_PAGE.nowLead} steps={view.now} />
        <PracticeStatesSection
          title={LEMON_PAGE.statesTitle}
          titleSm={LEMON_PAGE.statesTitleSm}
          lead={LEMON_PAGE.statesLead}
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
