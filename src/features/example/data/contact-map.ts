import type { ContactDto, ContactRow } from '@/features/example/data/contact';

export function toContactRow(payload: ContactDto): ContactRow {
  return {
    id: payload.id,
    name: payload.name,
    email: payload.email,
    summary: payload.message.trim(),
  };
}

export function toContactRows(items: ContactDto[]): ContactRow[] {
  return items.map(toContactRow);
}
