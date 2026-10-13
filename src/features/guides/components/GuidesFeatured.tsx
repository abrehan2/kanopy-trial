import { AppImage } from '@/components/media/AppImage';
import { GUIDES_FEATURED } from '@/features/guides/data/guides-copy';

export function GuidesFeatured() {
  return (
    <a
      href={GUIDES_FEATURED.href}
      data-testid="guides-featured"
      className="flex min-w-0 items-center gap-16 overflow-x-clip px-page-x pt-8 pb-16 max-compact:flex-col max-compact:items-stretch max-compact:gap-2.5 max-compact:px-page-x-sm max-compact:pt-4 max-compact:pb-6"
    >
      <div className="flex min-w-px flex-1 flex-col gap-4 max-compact:gap-2.5">
        <div className="hidden h-1 w-2.5 max-compact:block" aria-hidden />
        <p className="font-jost text-nav font-medium text-sage max-compact:text-legal">
          {GUIDES_FEATURED.categoryLabel}
        </p>
        <h2 className="font-heading text-quote font-normal text-pine max-compact:text-quote-sm">
          {GUIDES_FEATURED.title}
        </h2>
        <p className="font-jost text-lead-sm text-stone max-compact:hidden">{GUIDES_FEATURED.deck}</p>
        <p className="font-jost text-label text-stone whitespace-pre-wrap max-compact:hidden">
          {GUIDES_FEATURED.meta}
        </p>
        <p className="hidden font-jost text-legal text-stone max-compact:block">{GUIDES_FEATURED.read}</p>
      </div>
      <AppImage
        src={GUIDES_FEATURED.src}
        alt={GUIDES_FEATURED.alt}
        width={620}
        height={400}
        className="h-contact-photo-h w-guide-photo shrink-0 rounded-sm object-cover max-compact:order-first max-compact:h-guide-photo-h-sm max-compact:w-full"
      />
    </a>
  );
}
