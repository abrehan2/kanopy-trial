import { SiteLogo } from '@/components/layout/SiteLogo';
import { Button } from '@/components/ui/button';
import { HomeMenu } from '@/features/home/components/HomeMenu';
import type { NavLink } from '@/features/home/data/home';

type HomeHeaderProps = {
  nav: NavLink[];
};

export function HomeHeader({ nav }: HomeHeaderProps) {
  return (
    <header className="relative z-10 flex h-header-h items-center justify-between px-page-x max-compact:h-header-h-sm max-compact:px-page-x-sm">
      <a href="#top">
        <SiteLogo
          variant="horizontal"
          className="max-compact:h-logo-h-sm max-compact:w-logo-w-sm"
        />
      </a>
      <nav className="flex items-center gap-8 max-compact:hidden">
        {nav.map((link) => (
          <a key={link.href} href={link.href} className="font-jost text-nav text-ink">
            {link.label}
          </a>
        ))}
        <Button asChild variant="pine" size="nav">
          <a href="#review-form">Free case review</a>
        </Button>
      </nav>
      <HomeMenu nav={nav} />
    </header>
  );
}
