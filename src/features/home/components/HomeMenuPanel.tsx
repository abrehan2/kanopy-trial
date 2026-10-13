import { Button } from '@/components/ui/button';
import { PHONE_CA, type NavLink } from '@/features/home/data/home';

type HomeMenuPanelProps = {
  nav: NavLink[];
  ctaHref: string;
  onClose: () => void;
};

export function HomeMenuPanel({ nav, ctaHref, onClose }: HomeMenuPanelProps) {
  return (
    <nav
      data-testid="mobile-menu"
      className="fixed inset-x-0 top-header-h-sm bottom-0 z-20 flex flex-col justify-between bg-paper px-page-x-sm pt-8 pb-10"
    >
      <div className="flex flex-col gap-7">
        {nav.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-heading text-section-sm font-normal text-pine"
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <Button asChild variant="pine" size="wide">
          <a href={ctaHref} onClick={onClose}>
            Get my free case review
          </a>
        </Button>
        <Button asChild variant="pine-line" size="wide">
          <a href={`tel:${PHONE_CA}`} onClick={onClose}>
            Call {PHONE_CA}
          </a>
        </Button>
      </div>
    </nav>
  );
}
