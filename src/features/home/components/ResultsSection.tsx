import { TextLink } from '@/components/ui/text-link';
import { ResultRow } from '@/features/home/components/ResultRow';
import type { ResultRow as ResultRowModel } from '@/features/home/data/home';

type ResultsSectionProps = {
  results: ResultRowModel[];
};

export function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <section
      id="results"
      className="flex min-w-0 flex-col gap-14 overflow-x-clip bg-pine px-page-x py-section-y max-compact:gap-2 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <h2 className="font-heading text-section font-normal text-paper max-compact:hidden">
        What the insurance company offered.
        <br />
        What our clients got.
      </h2>
      <h2 className="hidden font-heading text-results-h font-normal text-paper max-compact:block">
        What insurance offered vs. what we got
      </h2>
      <div className="hidden h-3 max-compact:block" />
      <div className="flex w-full flex-col">
        {results.map((row) => (
          <ResultRow key={row.title} row={row} />
        ))}
      </div>
      <TextLink href="/results" className="text-when font-medium text-paper max-compact:hidden">
        See more results
      </TextLink>
      <p className="font-jost text-label text-moss max-compact:text-micro">
        <span className="max-compact:hidden">Every case is different. </span>
        Past results don’t guarantee a future outcome.
      </p>
    </section>
  );
}
