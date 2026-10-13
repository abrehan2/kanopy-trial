import { cn } from '@/lib/utils';
import type { GuideArticle } from '@/features/guides/data/guides-articles';

type GuidesRowProps = { article: GuideArticle; hiddenOnCompact?: boolean };

export function GuidesRow({ article, hiddenOnCompact = false }: GuidesRowProps) {
  return (
    <article
      data-testid="guides-row"
      className={cn(
        'flex w-full items-start gap-12 border-t border-faq-line py-8',
        'max-compact:flex-col max-compact:gap-1.5 max-compact:py-results-row-y-sm',
        hiddenOnCompact && 'max-compact:hidden',
      )}
    >
      <p className="w-step-when shrink-0 font-jost text-nav font-medium text-sage max-compact:w-full max-compact:text-legal">
        {article.categoryLabel}
      </p>
      <div className="flex min-w-px flex-1 flex-col gap-2 max-compact:gap-0">
        <h3 className="font-heading text-results-h font-normal text-pine max-compact:text-sub-sm">
          {article.title}
        </h3>
        <p className="font-jost text-step text-stone max-compact:hidden">{article.deck}</p>
      </div>
      <div className="w-guide-meta shrink-0 text-right font-jost text-label text-stone max-compact:hidden">
        <p>{article.date}</p>
        <p>{article.read}</p>
      </div>
      <p className="hidden font-jost text-legal text-stone max-compact:block">{article.read}</p>
    </article>
  );
}
