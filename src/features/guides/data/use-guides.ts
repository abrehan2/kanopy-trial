import { loadGuideEntries } from '@/features/guides/data/guides-api';
import { toGuidesView } from '@/features/guides/data/guides-map';

export async function getGuidesView() {
  return toGuidesView(await loadGuideEntries());
}
