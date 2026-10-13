import { cn } from '@/lib/utils';
import type { NowStep } from '@/features/personal-injury/data/personal-injury';

type PiNowItemProps = { step: NowStep };

export function PiNowItem({ step }: PiNowItemProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col border-t py-5 max-compact:py-3.5',
        step.emphasize
          ? 'border-t-2 border-pine pt-5 max-compact:pt-3.5 max-compact:pb-0'
          : 'border-faq-line',
        step.hideOnCompact && 'max-compact:hidden',
      )}
    >
      <p
        className={cn(
          'font-jost text-lead',
          !step.hideOnCompact && 'max-compact:hidden',
          step.emphasize ? 'font-medium text-pine' : 'text-ink',
        )}
      >
        {step.text}
      </p>
      {step.hideOnCompact ? null : (
        <p
          className={cn(
            'hidden font-jost text-cta-sm max-compact:block',
            step.emphasize ? 'font-medium text-pine' : 'text-ink',
          )}
        >
          {step.shortText ?? step.text}
        </p>
      )}
    </div>
  );
}
