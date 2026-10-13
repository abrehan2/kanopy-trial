import { expect, test } from '@playwright/test';
import { COPY, FIGMA } from './figma-spec';
import { expectColor, expectFontSize, expectGap, expectPadX, expectPadY, px } from './style';

test.describe('Figma case review', () => {
  test('matches form section space, copy, and required fields', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#review-form');
    await expect(section).toBeVisible();
    await expectPadX(section, FIGMA.pageX);
    await expectPadY(section, FIGMA.formPy);
    await expectGap(section, FIGMA.colGap);
    await expectColor(section, FIGMA.paper);
    await expect(section.getByRole('heading', { name: COPY.formTitle })).toBeVisible();
    await expectFontSize(section.getByRole('heading', { name: COPY.formTitle }), FIGMA.formH);
    await expect(section.getByLabel('First name *')).toBeVisible();
    await expect(section.getByLabel('Last name *')).toBeVisible();
    await expect(section.getByLabel('Phone *')).toBeVisible();
    await expect(section.getByLabel('Where did it happen? *')).toBeVisible();
    await expect(section.getByLabel('Type of case *')).toBeVisible();
    const sms = section.getByTestId('sms-consent');
    expect(await px(sms, 'column-gap')).toBe(FIGMA.smsGap);
    expect(await px(sms.getByRole('checkbox'), 'width')).toBe(FIGMA.check);
    await expectFontSize(sms.locator('span').first(), FIGMA.micro);
    await expectColor(sms.locator('span').first(), FIGMA.dust, 'color');
    await section.getByRole('button', { name: COPY.heroCta }).click();
    await expect(section.getByText('Please fix the fields marked below.')).toBeVisible();
    await expect(
      section.locator('#firstName').locator('..').getByText('Enter your first name'),
    ).toBeVisible();
  });
});
