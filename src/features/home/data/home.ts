export const PHONE_CA = '(949) 555-0148';
export const PHONE_NV = '(702) 555-0163';

export const HOME_ASSETS = {
  hero: '/images/hero.jpg',
  attorneys: '/images/attorneys.jpg',
  grove: '/images/grove.jpg',
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

export type FooterCol = { title: string; lines: string[] };

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
