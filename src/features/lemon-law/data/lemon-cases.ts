import type { CaseItem } from '@/features/practice/data/practice';

export const LEMON_CASES_LEFT: CaseItem[] = [
  {
    title: 'Engine and transmission',
    body: 'Stalling, shuddering, hard shifts.',
  },
  {
    title: 'Electrical and software',
    body: 'Dead batteries, black screens, failing cameras.',
  },
  {
    title: 'Safety defects',
    body: 'Brakes, steering, airbags. Two repair tries can be enough.',
  },
];

export const LEMON_CASES_RIGHT: CaseItem[] = [
  {
    title: 'Used and certified pre-owned',
    body: 'Covered while the warranty is still active.',
  },
  {
    title: 'Leased cars',
    body: 'Leases count too.',
  },
  {
    title: 'EVs and trucks',
    body: 'Charging faults, battery faults, work trucks.',
  },
];
