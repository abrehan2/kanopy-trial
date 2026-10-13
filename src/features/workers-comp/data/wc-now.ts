import type { NowStep } from '@/features/practice/data/practice';

export const WC_NOW: NowStep[] = [
  {
    text: 'Tell your supervisor, then send a text or email so there’s a date on record.',
    shortText: 'Tell your supervisor, then text or email it.',
  },
  {
    text: 'Ask for the claim form: DWC-1 in California, C-4 in Nevada.',
    shortText: 'Ask for the claim form.',
  },
  {
    text: 'Tell the doctor it happened at work.',
  },
  {
    text: 'Write down who saw it.',
    hideOnCompact: true,
  },
  {
    text: 'Don’t wait. Nevada gives you 7 days to report it, California 30.',
    shortText: 'Don’t wait. Nevada: 7 days. California: 30.',
    emphasize: true,
  },
];
