'use client';

import { useSyncExternalStore } from 'react';
import { LogoSpinner } from '@/components/feedback/LogoSpinner';

const subscribe = () => () => {};

export function PageSpinner() {
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  if (ready) return null;
  return <LogoSpinner />;
}
