import { revalidatePath, revalidateTag } from 'next/cache';
import { getRevalidateSecret, GUIDES_CACHE_TAG } from '@/features/guides/data/guides-env';
import { toGuideHref } from '@/features/guides/data/guides-format';

export function isGuidesRevalidateSecret(secret: string | null) {
  const expected = getRevalidateSecret();
  return Boolean(expected) && secret === expected;
}

export function revalidateGuides(slug?: string) {
  revalidateTag(GUIDES_CACHE_TAG, { expire: 0 });
  revalidatePath('/guides');
  revalidatePath('/guides/[slug]', 'page');
  if (slug) revalidatePath(toGuideHref(slug));
}

export function readGuideSlug(body: unknown) {
  if (!body || typeof body !== 'object') return undefined;
  const fields = (body as { fields?: { slug?: unknown } }).fields;
  const slug = fields?.slug;
  if (typeof slug === 'string') return slug;
  if (slug && typeof slug === 'object' && 'en-US' in slug) {
    const value = (slug as { 'en-US': unknown })['en-US'];
    return typeof value === 'string' ? value : undefined;
  }
  return undefined;
}
