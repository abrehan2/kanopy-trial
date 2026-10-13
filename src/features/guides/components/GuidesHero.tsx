import { HomeHeader } from '@/features/home/components/HomeHeader';
import { GUIDES_PAGE } from '@/features/guides/data/guides-copy';
import type { NavLink } from '@/features/home/data/home';
import type { ReactNode } from 'react';

type GuidesHeroProps = { nav: NavLink[]; filters: ReactNode };

export function GuidesHero({ nav, filters }: GuidesHeroProps) {
  return (
    <div id="top" className="bg-paper">
      <HomeHeader nav={nav} logoHref="/" ctaHref="/#review-form" bordered />
      <section
        data-testid="guides-hero"
        className="flex min-w-0 flex-col gap-5 overflow-x-clip px-page-x pt-results-hero-pt pb-10 max-compact:gap-2.5 max-compact:px-page-x-sm max-compact:pt-7 max-compact:pb-2"
      >
        <h1 className="font-heading text-results-hero font-normal text-pine max-compact:text-about-name">
          {GUIDES_PAGE.title}
        </h1>
        <p className="font-jost text-lead-sm text-stone max-compact:hidden">{GUIDES_PAGE.lead}</p>
        <p className="hidden font-jost text-hero-lead-sm text-stone max-compact:block">
          {GUIDES_PAGE.leadSm}
        </p>
        {filters}
      </section>
    </div>
  );
}
