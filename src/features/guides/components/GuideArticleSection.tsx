import { GuideArticleBullet } from '@/features/guides/components/GuideArticleBullet';
import type { GuideSection } from '@/features/guides/data/guides-types';

type GuideArticleSectionProps = { section: GuideSection };

export function GuideArticleSection({ section }: GuideArticleSectionProps) {
  return (
    <>
      <h2 className="font-heading text-form-h-sm font-normal text-pine max-compact:text-sign max-compact:leading-7">
        {section.title}
      </h2>
      {'body' in section ? (
        <p className="font-jost text-guide-body text-ink max-compact:text-step">{section.body}</p>
      ) : null}
      {'bullets' in section
        ? section.bullets.map((item) => <GuideArticleBullet key={item} text={item} />)
        : null}
    </>
  );
}
