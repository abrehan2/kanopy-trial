'use client';

import { cn } from '@/lib/utils';
import { GUIDES_FILTERS, type GuideFilter } from '@/features/guides/data/guides-filters';

type GuidesFiltersProps = {
  active: GuideFilter;
  onChange: (id: GuideFilter) => void;
};

export function GuidesFilters({ active, onChange }: GuidesFiltersProps) {
  return (
    <div
      data-testid="guides-filters"
      className="flex flex-wrap items-start gap-8 pt-3 max-compact:gap-5 max-compact:pt-2"
      role="tablist"
      aria-label="Filter guides"
    >
      {GUIDES_FILTERS.map((filter) => {
        const selected = filter.id === active;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(filter.id)}
            className={cn(
              'font-jost text-when max-compact:text-nav',
              selected
                ? 'font-medium text-pine underline decoration-solid'
                : 'font-normal text-stone',
            )}
          >
            <span className="max-compact:hidden">{filter.label}</span>
            <span className="hidden max-compact:inline">{filter.labelSm}</span>
          </button>
        );
      })}
    </div>
  );
}
