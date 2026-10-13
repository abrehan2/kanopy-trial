import { expect, test } from '@playwright/test';

test.describe('Brand logo assets', () => {
  test('header logo is a transparent SVG on paper', async ({ page }) => {
    await page.goto('/personal-injury');
    const logo = page.locator('header').getByTestId('logo-horizontal');
    await expect(page.getByTestId('logo-spinner')).toHaveCount(0);
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('src', /logo-horizontal\.svg/);
    const box = await logo.boundingBox();
    expect(box?.width).toBeGreaterThan(100);
    expect(box?.height).toBeGreaterThan(40);

    const plate = await logo.evaluate((node) => {
      const canvas = document.createElement('canvas');
      const img = node as HTMLImageElement;
      canvas.width = img.naturalWidth || 136;
      canvas.height = img.naturalHeight || 68;
      const ctx = canvas.getContext('2d');
      if (!ctx) return { beigeCorners: true };
      ctx.drawImage(img, 0, 0);
      const corners = [
        ctx.getImageData(0, 0, 1, 1).data,
        ctx.getImageData(canvas.width - 1, 0, 1, 1).data,
        ctx.getImageData(0, canvas.height - 1, 1, 1).data,
      ];
      const beige = corners.filter(([r, g, b, a]) => a > 200 && r > 200 && g > 190 && b > 170);
      return { beigeCorners: beige.length > 0, alpha0: corners[0]?.[3] === 0 };
    });
    expect(plate.beigeCorners).toBe(false);
  });

  test('home header uses the same transparent SVG logo', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('logo-horizontal').first()).toHaveAttribute(
      'src',
      /logo-horizontal\.svg/,
    );
  });
});
