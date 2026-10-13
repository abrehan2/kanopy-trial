import { cn } from '@/lib/utils';
import type { ResultRow as ResultRowModel } from '@/features/home/data/home';

type ResultRowProps = {
  row: ResultRowModel;
};

export function ResultRow({ row }: ResultRowProps) {
  return (
    <div className="flex w-full items-center gap-12 border-t border-pine-line py-9 max-compact:flex-col max-compact:items-start max-compact:gap-1.5 max-compact:py-form-gap">
      <div className="flex min-w-px flex-1 flex-col gap-2 max-compact:hidden">
        <p className="font-heading text-case text-paper">{row.title}</p>
        <p className="font-jost text-label text-moss">{row.place}</p>
      </div>
      <p className="hidden font-jost text-label text-moss max-compact:block">{row.shortTitle}</p>
      <div className="flex w-result-offer shrink-0 flex-col gap-1 text-moss max-compact:hidden">
        <p className="font-jost text-label">{row.offerLabel}</p>
        <p
          className={cn(
            'font-heading',
            row.offerSmall ? 'text-offer-sm' : 'text-process',
            row.offerStrike && 'line-through',
          )}
        >
          {row.offer}
        </p>
      </div>
      <div className="flex w-result-amt shrink-0 flex-col gap-1 max-compact:hidden">
        <p className="font-jost text-label text-gold">{row.resultLabel}</p>
        <p className="font-heading text-result text-paper">{row.result}</p>
      </div>
      <div className="hidden items-baseline gap-3.5 max-compact:flex">
        <p className="font-heading text-result-sm text-paper">{row.result}</p>
        <p
          className={cn(
            'font-heading text-offer-mob text-moss',
            row.offerStrike && 'line-through',
          )}
        >
          {row.shortOffer}
        </p>
      </div>
    </div>
  );
}
