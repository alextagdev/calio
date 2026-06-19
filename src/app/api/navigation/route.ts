import { NextResponse } from 'next/server';
import { getNavigation } from '@/lib/content';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const nav = getNavigation();
    const response = NextResponse.json(nav);

    // Prevent any caching layers from serving stale navigation
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    return response;
  } catch (e) {
    return NextResponse.json({ error: 'Failed to load navigation' }, { status: 500 });
  }
}
