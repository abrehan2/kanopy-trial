import { toast } from 'sonner';

export function showSuccess(message: string) {
  toast.success(message);
}

export function showError(message: string) {
  toast.error(message);
}

export function showErrorFrom(error: unknown, fallback = 'Network error') {
  showError(error instanceof Error ? error.message : fallback);
}
