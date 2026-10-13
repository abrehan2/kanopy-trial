import { AdviceColumn } from '@/features/home/components/AdviceColumn';
import { AdviceMobile } from '@/features/home/components/AdviceMobile';
import type { AdviceColumn as AdviceColumnModel } from '@/features/home/data/home';

type AdviceSectionProps = {
  advice: AdviceColumnModel[];
};

export function AdviceSection({ advice }: AdviceSectionProps) {
  return (
    <section
      id="advice"
      className="flex min-w-0 flex-col gap-16 overflow-x-clip bg-paper px-page-x py-section-lg max-compact:gap-5 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <div className="flex w-advice-head flex-col gap-5 max-compact:w-full">
        <h2 className="font-heading text-section font-normal text-pine max-compact:hidden">
          If this just happened to you
        </h2>
        <h2 className="hidden font-heading text-section-sm font-normal text-pine max-compact:block">
          Just happened? Start here.
        </h2>
        <p className="font-jost text-lead-sm text-stone max-compact:hidden">
          What to do in the next few days, whether or not you ever call us.
        </p>
      </div>
      <div data-testid="advice-columns" className="flex w-full gap-16 max-compact:hidden">
        {advice.map((column) => (
          <AdviceColumn key={column.title} column={column} />
        ))}
      </div>
      <AdviceMobile advice={advice} />
    </section>
  );
}
