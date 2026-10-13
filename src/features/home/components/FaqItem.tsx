import { cn } from '@/lib/utils';
import type { FaqItem as FaqItemModel } from '@/features/home/data/home';

type FaqItemProps = {
  item: FaqItemModel;
  open: boolean;
  compactOpen: boolean;
  onToggle: () => void;
  bordered: 'both' | 'bottom';
  line?: 'faq' | 'pine';
  density?: 'home' | 'practice';
  hiddenOnCompact?: boolean;
};

export function FaqItem({
  item,
  open,
  compactOpen,
  onToggle,
  bordered,
  line = 'faq',
  density = 'home',
  hiddenOnCompact,
}: FaqItemProps) {
  const practice = density === 'practice';
  return (
    <div
      data-testid="faq-item"
      data-open={open ? 'true' : 'false'}
      className={cn(
        'flex w-full flex-col',
        practice
          ? 'py-faq-item-y-pi max-compact:py-faq-item-y-pi-sm'
          : 'py-faq-item-y',
        open && (practice ? 'gap-faq-answer-gap-pi' : 'gap-faq-answer-gap'),
        line === 'pine' ? 'border-pine' : 'border-faq-line',
        bordered === 'both' ? 'border-y' : 'border-b',
        hiddenOnCompact && 'max-compact:hidden',
      )}
    >
      <button
        type="button"
        className={cn(
          'flex w-full items-center gap-6 text-left text-pine',
          practice ? 'max-compact:gap-3' : 'max-compact:gap-4',
        )}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span
          className={cn(
            'min-w-px flex-1 font-heading max-compact:text-faq-sm',
            practice ? 'text-sign' : 'text-faq',
          )}
        >
          {item.question}
        </span>
        <span className="shrink-0 font-jost text-sub leading-none max-compact:hidden">
          {open ? '−' : '+'}
        </span>
        <span className="hidden shrink-0 font-jost text-sign leading-none max-compact:inline">
          {compactOpen ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <p
          data-testid="faq-answer"
          className={cn('font-jost text-body text-ink/80', !compactOpen && 'max-compact:hidden')}
        >
          {item.answer}
        </p>
      ) : null}
    </div>
  );
}
