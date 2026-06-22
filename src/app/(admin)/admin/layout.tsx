import type { Metadata } from 'next';
import { isAdmin } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import AdminHeader from './AdminHeader';

export const metadata: Metadata = {
  title: 'Admin | Calio',
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAdmin();
  if (!authed) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
      <AdminHeader />

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        {children}
      </div>
    </div>
  );
}
