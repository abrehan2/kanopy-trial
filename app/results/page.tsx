import type { Metadata } from 'next';
import { ResultsPage } from '@/features/results/components/ResultsPage';

export const metadata: Metadata = {
  title: 'Results | Olive Legal Group',
  description:
    'What the other side offered and what our clients got in personal injury, lemon law, and workers’ compensation cases.',
};

export default function Page() {
  return <ResultsPage />;
}
