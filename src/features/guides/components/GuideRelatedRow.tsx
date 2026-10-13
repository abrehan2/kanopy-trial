type GuideRelatedRowProps = { categoryLabel: string; title: string };

export function GuideRelatedRow({ categoryLabel, title }: GuideRelatedRowProps) {
  return (
    <div
      data-testid="guide-related"
      className="flex w-full flex-col gap-1 border-t border-faq-line py-results-row-y-sm"
    >
      <p className="font-jost text-legal font-medium text-sage">{categoryLabel}</p>
      <p className="font-heading text-sub-sm font-normal text-pine">{title}</p>
    </div>
  );
}
