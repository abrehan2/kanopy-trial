import { HomeFooter } from '@/features/home/components/HomeFooter';
import { ThanksHero } from '@/features/thanks/components/ThanksHero';
import { getThanksView } from '@/features/thanks/data/use-thanks';

type ThanksPageProps = { name?: string; phone?: string };

export function ThanksPage({ name, phone }: ThanksPageProps) {
  const view = getThanksView(name, phone);

  return (
    <div className="page-zoom min-w-0 overflow-x-clip">
      <main className="w-full min-w-0 overflow-x-clip bg-paper">
        <ThanksHero
          nav={view.nav}
          title={view.title}
          lead={view.lead}
          leadSm={view.leadSm}
          items={view.items}
        />
        <HomeFooter footer={view.footer} />
      </main>
    </div>
  );
}
