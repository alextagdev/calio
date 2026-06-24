"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";

const WA_NUMBER = "40736697341";
const WA_MESSAGE = "Buna ziua! As dori sa primesc o oferta pentru un proiect.";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#111] border border-[#222] w-72 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#161616] border-b border-[#1e1e1e] px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#c8a96e]/15 flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-[#c8a96e]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium text-[#f0f0f0]">Calio</div>
                <div className="text-[11px] text-[#5a5a5a] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block" />
                  Disponibili acum
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#555] hover:text-[#888] transition-colors p-1"
              >
                <X size={14} />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="px-5 py-5">
              <div className="bg-[#1a1a1a] rounded-2xl rounded-tl-sm px-4 py-3 mb-1 inline-block max-w-[90%]">
                <p className="text-[13px] text-[#d0d0d0] leading-relaxed">
                  Buna ziua! 👋 Suntem aici sa te ajutam.
                  <br />
                  Scrie-ne pentru o <span className="text-[#c8a96e]">consultanta gratuita</span> sau o oferta rapida.
                </p>
              </div>
              <div className="text-[10px] text-[#3a3a3a] mt-2">acum</div>
            </div>

            {/* Actions */}
            <div className="px-5 pb-5 flex flex-col gap-2">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 bg-[#25D366] hover:bg-[#20c05c] text-white text-[13px] font-medium tracking-wide transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                Scrie pe WhatsApp
              </a>
              <a
                href="tel:+40736697341"
                className="flex items-center justify-center gap-2.5 w-full py-2.5 border border-[#272727] hover:border-[#c8a96e]/60 text-[#888] hover:text-[#c8a96e] text-[12px] tracking-[0.1em] transition-colors"
              >
                <Phone size={13} />
                0736 697 341
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse ring + main button */}
      <div className="relative">
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-ping" />
        )}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20c05c] shadow-lg shadow-[#25D366]/25 flex items-center justify-center transition-colors"
          aria-label="Deschide WhatsApp"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
              >
                <X size={22} className="text-white" />
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.18 }}
              >
                <WhatsAppIcon className="w-7 h-7 text-white" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
