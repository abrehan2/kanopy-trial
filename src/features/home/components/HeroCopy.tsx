import { Button } from '@/components/ui/button';
import { PHONE_CA } from '@/features/home/data/home';

export function HeroCopy() {
  return (
    <div className="absolute top-header-h right-0 left-0 z-10 px-page-x pt-hero-title-y max-compact:top-header-h-sm max-compact:px-page-x-sm max-compact:pt-hero-title-y-sm">
      <h1 className="font-heading text-display font-normal text-pine max-compact:text-display-sm">
        Injured, or stuck
        <br />
        with a lemon?
        <br />
        We get you paid.
      </h1>
      <p className="mt-7 w-hero-lead-w font-jost text-hero-lead text-ink/80 max-compact:mt-6 max-compact:w-full max-compact:text-hero-lead-sm">
        Personal injury, lemon law and workers’ comp attorneys in California and Nevada. Free case
        review. You pay nothing unless we win.
      </p>
      <div
        className="mt-hero-cta-gap flex flex-col gap-hero-trust max-compact:mt-hero-cta-gap-sm max-compact:gap-5"
        data-testid="hero-cta"
      >
        <div className="flex items-center gap-hero-phone-gap max-compact:flex-col max-compact:gap-3">
          <Button asChild variant="pine" size="cta" className="max-compact:h-cta-h-sm max-compact:w-full max-compact:text-cta-sm">
            <a href="#review-form">Get my free case review</a>
          </Button>
          <a
            href={`tel:${PHONE_CA}`}
            className="font-jost text-cta font-normal text-ink/80 max-compact:hidden"
          >
            Call {PHONE_CA}
          </a>
          <Button asChild variant="pine-line" size="wide" className="hidden max-compact:inline-flex">
            <a href={`tel:${PHONE_CA}`}>Call {PHONE_CA}</a>
          </Button>
        </div>
        <p className="font-jost text-nav font-normal text-dust max-compact:text-legal">
          <span className="max-compact:hidden whitespace-pre">
            {`Free case review  ·  No fee unless we win  ·  We speak your language`}
          </span>
          <span className="hidden whitespace-pre max-compact:inline">
            {`Free case review  ·  No fee unless we win\nWe speak your language`}
          </span>
        </p>
      </div>
    </div>
  );
}
