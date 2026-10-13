import { AboutAttorneyCard } from '@/features/about/components/AboutAttorneyCard';
import { ABOUT_PAGE } from '@/features/about/data/about-copy';
import type { AboutAttorney } from '@/features/about/data/about-attorneys';

type AboutAttorneysSectionProps = { attorneys: AboutAttorney[] };

export function AboutAttorneysSection({ attorneys }: AboutAttorneysSectionProps) {
  return (
    <section
      id="attorneys"
      className="flex min-w-0 flex-col gap-12 overflow-x-clip bg-paper px-page-x pt-14 pb-section-y max-compact:gap-10 max-compact:px-page-x-sm max-compact:pt-about-attorneys-pt-sm max-compact:pb-section-sm"
    >
      <h2 className="font-heading text-quote font-normal text-pine max-compact:hidden">
        {ABOUT_PAGE.attorneysTitle}
      </h2>
      <div className="flex min-w-0 items-start gap-16 max-compact:flex-col max-compact:gap-10">
        {attorneys.map((attorney) => (
          <AboutAttorneyCard key={attorney.name} attorney={attorney} />
        ))}
      </div>
    </section>
  );
}
