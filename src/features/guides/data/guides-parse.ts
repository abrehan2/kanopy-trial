import type { GuideCategory, GuideEntry, GuideSection } from '@/features/guides/data/guides-types';

type LocaleValue<T> = T | { [locale: string]: T };
type AssetFile = { url?: string };
type AssetFields = { file?: LocaleValue<AssetFile>; title?: LocaleValue<string> };
type CfAsset = { sys?: { id?: string }; fields?: AssetFields };
type CfEntry = {
  fields?: {
    slug?: LocaleValue<string>;
    title?: LocaleValue<string>;
    deck?: LocaleValue<string>;
    category?: LocaleValue<string>;
    publishedAt?: LocaleValue<string>;
    readMinutes?: LocaleValue<number>;
    author?: LocaleValue<string>;
    featured?: LocaleValue<boolean>;
    hideOnCompact?: LocaleValue<boolean>;
    heroImage?: LocaleValue<{ sys?: { id?: string } }>;
    heroAlt?: LocaleValue<string>;
    lead?: LocaleValue<string>;
    sections?: LocaleValue<GuideSection[]>;
  };
};

function unwrap<T>(value: LocaleValue<T> | undefined): T | undefined {
  if (value == null || typeof value !== 'object') return value as T | undefined;
  if (Array.isArray(value)) return value as T;
  if ('en-US' in value) return (value as { 'en-US': T })['en-US'];
  return value as T;
}

function toSections(value: unknown): GuideSection[] {
  return Array.isArray(value) ? value : [];
}

function assetUrl(id: string | undefined, includes: CfAsset[]) {
  const asset = includes.find((item) => item.sys?.id === id);
  const file = unwrap(asset?.fields?.file);
  if (!file?.url) return '';
  return file.url.startsWith('//') ? `https:${file.url}` : file.url;
}

function isCategory(value: string | undefined): value is GuideCategory {
  return value === 'personal-injury' || value === 'lemon-law' || value === 'workers-comp';
}

export function parseGuideEntry(entry: CfEntry, includes: CfAsset[]): GuideEntry | null {
  const fields = entry.fields ?? {};
  const slug = unwrap(fields.slug);
  const title = unwrap(fields.title);
  const category = unwrap(fields.category);
  if (!slug || !title || !isCategory(category)) return null;
  const imageId = unwrap(fields.heroImage)?.sys?.id;
  return {
    slug,
    title,
    deck: unwrap(fields.deck) ?? '',
    category,
    publishedAt: unwrap(fields.publishedAt) ?? new Date().toISOString(),
    readMinutes: unwrap(fields.readMinutes) ?? 4,
    author: unwrap(fields.author) ?? 'Ludmila Kucerkova Romero',
    featured: Boolean(unwrap(fields.featured)),
    hideOnCompact: Boolean(unwrap(fields.hideOnCompact)),
    src: assetUrl(imageId, includes),
    alt: unwrap(fields.heroAlt) ?? title,
    lead: unwrap(fields.lead) ?? unwrap(fields.deck) ?? '',
    sections: toSections(unwrap(fields.sections)),
  };
}
