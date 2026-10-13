type NotFoundLinkProps = { label: string; href: string };

export function NotFoundLink({ label, href }: NotFoundLinkProps) {
  return (
    <a
      href={href}
      className="font-jost text-step font-medium text-pine underline max-compact:w-full max-compact:border-t max-compact:border-faq-line max-compact:py-not-found-row-y max-compact:no-underline"
    >
      {label}
    </a>
  );
}
