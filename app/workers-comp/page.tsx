import type { Metadata } from 'next';
import { WorkersCompPage } from '@/features/workers-comp/components/WorkersCompPage';

export const metadata: Metadata = {
  title: 'Workers’ Compensation | Olive Legal Group',
  description:
    'When a work injury claim is delayed, denied or underpaid in California or Nevada. Free case review.',
};

export default function Page() {
  return <WorkersCompPage />;
}
