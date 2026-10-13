import { HOME_FOOTER } from '@/features/home/data/home-footer';
import { WC_CASES_LEFT, WC_CASES_RIGHT } from '@/features/workers-comp/data/wc-cases';
import { WC_FAQ } from '@/features/workers-comp/data/wc-faq';
import { WC_NAV } from '@/features/workers-comp/data/wc-nav';
import { WC_NOW } from '@/features/workers-comp/data/wc-now';
import { WC_RESULTS } from '@/features/workers-comp/data/wc-results';
import { WC_STATES } from '@/features/workers-comp/data/wc-states';

export function toWcView() {
  return {
    nav: WC_NAV,
    footer: HOME_FOOTER,
    casesLeft: WC_CASES_LEFT,
    casesRight: WC_CASES_RIGHT,
    results: WC_RESULTS,
    now: WC_NOW,
    states: WC_STATES,
    faq: WC_FAQ,
  };
}
