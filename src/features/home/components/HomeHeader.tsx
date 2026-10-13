import { SiteLogo } from '@/components/layout/SiteLogo';
import { Button } from '@/components/ui/button';
import { HomeMenu } from '@/features/home/components/HomeMenu';
import type { NavLink } from '@/features/home/data/home';
import { cn } from '@/lib/utils';

type HomeHeaderProps = {
  nav: NavLink[];
  logoHref?: string;
  ctaHref?: string;
  bordered?: boolean;
};

export function HomeHeader({
  nav,
  logoHref = '#top',
  ctaHref = '#review-form',
  bordered = false,
}: HomeHeaderProps) {
  return (
    <header
      className={cn(
        'relative z-30 flex items-center justify-between px-page-x max-compact:h-header-h-sm max-compact:bg-paper max-compact:px-page-x-sm',
        bordered
          ? 'h-header-interior border-b border-header-line bg-paper'
          : 'h-header-h max-compact:border-b max-compact:border-header-line',
      )}
    >
      <a href={logoHref}>
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
          <a href={ctaHref}>Free case review</a>
        </Button>
      </nav>
      <HomeMenu nav={nav} ctaHref={ctaHref} />
    </header>
  );
}
