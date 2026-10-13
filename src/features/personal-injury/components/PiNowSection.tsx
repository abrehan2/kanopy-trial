import { PiNowItem } from '@/features/personal-injury/components/PiNowItem';
import type { NowStep } from '@/features/personal-injury/data/personal-injury';

type PiNowSectionProps = { steps: NowStep[] };

export function PiNowSection({ steps }: PiNowSectionProps) {
  return (
    <section
      id="now"
      className="overflow-x-clip bg-paper px-page-x py-section-y max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <div className="flex w-full items-start gap-letter-gap max-compact:flex-col max-compact:gap-4">
        <div className="flex w-now-aside shrink-0 flex-col gap-5 max-compact:w-full max-compact:gap-0">
          <h2 className="font-heading text-quote font-normal text-pine max-compact:text-section-sm">
            If it just happened
          </h2>
          <p className="font-jost text-lead text-stone max-compact:hidden">
            Whether or not you ever call us.
          </p>
        </div>
        <div className="flex min-w-px flex-1 flex-col">
          {steps.map((step) => (
            <PiNowItem key={step.text} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
