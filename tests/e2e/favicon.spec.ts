import { expect, test } from '@playwright/test';

test('serves the Olive mark as the app icon', async ({ page, request }) => {
  await page.goto('/');
  const href = await page.locator('link[rel="icon"]').first().getAttribute('href');
  expect(href).toBeTruthy();
  const res = await request.get(new URL(href ?? '/icon', page.url()).toString());
  expect(res.ok()).toBe(true);
  expect(res.headers()['content-type']).toMatch(/image\/(png|x-icon|svg)/);
});
