export type GuideFilter = 'all' | 'personal-injury' | 'lemon-law' | 'workers-comp';

export const GUIDES_FILTERS: { id: GuideFilter; label: string; labelSm: string }[] = [
  { id: 'all', label: 'All', labelSm: 'All' },
  { id: 'personal-injury', label: 'Personal injury', labelSm: 'Injury' },
  { id: 'lemon-law', label: 'Lemon law', labelSm: 'Lemon' },
  { id: 'workers-comp', label: 'Workers’ comp', labelSm: 'Work' },
];
