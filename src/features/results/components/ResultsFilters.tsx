'use client';

import { cn } from '@/lib/utils';
import {
  RESULTS_FILTERS,
  type ResultsFilter,
} from '@/features/results/data/results-filters';

type ResultsFiltersProps = {
  active: ResultsFilter;
  onChange: (id: ResultsFilter) => void;
};

export function ResultsFilters({ active, onChange }: ResultsFiltersProps) {
  return (
    <div
      data-testid="results-filters"
      className="flex flex-wrap items-start gap-8 pt-4 max-compact:gap-5 max-compact:pt-2"
      role="tablist"
      aria-label="Filter results"
    >
      {RESULTS_FILTERS.map((filter) => {
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
