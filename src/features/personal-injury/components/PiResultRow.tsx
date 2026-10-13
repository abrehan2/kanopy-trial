import type { PiResult } from '@/features/personal-injury/data/personal-injury';

type PiResultRowProps = { row: PiResult };

export function PiResultRow({ row }: PiResultRowProps) {
  return (
    <div className="flex w-full items-center gap-12 border-t border-pine-line py-8 max-compact:flex-col max-compact:items-start max-compact:gap-1.5 max-compact:py-form-gap">
      <div className="flex min-w-px flex-1 flex-col gap-1.5 max-compact:hidden">
        <p className="font-heading text-process text-paper">{row.title}</p>
        <p className="font-jost text-label text-moss">{row.place}</p>
      </div>
      <p className="hidden font-jost text-label text-moss max-compact:block">{row.shortTitle}</p>
      <div className="flex w-result-offer shrink-0 flex-col gap-0.5 text-moss max-compact:hidden">
        <p className="font-jost text-label">Offered</p>
        <p className="font-heading text-process line-through">{row.offer}</p>
      </div>
      <div className="flex w-result-amt shrink-0 flex-col gap-0.5 max-compact:hidden">
        <p className="font-jost text-label text-gold">Result</p>
        <p className="font-heading text-result text-paper">{row.result}</p>
      </div>
      <div className="hidden items-baseline gap-3.5 max-compact:flex">
        <p className="font-heading text-result-sm text-paper">{row.result}</p>
        <p className="font-heading text-offer-mob text-moss line-through">{row.offer}</p>
      </div>
    </div>
  );
}
