import { PiResultRow } from '@/features/personal-injury/components/PiResultRow';
import type { PiResult } from '@/features/personal-injury/data/personal-injury';

type PiResultsSectionProps = { results: PiResult[] };

export function PiResultsSection({ results }: PiResultsSectionProps) {
  return (
    <section
      id="results"
      className="flex min-w-0 flex-col gap-10 overflow-x-clip bg-pine px-page-x py-section-mid max-compact:gap-2 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <h2 className="font-heading text-quote font-normal text-paper max-compact:hidden">
        What the insurance company offered.
        <br />
        What our clients got.
      </h2>
      <h2 className="hidden font-heading text-results-h font-normal text-paper max-compact:block">
        What insurance offered vs. what we got
      </h2>
      <div className="flex w-full flex-col">
        {results.map((row) => (
          <PiResultRow key={row.title} row={row} />
        ))}
      </div>
      <p className="font-jost text-label text-moss max-compact:hidden">
        Every case is different. Past results don’t guarantee a future outcome.
      </p>
      <p className="hidden font-jost text-hint text-moss max-compact:block">
        Past results don’t guarantee a future outcome.
      </p>
    </section>
  );
}
