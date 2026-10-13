import { HOME_ADVICE } from '@/features/home/data/home-advice';
import { HOME_FAQ } from '@/features/home/data/home-faq';
import { HOME_FOOTER } from '@/features/home/data/home-footer';
import { HOME_NAV, HOME_PRACTICES } from '@/features/home/data/home-nav';
import { HOME_OFFICES } from '@/features/home/data/home-offices';
import { HOME_STEPS } from '@/features/home/data/home-process';
import { HOME_RESULTS } from '@/features/home/data/home-results';
import type { HomeView } from '@/features/home/data/home';

export function toHomeView(): HomeView {
  return {
    nav: HOME_NAV,
    practices: [...HOME_PRACTICES],
    results: HOME_RESULTS,
    advice: HOME_ADVICE,
    steps: HOME_STEPS,
    offices: HOME_OFFICES,
    faq: HOME_FAQ,
    footer: HOME_FOOTER,
  };
}
