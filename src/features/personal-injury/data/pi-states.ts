import type { StateRow } from '@/features/personal-injury/data/personal-injury';

export const PI_STATES: StateRow[] = [
  {
    label: 'Deadline to file',
    california: '2 years from the injury',
    nevada: '2 years from the injury',
  },
  {
    label: 'If you were partly at fault',
    california: 'You can still recover, minus your share',
    nevada: 'You can recover if 50% or less at fault',
  },
  {
    label: 'Property damage deadline',
    california: '3 years',
    nevada: '3 years',
  },
  {
    label: 'Minimum insurance the other driver must carry',
    california: '$30,000 per person',
    nevada: '$25,000 per person',
    hideOnCompact: true,
  },
];
