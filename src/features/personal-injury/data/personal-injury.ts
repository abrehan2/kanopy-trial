export type {
  CaseItem,
  NowStep,
  PracticeFaq as PiFaq,
  PracticeResult as PiResult,
  StateRow,
} from '@/features/practice/data/practice';

export type PiView = {
  cases: import('@/features/practice/data/practice').CaseItem[];
  results: import('@/features/practice/data/practice').PracticeResult[];
  now: import('@/features/practice/data/practice').NowStep[];
  states: import('@/features/practice/data/practice').StateRow[];
  faq: import('@/features/practice/data/practice').PracticeFaq[];
};
