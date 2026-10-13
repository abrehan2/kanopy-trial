import type { FooterCol as FooterColModel, FooterLine } from '@/features/home/data/home';

type FooterColProps = {
  col: FooterColModel;
};

function FooterLineView({ line }: { line: FooterLine }) {
  if (line.href) {
    return (
      <a href={line.href} className="font-jost text-nav leading-6 text-paper/85">
        {line.label}
      </a>
    );
  }

  return <p className="font-jost text-nav leading-6 text-paper/85">{line.label}</p>;
}

export function FooterCol({ col }: FooterColProps) {
  return (
    <div className="flex min-w-px flex-1 flex-col gap-3.5">
      <p className="font-jost text-label font-medium whitespace-nowrap text-gold">{col.title}</p>
      {col.lines.map((line) => (
        <FooterLineView key={line.label} line={line} />
      ))}
    </div>
  );
}
