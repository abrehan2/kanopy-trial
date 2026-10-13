import { expect, test } from '@playwright/test';
import { expectColor, expectGap, expectPadX, px } from './style';
import { CONTACT_COPY, CONTACT_FIGMA } from './contact-figma-spec';

test.describe('Figma contact end sections', () => {
  test('office photos and footer match the frame', async ({ page }) => {
    await page.goto('/contact');
    const photos = page.getByTestId('contact-photos');
    await expectPadX(photos, CONTACT_FIGMA.pageX);
    expect(await px(photos, 'padding-bottom')).toBe(CONTACT_FIGMA.photosPb);
    await expectGap(photos, CONTACT_FIGMA.photoGap);

    const images = photos.locator('img');
    await expect(images).toHaveCount(2);
    expect(await px(images.first(), 'height')).toBe(CONTACT_FIGMA.photoH);
    await expect(photos.getByText(CONTACT_COPY.irvine)).toBeVisible();
    await expect(photos.getByText(CONTACT_COPY.henderson)).toBeVisible();

    const footer = page.locator('footer');
    await expectColor(footer, CONTACT_FIGMA.footer);
    await expect(footer.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });
});
