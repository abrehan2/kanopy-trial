import Image, { type ImageProps } from 'next/image';

type AppImageProps = Omit<ImageProps, 'priority'>;

export function AppImage({ alt, preload = true, ...props }: AppImageProps) {
  return <Image alt={alt} {...props} preload={preload} />;
}
