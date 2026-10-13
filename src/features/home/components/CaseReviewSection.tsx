import { CaseReviewForm } from '@/features/home/components/CaseReviewForm';
import { PHONE_CA } from '@/features/home/data/home';

export function CaseReviewSection() {
  return (
    <section
      id="review-form"
      className="flex min-w-0 items-start gap-col-gap bg-paper px-page-x py-section-form max-compact:w-full max-compact:flex-col max-compact:gap-8 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <div className="flex w-form-copy shrink-0 flex-col gap-7 max-compact:w-full max-compact:min-w-0 max-compact:gap-5">
        <h2 className="font-heading text-form-h font-normal text-pine max-compact:hidden">
          Find out what your case is worth. Free.
        </h2>
        <h2 className="hidden font-heading text-form-h-sm font-normal text-pine max-compact:block">
          What’s your case worth? Find out free.
        </h2>
        <p className="font-jost text-form-lead text-ink/80 max-compact:hidden">
          Fill this out and one of our team calls you back. If you don’t have a case, we’ll tell you
          that too.
        </p>
        <p className="hidden font-jost text-nav text-ink/80 max-compact:block">We call you back.</p>
        <p className="font-jost text-cta text-pine max-compact:hidden">
          Or call{' '}
          <a href={`tel:${PHONE_CA}`} className="font-medium underline">
            {PHONE_CA}
          </a>
        </p>
      </div>
      <CaseReviewForm />
      <p className="hidden font-jost text-cta text-pine max-compact:block">
        Or call{' '}
        <a href={`tel:${PHONE_CA}`} className="font-medium underline">
          {PHONE_CA}
        </a>
      </p>
    </section>
  );
}
