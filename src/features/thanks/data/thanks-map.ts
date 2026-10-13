import { CONTACT_NAV } from '@/features/contact/data/contact-nav';
import { HOME_FOOTER } from '@/features/home/data/home-footer';
import { THANKS_PAGE, THANKS_WAIT } from '@/features/thanks/data/thanks-copy';

export function formatThanksTitle(name?: string) {
  const first = name?.trim();
  return first ? `Thanks, ${first}. We have it.` : THANKS_PAGE.titleFallback;
}

export function formatThanksLead(phone?: string) {
  const number = phone?.trim();
  return number
    ? `One of our attorneys will call you at ${number}. If we miss you, we’ll leave a voicemail.`
    : THANKS_PAGE.leadFallback;
}

export function formatThanksLeadSm(phone?: string) {
  const number = phone?.trim();
  return number ? `We’ll call you at ${number}.` : THANKS_PAGE.leadFallbackSm;
}

export function toThanksHref(name: string, phone: string) {
  const params = new URLSearchParams({ name, phone });
  return `/thanks?${params.toString()}`;
}

export function toThanksView(name?: string, phone?: string) {
  return {
    nav: CONTACT_NAV,
    footer: HOME_FOOTER,
    title: formatThanksTitle(name),
    lead: formatThanksLead(phone),
    leadSm: formatThanksLeadSm(phone),
    items: THANKS_WAIT,
  };
}
