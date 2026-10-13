import { AppImage } from '@/components/media/AppImage';

type GuideArticlePhotoProps = { src: string; alt: string };

export function GuideArticlePhoto({ src, alt }: GuideArticlePhotoProps) {
  return (
    <>
      <div className="h-2 w-2.5 max-compact:hidden" aria-hidden />
      <AppImage
        src={src}
        alt={alt}
        width={720}
        height={420}
        className="h-guide-article-h w-full rounded-sm object-cover max-compact:h-guide-article-h-sm"
      />
      <div className="h-2 w-2.5 max-compact:hidden" aria-hidden />
    </>
  );
}
