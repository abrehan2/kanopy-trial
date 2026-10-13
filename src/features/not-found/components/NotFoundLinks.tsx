import { NotFoundLink } from '@/features/not-found/components/NotFoundLink';
import type { NOT_FOUND_LINKS } from '@/features/not-found/data/not-found-copy';

type NotFoundLinksProps = { links: typeof NOT_FOUND_LINKS };

export function NotFoundLinks({ links }: NotFoundLinksProps) {
  return (
    <nav
      data-testid="not-found-links"
      className="flex flex-wrap items-start gap-8 max-compact:w-full max-compact:flex-col max-compact:gap-4"
    >
      {links.map((link) => (
        <NotFoundLink key={link.label} label={link.label} href={link.href} />
      ))}
    </nav>
  );
}
