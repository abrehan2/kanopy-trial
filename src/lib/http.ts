import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
  withCredentials: true,
  headers: { Accept: 'application/json' },
});

export function toErrorMessage(error: unknown, fallback = 'Network error') {
  if (axios.isAxiosError(error)) {
    const payload = error.response?.data as { message?: string } | undefined;
    return payload?.message ?? error.message;
  }
  return error instanceof Error ? error.message : fallback;
}
