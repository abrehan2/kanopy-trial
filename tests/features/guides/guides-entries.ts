import type { GuideEntry } from '@/features/guides/data/guides-types';

const AUTHOR = 'Ludmila Kucerkova Romero';

export const GUIDE_FIXTURE: GuideEntry[] = [
  {
    slug: 'other-driver-insurance',
    title: 'Should you talk to the other driver’s insurance company?',
    deck: 'They’ll call within a day or two.',
    category: 'personal-injury',
    publishedAt: '2026-10-06',
    readMinutes: 4,
    author: AUTHOR,
    featured: false,
    src: 'https://images.ctfassets.net/x/pi.jpg',
    alt: 'A quiet street',
    lead: 'The other driver’s insurer will call quickly.',
    sections: [
      { title: 'What you can say', body: 'Give your name.' },
      { title: 'When to call a lawyer first', bullets: ['Anyone went to the hospital.'] },
    ],
  },
  {
    slug: 'nevada-seven-days',
    title: 'Nevada gives you 7 days to report a work injury',
    deck: 'Miss it and your claim can be denied.',
    category: 'workers-comp',
    publishedAt: '2026-09-29',
    readMinutes: 3,
    author: AUTHOR,
    featured: false,
    src: 'https://images.ctfassets.net/x/wc.jpg',
    alt: 'A warehouse',
    lead: 'Nevada wants written notice within seven days.',
    sections: [{ title: 'What counts as notice', body: 'Name the date.' }],
  },
  {
    slug: 'used-cars-lemon-law',
    title: 'Does California’s lemon law cover used cars?',
    deck: 'Often, yes, if the car is still under warranty.',
    category: 'lemon-law',
    publishedAt: '2026-09-15',
    readMinutes: 6,
    author: AUTHOR,
    featured: false,
    src: 'https://images.ctfassets.net/x/used.jpg',
    alt: 'A dealership',
    lead: 'A used car can still be a lemon.',
    sections: [{ title: 'Warranty is the line', body: 'Keep the booklet.' }],
  },
];
