import type { Metadata } from 'next';
import { ThanksPage } from '@/features/thanks/components/ThanksPage';

export const metadata: Metadata = {
  title: 'Thanks | Olive Legal Group',
  description: 'We have your case review. An attorney will call you back.',
};

type PageProps = { searchParams: Promise<{ name?: string; phone?: string }> };

export default async function Page({ searchParams }: PageProps) {
  const { name, phone } = await searchParams;
  return <ThanksPage name={name} phone={phone} />;
}
