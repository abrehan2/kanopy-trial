'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CaseReviewField } from '@/features/home/components/CaseReviewField';
import { CaseReviewHeading } from '@/features/home/components/CaseReviewHeading';
import { ContactRow, NameRow, SmsConsent } from '@/features/home/components/CaseReviewRows';
import { CaseReviewSelects } from '@/features/home/components/CaseReviewSelects';
import { reviewSubmitLabel } from '@/features/home/data/case-review-timer';
import { useCaseReviewSubmit } from '@/features/home/data/use-case-review';
import {
  caseReviewT,
  makeCaseReviewSchema,
  type CaseReviewValues,
} from '@/features/home/schemas/case-review';

const EMPTY: CaseReviewValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  state: '',
  caseType: '',
  story: '',
  sms: false,
};

export function CaseReviewForm() {
  const { submit, saving, secondsLeft } = useCaseReviewSubmit();
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<CaseReviewValues>({
    resolver: zodResolver(makeCaseReviewSchema(caseReviewT)),
    defaultValues: EMPTY,
  });

  return (
    <form
      className="relative flex w-full min-w-0 flex-1 flex-col gap-form-gap rounded-card bg-card p-form-card shadow-card max-compact:p-form-card-sm"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
      onSubmit={handleSubmit(async (values) => {
        if (await submit(values)) reset();
      })}
    >
      {/* Decoy fields so Chrome address autofill binds here instead of real inputs */}
      <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden>
        <input type="text" tabIndex={-1} autoComplete="name" />
        <input type="email" tabIndex={-1} autoComplete="email" />
        <input type="tel" tabIndex={-1} autoComplete="tel" />
      </div>
      <CaseReviewHeading showAlert={isSubmitted && Object.keys(errors).length > 0} />
      <NameRow register={register} setValue={setValue} errors={errors} />
      <ContactRow register={register} errors={errors} />
      <CaseReviewSelects control={control} errors={errors} />
      <CaseReviewField id="story" label="Briefly, what happened?" className="max-compact:hidden">
        <Textarea
          id="story"
          placeholder="For example: rear-ended on the 405 on March 3."
          {...register('story')}
          autoComplete="nope"
        />
      </CaseReviewField>
      <SmsConsent control={control} />
      <Button type="submit" variant="pine" size="form" disabled={saving || secondsLeft > 0}>
        {reviewSubmitLabel(saving, secondsLeft)}
      </Button>
      <p className="w-full text-center font-jost text-micro text-dust">
        Confidential. Sending this doesn’t create an attorney–client relationship.
      </p>
    </form>
  );
}
