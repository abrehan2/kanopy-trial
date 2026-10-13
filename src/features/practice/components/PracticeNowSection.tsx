import { PracticeNowItem } from '@/features/practice/components/PracticeNowItem';
import type { NowStep } from '@/features/practice/data/practice';

type PracticeNowSectionProps = {
  title: string;
  lead: string;
  steps: NowStep[];
};

export function PracticeNowSection({ title, lead, steps }: PracticeNowSectionProps) {
  return (
    <section
      id="now"
      className="overflow-x-clip bg-paper px-page-x py-section-y max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <div className="flex w-full items-start gap-letter-gap max-compact:flex-col max-compact:gap-0">
        <div className="flex w-now-aside shrink-0 flex-col gap-5 max-compact:w-full max-compact:gap-0">
          <h2 className="font-heading text-quote font-normal text-pine max-compact:text-section-sm">
            {title}
          </h2>
          <p className="font-jost text-lead text-stone max-compact:hidden">{lead}</p>
        </div>
        <div className="hidden h-4 max-compact:block" aria-hidden />
        <div data-testid="now-steps" className="flex min-w-px flex-1 flex-col max-compact:w-full">
          {steps.map((step) => (
            <PracticeNowItem key={step.text} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
