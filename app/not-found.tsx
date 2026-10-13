import type { Metadata } from 'next';
import { NotFoundPage } from '@/features/not-found/components/NotFoundPage';

export const metadata: Metadata = {
  title: 'Page not found | Olive Legal Group',
  description: 'We can’t find that page. These links will get you where you need to go.',
};

export default function NotFound() {
  return <NotFoundPage />;
}
