import { ContactHero } from '@/features/contact/components/ContactHero';
import { ContactPhotos } from '@/features/contact/components/ContactPhotos';
import { getContactView } from '@/features/contact/data/use-contact';
import { HomeFooter } from '@/features/home/components/HomeFooter';

export function ContactPage() {
  const view = getContactView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <ContactHero nav={view.nav} offices={view.offices} />
        <ContactPhotos photos={view.photos} />
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
