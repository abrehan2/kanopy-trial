type AttorneySignProps = {
  name: string;
  place: string;
};

export function AttorneySign({ name, place }: AttorneySignProps) {
  const short = name.split(' ')[0] ?? name;
  return (
    <div className="flex flex-col gap-1 max-compact:gap-0">
      <p className="font-heading text-sign text-pine max-compact:hidden">{name}</p>
      <p className="hidden font-heading text-sub-sm text-pine max-compact:block">{short}</p>
      <p className="font-jost text-label text-stone max-compact:hidden">{place}</p>
      <p className="hidden font-jost text-hint text-stone max-compact:block">
        {place.split(' · ')[0]}
      </p>
    </div>
  );
}
