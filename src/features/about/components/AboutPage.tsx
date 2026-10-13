import { AboutAttorneysSection } from '@/features/about/components/AboutAttorneysSection';
import { AboutHero } from '@/features/about/components/AboutHero';
import { AboutPromisesSection } from '@/features/about/components/AboutPromisesSection';
import { getAboutView } from '@/features/about/data/use-about';
import { ClosingCta } from '@/features/home/components/ClosingCta';
import { HomeFooter } from '@/features/home/components/HomeFooter';
import { OfficesSection } from '@/features/home/components/OfficesSection';

export function AboutPage() {
  const view = getAboutView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <AboutHero nav={view.nav} />
        <AboutAttorneysSection attorneys={view.attorneys} />
        <AboutPromisesSection promises={view.promises} />
        <OfficesSection offices={view.offices} />
        <ClosingCta ctaHref="/#review-form" />
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
