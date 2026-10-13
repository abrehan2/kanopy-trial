'use client';

import { ContactForm } from '@/features/example/components/ContactForm';
import { ContactList } from '@/features/example/components/ContactList';
import { useContacts } from '@/features/example/data/use-contact';
import { useContactSubmit } from '@/features/example/data/use-contact-submit';

export function ContactPage() {
  const { rows, loading, error, refetch } = useContacts();
  const { submit, saving } = useContactSubmit(refetch);

  return (
    <main className="mx-auto flex min-h-screen max-w-form-copy flex-col gap-form-gap px-page-x py-section-y">
      <h1 className="font-heading text-title text-pine">Inquiry</h1>
      <ContactForm onSubmit={submit} saving={saving} />
      <ContactList rows={rows} loading={loading} error={error} />
    </main>
  );
}
