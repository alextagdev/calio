'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Menu, FileText, Image as ImageIcon, LogOut } from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/nav', label: 'Meniu', icon: Menu },
  { href: '/admin/pages', label: 'Pagini', icon: FileText },
  { href: '/admin/media', label: 'Media', icon: ImageIcon },
];

export default function AdminHeader() {
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/login', { method: 'DELETE' });
    } catch {}
    window.location.href = '/admin/login';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-4">
          <Link href="/admin" className="flex items-center gap-3 group">
            <span className="text-2xl font-light tracking-[0.4em] text-white">CALIO</span>
            <div className="flex items-center gap-2">
              <span className="h-px w-5 bg-[#c8a96e]/60" />
              <span className="text-[11px] font-medium tracking-[0.2em] text-[#c8a96e] group-hover:text-[#e8d5a3] transition-colors">
                ADMIN
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1a1a1a] text-[#c8a96e] border border-[#c8a96e]/30'
                    : 'text-[#888] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-[#c8a96e]' : ''} />
                <span className="font-light tracking-[0.05em]">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: User + Logout */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#666] px-3 py-1.5 bg-[#111] border border-[#1f1f1f] rounded">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            <span>Autentificat ca Admin</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#c8a96e] hover:text-red-400 hover:bg-[#1a1a1a] rounded-lg transition-colors border border-transparent hover:border-[#c8a96e]/20"
          >
            <LogOut size={16} />
            <span className="font-light tracking-widest text-xs">LOGOUT</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden border-t border-[#1f1f1f] bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#1a1a1a] text-[#c8a96e]'
                    : 'text-[#777] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
