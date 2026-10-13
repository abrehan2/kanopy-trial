import { HOME_FOOTER } from '@/features/home/data/home-footer';
import { LEMON_CASES_LEFT, LEMON_CASES_RIGHT } from '@/features/lemon-law/data/lemon-cases';
import { LEMON_FAQ } from '@/features/lemon-law/data/lemon-faq';
import { LEMON_NAV } from '@/features/lemon-law/data/lemon-nav';
import { LEMON_NOW } from '@/features/lemon-law/data/lemon-now';
import { LEMON_RESULTS } from '@/features/lemon-law/data/lemon-results';
import { LEMON_STATES } from '@/features/lemon-law/data/lemon-states';

export function toLemonView() {
  return {
    nav: LEMON_NAV,
    footer: HOME_FOOTER,
    casesLeft: LEMON_CASES_LEFT,
    casesRight: LEMON_CASES_RIGHT,
    results: LEMON_RESULTS,
    now: LEMON_NOW,
    states: LEMON_STATES,
    faq: LEMON_FAQ,
  };
}
