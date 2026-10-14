export const GUIDES_CACHE_TAG = 'guides';
export const CONTENTFUL_SPACE_ID = 'p8ewnz88avrp';

export function getContentfulConfig() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID ?? CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.CONTENTFUL_ENVIRONMENT ?? 'master';
  if (!accessToken) return null;
  return { spaceId, accessToken, environment };
}

export function getRevalidateSecret() {
  return process.env.CONTENTFUL_REVALIDATE_SECRET ?? '';
}
