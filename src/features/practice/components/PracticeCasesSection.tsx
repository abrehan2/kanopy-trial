import { PracticeCaseItem } from '@/features/practice/components/PracticeCaseItem';
import type { CaseItem } from '@/features/practice/data/practice';

type PracticeCasesSectionProps = {
  title: string;
  left: CaseItem[];
  right: CaseItem[];
};

export function PracticeCasesSection({ title, left, right }: PracticeCasesSectionProps) {
  return (
    <section
      id="cases"
      className="flex min-w-0 flex-col gap-10 overflow-x-clip bg-paper px-page-x pt-6 pb-section-y max-compact:hidden"
    >
      <h2 className="font-heading text-quote font-normal text-pine">{title}</h2>
      <div className="flex w-full gap-16">
        <div className="flex min-w-px flex-1 flex-col">
          {left.map((item) => (
            <PracticeCaseItem key={item.title} item={item} />
          ))}
        </div>
        <div className="flex min-w-px flex-1 flex-col">
          {right.map((item) => (
            <PracticeCaseItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
