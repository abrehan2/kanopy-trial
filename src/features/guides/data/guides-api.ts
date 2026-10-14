import { getContentfulConfig, GUIDES_CACHE_TAG } from '@/features/guides/data/guides-env';
import { parseGuideEntry } from '@/features/guides/data/guides-parse';
import type { GuideEntry } from '@/features/guides/data/guides-types';

type CfCollection = {
  items?: unknown[];
  includes?: { Asset?: unknown[] };
};

async function fetchGuideCollection(): Promise<GuideEntry[]> {
  const config = getContentfulConfig();
  if (!config) return [];
  const query = new URLSearchParams({
    content_type: 'guide',
    include: '2',
    locale: 'en-US',
    order: '-fields.publishedAt',
    limit: '40',
  });
  const url = `https://cdn.contentful.com/spaces/${config.spaceId}/environments/${config.environment}/entries?${query}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${config.accessToken}` },
    cache: 'force-cache',
    next: { tags: [GUIDES_CACHE_TAG] },
  });
  if (!response.ok) return [];
  const payload = (await response.json()) as CfCollection;
  const assets = (payload.includes?.Asset ?? []) as Parameters<typeof parseGuideEntry>[1];
  return (payload.items ?? [])
    .map((item) => parseGuideEntry(item as Parameters<typeof parseGuideEntry>[0], assets))
    .filter((entry): entry is GuideEntry => entry !== null);
}

export async function loadGuideEntries() {
  try {
    return await fetchGuideCollection();
  } catch {
    return [];
  }
}
