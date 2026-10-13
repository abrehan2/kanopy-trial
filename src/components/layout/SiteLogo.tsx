import { AppImage } from '@/components/media/AppImage';

const SRC = {
  horizontal: { src: '/images/logo-horizontal.png', width: 136, height: 68 },
  stacked: { src: '/images/logo-stacked.png', width: 100, height: 150 },
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
      className={className}
    />
  );
}
