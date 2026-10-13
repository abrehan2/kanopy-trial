import { ABOUT_ATTORNEYS } from '@/features/about/data/about-attorneys';
import { ABOUT_NAV } from '@/features/about/data/about-nav';
import { ABOUT_PROMISES } from '@/features/about/data/about-promises';
import { HOME_FOOTER } from '@/features/home/data/home-footer';
import { HOME_OFFICES } from '@/features/home/data/home-offices';

export function toAboutView() {
  return {
    nav: ABOUT_NAV,
    attorneys: ABOUT_ATTORNEYS,
    promises: ABOUT_PROMISES,
    offices: HOME_OFFICES,
    footer: HOME_FOOTER,
  };
}
