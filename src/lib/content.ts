// Re-exports for convenience. Loading lives in the data/* modules (sync fs, server only).
export {
  getPagesData,
  getPage,
  getCategory,
  getAllPageSlugs,
  getAllCategorySlugs,
} from '@/data/pages';

export { getNavigation } from '@/data/navigation';

export type { PageData, CategoryData } from '@/data/pages';
export type { NavItem, UtilityLink } from '@/data/navigation';
