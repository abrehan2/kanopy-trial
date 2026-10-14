import { GuidesRow } from '@/features/guides/components/GuidesRow';
import type { GuideArticle } from '@/features/guides/data/guides-types';

type GuidesListProps = { articles: GuideArticle[]; hideCompactTail?: boolean };

export function GuidesList({ articles, hideCompactTail = false }: GuidesListProps) {
  return (
    <section
      data-testid="guides-list"
      className="flex min-w-0 flex-col overflow-x-clip px-page-x pb-section-y max-compact:px-page-x-sm max-compact:pb-section-sm"
    >
      {articles.map((article) => (
        <GuidesRow
          key={article.slug}
          article={article}
          hiddenOnCompact={hideCompactTail && article.hideOnCompact}
        />
      ))}
    </section>
  );
}
