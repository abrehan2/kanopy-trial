import { SITE_MEDIA } from '@/lib/site-media';

export const PHONE_CA = '(949) 555-0148';
export const PHONE_NV = '(702) 555-0163';

export const FIGMA_REVIEWS_HREF =
  'https://www.figma.com/design/8SP7Mfi9CUG72lOZlODb3x/RK-Legal-%E2%80%94-Competitor-Clones?node-id=249-2&m=dev&focus-id=259-4537';

export const HOME_ASSETS = {
  hero: SITE_MEDIA.hero,
  attorneys: SITE_MEDIA.attorneys,
  grove: SITE_MEDIA.grove,
} as const;

export type NavLink = { href: string; label: string };

export type ResultRow = {
  title: string;
  place: string;
  offerLabel: string;
  offer: string;
  offerStrike?: boolean;
  offerSmall?: boolean;
  resultLabel: string;
  result: string;
  shortTitle: string;
  shortOffer: string;
};

export type AdviceColumn = {
  title: string;
  items: string[];
  warn: string;
  href: string;
  link: string;
  shortTitle: string;
  shortItems: string[];
};

export type ProcessStep = { when: string; title: string; body: string; shortBody: string };

export type OfficeCard = {
  state: string;
  name: string;
  address: string;
  phone: string;
};

export type FaqItem = { question: string; answer: string };

export type FooterLine = { label: string; href?: string };

export type FooterCol = { title: string; lines: FooterLine[] };

export type HomeView = {
  nav: NavLink[];
  practices: string[];
  results: ResultRow[];
  advice: AdviceColumn[];
  steps: ProcessStep[];
  offices: OfficeCard[];
  faq: FaqItem[];
  footer: FooterCol[];
};
