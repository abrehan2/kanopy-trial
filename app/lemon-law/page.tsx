import type { Metadata } from 'next';
import { LemonLawPage } from '@/features/lemon-law/components/LemonLawPage';

export const metadata: Metadata = {
  title: 'Lemon Law | Olive Legal Group',
  description:
    'A refund, a replacement or cash when your car keeps going back to the shop. Free case review.',
};

export default function Page() {
  return <LemonLawPage />;
}
