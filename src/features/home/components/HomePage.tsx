import { AdviceSection } from '@/features/home/components/AdviceSection';
import { AttorneysSection } from '@/features/home/components/AttorneysSection';
import { CaseReviewSection } from '@/features/home/components/CaseReviewSection';
import { ClosingCta } from '@/features/home/components/ClosingCta';
import { FaqSection } from '@/features/home/components/FaqSection';
import { HomeFooter } from '@/features/home/components/HomeFooter';
import { HomeHero } from '@/features/home/components/HomeHero';
import { OfficesSection } from '@/features/home/components/OfficesSection';
import { ProcessSection } from '@/features/home/components/ProcessSection';
import { ResultsSection } from '@/features/home/components/ResultsSection';
import { ReviewSection } from '@/features/home/components/ReviewSection';
import { getHomeView } from '@/features/home/data/use-home';

export function HomePage() {
  const view = getHomeView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <HomeHero nav={view.nav} practices={view.practices} />
        <CaseReviewSection />
        <AttorneysSection />
        <ResultsSection results={view.results} />
        <AdviceSection advice={view.advice} />
        <ProcessSection steps={view.steps} />
        <ReviewSection />
        <OfficesSection offices={view.offices} />
        <FaqSection faq={view.faq} />
        <ClosingCta />
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
