import type { ProcessStep as ProcessStepModel } from '@/features/home/data/home';

type ProcessStepProps = {
  step: ProcessStepModel;
};

export function ProcessStep({ step }: ProcessStepProps) {
  return (
    <div className="flex w-full items-start gap-12 border-t border-sand py-8 max-compact:gap-4 max-compact:py-4">
      <p className="w-step-when shrink-0 font-jost text-when font-medium text-sage max-compact:w-24 max-compact:text-hint">
        {step.when}
      </p>
      <p className="w-step-title shrink-0 font-heading text-process text-pine max-compact:hidden">
        {step.title}
      </p>
      <p className="min-w-px flex-1 font-jost text-step text-ink max-compact:hidden">{step.body}</p>
      <p className="hidden min-w-px flex-1 font-jost text-cta-sm text-ink max-compact:block">
        {step.shortBody}
      </p>
    </div>
  );
}
