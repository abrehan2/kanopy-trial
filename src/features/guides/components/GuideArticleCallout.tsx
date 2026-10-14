import { Button } from '@/components/ui/button';
import type { GuideArticleDetail } from '@/features/guides/data/guides-types';

type GuideArticleCalloutProps = { article: GuideArticleDetail };

export function GuideArticleCallout({ article }: GuideArticleCalloutProps) {
  return (
    <aside
      data-testid="guide-callout"
      className="flex w-full flex-col gap-3.5 rounded-sm bg-cream p-8 max-compact:gap-3 max-compact:px-0 max-compact:py-6"
    >
      <h2 className="font-heading text-results-h font-normal text-pine max-compact:hidden">
        {article.calloutTitle}
      </h2>
      <h2 className="hidden font-heading text-sign font-normal leading-7 text-pine max-compact:block max-compact:px-page-x-sm">
        {article.calloutTitleSm}
      </h2>
      <p className="font-jost text-form-lead text-ink max-compact:hidden">{article.calloutBody}</p>
      <p className="hidden font-jost text-hero-lead-sm text-ink max-compact:px-page-x-sm max-compact:block">
        {article.calloutBodySm}
      </p>
      <div className="h-1 w-2.5 max-compact:hidden" aria-hidden />
      <Button asChild variant="pine" size="cta" className="w-fit max-compact:h-cta-h-sm max-compact:w-full max-compact:px-0 max-compact:text-cta-sm">
        <a href={article.calloutHref}>{article.calloutCta}</a>
      </Button>
    </aside>
  );
}
