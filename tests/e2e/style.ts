import { expect, type Locator } from '@playwright/test';

export async function px(el: Locator, prop: string) {
  return el.evaluate((node, key) => parseFloat(getComputedStyle(node).getPropertyValue(key)), prop);
}

export async function color(el: Locator, prop = 'background-color') {
  return el.evaluate((node, key) => getComputedStyle(node).getPropertyValue(key), prop);
}

export function rgbClose(actual: string, expected: string, tol = 4) {
  const parse = (value: string) => [...value.matchAll(/\d+/g)].map(Number);
  const a = parse(actual);
  const e = parse(expected);
  return a.length >= 3 && e.slice(0, 3).every((n, i) => Math.abs(n - a[i]) <= tol);
}

export async function expectColor(el: Locator, expected: string, prop = 'background-color') {
  expect(rgbClose(await color(el, prop), expected)).toBe(true);
}

export async function expectPadX(el: Locator, value: number) {
  expect(await px(el, 'padding-left')).toBe(value);
  expect(await px(el, 'padding-right')).toBe(value);
}

export async function expectPadY(el: Locator, value: number) {
  expect(await px(el, 'padding-top')).toBe(value);
  expect(await px(el, 'padding-bottom')).toBe(value);
}

export async function expectFontSize(el: Locator, value: number) {
  expect(await px(el, 'font-size')).toBe(value);
}

export async function expectGap(el: Locator, value: number) {
  expect(await px(el, 'column-gap')).toBe(value);
}
