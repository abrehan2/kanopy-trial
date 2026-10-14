import type { GuideArticleDetail } from '@/features/guides/data/guides-types';

type GuideArticleHeadProps = { article: GuideArticleDetail };

export function GuideArticleHead({ article }: GuideArticleHeadProps) {
  return (
    <>
      <p className="font-jost text-label text-stone whitespace-pre-wrap max-compact:text-legal">
        <a href={article.crumbHref}>{article.crumbGuides}</a>
        {article.crumbSep}
        <a href={article.topicHref}>{article.crumbTopic}</a>
      </p>
      <h1 className="font-heading text-guide-title font-normal text-pine max-compact:text-form-h-sm">
        {article.title}
      </h1>
      <p className="font-jost text-nav text-stone whitespace-pre-wrap max-compact:hidden">
        {article.byline}
      </p>
      <p className="hidden font-jost text-legal text-stone whitespace-pre-wrap max-compact:block">
        {article.bylineSm}
      </p>
    </>
  );
}
