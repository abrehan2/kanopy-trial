import type { Metadata } from 'next';
import { AboutPage } from '@/features/about/components/AboutPage';

export const metadata: Metadata = {
  title: 'About | Olive Legal Group',
  description:
    'A small firm on purpose. Two attorneys, two offices, and a small team in California and Nevada.',
};

export default function Page() {
  return <AboutPage />;
}
