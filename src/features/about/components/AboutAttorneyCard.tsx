import { AppImage } from '@/components/media/AppImage';
import { ABOUT_PAGE } from '@/features/about/data/about-copy';
import type { AboutAttorney } from '@/features/about/data/about-attorneys';

type AboutAttorneyCardProps = { attorney: AboutAttorney };

export function AboutAttorneyCard({ attorney }: AboutAttorneyCardProps) {
  return (
    <article className="flex min-w-px flex-1 flex-col gap-3.5 max-compact:w-full max-compact:gap-2">
      <AppImage
        src={attorney.photo}
        alt={attorney.photoAlt}
        width={624}
        height={520}
        className="h-about-portrait-h w-full rounded-sm object-cover max-compact:h-about-portrait-h-sm"
      />
      <p className="font-jost text-legal text-stone">{ABOUT_PAGE.portraitNote}</p>
      <div className="h-2 w-2.5 max-compact:h-1" aria-hidden />
      <p className="font-jost text-nav whitespace-pre-wrap text-sage max-compact:hidden">
        {attorney.office}
      </p>
      <p className="hidden font-jost text-legal text-sage max-compact:block">{attorney.officeSm}</p>
      <h3 className="font-heading text-about-name font-normal text-pine max-compact:hidden">
        {attorney.name}
      </h3>
      <h3 className="hidden font-heading text-case-sm font-normal text-pine max-compact:block">
        {attorney.nameSm}
      </h3>
      <p className="font-jost text-lead text-ink max-compact:hidden">{attorney.bio}</p>
      <p className="hidden font-jost text-hero-lead-sm text-ink max-compact:block">{attorney.bioSm}</p>
      <p className="font-jost text-label text-stone max-compact:hidden">{attorney.bar}</p>
      <a
        href={attorney.bookHref}
        className="font-jost text-cta-sm font-medium text-pine underline max-compact:hidden"
      >
        {attorney.bookLabel}
      </a>
    </article>
  );
}
