"use client";

const links = {
  Produse: ["Ferestre Aluminiu", "Uși Glisante", "Sisteme PVC", "Fațade Cortină", "Balustrade Sticlă"],
  Companie: ["Despre noi", "Proiecte", "Certificări", "Cariere", "Contact"],
  Suport: ["Documentație tehnică", "Detalii montaj", "Garanție", "Service", "FAQ"],
};

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#181818]">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-xl font-light tracking-[0.35em] text-[#f0f0f0]">CALIO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
            </div>
            <p className="text-[13px] text-[#4a4a4a] leading-relaxed mb-7 max-w-[220px]">
              Sisteme premium de tâmplărie din aluminiu, PVC și sticlă pentru arhitectura modernă.
            </p>
            <div className="flex gap-2.5">
              {["Fb", "In", "Ig", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-[#1e1e1e] flex items-center justify-center text-[11px] font-medium text-[#444] hover:border-[#c8a96e]/60 hover:text-[#c8a96e] transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-[#4a4a4a] hover:text-[#d0d0d0] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#181818] pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#3a3a3a]">
            © 2024 Calio SRL · Toate drepturile rezervate
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {["Politica de confidențialitate", "Termeni și condiții", "GDPR"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-[#3a3a3a] hover:text-[#c8a96e] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
