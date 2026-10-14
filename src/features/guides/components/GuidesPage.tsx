import { GuidesFeed } from '@/features/guides/components/GuidesFeed';
import { getGuidesView } from '@/features/guides/data/use-guides';
import { ClosingCta } from '@/features/home/components/ClosingCta';
import { HomeFooter } from '@/features/home/components/HomeFooter';

export async function GuidesPage() {
  const view = await getGuidesView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <GuidesFeed nav={view.nav} articles={view.articles} />
        <ClosingCta ctaHref="/#review-form" />
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
