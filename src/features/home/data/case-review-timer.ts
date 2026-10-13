export const REVIEW_COOLDOWN = 60;
export const REVIEW_COOLDOWN_KEY = 'olive_case_review_start_time';

function storage() {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

export function startCooldown(storageKey: string): void {
  storage()?.setItem(storageKey, Date.now().toString());
}

export function getSecondsRemaining(storageKey: string, cooldown: number): number {
  const stored = storage()?.getItem(storageKey);
  if (!stored) return 0;
  const elapsed = Math.floor((Date.now() - parseInt(stored, 10)) / 1000);
  return Math.max(0, cooldown - elapsed);
}

export function formatWaitTime(seconds: number): string {
  const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
  const ss = (seconds % 60).toString().padStart(2, '0');
  return `${mm}:${ss}`;
}

export function reviewSubmitLabel(saving: boolean, secondsLeft: number) {
  if (saving) return 'Sending…';
  if (secondsLeft > 0) return `Try again in ${formatWaitTime(secondsLeft)}`;
  return 'Get my free case review';
}
