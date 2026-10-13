import { HomeHeader } from '@/features/home/components/HomeHeader';
import { RESULTS_PAGE } from '@/features/results/data/results-copy';
import type { NavLink } from '@/features/home/data/home';
import type { ReactNode } from 'react';

type ResultsHeroProps = { nav: NavLink[]; filters: ReactNode };

export function ResultsHero({ nav, filters }: ResultsHeroProps) {
  return (
    <div id="top" className="bg-paper">
      <HomeHeader nav={nav} logoHref="/" ctaHref="/#review-form" bordered />
      <section
        data-testid="results-hero"
        className="flex min-w-0 flex-col gap-6 overflow-x-clip px-page-x pt-results-hero-pt pb-results-hero-pb max-compact:gap-3 max-compact:px-page-x-sm max-compact:pt-pi-hero-pt-sm max-compact:pb-results-hero-pb-sm"
      >
        <h1 className="whitespace-pre-line font-heading text-results-hero font-normal text-pine max-compact:hidden">
          {RESULTS_PAGE.title}
        </h1>
        <h1 className="hidden font-heading text-about-name font-normal text-pine max-compact:block">
          {RESULTS_PAGE.titleSm}
        </h1>
        <p className="font-jost text-body text-stone max-compact:hidden">{RESULTS_PAGE.lead}</p>
        <p className="hidden font-jost text-label text-stone max-compact:block">{RESULTS_PAGE.leadSm}</p>
        {filters}
      </section>
    </div>
  );
}
