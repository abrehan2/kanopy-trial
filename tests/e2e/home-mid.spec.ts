import { expect, test } from '@playwright/test';
import { COPY, FIGMA } from './figma-spec';
import { expectColor, expectFontSize, expectGap, expectPadX, expectPadY, px } from './style';

test.describe('Figma attorneys, results, advice', () => {
  test('attorneys uses Figma photo size and letter gap', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#attorneys');
    await expect(section.getByRole('heading', { name: COPY.attorneys })).toBeVisible();
    await expectPadX(section, FIGMA.pageX);
    expect(await px(section, 'padding-top')).toBe(40);
    expect(await px(section, 'padding-bottom')).toBe(FIGMA.sectionLg);
    await expectFontSize(section.getByRole('heading', { name: COPY.attorneys }), FIGMA.section);
    expect(await px(section.getByTestId('attorney-photo'), 'width')).toBe(FIGMA.photoW);
    expect(await px(section.getByTestId('attorney-photo'), 'height')).toBe(FIGMA.photoH);
    expect(await px(section.locator('div').first(), 'column-gap')).toBe(FIGMA.letterGap);
    await expect(section.getByText('Ludmila Kucerkova Romero')).toBeVisible();
  });

  test('results is pine with section padding', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#results');
    await expectColor(section, FIGMA.pine);
    await expectPadX(section, FIGMA.pageX);
    await expectPadY(section, FIGMA.sectionY);
    await expect(section.getByRole('heading', { name: COPY.results })).toBeVisible();
    await expect(section.getByText('$1,250,000').first()).toBeVisible();
  });

  test('advice columns use Figma section space', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#advice');
    await expectPadX(section, FIGMA.pageX);
    await expectPadY(section, FIGMA.sectionLg);
    await expectGap(section.getByTestId('advice-columns'), 64);
    await expectFontSize(section.getByRole('heading', { name: COPY.advice }), FIGMA.section);
    await expect(section.getByText('You were in a crash')).toBeVisible();
    await expect(section.getByText('Your car keeps breaking down')).toBeVisible();
    await expect(section.getByText('You got hurt at work')).toBeVisible();
  });
});
