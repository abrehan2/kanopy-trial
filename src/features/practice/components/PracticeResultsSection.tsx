import { PracticeResultRow } from '@/features/practice/components/PracticeResultRow';
import type { PracticeResult } from '@/features/practice/data/practice';

type PracticeResultsSectionProps = {
  title: string;
  titleSm: string;
  results: PracticeResult[];
};

export function PracticeResultsSection({ title, titleSm, results }: PracticeResultsSectionProps) {
  return (
    <section
      id="results"
      className="flex min-w-0 flex-col gap-10 overflow-x-clip bg-pine px-page-x py-section-mid max-compact:gap-2 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <h2 className="font-heading text-quote font-normal whitespace-pre-line text-paper max-compact:hidden">
        {title}
      </h2>
      <h2 className="hidden font-heading text-results-h font-normal text-paper max-compact:block">
        {titleSm}
      </h2>
      <div className="flex w-full flex-col">
        {results.map((row) => (
          <PracticeResultRow key={row.title} row={row} />
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
