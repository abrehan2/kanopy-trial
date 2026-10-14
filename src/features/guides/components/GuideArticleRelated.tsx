import { GuideRelatedRow } from '@/features/guides/components/GuideRelatedRow';
import { GUIDE_ARTICLE } from '@/features/guides/data/guide-article-copy';

type RelatedItem = { categoryLabel: string; title: string; href: string };
type GuideArticleRelatedProps = { items: readonly RelatedItem[] };

export function GuideArticleRelated({ items }: GuideArticleRelatedProps) {
  return (
    <section data-testid="guide-related-list" className="flex w-full flex-col pt-10 max-compact:hidden">
      <h2 className="font-heading text-results-h font-normal text-pine">
        {GUIDE_ARTICLE.relatedTitle}
      </h2>
      <div className="h-3 w-2.5" aria-hidden />
      {items.map((item) => (
        <GuideRelatedRow
          key={item.href}
          categoryLabel={item.categoryLabel}
          title={item.title}
          href={item.href}
        />
      ))}
    </section>
  );
}
