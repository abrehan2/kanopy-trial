import type { Metadata } from 'next';
import { ContactPage } from '@/features/contact/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | Olive Legal Group',
  description:
    'Talk to Olive Legal Group. Fill out the form or call the Irvine or Henderson office.',
};

export default function Page() {
  return <ContactPage />;
}
