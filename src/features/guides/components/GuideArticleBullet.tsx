type GuideArticleBulletProps = { text: string };

export function GuideArticleBullet({ text }: GuideArticleBulletProps) {
  return (
    <p className="flex w-full items-start gap-3.5 font-jost text-guide-body text-ink max-compact:gap-2.5 max-compact:text-step">
      <span className="shrink-0 text-sage">—</span>
      <span className="min-w-px flex-1">{text}</span>
    </p>
  );
}
