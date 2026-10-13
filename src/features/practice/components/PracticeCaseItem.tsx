import type { CaseItem } from '@/features/practice/data/practice';

type PracticeCaseItemProps = { item: CaseItem };

export function PracticeCaseItem({ item }: PracticeCaseItemProps) {
  return (
    <div className="flex w-full flex-col gap-1.5 border-t border-pine py-6">
      <h3 className="font-heading text-case-sm font-normal text-pine">{item.title}</h3>
      <p className="font-jost text-body text-stone">{item.body}</p>
    </div>
  );
}
