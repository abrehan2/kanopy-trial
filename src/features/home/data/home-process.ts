import type { ProcessStep } from '@/features/home/data/home';

export const HOME_STEPS: ProcessStep[] = [
  {
    when: 'Today',
    title: 'You tell us what happened',
    body: 'By phone or the form. An attorney looks at it and tells you honestly whether you have a case. No cost, no obligation.',
    shortBody: 'We tell you if you have a case.',
  },
  {
    when: 'This week',
    title: 'The insurance company calls us, not you',
    body: 'We send them a letter, collect the police report and your records, and you stop answering their questions.',
    shortBody: 'The insurer calls us, not you.',
  },
  {
    when: 'While you heal',
    title: 'We build the case',
    body: 'You keep going to the doctor. We gather the bills and lost wages, and update you as it moves.',
    shortBody: 'We build the claim.',
  },
  {
    when: 'At the end',
    title: 'You decide',
    body: 'Nothing settles without your OK. If we don’t win, you owe us nothing.',
    shortBody: 'You approve it. No win, no fee.',
  },
];
