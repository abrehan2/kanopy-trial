import { Fraunces, Jost } from 'next/font/google';

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost-face',
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces-face',
  axes: ['SOFT', 'WONK'],
});
