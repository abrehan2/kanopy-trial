import { PiCaseItem } from '@/features/personal-injury/components/PiCaseItem';
import type { CaseItem } from '@/features/personal-injury/data/personal-injury';

type PiCasesSectionProps = {
  left: CaseItem[];
  right: CaseItem[];
};

export function PiCasesSection({ left, right }: PiCasesSectionProps) {
  return (
    <section
      id="cases"
      className="flex min-w-0 flex-col gap-10 overflow-x-clip bg-paper px-page-x pt-6 pb-section-y max-compact:hidden"
    >
      <h2 className="font-heading text-quote font-normal text-pine">Cases we take</h2>
      <div className="flex w-full gap-16">
        <div className="flex min-w-px flex-1 flex-col">
          {left.map((item) => (
            <PiCaseItem key={item.title} item={item} />
          ))}
        </div>
        <div className="flex min-w-px flex-1 flex-col">
          {right.map((item) => (
            <PiCaseItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
