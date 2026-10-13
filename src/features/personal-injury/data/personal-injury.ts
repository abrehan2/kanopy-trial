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
  hideOnCompact?: boolean;
};

export type PiResult = {
  title: string;
  place: string;
  shortTitle: string;
  offer: string;
  result: string;
};

export type PiFaq = { question: string; answer: string };

export type PiView = {
  cases: CaseItem[];
  results: PiResult[];
  now: NowStep[];
  states: StateRow[];
  faq: PiFaq[];
};
