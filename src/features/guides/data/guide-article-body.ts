export const GUIDE_ARTICLE_LEAD =
  'You bring your car in for the third time. The service advisor hands you a repair order that says “no problem found” or “could not duplicate.” It feels like a dead end. It isn’t.';

export const GUIDE_ARTICLE_SECTIONS = [
  {
    title: 'Why that repair order still matters',
    body: 'Under California’s lemon law, what matters is how many chances the dealer had to fix the problem. A visit where they found nothing is still a visit. Keep that repair order with the others.',
  },
  {
    title: 'What to do on the next visit',
    bullets: [
      'Describe the problem the same way every time, in writing if you can.',
      'Bring a video of it happening, with the date showing.',
      'Ask the advisor to write your exact words on the repair order.',
      'Get a copy before you leave.',
    ],
  },
  {
    title: 'When to talk to a lawyer',
    body: 'If the same problem has sent the car back two or more times, or it has spent 30 days or more in the shop, it’s worth a call. In California, if you win, the manufacturer pays your attorney fees.',
  },
] as const;
