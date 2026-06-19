import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const ALLOWED = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

function walk(dir: string, base: string): string[] {
  const out: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = path.join(base, e.name);
    if (e.isDirectory()) {
      out.push(...walk(full, rel));
    } else {
      const ext = path.extname(e.name).toLowerCase();
      if (ALLOWED.includes(ext)) {
        out.push('/' + rel.split(path.sep).join('/'));
      }
    }
  }
  return out;
}

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const imagesDir = path.join(PUBLIC_DIR, 'images');
    const mediaDir = path.join(PUBLIC_DIR, 'media');

    let images: string[] = [];
    if (fs.existsSync(imagesDir)) images = walk(imagesDir, 'images');
    let media: string[] = [];
    if (fs.existsSync(mediaDir)) media = walk(mediaDir, 'media');

    // newest first roughly by sorting reverse (uploads in media will be recent)
    const all = [...media, ...images].sort((a, b) => (a.includes('media') ? -1 : 1));
    return NextResponse.json({ images: all });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
