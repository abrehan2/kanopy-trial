import Image, { type ImageProps } from 'next/image';

type AppImageProps = Omit<ImageProps, 'priority'>;

export function AppImage({
  alt,
  preload = true,
  loading = 'eager',
  fetchPriority = 'high',
  unoptimized = true,
  ...props
}: AppImageProps) {
  return (
    <Image
      alt={alt}
      {...props}
      preload={preload}
      loading={loading}
      fetchPriority={fetchPriority}
      unoptimized={unoptimized}
    />
  );
}
