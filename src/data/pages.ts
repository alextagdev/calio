import fs from 'fs';
import path from 'path';

export type Feature = { icon?: string; title: string; description: string };
export type Spec = { label: string; value: string };
export type GalleryImage = { src: string; alt: string };

export type PageData = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroBadge?: string;
  heroImagePosition?: string;
  intro: string;
  description: string;
  features: Feature[];
  specs: Spec[];
  gallery: GalleryImage[];
  ctaTitle?: string;
  ctaText?: string;
};

export type CategoryData = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImagePosition?: string;
  intro: string;
  description: string;
  products: {
    title: string;
    href: string;
    image: string;
    short: string;
    tags: string[];
  }[];
};

const CONTENT_DIR = path.join(process.cwd(), 'src/data/content');

function loadPagesJSON() {
  try {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, 'pages.json'), 'utf-8');
    return JSON.parse(raw) as { pages: Record<string, PageData>; categories: Record<string, CategoryData> };
  } catch {
    return { pages: {}, categories: {} };
  }
}

const loaded = loadPagesJSON();

export const pages: Record<string, PageData> = loaded.pages;
export const categories: Record<string, CategoryData> = loaded.categories;

// Loader functions (preferred for new code)
// Note: getPagesData etc. now always re-read from disk so that
// saves from /admin/pages are immediately visible without rebuild.
export function getPagesData() {
  return loadPagesJSON();
}
export function getPage(slug: string) {
  return getPagesData().pages[slug];
}
export function getCategory(slug: string) {
  return getPagesData().categories[slug];
}
export function getAllPageSlugs() {
  return Object.keys(getPagesData().pages);
}
export function getAllCategorySlugs() {
  return Object.keys(getPagesData().categories);
}
