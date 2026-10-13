import { CONTACT_OFFICES, CONTACT_PHOTOS } from '@/features/contact/data/contact-offices';
import { CONTACT_NAV } from '@/features/contact/data/contact-nav';
import { HOME_FOOTER } from '@/features/home/data/home-footer';

export function toContactView() {
  return {
    nav: CONTACT_NAV,
    offices: CONTACT_OFFICES,
    photos: CONTACT_PHOTOS,
    footer: HOME_FOOTER,
  };
}
