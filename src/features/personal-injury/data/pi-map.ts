import { HOME_FOOTER } from '@/features/home/data/home-footer';
import { PI_CASES_LEFT, PI_CASES_RIGHT } from '@/features/personal-injury/data/pi-cases';
import { PI_FAQ } from '@/features/personal-injury/data/pi-faq';
import { PI_NAV } from '@/features/personal-injury/data/pi-nav';
import { PI_NOW } from '@/features/personal-injury/data/pi-now';
import { PI_RESULTS } from '@/features/personal-injury/data/pi-results';
import { PI_STATES } from '@/features/personal-injury/data/pi-states';
import type { PiView } from '@/features/personal-injury/data/personal-injury';

export function toPiView(): PiView & {
  nav: typeof PI_NAV;
  footer: typeof HOME_FOOTER;
  casesLeft: typeof PI_CASES_LEFT;
  casesRight: typeof PI_CASES_RIGHT;
} {
  return {
    nav: PI_NAV,
    footer: HOME_FOOTER,
    cases: [...PI_CASES_LEFT, ...PI_CASES_RIGHT],
    casesLeft: PI_CASES_LEFT,
    casesRight: PI_CASES_RIGHT,
    results: PI_RESULTS,
    now: PI_NOW,
    states: PI_STATES,
    faq: PI_FAQ,
  };
}
