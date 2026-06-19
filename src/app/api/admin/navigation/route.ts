import { NextRequest, NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import { readNavigationRaw, writeNavigation } from '@/lib/content-write';

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json(readNavigationRaw());
}

export async function PUT(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await req.json();
    if (!body.navItems || !Array.isArray(body.navItems)) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    writeNavigation({
      navItems: body.navItems,
      utilityLinks: body.utilityLinks || [],
    });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Write failed' }, { status: 500 });
  }
}
