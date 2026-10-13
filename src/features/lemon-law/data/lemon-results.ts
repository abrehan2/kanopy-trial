import type { PracticeResult } from '@/features/practice/data/practice';

export const LEMON_RESULTS: PracticeResult[] = [
  {
    title: 'A 2022 SUV in the shop five times in eight months.',
    place: 'Los Angeles County, 2025',
    shortTitle: 'SUV buyback, Los Angeles',
    offerLabel: 'Dealer said',
    offer: '“No problem found”',
    offerSmall: true,
    hideOfferOnCompact: true,
    resultLabel: 'Buyback',
    result: '$87,400',
  },
  {
    title: 'Truck with a transmission fault that kept coming back.',
    place: 'Riverside County, 2025',
    shortTitle: 'Truck, Riverside',
    offerLabel: 'Repair visits',
    offer: 'Five',
    offerSmall: true,
    hideOfferOnCompact: true,
    resultLabel: 'Settlement',
    result: '$41,900',
  },
  {
    title: 'Leased EV that kept failing to charge.',
    place: 'Orange County, 2026',
    shortTitle: 'Leased EV, Orange County',
    offerLabel: 'Repair visits',
    offer: 'Four',
    offerSmall: true,
    hideOfferOnCompact: true,
    resultLabel: 'Lease buyout',
    result: '$58,250',
  },
];
