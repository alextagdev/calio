import { NextRequest, NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public/media');

function ensureDir() {
  if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

function safeName(name: string) {
  return name.replace(/[^a-zA-Z0-9_.-]/g, '_').toLowerCase();
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    ensureDir();
    const form = await req.formData();
    const file = form.get('file') as File | null;
    if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

    const ext = path.extname(file.name).toLowerCase();
    const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    if (!allowed.includes(ext)) {
      return NextResponse.json({ error: 'Tip fisier neacceptat' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}_${safeName(file.name)}`;
    const filepath = path.join(UPLOAD_DIR, filename);
    fs.writeFileSync(filepath, buffer);

    const url = `/media/${filename}`;
    return NextResponse.json({ url, originalName: file.name });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Upload failed' }, { status: 500 });
  }
}
