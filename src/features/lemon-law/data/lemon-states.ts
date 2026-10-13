import type { StateRow } from '@/features/practice/data/practice';

export const LEMON_STATES: StateRow[] = [
  {
    label: 'Which cars',
    california: 'New, used and leased, under the manufacturer’s warranty',
    nevada: 'New cars only',
    californiaSm: 'New, used and leased, under warranty',
  },
  {
    label: 'Presumed a lemon when',
    california:
      '2 repairs for a safety defect, 4 for the same problem, or 30+ days in the shop, in the first 18 months or 18,000 miles',
    nevada: '4 repairs for the same problem, or 30+ days out of service, in the first year',
    californiaSm: '2–4 repair tries, or 30+ days in the shop',
    nevadaSm: '4 repair tries, or 30+ days out of service',
  },
  {
    label: 'Who pays your lawyer',
    california: 'The manufacturer, if you win',
    nevada: 'Depends on the case',
  },
  {
    label: 'Deadline',
    california: 'Generally 4 years',
    nevada: '18 months from delivery',
    hideOnCompact: true,
  },
];
