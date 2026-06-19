import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/data/content');

export function writeNavigation(data: any) {
  const filePath = path.join(CONTENT_DIR, 'navigation.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export function writePagesData(data: { pages: any; categories: any }) {
  const filePath = path.join(CONTENT_DIR, 'pages.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export function readNavigationRaw() {
  const filePath = path.join(CONTENT_DIR, 'navigation.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function readPagesRaw() {
  const filePath = path.join(CONTENT_DIR, 'pages.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
