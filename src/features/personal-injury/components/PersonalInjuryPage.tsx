import { CaseReviewSection } from '@/features/home/components/CaseReviewSection';
import { ClosingCta } from '@/features/home/components/ClosingCta';
import { HomeFooter } from '@/features/home/components/HomeFooter';
import { PI_PAGE } from '@/features/personal-injury/data/pi-copy';
import { PI_ASSETS } from '@/features/personal-injury/data/pi-nav';
import { getPiView } from '@/features/personal-injury/data/use-personal-injury';
import { PracticeCasesSection } from '@/features/practice/components/PracticeCasesSection';
import { PracticeFaqSection } from '@/features/practice/components/PracticeFaqSection';
import { PracticeHero } from '@/features/practice/components/PracticeHero';
import { PracticeNowSection } from '@/features/practice/components/PracticeNowSection';
import { PracticeResultsSection } from '@/features/practice/components/PracticeResultsSection';
import { PracticeStatesSection } from '@/features/practice/components/PracticeStatesSection';

export function PersonalInjuryPage() {
  const view = getPiView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <PracticeHero
          nav={view.nav}
          crumb={PI_PAGE.crumb}
          title={PI_PAGE.title}
          lead={PI_PAGE.lead}
          leadSm={PI_PAGE.leadSm}
          photo={PI_ASSETS.freeway}
          photoAlt={PI_PAGE.photoAlt}
          testId="pi-hero"
        />
        <PracticeCasesSection title={PI_PAGE.casesTitle} left={view.casesLeft} right={view.casesRight} />
        <PracticeResultsSection
          title={PI_PAGE.resultsTitle}
          titleSm={PI_PAGE.resultsTitleSm}
          results={view.results}
        />
        <PracticeNowSection title={PI_PAGE.nowTitle} lead={PI_PAGE.nowLead} steps={view.now} />
        <PracticeStatesSection
          title={PI_PAGE.statesTitle}
          titleSm={PI_PAGE.statesTitleSm}
          lead={PI_PAGE.statesLead}
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
