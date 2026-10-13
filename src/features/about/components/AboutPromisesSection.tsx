import { AboutPromiseRow } from '@/features/about/components/AboutPromiseRow';
import { ABOUT_PAGE } from '@/features/about/data/about-copy';
import type { AboutPromise } from '@/features/about/data/about-promises';

type AboutPromisesSectionProps = { promises: AboutPromise[] };

export function AboutPromisesSection({ promises }: AboutPromisesSectionProps) {
  return (
    <section
      id="promises"
      className="overflow-x-clip bg-cream px-page-x py-section-y max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <div className="flex min-w-0 items-start gap-letter-gap max-compact:flex-col max-compact:gap-0">
        <div className="w-now-aside shrink-0 max-compact:w-full">
          <h2 className="font-heading text-quote font-normal text-pine max-compact:hidden">
            {ABOUT_PAGE.promisesTitle}
          </h2>
          <h2 className="hidden font-heading text-section-sm font-normal text-pine max-compact:block">
            {ABOUT_PAGE.promisesTitleSm}
          </h2>
          <div className="hidden h-3 w-2.5 max-compact:block" aria-hidden />
        </div>
        <div className="flex min-w-px flex-1 flex-col max-compact:w-full">
          {promises.map((item) => (
            <AboutPromiseRow key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
