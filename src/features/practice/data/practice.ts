import type { FaqItem } from '@/features/home/data/home';

export type CaseItem = { title: string; body: string };

export type NowStep = {
  text: string;
  shortText?: string;
  emphasize?: boolean;
  hideOnCompact?: boolean;
};

export type StateRow = {
  label: string;
  california: string;
  nevada: string;
  californiaSm?: string;
  nevadaSm?: string;
  hideOnCompact?: boolean;
};

export type PracticeResult = {
  title: string;
  place: string;
  shortTitle: string;
  offerLabel: string;
  offer: string;
  offerSm?: string;
  offerStrike?: boolean;
  offerSmall?: boolean;
  hideOfferOnCompact?: boolean;
  resultLabel: string;
  result: string;
};

export type PracticeFaq = FaqItem;
