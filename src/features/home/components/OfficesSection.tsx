import { AppImage } from '@/components/media/AppImage';
import { OfficeCard } from '@/features/home/components/OfficeCard';
import { HOME_ASSETS, type OfficeCard as OfficeCardModel } from '@/features/home/data/home';

type OfficesSectionProps = {
  offices: OfficeCardModel[];
};

export function OfficesSection({ offices }: OfficesSectionProps) {
  return (
    <section
      id="offices"
      className="flex min-w-0 items-stretch overflow-x-clip bg-pine max-compact:flex-col max-compact:gap-6 max-compact:px-page-x-sm max-compact:pt-16"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-10 py-section-y pr-20 pl-page-x max-compact:gap-6 max-compact:p-0">
        <div className="flex flex-col gap-10 max-compact:gap-3">
          <h2 className="w-photo-w font-heading text-banner font-normal text-paper max-compact:hidden">
            Two offices.
            <br />
            The same two attorneys.
          </h2>
          <h2 className="hidden font-heading text-banner-sm font-normal text-paper max-compact:block">
            Irvine and Henderson.
          </h2>
          <p className="w-office-copy font-jost text-hero-lead text-paper/85 max-compact:hidden">
            Our California office is in Irvine and our Nevada office is in Henderson. Wherever your
            case started, the same two attorneys see it through, and you can always reach them.
          </p>
          <p className="hidden font-jost text-hero-lead-sm text-paper/80 max-compact:block">
            Same two attorneys in both.
          </p>
        </div>
        <div className="flex gap-12 max-compact:flex-col max-compact:gap-6">
          {offices.map((office) => (
            <OfficeCard key={office.state} office={office} />
          ))}
        </div>
      </div>
      <div className="relative w-office-img shrink-0 self-stretch max-compact:h-photo-h-sm max-compact:w-full max-compact:min-w-0">
        <AppImage
          src={HOME_ASSETS.grove}
          alt="Olive grove"
          fill
          className="object-cover"
          sizes="(max-width: 1000px) 100vw, 640px"
        />
      </div>
    </section>
  );
}
