import { AppImage } from '@/components/media/AppImage';
import { Button } from '@/components/ui/button';
import { HomeHeader } from '@/features/home/components/HomeHeader';
import { PHONE_CA, type NavLink } from '@/features/home/data/home';

type PracticeHeroProps = {
  nav: NavLink[];
  crumb: string;
  title: string;
  titleSm?: string;
  lead: string;
  leadSm: string;
  photo: string;
  photoAlt: string;
  testId?: string;
};

export function PracticeHero({
  nav,
  crumb,
  title,
  titleSm,
  lead,
  leadSm,
  photo,
  photoAlt,
  testId = 'practice-hero',
}: PracticeHeroProps) {
  return (
    <div id="top" className="bg-paper">
      <HomeHeader nav={nav} logoHref="/" bordered />
      <section
        data-testid={testId}
        className="flex min-w-0 items-center gap-col-gap overflow-x-clip px-page-x pt-pi-hero-pt pb-pi-hero-pb max-compact:flex-col max-compact:items-stretch max-compact:gap-4 max-compact:px-page-x-sm max-compact:pt-pi-hero-pt-sm max-compact:pb-pi-hero-pb-sm"
      >
        <div className="flex min-w-0 flex-1 flex-col gap-6 max-compact:gap-4">
          <p className="font-jost text-crumb text-stone max-compact:text-hint">
            <span className="max-compact:hidden">Practice areas &nbsp;/&nbsp; </span>
            {crumb}
          </p>
          {titleSm ? (
            <>
              <h1 className="font-heading text-banner font-normal text-pine max-compact:hidden">
                {title}
              </h1>
              <h1 className="hidden font-heading text-banner-sm font-normal text-pine max-compact:block">
                {titleSm}
              </h1>
            </>
          ) : (
            <h1 className="font-heading text-banner font-normal text-pine max-compact:text-banner-sm">
              {title}
            </h1>
          )}
          <p className="font-jost text-lead text-stone max-compact:hidden">{lead}</p>
          <p className="hidden font-jost text-hero-lead-sm text-stone max-compact:block">{leadSm}</p>
          <div className="h-1 w-2.5" aria-hidden />
          <div className="flex flex-wrap items-center gap-7 max-compact:hidden">
            <Button asChild variant="pine" size="cta">
              <a href="#review-form">Get my free case review</a>
            </Button>
            <p className="font-jost text-cta text-pine">
              Or call{' '}
              <a href={`tel:${PHONE_CA}`} className="font-medium underline">
                {PHONE_CA}
              </a>
            </p>
          </div>
          <div className="hidden w-full flex-col gap-4 max-compact:flex" data-testid={`${testId}-cta`}>
            <Button asChild variant="pine" size="wide">
              <a href="#review-form">Get my free case review</a>
            </Button>
            <Button asChild variant="pine-line" size="wide">
              <a href={`tel:${PHONE_CA}`}>Call {PHONE_CA}</a>
            </Button>
          </div>
        </div>
        <div className="hidden h-2 w-2.5 max-compact:block" aria-hidden />
        <AppImage
          src={photo}
          alt={photoAlt}
          width={560}
          height={560}
          className="size-pi-photo shrink-0 rounded-sm object-cover max-compact:h-pi-photo-h-sm max-compact:w-full"
        />
      </section>
    </div>
  );
}
