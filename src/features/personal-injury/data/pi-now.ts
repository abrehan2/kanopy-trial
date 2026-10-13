import type { NowStep } from '@/features/personal-injury/data/personal-injury';

export const PI_NOW: NowStep[] = [
  {
    text: 'See a doctor within 72 hours, even if you feel fine.',
    shortText: 'See a doctor within 72 hours.',
  },
  {
    text: 'Photograph both cars, the road and your injuries.',
    shortText: 'Photograph everything.',
  },
  {
    text: 'Write down the police report number.',
    shortText: 'Get the police report number.',
  },
  {
    text: 'Keep every bill and receipt in one place.',
    hideOnCompact: true,
  },
  {
    text: 'Don’t give the other driver’s insurance a recorded statement. You don’t have to.',
    shortText: 'Don’t give their insurer a recorded statement.',
    emphasize: true,
  },
];
