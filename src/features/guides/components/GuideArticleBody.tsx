import { Fragment } from 'react';
import { GuideArticleSection } from '@/features/guides/components/GuideArticleSection';
import type { GUIDE_ARTICLE_SECTIONS } from '@/features/guides/data/guide-article-body';

type GuideArticleBodyProps = {
  lead: string;
  sections: typeof GUIDE_ARTICLE_SECTIONS;
};

export function GuideArticleBody({ lead, sections }: GuideArticleBodyProps) {
  return (
    <>
      <p className="font-jost text-guide-body text-ink max-compact:text-step">{lead}</p>
      {sections.map((section, index) => (
        <Fragment key={section.title}>
          <div className="h-2 w-2.5 max-compact:h-1" aria-hidden />
          <GuideArticleSection section={section} />
          {index === sections.length - 1 ? (
            <div className="h-4 w-2.5 max-compact:h-2" aria-hidden />
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
