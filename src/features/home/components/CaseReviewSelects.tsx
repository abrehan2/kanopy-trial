import { Controller, type Control, type FieldErrors } from 'react-hook-form';
import { CaseReviewField } from '@/features/home/components/CaseReviewField';
import { CaseReviewSelect } from '@/features/home/components/CaseReviewSelect';
import {
  CASE_OPTIONS,
  STATE_OPTIONS,
  type CaseReviewValues,
} from '@/features/home/schemas/case-review';

type CaseReviewSelectsProps = {
  control: Control<CaseReviewValues>;
  errors: FieldErrors<CaseReviewValues>;
};

export function CaseReviewSelects({ control, errors }: CaseReviewSelectsProps) {
  return (
    <div className="flex w-full min-w-0 gap-4 max-compact:gap-3">
      <Controller
        name="state"
        control={control}
        render={({ field }) => (
          <CaseReviewField
            id="state"
            label={
              <>
                <span className="max-compact:hidden">Where did it happen? *</span>
                <span className="hidden max-compact:inline" aria-hidden="true">
                  State *
                </span>
              </>
            }
            error={errors.state?.message}
          >
            <CaseReviewSelect
              id="state"
              placeholder="Select a state"
              value={field.value}
              options={STATE_OPTIONS}
              invalid={!!errors.state}
              onChange={field.onChange}
            />
          </CaseReviewField>
        )}
      />
      <Controller
        name="caseType"
        control={control}
        render={({ field }) => (
          <CaseReviewField id="caseType" label="Type of case *" error={errors.caseType?.message}>
            <CaseReviewSelect
              id="caseType"
              placeholder="Select one"
              value={field.value}
              options={CASE_OPTIONS}
              invalid={!!errors.caseType}
              onChange={field.onChange}
            />
          </CaseReviewField>
        )}
      />
    </div>
  );
}
