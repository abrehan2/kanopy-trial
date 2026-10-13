import { Button } from '@/components/ui/button';
import { HomeHeader } from '@/features/home/components/HomeHeader';
import { PHONE_CA, type NavLink } from '@/features/home/data/home';
import { ThanksWaitItem } from '@/features/thanks/components/ThanksWaitItem';
import { THANKS_PAGE, type ThanksWait } from '@/features/thanks/data/thanks-copy';

type ThanksHeroProps = {
  nav: NavLink[];
  title: string;
  lead: string;
  leadSm: string;
  items: readonly ThanksWait[];
};

export function ThanksHero({ nav, title, lead, leadSm, items }: ThanksHeroProps) {
  return (
    <div id="top" className="bg-paper">
      <HomeHeader nav={nav} logoHref="/" ctaHref="/contact#review-form" bordered />
      <section
        data-testid="thanks-hero"
        className="flex min-w-0 flex-col gap-6 overflow-x-clip px-thanks-x pt-section-y pb-thanks-pb max-compact:gap-4 max-compact:px-page-x-sm max-compact:pt-12 max-compact:pb-section-sm"
      >
        <h1 className="whitespace-nowrap font-heading text-thanks font-normal text-pine max-compact:whitespace-normal max-compact:text-about-name">
          {title}
        </h1>
        <p className="font-jost text-thanks-lead text-ink max-compact:hidden">{lead}</p>
        <p className="hidden font-jost text-body text-ink max-compact:block">{leadSm}</p>
        <div className="h-6 w-2.5 max-compact:h-4" aria-hidden />
        <div className="flex w-full flex-col max-compact:gap-4">
          <h2 className="font-heading text-section-sm font-normal text-pine max-compact:hidden">
            {THANKS_PAGE.waitTitle}
          </h2>
          <h2 className="hidden font-heading text-sign font-normal leading-7 text-pine max-compact:block">
            {THANKS_PAGE.waitTitleSm}
          </h2>
          <div className="h-3 w-2.5 max-compact:h-1" aria-hidden />
          {items.map((item) => (
            <ThanksWaitItem key={item.label} item={item} />
          ))}
        </div>
        <div className="h-6 w-2.5 max-compact:h-4" aria-hidden />
        <p className="font-jost text-hero-lead text-pine max-compact:hidden">
          {THANKS_PAGE.sooner}{' '}
          <a href={`tel:${PHONE_CA}`} className="font-medium underline">
            {THANKS_PAGE.soonerCall}
          </a>
        </p>
        <a
          href={THANKS_PAGE.homeHref}
          className="font-jost text-hero-lead-sm text-stone underline max-compact:hidden"
        >
          {THANKS_PAGE.home}
        </a>
        <Button asChild variant="pine-line" size="wide" className="hidden max-compact:inline-flex">
          <a href={`tel:${PHONE_CA}`}>{THANKS_PAGE.soonerCall}</a>
        </Button>
      </section>
    </div>
  );
}
