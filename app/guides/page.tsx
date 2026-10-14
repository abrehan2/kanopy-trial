import type { Metadata } from 'next';
import { GuidesPage } from '@/features/guides/components/GuidesPage';

export const metadata: Metadata = {
  title: 'Guides | Olive Legal Group',
  description:
    'Plain answers to the questions we hear most about personal injury, lemon law, and workers’ compensation.',
};

export default async function Page() {
  return <GuidesPage />;
}
