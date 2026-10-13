import { PHONE_CA } from '@/features/home/data/home';

export const THANKS_PAGE = {
  titleFallback: 'Thanks. We have it.',
  leadFallback: 'One of our attorneys will call you. If we miss you, we’ll leave a voicemail.',
  leadFallbackSm: 'We’ll call you.',
  waitTitle: 'While you wait, find these if you can',
  waitTitleSm: 'While you wait, find these',
  sooner: 'Need us sooner?',
  soonerCall: `Call ${PHONE_CA}`,
  home: 'Back to the home page',
  homeHref: '/',
} as const;

export type ThanksWait = { label: string; labelSm: string };

export const THANKS_WAIT: ThanksWait[] = [
  { label: 'The police report number', labelSm: 'Police report number' },
  { label: 'Photos of the cars, the scene and your injuries', labelSm: 'Photos of the scene' },
  { label: 'The other driver’s name and insurance', labelSm: 'Other driver’s insurance' },
  { label: 'Any medical bills or visit summaries so far', labelSm: 'Medical bills so far' },
];
