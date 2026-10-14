import { AppImage } from '@/components/media/AppImage';

type GuidePhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export function GuidePhoto({ src, alt, width, height, className }: GuidePhotoProps) {
  if (!src) return <div className={className} aria-hidden />;
  return (
    <AppImage src={src} alt={alt} width={width} height={height} className={className} />
  );
}
