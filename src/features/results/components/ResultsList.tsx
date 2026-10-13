import { ResultsCaseRow } from '@/features/results/components/ResultsCaseRow';
import {
  RESULTS_MOBILE_PREVIEW,
  RESULTS_PAGE,
} from '@/features/results/data/results-copy';
import type { ResultsCase } from '@/features/results/data/results-cases';
import { cn } from '@/lib/utils';

type ResultsListProps = {
  cases: ResultsCase[];
  expanded: boolean;
  onExpand: () => void;
};

export function ResultsList({ cases, expanded, onExpand }: ResultsListProps) {
  const showMore = !expanded && cases.length > RESULTS_MOBILE_PREVIEW;

  return (
    <section
      id="results-list"
      data-testid="results-list"
      className="overflow-x-clip bg-paper px-page-x pt-results-list-pt pb-section-y max-compact:px-page-x-sm max-compact:pb-results-list-pb-sm"
    >
      <div className="flex w-full flex-col">
        {cases.map((row, index) => (
          <div
            key={row.title}
            className={cn(
              !expanded && index >= RESULTS_MOBILE_PREVIEW && 'max-compact:hidden',
            )}
          >
            <ResultsCaseRow row={row} />
          </div>
        ))}
      </div>
      {showMore ? (
        <button
          type="button"
          data-testid="results-see-more"
          onClick={onExpand}
          className="mt-2 hidden font-jost text-nav font-medium text-pine underline max-compact:inline-block"
        >
          {RESULTS_PAGE.seeMore}
        </button>
      ) : null}
    </section>
  );
}
