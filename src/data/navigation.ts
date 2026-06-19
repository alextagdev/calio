import { readNavigationRaw } from '@/lib/content-write';

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
};

export type UtilityLink = { label: string; href: string };

const loaded = readNavigationRaw();

export const navItems: NavItem[] = loaded.navItems || [];
export const utilityLinks: UtilityLink[] = loaded.utilityLinks || [];

/**
 * Always reads fresh from disk.
 * This is critical: after saving from /admin/nav, the public site
 * (which calls this via /api/navigation) must see the latest data
 * without needing a rebuild or cache clear.
 */
export function getNavigation() {
  return readNavigationRaw();
}
