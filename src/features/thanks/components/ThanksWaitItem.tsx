import type { ThanksWait } from '@/features/thanks/data/thanks-copy';

type ThanksWaitItemProps = { item: ThanksWait };

export function ThanksWaitItem({ item }: ThanksWaitItemProps) {
  return (
    <p
      data-testid="thanks-wait"
      className="w-full border-t border-faq-line py-form-gap font-jost text-hero-lead text-ink max-compact:py-3.5 max-compact:text-hero-lead-sm"
    >
      <span className="max-compact:hidden">{item.label}</span>
      <span className="hidden max-compact:inline">{item.labelSm}</span>
    </p>
  );
}
