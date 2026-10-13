import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuideArticlePage } from '@/features/guides/components/GuideArticlePage';
import { GUIDE_ARTICLE } from '@/features/guides/data/guide-article-copy';
import { getGuideArticleView } from '@/features/guides/data/use-guide-article';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [{ slug: GUIDE_ARTICLE.slug }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const view = getGuideArticleView(slug);
  if (!view) return { title: 'Guide | Olive Legal Group' };
  return {
    title: `${view.article.title} | Olive Legal Group`,
    description: view.lead,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const view = getGuideArticleView(slug);
  if (!view) notFound();
  return <GuideArticlePage view={view} />;
}
