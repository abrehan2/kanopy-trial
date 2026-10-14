import { Fragment } from 'react';
import { GuideArticleSection } from '@/features/guides/components/GuideArticleSection';
import type { GuideSection } from '@/features/guides/data/guides-types';

type GuideArticleBodyProps = {
  lead: string;
  sections: readonly GuideSection[];
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
