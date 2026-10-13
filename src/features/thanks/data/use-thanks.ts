import { toThanksView } from '@/features/thanks/data/thanks-map';

export function getThanksView(name?: string, phone?: string) {
  return toThanksView(name, phone);
}
