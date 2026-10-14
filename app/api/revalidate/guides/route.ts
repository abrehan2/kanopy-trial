import { NextResponse } from 'next/server';
import {
  isGuidesRevalidateSecret,
  readGuideSlug,
  revalidateGuides,
} from '@/features/guides/data/guides-revalidate';

export async function POST(request: Request) {
  const secret = request.headers.get('x-revalidate-secret');
  if (!isGuidesRevalidateSecret(secret)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  revalidateGuides(readGuideSlug(body));
  return NextResponse.json({ ok: true });
}
