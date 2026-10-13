import { beforeEach, describe, expect, test } from 'vitest';
import { useUiStore } from '@/hooks/use-ui-store';

describe('useUiStore', () => {
  beforeEach(() => {
    useUiStore.setState({ sidebarOpen: false });
  });

  test('toggles sidebar open state', () => {
    useUiStore.getState().setSidebarOpen(true);
    expect(useUiStore.getState().sidebarOpen).toBe(true);
  });
});
