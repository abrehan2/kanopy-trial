import { SITE_MEDIA } from '@/lib/site-media';

export const LEMON_PAGE = {
  crumb: 'Lemon law',
  title: 'Car keeps going back to the shop? You may be owed a refund.',
  titleSm: 'Car keeps breaking down? You may be owed a refund.',
  lead: 'A refund, a replacement or cash. In California, the manufacturer also pays your attorney fees.',
  leadSm: 'In California, the manufacturer pays your legal fees.',
  photoAlt: 'Car on a lift in a repair shop',
  casesTitle: 'Lemons we see most',
  resultsTitle: 'What the dealer said.\nWhat our clients got.',
  resultsTitleSm: 'Recent lemon law results',
  nowTitle: 'If your car keeps breaking down',
  nowLead: 'Whether or not you ever call us.',
  statesTitle: 'California and Nevada are different',
  statesTitleSm: 'California vs. Nevada',
  statesLead: 'California’s law is one of the strongest in the country. Nevada’s is narrower.',
} as const;

export const LEMON_ASSETS = {
  shop: SITE_MEDIA.lemonShop,
} as const;
