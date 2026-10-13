import type { OfficeCard as OfficeCardModel } from '@/features/home/data/home';

type OfficeCardProps = {
  office: OfficeCardModel;
};

export function OfficeCard({ office }: OfficeCardProps) {
  const city = office.name.replace(' office', '');
  return (
    <div className="flex flex-col gap-2 max-compact:gap-1">
      <div className="h-0.5 w-gold-rule bg-gold max-compact:hidden" />
      <p className="font-heading text-sub font-normal whitespace-nowrap text-paper max-compact:text-sign">
        {office.state}
      </p>
      <p className="font-jost text-nav font-medium whitespace-nowrap text-paper max-compact:hidden">
        {office.name}
      </p>
      <p className="font-jost text-nav whitespace-nowrap text-paper/75 max-compact:hidden">
        {office.address}
      </p>
      <a
        href={`tel:${office.phone}`}
        className="font-jost text-nav whitespace-nowrap text-paper/75 max-compact:hidden"
      >
        {office.phone}
      </a>
      <p className="hidden font-jost text-label text-paper/80 max-compact:block">
        {city} · {office.phone}
      </p>
    </div>
  );
}
