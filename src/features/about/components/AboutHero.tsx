import { AppImage } from '@/components/media/AppImage';
import { ABOUT_ASSETS, ABOUT_PAGE } from '@/features/about/data/about-copy';
import { HomeHeader } from '@/features/home/components/HomeHeader';
import type { NavLink } from '@/features/home/data/home';

type AboutHeroProps = { nav: NavLink[] };

export function AboutHero({ nav }: AboutHeroProps) {
  return (
    <div id="top" className="bg-paper">
      <HomeHeader nav={nav} logoHref="/" bordered />
      <section
        data-testid="about-hero"
        className="flex min-w-0 flex-col gap-12 overflow-x-clip px-page-x pt-about-hero-pt pb-about-hero-pb max-compact:gap-4 max-compact:px-page-x-sm max-compact:pt-pi-hero-pt-sm max-compact:pb-about-hero-pb-sm"
      >
        <div className="flex min-w-0 items-end gap-letter-gap max-compact:contents">
          <h1 className="min-w-px flex-1 whitespace-pre-line font-heading text-about-hero font-normal text-pine max-compact:hidden">
            {ABOUT_PAGE.title}
          </h1>
          <h1 className="hidden min-w-0 font-heading text-about-name font-normal text-pine max-compact:block">
            {ABOUT_PAGE.titleSm}
          </h1>
          <p className="min-w-px flex-1 font-jost text-hero-lead text-stone max-compact:hidden">
            {ABOUT_PAGE.lead}
          </p>
          <p className="hidden font-jost text-hero-lead-sm text-stone max-compact:block">
            {ABOUT_PAGE.leadSm}
          </p>
        </div>
        <div className="hidden h-1 w-2.5 max-compact:block" aria-hidden />
        <AppImage
          src={ABOUT_ASSETS.hero}
          alt={ABOUT_PAGE.photoAlt}
          width={1312}
          height={520}
          className="h-about-hero-photo w-full rounded-sm object-cover max-compact:h-pi-photo-h-sm"
        />
      </section>
    </div>
  );
}
