import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormRegister,
  type UseFormSetValue,
} from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { CaseReviewField } from '@/features/home/components/CaseReviewField';
import type { CaseReviewValues } from '@/features/home/schemas/case-review';

type RowProps = {
  register: UseFormRegister<CaseReviewValues>;
  errors: FieldErrors<CaseReviewValues>;
};

/** Chrome ignores "off" on name/email/tel; non-standard tokens disable address autofill. */
const NO_AUTO = 'nope';

export function NameRow({
  register,
  setValue,
  errors,
}: RowProps & { setValue: UseFormSetValue<CaseReviewValues> }) {
  return (
    <>
      <div className="hidden w-full max-compact:flex">
        <CaseReviewField id="fullName" label="Your name *" error={errors.firstName?.message}>
          <Input
            id="fullName"
            autoComplete={NO_AUTO}
            aria-invalid={!!errors.firstName}
            onChange={(event) => {
              const parts = event.target.value.trim().split(/\s+/);
              setValue('firstName', parts[0] ?? '', { shouldValidate: true });
              setValue('lastName', parts.slice(1).join(' ') || parts[0] || '', {
                shouldValidate: true,
              });
            }}
          />
        </CaseReviewField>
      </div>
      <div className="flex w-full gap-4 max-compact:hidden">
        <CaseReviewField id="firstName" label="First name *" error={errors.firstName?.message}>
          <Input
            id="firstName"
            aria-invalid={!!errors.firstName}
            {...register('firstName')}
            autoComplete={NO_AUTO}
          />
        </CaseReviewField>
        <CaseReviewField id="lastName" label="Last name *" error={errors.lastName?.message}>
          <Input
            id="lastName"
            aria-invalid={!!errors.lastName}
            {...register('lastName')}
            autoComplete={NO_AUTO}
          />
        </CaseReviewField>
      </div>
    </>
  );
}

export function ContactRow({ register, errors }: RowProps) {
  return (
    <div className="flex w-full min-w-0 gap-4">
      <CaseReviewField id="phone" label="Phone *" error={errors.phone?.message}>
        <Input
          id="phone"
          type="tel"
          inputMode="tel"
          placeholder="(555) 555-5555"
          aria-invalid={!!errors.phone}
          {...register('phone')}
          autoComplete={NO_AUTO}
        />
      </CaseReviewField>
      <CaseReviewField id="email" label="Email" error={errors.email?.message} className="max-compact:hidden">
        <Input
          id="email"
          type="text"
          inputMode="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          {...register('email')}
          autoComplete={NO_AUTO}
        />
      </CaseReviewField>
    </div>
  );
}

export function SmsConsent({ control }: { control: Control<CaseReviewValues> }) {
  return (
    <Controller
      name="sms"
      control={control}
      render={({ field }) => (
        <label className="flex w-full items-start gap-2.5" data-testid="sms-consent">
          <Checkbox
            id="sms"
            checked={field.value}
            onCheckedChange={(checked) => field.onChange(checked === true)}
          />
          <span className="min-w-px flex-1 font-jost text-micro font-normal text-dust">
            <span className="max-compact:hidden">
              Text me updates about my case (optional). Msg & data rates may apply. Reply STOP to
              opt out.
            </span>
            <span className="hidden max-compact:inline">
              Text me updates (optional). Msg & data rates may apply.
            </span>
          </span>
        </label>
      )}
    />
  );
}
