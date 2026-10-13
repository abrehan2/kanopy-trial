import { CONTACT_NAV } from '@/features/contact/data/contact-nav';
import { HOME_FOOTER } from '@/features/home/data/home-footer';
import { NOT_FOUND_LINKS, NOT_FOUND_PAGE } from '@/features/not-found/data/not-found-copy';

export function toNotFoundView() {
  return {
    nav: CONTACT_NAV,
    footer: HOME_FOOTER,
    title: NOT_FOUND_PAGE.title,
    lead: NOT_FOUND_PAGE.lead,
    leadSm: NOT_FOUND_PAGE.leadSm,
    links: NOT_FOUND_LINKS,
  };
}
