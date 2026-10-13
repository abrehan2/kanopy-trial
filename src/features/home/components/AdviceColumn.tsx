import { TextLink } from '@/components/ui/text-link';
import type { AdviceColumn as AdviceColumnModel } from '@/features/home/data/home';

type AdviceColumnProps = {
  column: AdviceColumnModel;
};

export function AdviceColumn({ column }: AdviceColumnProps) {
  return (
    <div className="flex min-w-px flex-1 flex-col gap-5">
      <h3 className="font-heading text-sub font-normal text-pine">{column.title}</h3>
      {column.items.map((item) => (
        <p key={item} className="font-jost text-body text-ink">
          {item}
        </p>
      ))}
      <p className="font-jost text-body font-medium text-pine">{column.warn}</p>
      <TextLink href={column.href}>{column.link}</TextLink>
    </div>
  );
}
