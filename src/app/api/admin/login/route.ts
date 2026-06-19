import { NextRequest, NextResponse } from 'next/server';
import { checkPassword, setAdminCookie, clearAdminCookie } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({}));

  if (!password || !checkPassword(password)) {
    return NextResponse.json({ error: 'Parola incorecta' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.headers.set('Set-Cookie', setAdminCookie());
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.headers.set('Set-Cookie', clearAdminCookie());
  return res;
}
