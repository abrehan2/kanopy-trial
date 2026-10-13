import { CaseReviewSection } from '@/features/home/components/CaseReviewSection';
import { ClosingCta } from '@/features/home/components/ClosingCta';
import { HomeFooter } from '@/features/home/components/HomeFooter';
import { PiCasesSection } from '@/features/personal-injury/components/PiCasesSection';
import { PiFaqSection } from '@/features/personal-injury/components/PiFaqSection';
import { PiHero } from '@/features/personal-injury/components/PiHero';
import { PiNowSection } from '@/features/personal-injury/components/PiNowSection';
import { PiResultsSection } from '@/features/personal-injury/components/PiResultsSection';
import { PiStatesSection } from '@/features/personal-injury/components/PiStatesSection';
import { getPiView } from '@/features/personal-injury/data/use-personal-injury';

export function PersonalInjuryPage() {
  const view = getPiView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <PiHero nav={view.nav} />
        <PiCasesSection left={view.casesLeft} right={view.casesRight} />
        <PiResultsSection results={view.results} />
        <PiNowSection steps={view.now} />
        <PiStatesSection rows={view.states} />
        <CaseReviewSection />
        <PiFaqSection faq={view.faq} />
        <ClosingCta />
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
