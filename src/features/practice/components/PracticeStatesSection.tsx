import { PracticeStateRow } from '@/features/practice/components/PracticeStateRow';
import type { StateRow } from '@/features/practice/data/practice';

type PracticeStatesSectionProps = {
  title: string;
  titleSm: string;
  lead: string;
  rows: StateRow[];
};

export function PracticeStatesSection({ title, titleSm, lead, rows }: PracticeStatesSectionProps) {
  return (
    <section
      id="states"
      className="flex min-w-0 flex-col gap-10 overflow-x-clip bg-cream px-page-x py-section-y max-compact:gap-5 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <h2 className="font-heading text-quote font-normal text-pine max-compact:hidden">{title}</h2>
      <h2 className="hidden font-heading text-section-sm font-normal text-pine max-compact:block">
        {titleSm}
      </h2>
      <p className="font-jost text-lead text-stone max-compact:hidden">{lead}</p>
      <div className="flex w-full flex-col">
        <div className="flex w-full items-start gap-12 pb-4 max-compact:hidden">
          <p className="w-state-label shrink-0 font-jost text-label font-medium text-sage">&nbsp;</p>
          <p className="min-w-px flex-1 font-jost text-label font-medium text-sage">California</p>
          <p className="min-w-px flex-1 font-jost text-label font-medium text-sage">Nevada</p>
        </div>
        {rows.map((row) => (
          <PracticeStateRow key={row.label} row={row} />
        ))}
      </div>
    </section>
  );
}
