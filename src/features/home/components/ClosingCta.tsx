import { Button } from '@/components/ui/button';
import { PHONE_CA } from '@/features/home/data/home';

type ClosingCtaProps = { ctaHref?: string };

export function ClosingCta({ ctaHref = '#review-form' }: ClosingCtaProps) {
  return (
    <section
      id="closing"
      className="flex min-w-0 items-center gap-10 bg-pine px-page-x py-section-cta max-compact:w-full max-compact:flex-col max-compact:items-stretch max-compact:gap-4 max-compact:px-page-x-sm max-compact:py-12"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-2.5 text-paper max-compact:w-full">
        <p className="font-heading text-close font-normal max-compact:text-close-sm">
          Find out what your case is worth.
        </p>
        <p className="font-jost text-form-lead text-paper/80 max-compact:hidden">
          Free, no obligation, and you talk to a real person.
        </p>
      </div>
      <Button
        asChild
        variant="paper"
        size="cta"
        className="px-7 max-compact:h-cta-h-sm max-compact:w-full max-compact:px-0 max-compact:text-cta-sm"
      >
        <a href={ctaHref}>Get my free case review</a>
      </Button>
      <p className="shrink-0 font-jost text-cta whitespace-nowrap text-paper max-compact:hidden">
        or call {PHONE_CA}
      </p>
      <Button asChild variant="paper-line" size="wide" className="hidden max-compact:inline-flex">
        <a href={`tel:${PHONE_CA}`}>Call {PHONE_CA}</a>
      </Button>
    </section>
  );
}
