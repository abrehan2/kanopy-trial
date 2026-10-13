const PRACTICE_HREF: Record<string, string> = {
  'Personal injury': '/personal-injury',
  'Lemon law': '/lemon-law',
  'Workers’ compensation': '/workers-comp',
};

type PracticeBarProps = {
  practices: string[];
};

export function PracticeBar({ practices }: PracticeBarProps) {
  return (
    <div
      data-testid="practice-bar"
      className="absolute inset-x-0 bottom-0 z-10 grid h-bar-h grid-cols-4 items-center bg-pine px-page-x max-compact:flex max-compact:h-bar-h-sm max-compact:flex-col max-compact:items-start max-compact:justify-start max-compact:gap-bar-row max-compact:px-page-x-sm max-compact:py-bar-y-sm"
    >
      {practices.map((label) => {
        const href = PRACTICE_HREF[label];

        return href ? (
          <a
            key={label}
            href={href}
            className="font-jost text-cta whitespace-pre text-paper max-compact:text-cta-sm max-compact:leading-none"
          >
            {label}
          </a>
        ) : (
          <p
            key={label}
            className="font-jost text-cta whitespace-pre text-paper max-compact:text-cta-sm max-compact:leading-none"
          >
            {label}
          </p>
        );
      })}
    </div>
  );
}
