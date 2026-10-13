import type { Metadata } from 'next';
import { PersonalInjuryPage } from '@/features/personal-injury/components/PersonalInjuryPage';

export const metadata: Metadata = {
  title: 'Personal Injury | Olive Legal Group',
  description:
    'Car crashes, falls, dog bites and more in California and Nevada. Free case review.',
};

export default function Page() {
  return <PersonalInjuryPage />;
}
