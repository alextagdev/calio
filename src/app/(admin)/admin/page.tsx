import Link from 'next/link';
import { Menu, FileText, Image as ImageIcon, ArrowRight } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#c8a96e] text-sm tracking-[0.2em] font-medium">BINE AI REVENIT</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extralight tracking-[-0.02em] mb-3">Panou de control</h1>
        <p className="text-[#777] max-w-lg text-[15px]">
          Gestioneaza continutul site-ului Calio. Toate modificarile se salveaza instant si sunt vizibile pe site.
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <Link
          href="/admin/nav"
          className="group block p-7 bg-[#111] border border-[#1f1f1f] hover:border-[#c8a96e]/50 rounded-xl transition-all hover:-translate-y-px"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-11 h-11 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#c8a96e]">
              <Menu size={22} />
            </div>
            <ArrowRight size={18} className="text-[#444] group-hover:text-[#c8a96e] transition-colors" />
          </div>
          <div className="text-xl font-light mb-2 group-hover:text-[#c8a96e] transition-colors">Meniu &amp; Navigatie</div>
          <p className="text-sm text-[#666] leading-relaxed">Drag &amp; drop pentru reordonarea categoriilor si a dropdown-urilor.</p>
        </Link>

        <Link
          href="/admin/pages"
          className="group block p-7 bg-[#111] border border-[#1f1f1f] hover:border-[#c8a96e]/50 rounded-xl transition-all hover:-translate-y-px"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-11 h-11 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#c8a96e]">
              <FileText size={22} />
            </div>
            <ArrowRight size={18} className="text-[#444] group-hover:text-[#c8a96e] transition-colors" />
          </div>
          <div className="text-xl font-light mb-2 group-hover:text-[#c8a96e] transition-colors">Pagini &amp; Servicii</div>
          <p className="text-sm text-[#666] leading-relaxed">Editeaza hero, descrieri, features, specificatii tehnice si galerii de imagini.</p>
        </Link>

        <Link
          href="/admin/media"
          className="group block p-7 bg-[#111] border border-[#1f1f1f] hover:border-[#c8a96e]/50 rounded-xl transition-all hover:-translate-y-px"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-11 h-11 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#c8a96e]">
              <ImageIcon size={22} />
            </div>
            <ArrowRight size={18} className="text-[#444] group-hover:text-[#c8a96e] transition-colors" />
          </div>
          <div className="text-xl font-light mb-2 group-hover:text-[#c8a96e] transition-colors">Librarie media</div>
          <p className="text-sm text-[#666] leading-relaxed">Incarca si gestioneaza imaginile folosite pe site.</p>
        </Link>
      </div>

      {/* Info box */}
      <div className="rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] p-6 text-sm text-[#777]">
        <div className="uppercase tracking-[0.15em] text-[#c8a96e] text-xs mb-3">Informatii importante</div>
        <ul className="space-y-2 text-[13px]">
          <li className="flex gap-2">
            <span className="text-[#c8a96e]">•</span>
            Datele se salveaza direct in fisiere JSON (<code className="text-[#555]">src/data/content/</code>).
          </li>
          <li className="flex gap-2">
            <span className="text-[#c8a96e]">•</span>
            Modificarile sunt vizibile imediat pe site (fara rebuild in development).
          </li>
          <li className="flex gap-2">
            <span className="text-[#c8a96e]">•</span>
            Pentru productie, comita fisierele JSON sau migreaza la un CMS (recomandat pentru proiecte mai mari).
          </li>
          <li className="flex gap-2">
            <span className="text-[#c8a96e]">•</span>
            Schimba parola in <code className="text-[#555]">.env.local</code> (<code>ADMIN_PASSWORD</code>).
          </li>
        </ul>
      </div>
    </div>
  );
}
