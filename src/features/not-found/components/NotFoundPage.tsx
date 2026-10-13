import { HomeFooter } from '@/features/home/components/HomeFooter';
import { NotFoundHero } from '@/features/not-found/components/NotFoundHero';
import { getNotFoundView } from '@/features/not-found/data/use-not-found';

export function NotFoundPage() {
  const view = getNotFoundView();

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <NotFoundHero view={view} />
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
