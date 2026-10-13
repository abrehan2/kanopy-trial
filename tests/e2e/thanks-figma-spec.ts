export const THANKS_FIGMA = {
  pageX: 360,
  paper: 'rgb(241, 238, 231)',
  footer: 'rgb(15, 28, 29)',
  headerH: 96,
  headerX: 64,
  heroPt: 120,
  heroPb: 140,
  heroGap: 24,
  title: 64,
  lead: 22,
  wait: 30,
  item: 20,
  rowY: 18,
} as const;

export const THANKS_FIGMA_SM = {
  pageX: 20,
  headerH: 88,
  heroPt: 48,
  heroPb: 56,
  heroGap: 16,
  footerPy: 64,
  title: 36,
  lead: 18,
  wait: 24,
  item: 17,
  rowY: 14,
  ctaH: 56,
} as const;

export const THANKS_COPY = {
  title: 'Thanks, Maria. We have it.',
  lead: 'One of our attorneys will call you at (714) 555-0199. If we miss you, we’ll leave a voicemail.',
  wait: 'While you wait, find these if you can',
  firstItem: 'The police report number',
  lastItem: 'Any medical bills or visit summaries so far',
  sooner: 'Need us sooner?',
  call: 'Call (949) 555-0148',
  home: 'Back to the home page',
  leadSm: 'We’ll call you at (714) 555-0199.',
  waitSm: 'While you wait, find these',
  firstItemSm: 'Police report number',
  lastItemSm: 'Medical bills so far',
} as const;

export const THANKS_QUERY = '/thanks?name=Maria&phone=(714) 555-0199';
