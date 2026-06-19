'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

interface SiteChromeProps {
  children: React.ReactNode;
  serverIsAdminHint?: boolean;
}

export default function SiteChrome({ children, serverIsAdminHint = false }: SiteChromeProps) {
  const pathname = usePathname() || '';
  const clientIsAdmin = pathname.startsWith('/admin');

  // Use client detection primarily, fall back to server hint for initial render
  const isAdminRoute = clientIsAdmin || (serverIsAdminHint && pathname === '');

  if (isAdminRoute) {
    // Completely exclude the public site menu when in the admin panel.
    // The AdminHeader in the admin layout provides the only navigation.
    // No public navbar, no scroll-hide effects, nothing from the site.
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[92px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
