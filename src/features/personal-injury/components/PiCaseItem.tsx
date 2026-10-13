import type { CaseItem } from '@/features/personal-injury/data/personal-injury';

type PiCaseItemProps = { item: CaseItem };

export function PiCaseItem({ item }: PiCaseItemProps) {
  return (
    <div className="flex w-full flex-col gap-1.5 border-t border-pine py-6">
      <h3 className="font-heading text-case-sm font-normal text-pine">{item.title}</h3>
      <p className="font-jost text-body text-stone">{item.body}</p>
    </div>
  );
}
