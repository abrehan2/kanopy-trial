import type { NowStep } from '@/features/practice/data/practice';

export const LEMON_NOW: NowStep[] = [
  {
    text: 'Take it back to the dealer every time, and describe the problem the same way.',
    shortText: 'Go back to the dealer every time.',
  },
  {
    text: 'Get a repair order for every visit, even when they say they found nothing.',
    shortText: 'Keep every repair order.',
  },
  {
    text: 'Keep a simple log: date, mileage, what happened.',
    shortText: 'Keep a log: date, mileage, what happened.',
  },
  {
    text: 'Don’t sell or trade it in yet, and don’t pay for repairs the warranty should cover.',
    shortText: 'Don’t sell or trade it in yet.',
    emphasize: true,
  },
];
