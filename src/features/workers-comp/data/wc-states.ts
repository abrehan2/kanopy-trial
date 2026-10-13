import type { StateRow } from '@/features/practice/data/practice';

export const WC_STATES: StateRow[] = [
  {
    label: 'Tell your employer',
    california: 'Within 30 days',
    nevada: 'Within 7 days',
  },
  {
    label: 'Claim form',
    california: 'DWC-1, from your employer',
    nevada: 'C-4, at your first doctor visit',
  },
  {
    label: 'Pay while you can’t work',
    california: 'About 2/3 of your weekly wages, up to a cap',
    nevada: '66⅔% of your monthly wages, up to a cap',
  },
  {
    label: 'Your doctor',
    california: 'From your employer’s network at first',
    nevada: 'From the insurer’s approved list',
    hideOnCompact: true,
  },
];
