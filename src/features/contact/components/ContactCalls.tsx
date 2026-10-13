import { Button } from '@/components/ui/button';
import { CONTACT_PAGE } from '@/features/contact/data/contact-copy';
import { PHONE_CA, PHONE_NV } from '@/features/home/data/home';

export function ContactCalls() {
  return (
    <div className="hidden w-full flex-col gap-3 max-compact:flex" data-testid="contact-calls">
      <Button asChild variant="pine-line" size="wide">
        <a href={`tel:${PHONE_CA}`}>
          {CONTACT_PAGE.callCa} {PHONE_CA}
        </a>
      </Button>
      <Button asChild variant="pine-line" size="wide">
        <a href={`tel:${PHONE_NV}`}>
          {CONTACT_PAGE.callNv} {PHONE_NV}
        </a>
      </Button>
    </div>
  );
}
