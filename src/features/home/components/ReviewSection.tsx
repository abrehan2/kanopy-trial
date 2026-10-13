import { TextLink } from '@/components/ui/text-link';
import { FIGMA_REVIEWS_HREF } from '@/features/home/data/home';

export function ReviewSection() {
  return (
    <section
      id="review"
      className="flex min-w-0 flex-col gap-8 overflow-x-clip bg-paper px-page-x py-section-lg max-compact:gap-3.5 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <p className="w-quote font-heading text-quote font-normal text-pine max-compact:hidden">
        “The insurance company offered me $15,000 two days after the crash. I almost took it.
        Ludmila told me to wait until my doctor knew what was wrong with my neck. I’m so glad I
        listened.”
      </p>
      <p className="hidden font-heading text-quote-sm font-normal text-pine max-compact:block">
        “They offered me $15,000. Ludmila told me to wait. I’m so glad I listened.”
      </p>
      <p className="font-jost text-when text-stone max-compact:text-hint">
        Maria G., rear-ended on the 405
      </p>
      <TextLink href={FIGMA_REVIEWS_HREF} className="max-compact:hidden">
        Read our reviews on Google
      </TextLink>
    </section>
  );
}
