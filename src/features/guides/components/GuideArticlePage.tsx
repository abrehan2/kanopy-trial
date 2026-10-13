import { GuideArticleBody } from '@/features/guides/components/GuideArticleBody';
import { GuideArticleCallout } from '@/features/guides/components/GuideArticleCallout';
import { GuideArticleHead } from '@/features/guides/components/GuideArticleHead';
import { GuideArticlePhoto } from '@/features/guides/components/GuideArticlePhoto';
import { GuideArticleRelated } from '@/features/guides/components/GuideArticleRelated';
import { HomeHeader } from '@/features/home/components/HomeHeader';
import { ClosingCta } from '@/features/home/components/ClosingCta';
import { HomeFooter } from '@/features/home/components/HomeFooter';
import type { getGuideArticleView } from '@/features/guides/data/use-guide-article';

type GuideView = NonNullable<ReturnType<typeof getGuideArticleView>>;
type GuideArticlePageProps = { view: GuideView };

export function GuideArticlePage({ view }: GuideArticlePageProps) {
  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <div id="top" className="bg-paper">
          <HomeHeader nav={view.nav} logoHref="/" ctaHref="/#review-form" bordered />
          <article
            data-testid="guide-article"
            className="flex min-w-0 flex-col gap-6 overflow-x-clip px-thanks-x pt-results-hero-pt pb-letter-gap max-compact:gap-4 max-compact:px-page-x-sm max-compact:pt-6 max-compact:pb-12"
          >
            <GuideArticleHead article={view.article} />
            <GuideArticlePhoto src={view.article.src} alt={view.article.alt} />
            <GuideArticleBody lead={view.lead} sections={view.sections} />
            <GuideArticleCallout article={view.article} />
            <p className="font-jost text-label text-stone max-compact:hidden">{view.article.disclaimer}</p>
            <p className="hidden font-jost text-micro text-stone max-compact:block">
              {view.article.disclaimerSm}
            </p>
            <GuideArticleRelated items={view.related} />
          </article>
        </div>
        <div className="max-compact:hidden">
          <ClosingCta ctaHref="/#review-form" />
        </div>
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
