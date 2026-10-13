import type { ContactRow } from '@/features/example/data/contact';

type ContactListProps = {
  rows: ContactRow[];
  loading: boolean;
  error: boolean;
};

export function ContactList({ rows, loading, error }: ContactListProps) {
  if (loading && rows.length === 0) {
    return <p className="font-jost text-sm text-stone">Loading…</p>;
  }
  if (error) {
    return <p className="font-jost text-sm text-destructive">Could not load inquiries</p>;
  }
  if (rows.length === 0) {
    return <p className="font-jost text-sm text-stone">—</p>;
  }

  return (
    <ul className="flex flex-col gap-field-gap">
      {rows.map((row) => (
        <li key={row.id} className="font-jost text-sm text-ink">
          <span className="font-medium">{row.name}</span>
          <span className="text-stone"> {row.email}</span>
          <p className="text-stone">{row.summary}</p>
        </li>
      ))}
    </ul>
  );
}
