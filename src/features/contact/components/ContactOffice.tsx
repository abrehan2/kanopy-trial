import { CONTACT_PAGE } from '@/features/contact/data/contact-copy';
import type { ContactOffice as ContactOfficeModel } from '@/features/contact/data/contact-offices';

type ContactOfficeProps = { office: ContactOfficeModel };

export function ContactOffice({ office }: ContactOfficeProps) {
  return (
    <div
      data-testid="contact-office"
      className="flex w-full flex-col gap-1.5 border-t border-pine py-6 max-compact:hidden"
    >
      <p className="font-jost text-nav font-medium text-sage">{office.state}</p>
      <p className="font-heading text-title font-normal text-pine">
        Call{' '}
        <a href={`tel:${office.phone}`} className="underline">
          {office.phone}
        </a>
      </p>
      <div className="font-jost text-body text-stone">
        <p>{office.line1}</p>
        <p>{office.line2}</p>
      </div>
      <a
        href={office.mapsHref}
        target="_blank"
        rel="noreferrer"
        className="font-jost text-nav font-medium text-pine underline"
      >
        {CONTACT_PAGE.directions}
      </a>
    </div>
  );
}
