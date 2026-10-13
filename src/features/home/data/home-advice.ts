import type { AdviceColumn } from '@/features/home/data/home';

export const HOME_ADVICE: AdviceColumn[] = [
  {
    title: 'You were in a crash',
    items: [
      'See a doctor within 72 hours, even if you feel fine. Some injuries take days to show.',
      'Take photos of both cars, the road and your injuries.',
      'Write down the police report number.',
      'Keep every bill and every receipt in one place.',
    ],
    warn: 'Don’t give the other driver’s insurance a recorded statement. You don’t have to.',
    href: '#review-form',
    link: 'More about personal injury',
    shortTitle: 'Car crash',
    shortItems: [
      '•  See a doctor within 72 hours.',
      '•  Photograph everything.',
      '•  Don’t give their insurer a recorded statement.',
    ],
  },
  {
    title: 'Your car keeps breaking down',
    items: [
      'Take it back to the dealer every time, and describe the problem the same way.',
      'Get a repair order for every visit, even when they say they found nothing.',
      'Keep a simple log: date, mileage, what happened.',
      'Don’t sell or trade it in yet.',
    ],
    warn: 'Don’t pay for repairs that should be covered by the warranty.',
    href: '#review-form',
    link: 'More about lemon law',
    shortTitle: 'Car keeps breaking down',
    shortItems: [],
  },
  {
    title: 'You got hurt at work',
    items: [
      'Tell your supervisor, then send a text or email so there’s a date on record.',
      'Ask for the claim form: DWC-1 in California, C-4 in Nevada.',
      'Go to the doctor your employer sends you to first, and tell them it happened at work.',
      'Write down who saw it happen.',
    ],
    warn: 'Don’t wait. In Nevada you have 7 days to report it, in California 30.',
    href: '#review-form',
    link: 'More about workers’ comp',
    shortTitle: 'Hurt at work',
    shortItems: [],
  },
];
