import type { GuideFilter } from '@/features/guides/data/guides-filters';

export type GuideArticle = {
  category: Exclude<GuideFilter, 'all'>;
  categoryLabel: string;
  title: string;
  deck: string;
  date: string;
  read: string;
  hideOnCompact?: boolean;
};

export const GUIDES_ARTICLES: GuideArticle[] = [
  {
    category: 'personal-injury',
    categoryLabel: 'Personal injury',
    title: 'Should you talk to the other driver’s insurance company?',
    deck: 'They’ll call within a day or two. Here’s what to say, and what not to.',
    date: 'October 6, 2026',
    read: '4 min read',
  },
  {
    category: 'workers-comp',
    categoryLabel: 'Workers’ comp',
    title: 'Nevada gives you 7 days to report a work injury',
    deck: 'Miss it and your claim can be denied. What counts as reporting it.',
    date: 'September 29, 2026',
    read: '3 min read',
  },
  {
    category: 'personal-injury',
    categoryLabel: 'Personal injury',
    title: 'How long do you have to file an injury claim in California?',
    deck: 'Usually two years. The exceptions that make it much shorter.',
    date: 'September 22, 2026',
    read: '4 min read',
  },
  {
    category: 'lemon-law',
    categoryLabel: 'Lemon law',
    title: 'Does California’s lemon law cover used cars?',
    deck: 'Often, yes, if the car is still under the manufacturer’s warranty.',
    date: 'September 15, 2026',
    read: '6 min read',
  },
  {
    category: 'personal-injury',
    categoryLabel: 'Personal injury',
    title: 'Hurt in an Uber or Lyft: whose insurance pays?',
    deck: 'It depends on what the app said the driver was doing at the time.',
    date: 'September 8, 2026',
    read: '5 min read',
  },
  {
    category: 'workers-comp',
    categoryLabel: 'Workers’ comp',
    title: 'Your workers’ comp claim was denied. Now what?',
    deck: 'A denial isn’t the end. The deadlines to push back, by state.',
    date: 'September 1, 2026',
    read: '5 min read',
    hideOnCompact: true,
  },
];
