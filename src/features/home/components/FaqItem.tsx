import { cn } from '@/lib/utils';
import type { FaqItem as FaqItemModel } from '@/features/home/data/home';

type FaqItemProps = {
  item: FaqItemModel;
  open: boolean;
  compactOpen: boolean;
  onToggle: () => void;
  bordered: 'both' | 'bottom';
  hiddenOnCompact?: boolean;
};

export function FaqItem({
  item,
  open,
  compactOpen,
  onToggle,
  bordered,
  hiddenOnCompact,
}: FaqItemProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col border-faq-line py-6 max-compact:py-form-gap',
        bordered === 'both' ? 'gap-3.5 border-y' : 'border-b',
        hiddenOnCompact && 'max-compact:hidden',
      )}
    >
      <button
        type="button"
        className="flex w-full items-center gap-6 text-left text-pine max-compact:gap-4"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="min-w-px flex-1 font-heading text-faq max-compact:text-faq-sm">
          {item.question}
        </span>
        <span className="shrink-0 font-jost text-sub max-compact:hidden">{open ? '−' : '+'}</span>
        <span className="hidden shrink-0 font-jost text-sign max-compact:inline">
          {compactOpen ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <p className={cn('font-jost text-body text-ink/80', !compactOpen && 'max-compact:hidden')}>
          {item.answer}
        </p>
      ) : null}
    </div>
  );
}
