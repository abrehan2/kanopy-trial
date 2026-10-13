const WINDOW_MS = 60_000;
const sentAt = new Map<string, number>();

export function clientKey(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'local';
}

export function remainingReviewWait(key: string, now = Date.now()) {
  const last = sentAt.get(key);
  if (!last) return 0;
  const wait = Math.ceil((WINDOW_MS - (now - last)) / 1000);
  if (wait <= 0) {
    sentAt.delete(key);
    return 0;
  }
  return wait;
}

export function markReviewSent(key: string, now = Date.now()) {
  sentAt.set(key, now);
}

export function resetReviewLimit() {
  sentAt.clear();
}
