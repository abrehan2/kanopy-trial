import { AppImage } from '@/components/media/AppImage';
import { HeroCopy } from '@/features/home/components/HeroCopy';
import { HomeHeader } from '@/features/home/components/HomeHeader';
import { PracticeBar } from '@/features/home/components/PracticeBar';
import { HOME_ASSETS, type NavLink } from '@/features/home/data/home';

type HomeHeroProps = {
  nav: NavLink[];
  practices: string[];
};

export function HomeHero({ nav, practices }: HomeHeroProps) {
  return (
    <section
      id="top"
      className="relative h-hero-body overflow-hidden bg-hero max-compact:h-hero-body-sm"
    >
      <div className="pointer-events-none absolute top-header-h inset-x-0 h-hero-img-h max-compact:top-hero-img-top-sm max-compact:h-hero-img-h-sm max-compact:opacity-85">
        <AppImage
          src={HOME_ASSETS.hero}
          alt=""
          fill
          className="object-cover object-right max-compact:object-bottom"
          sizes="100vw"
        />
      </div>
      <div className="pointer-events-none absolute top-header-h inset-x-0 h-hero-fade bg-gradient-to-b from-hero to-transparent max-compact:top-hero-img-top-sm max-compact:h-hero-fade-sm" />
      <HomeHeader nav={nav} />
      <HeroCopy />
      <PracticeBar practices={practices} />
    </section>
  );
}
