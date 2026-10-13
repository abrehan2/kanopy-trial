import type { ResultsFilter } from '@/features/results/data/results-filters';

export type ResultsCase = {
  category: Exclude<ResultsFilter, 'all'>;
  title: string;
  meta: string;
  metaSm: string;
  offerLabel: string;
  offer: string;
  offerSm?: string;
  offerStrike?: boolean;
  offerSmall?: boolean;
  hideOfferOnCompact?: boolean;
  result: string;
};

export const RESULTS_CASES: ResultsCase[] = [
  {
    category: 'personal-injury',
    title: 'Rear-ended on the 405, neck surgery a year later.',
    meta: 'Personal injury · Orange County, 2024',
    metaSm: 'Personal injury, Orange County',
    offerLabel: 'Offered',
    offer: '$15,000',
    offerStrike: true,
    result: '$1,250,000',
  },
  {
    category: 'workers-comp',
    title: 'Hurt lifting at a Henderson warehouse.',
    meta: 'Workers’ comp · Clark County, 2025',
    metaSm: 'Workers’ comp, Clark County',
    offerLabel: 'At first',
    offer: 'Denied',
    offerSm: 'denied at first',
    result: '$318,000',
  },
  {
    category: 'personal-injury',
    title: 'Hit in a crosswalk on the way to work.',
    meta: 'Personal injury · Santa Ana, 2025',
    metaSm: 'Personal injury, Santa Ana',
    offerLabel: 'Offered',
    offer: '$25,000',
    offerStrike: true,
    result: '$210,000',
  },
  {
    category: 'workers-comp',
    title: 'Fell from scaffolding, shoulder surgery.',
    meta: 'Workers’ comp · Henderson, 2025',
    metaSm: 'Workers’ comp, Henderson',
    offerLabel: 'At first',
    offer: 'Denied',
    offerSm: 'denied at first',
    result: '$146,500',
  },
  {
    category: 'workers-comp',
    title: 'Both wrists, years of assembly work.',
    meta: 'Workers’ comp · Orange County, 2024',
    metaSm: 'Workers’ comp, Orange County',
    offerLabel: 'Offered',
    offer: '$12,000',
    offerStrike: true,
    result: '$92,000',
  },
  {
    category: 'lemon-law',
    title: 'A 2022 SUV in the shop five times in eight months.',
    meta: 'Lemon law · Los Angeles County, 2025',
    metaSm: 'Lemon law, Los Angeles County',
    offerLabel: 'Dealer said',
    offer: '“No problem found”',
    offerSmall: true,
    hideOfferOnCompact: true,
    result: '$87,400',
  },
  {
    category: 'personal-injury',
    title: 'Rideshare passenger, broken wrist.',
    meta: 'Personal injury · Las Vegas, 2025',
    metaSm: 'Personal injury, Las Vegas',
    offerLabel: 'Offered',
    offer: '$9,500',
    offerStrike: true,
    result: '$64,000',
  },
  {
    category: 'lemon-law',
    title: 'Leased EV that kept failing to charge.',
    meta: 'Lemon law · Orange County, 2026',
    metaSm: 'Lemon law, Orange County',
    offerLabel: 'Repair visits',
    offer: 'Four',
    offerSmall: true,
    hideOfferOnCompact: true,
    result: '$58,250',
  },
  {
    category: 'lemon-law',
    title: 'Truck with a transmission fault that kept coming back.',
    meta: 'Lemon law · Riverside County, 2025',
    metaSm: 'Lemon law, Riverside County',
    offerLabel: 'Repair visits',
    offer: 'Five',
    offerSmall: true,
    hideOfferOnCompact: true,
    result: '$41,900',
  },
];
