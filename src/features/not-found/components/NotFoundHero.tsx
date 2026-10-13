import { HomeHeader } from '@/features/home/components/HomeHeader';
import { NotFoundLinks } from '@/features/not-found/components/NotFoundLinks';
import type { getNotFoundView } from '@/features/not-found/data/use-not-found';

type NotFoundView = ReturnType<typeof getNotFoundView>;
type NotFoundHeroProps = { view: NotFoundView };

export function NotFoundHero({ view }: NotFoundHeroProps) {
  return (
    <div id="top" className="bg-paper">
      <HomeHeader nav={view.nav} logoHref="/" ctaHref="/#review-form" bordered />
      <section
        data-testid="not-found-hero"
        className="flex min-w-0 flex-col gap-6 overflow-x-clip px-page-x pt-not-found-pt pb-not-found-pb max-compact:gap-4 max-compact:px-page-x-sm max-compact:pt-not-found-pt-sm max-compact:pb-not-found-pb-sm"
      >
        <h1 className="whitespace-nowrap font-heading text-results-hero font-normal text-pine max-compact:whitespace-normal max-compact:text-about-name">
          {view.title}
        </h1>
        <p className="font-jost text-lead-sm text-stone max-compact:hidden">{view.lead}</p>
        <p className="hidden font-jost text-not-found-lead-sm text-stone max-compact:block">
          {view.leadSm}
        </p>
        <div className="h-2 w-2.5 max-compact:h-1" aria-hidden />
        <NotFoundLinks links={view.links} />
      </section>
    </div>
  );
}
