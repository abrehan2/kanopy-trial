import { z } from 'zod';

export const CASE_REVIEW_COPY = {
  firstRequired: 'Enter your first name',
  lastRequired: 'Enter your last name',
  phoneInvalid: 'Enter a 10-digit phone number',
  emailInvalid: 'Enter a valid email',
  stateRequired: 'Choose a state',
  caseRequired: 'Choose a type of case',
  formAlert: 'Please fix the fields marked below.',
} as const;

export type CaseReviewTKey = keyof typeof CASE_REVIEW_COPY;
export type CaseReviewTFn = (key: CaseReviewTKey) => string;

export const caseReviewT: CaseReviewTFn = (key) => CASE_REVIEW_COPY[key];

export const STATE_OPTIONS = ['California', 'Nevada'] as const;
export const CASE_OPTIONS = [
  'Personal injury',
  'Lemon law',
  'Workers’ compensation',
] as const;

const hasTenDigits = (value: string) => value.replace(/\D/g, '').length === 10;

export const makeCaseReviewSchema = (t: CaseReviewTFn) =>
  z.object({
    firstName: z.string().trim().min(1, t('firstRequired')),
    lastName: z.string().trim().min(1, t('lastRequired')),
    phone: z.string().refine(hasTenDigits, t('phoneInvalid')),
    email: z.union([z.literal(''), z.email(t('emailInvalid'))]),
    state: z.string().trim().min(1, t('stateRequired')),
    caseType: z.string().trim().min(1, t('caseRequired')),
    story: z.string(),
    sms: z.boolean(),
  });

export type CaseReviewValues = z.infer<ReturnType<typeof makeCaseReviewSchema>>;
