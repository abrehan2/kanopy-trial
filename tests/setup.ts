import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { createElement } from 'react';

afterEach(() => {
  cleanup();
});

vi.mock('next/image', () => ({
  default: ({ alt, src }: { alt?: string; src?: string }) =>
    createElement('img', { alt: alt ?? '', src: src ?? '' }),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

if (typeof globalThis.ResizeObserver === 'undefined') {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

Element.prototype.hasPointerCapture = vi.fn();
Element.prototype.setPointerCapture = vi.fn();
Element.prototype.releasePointerCapture = vi.fn();
Element.prototype.scrollIntoView = vi.fn();
