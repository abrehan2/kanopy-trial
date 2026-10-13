import { ProcessStep } from '@/features/home/components/ProcessStep';
import type { ProcessStep as ProcessStepModel } from '@/features/home/data/home';

type ProcessSectionProps = {
  steps: ProcessStepModel[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section
      id="process"
      className="flex min-w-0 flex-col gap-14 overflow-x-clip bg-background px-page-x py-section-lg max-compact:gap-5 max-compact:px-page-x-sm max-compact:py-section-sm"
    >
      <div className="flex flex-col gap-5">
        <h2 className="font-heading text-section font-normal text-pine max-compact:text-section-sm">
          What happens after you call
        </h2>
        <p className="font-jost text-lead-sm text-stone max-compact:hidden">
          Most people have never hired a lawyer. Here’s the whole thing, start to finish.
        </p>
      </div>
      <div className="flex w-full flex-col">
        {steps.map((step) => (
          <ProcessStep key={step.when} step={step} />
        ))}
      </div>
    </section>
  );
}
