import { AppImage } from '@/components/media/AppImage';
import { cn } from '@/lib/utils';

const SRC = {
  horizontal: { src: '/images/logo-horizontal.svg', width: 136, height: 68 },
  stacked: { src: '/images/logo-stacked.svg', width: 100, height: 150 },
} as const;

type SiteLogoProps = {
  variant: keyof typeof SRC;
  className?: string;
};

export function SiteLogo({ variant, className }: SiteLogoProps) {
  const img = SRC[variant];
  return (
    <AppImage
      src={img.src}
      alt="Olive Legal Group"
      width={img.width}
      height={img.height}
      className={cn('block h-auto max-w-full', className)}
      data-testid={`logo-${variant}`}
    />
  );
}
