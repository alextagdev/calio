import { NextRequest, NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import { readPagesRaw, writePagesData } from '@/lib/content-write';

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json(readPagesRaw());
}

export async function PUT(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await req.json();
    if (!body.pages || !body.categories) {
      return NextResponse.json({ error: 'Invalid payload: pages + categories required' }, { status: 400 });
    }
    writePagesData({ pages: body.pages, categories: body.categories });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Write failed' }, { status: 500 });
  }
}
