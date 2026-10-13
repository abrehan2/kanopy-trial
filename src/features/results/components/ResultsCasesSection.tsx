'use client';

import { useState } from 'react';
import { ResultsFilters } from '@/features/results/components/ResultsFilters';
import { ResultsHero } from '@/features/results/components/ResultsHero';
import { ResultsList } from '@/features/results/components/ResultsList';
import type { ResultsCase } from '@/features/results/data/results-cases';
import type { ResultsFilter } from '@/features/results/data/results-filters';
import type { NavLink } from '@/features/home/data/home';

type ResultsCasesSectionProps = {
  nav: NavLink[];
  cases: ResultsCase[];
};

export function ResultsCasesSection({ nav, cases }: ResultsCasesSectionProps) {
  const [filter, setFilter] = useState<ResultsFilter>('all');
  const [expanded, setExpanded] = useState(false);
  const visible =
    filter === 'all' ? cases : cases.filter((row) => row.category === filter);

  return (
    <>
      <ResultsHero
        nav={nav}
        filters={
          <ResultsFilters
            active={filter}
            onChange={(id) => {
              setFilter(id);
              setExpanded(false);
            }}
          />
        }
      />
      <ResultsList
        cases={visible}
        expanded={expanded}
        onExpand={() => setExpanded(true)}
      />
    </>
  );
}
