import { cn } from '@/lib/utils';
import type { ResultsCase } from '@/features/results/data/results-cases';

type ResultsCaseRowProps = { row: ResultsCase };

export function ResultsCaseRow({ row }: ResultsCaseRowProps) {
  return (
    <article
      data-testid="results-case"
      className="flex w-full items-center gap-12 border-t border-sand py-results-row-y max-compact:flex-col max-compact:items-start max-compact:gap-1 max-compact:py-results-row-y-sm"
    >
      <div className="flex min-w-px flex-1 flex-col gap-1.5 max-compact:hidden">
        <h3 className="font-heading text-case-sm font-normal text-pine">{row.title}</h3>
        <p className="font-jost text-label text-stone">{row.meta}</p>
      </div>
      <p className="hidden font-jost text-legal text-stone max-compact:block">{row.metaSm}</p>
      <div className="flex w-result-offer shrink-0 flex-col gap-0.5 text-stone max-compact:hidden">
        <p className="font-jost text-legal">{row.offerLabel}</p>
        <p
          className={cn(
            'font-heading',
            row.offerSmall ? 'text-offer-mob' : 'text-case-sm',
            row.offerStrike && 'line-through',
          )}
        >
          {row.offer}
        </p>
      </div>
      <p className="w-results-amt shrink-0 font-heading text-result font-normal text-pine max-compact:hidden">
        {row.result}
      </p>
      <div className="hidden items-baseline gap-3 max-compact:flex">
        <p className="font-heading text-title font-normal text-pine">{row.result}</p>
        {row.hideOfferOnCompact ? null : (
          <p
            className={cn(
              'font-heading text-cta text-stone',
              row.offerStrike && 'line-through',
            )}
          >
            {row.offerSm ?? row.offer}
          </p>
        )}
      </div>
    </article>
  );
}
