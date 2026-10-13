import { GuideRelatedRow } from '@/features/guides/components/GuideRelatedRow';
import { GUIDE_ARTICLE, type GUIDE_RELATED } from '@/features/guides/data/guide-article-copy';

type GuideArticleRelatedProps = { items: typeof GUIDE_RELATED };

export function GuideArticleRelated({ items }: GuideArticleRelatedProps) {
  return (
    <section data-testid="guide-related-list" className="flex w-full flex-col pt-10 max-compact:hidden">
      <h2 className="font-heading text-results-h font-normal text-pine">
        {GUIDE_ARTICLE.relatedTitle}
      </h2>
      <div className="h-3 w-2.5" aria-hidden />
      {items.map((item) => (
        <GuideRelatedRow key={item.title} categoryLabel={item.categoryLabel} title={item.title} />
      ))}
    </section>
  );
}
