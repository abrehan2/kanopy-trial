import { cn } from '@/lib/utils';
import type { StateRow } from '@/features/practice/data/practice';

type PracticeStateRowProps = { row: StateRow };

export function PracticeStateRow({ row }: PracticeStateRowProps) {
  return (
    <div
      className={cn(
        'flex w-full items-start gap-12 border-t border-faq-line py-state-row-y max-compact:flex-col max-compact:gap-2.5 max-compact:py-4',
        row.hideOnCompact && 'max-compact:hidden',
      )}
    >
      <p className="w-state-label shrink-0 font-jost text-body font-medium text-pine max-compact:w-full max-compact:text-label">
        {row.label}
      </p>
      <p className="min-w-px flex-1 font-jost text-body text-ink max-compact:hidden">{row.california}</p>
      <p className="min-w-px flex-1 font-jost text-body text-ink max-compact:hidden">{row.nevada}</p>
      <div className="hidden w-full gap-4 max-compact:flex">
        <div className="flex min-w-px flex-1 flex-col gap-0.5">
          <p className="font-jost text-micro font-medium text-sage">CA</p>
          <p className="font-jost text-nav text-ink">{row.californiaSm ?? row.california}</p>
        </div>
        <div className="flex min-w-px flex-1 flex-col gap-0.5">
          <p className="font-jost text-micro font-medium text-sage">NV</p>
          <p className="font-jost text-nav text-ink">{row.nevadaSm ?? row.nevada}</p>
        </div>
      </div>
    </div>
  );
}
