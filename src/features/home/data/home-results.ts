import type { ResultRow } from '@/features/home/data/home';

export const HOME_RESULTS: ResultRow[] = [
  {
    title: 'Rear-ended on the 405, neck surgery a year later.',
    place: 'Orange County, 2024',
    offerLabel: 'Offered',
    offer: '$15,000',
    offerStrike: true,
    resultLabel: 'Result',
    result: '$1,250,000',
    shortTitle: 'Rear-end crash, Orange County',
    shortOffer: '$15,000',
  },
  {
    title: 'Hurt lifting at a Henderson warehouse.',
    place: 'Clark County, 2025',
    offerLabel: 'At first',
    offer: 'Denied',
    resultLabel: 'Result',
    result: '$318,000',
    shortTitle: 'Warehouse injury, Henderson',
    shortOffer: 'denied at first',
  },
  {
    title: 'A 2022 SUV in the shop five times in eight months.',
    place: 'Los Angeles County, 2025',
    offerLabel: 'Offered',
    offer: '“No problem found”',
    offerSmall: true,
    resultLabel: 'Buyback',
    result: '$87,400',
    shortTitle: 'Lemon SUV, Los Angeles',
    shortOffer: 'denied at first',
  },
];
