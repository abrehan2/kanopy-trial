import { PiStateRow } from '@/features/personal-injury/components/PiStateRow';
import type { StateRow } from '@/features/personal-injury/data/personal-injury';

type PiStatesSectionProps = { rows: StateRow[] };

export function PiStatesSection({ rows }: PiStatesSectionProps) {
  return (
    <section
      id="states"
      className="flex min-w-0 flex-col gap-10 overflow-x-clip bg-cream px-page-x py-section-y max-compact:gap-5 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <h2 className="font-heading text-quote font-normal text-pine max-compact:hidden">
        California and Nevada are different
      </h2>
      <h2 className="hidden font-heading text-section-sm font-normal text-pine max-compact:block">
        California vs. Nevada
      </h2>
      <p className="font-jost text-lead text-stone max-compact:hidden">
        Where it happened decides which rules apply.
      </p>
      <div className="flex w-full flex-col">
        <div className="flex w-full items-start gap-12 pb-4 max-compact:hidden">
          <p className="w-state-label shrink-0 font-jost text-label font-medium text-sage">&nbsp;</p>
          <p className="min-w-px flex-1 font-jost text-label font-medium text-sage">California</p>
          <p className="min-w-px flex-1 font-jost text-label font-medium text-sage">Nevada</p>
        </div>
        {rows.map((row) => (
          <PiStateRow key={row.label} row={row} />
        ))}
      </div>
    </section>
  );
}
