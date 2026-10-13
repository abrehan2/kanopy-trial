import { ContactCalls } from '@/features/contact/components/ContactCalls';
import { ContactOffice } from '@/features/contact/components/ContactOffice';
import { ContactReviewForm } from '@/features/contact/components/ContactReviewForm';
import { CONTACT_PAGE } from '@/features/contact/data/contact-copy';
import type { ContactOffice as ContactOfficeModel } from '@/features/contact/data/contact-offices';
import { HomeHeader } from '@/features/home/components/HomeHeader';
import type { NavLink } from '@/features/home/data/home';

type ContactHeroProps = { nav: NavLink[]; offices: ContactOfficeModel[] };

export function ContactHero({ nav, offices }: ContactHeroProps) {
  return (
    <div id="top" className="bg-paper">
      <HomeHeader nav={nav} logoHref="/" ctaHref="#review-form" bordered />
      <div
        data-testid="contact-hero"
        className="flex min-w-0 items-start gap-letter-gap overflow-x-clip px-page-x pt-results-hero-pt pb-section-y max-compact:contents"
      >
        <section
          data-testid="contact-copy"
          className="flex min-w-px flex-1 flex-col gap-6 max-compact:gap-3 max-compact:px-page-x-sm max-compact:pt-pi-hero-pt-sm max-compact:pb-6"
        >
          <h1 className="font-heading text-results-hero font-normal text-pine max-compact:text-about-name">
            {CONTACT_PAGE.title}
          </h1>
          <p className="font-jost text-hero-lead text-stone max-compact:hidden">{CONTACT_PAGE.lead}</p>
          <p className="hidden font-jost text-hero-lead-sm text-stone max-compact:block">
            {CONTACT_PAGE.leadSm}
          </p>
          <div className="h-4 w-2.5 max-compact:h-1" aria-hidden />
          {offices.map((office) => (
            <ContactOffice key={office.state} office={office} />
          ))}
          <ContactCalls />
        </section>
        <div
          id="review-form"
          className="w-contact-form shrink-0 max-compact:w-full max-compact:px-page-x-sm max-compact:pt-2 max-compact:pb-section-sm"
        >
          <ContactReviewForm />
        </div>
      </div>
    </div>
  );
}
