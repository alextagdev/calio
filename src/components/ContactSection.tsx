"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+40 721 000 000", href: "tel:+40721000000" },
  { icon: Mail, label: "Email", value: "contact@calio.ro", href: "mailto:contact@calio.ro" },
  { icon: MapPin, label: "Adresă", value: "Șos. Fabrica de Glucoză 5, București", href: "#" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#0d0d0d]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 xl:gap-24">

          {/* Left col — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <span className="eyebrow">Contact</span>
            <h2 className="text-4xl md:text-[3.25rem] font-extralight text-[#f0f0f0] leading-[1.1] mb-5">
              Începem{" "}
              <span className="text-gradient">proiectul tău</span>
            </h2>
            <p className="text-[#5a5a5a] text-sm leading-relaxed mb-12">
              Echipa noastră de consultanți este disponibilă pentru a vă ghida în alegerea
              soluției optime pentru proiectul dumneavoastră.
            </p>

            {/* Contact details */}
            <div className="space-y-7 mb-12">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 border border-[#222] flex items-center justify-center flex-shrink-0 group-hover:border-[#c8a96e]/50 transition-colors duration-300">
                    <Icon size={14} className="text-[#c8a96e]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.28em] uppercase text-[#444] mb-1">{label}</p>
                    <p className="text-sm text-[#bbb] group-hover:text-[#f0f0f0] transition-colors duration-300">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="relative h-44 border border-[#1e1e1e] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=40")` }}
              />
              <div className="absolute inset-0 bg-[#0d0d0d]/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#555]">
                  București, România
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right col — 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center border border-[#222] p-14 min-h-[480px]"
              >
                <CheckCircle2 size={48} className="text-[#c8a96e] mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-light text-[#f0f0f0] mb-3">Mesaj trimis!</h3>
                <p className="text-[#555] text-sm max-w-xs">
                  Vă vom contacta în cel mai scurt timp posibil cu o ofertă personalizată.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] tracking-[0.28em] uppercase text-[#444] block mb-2">
                      Nume complet <span className="text-[#c8a96e]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ion Popescu"
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.28em] uppercase text-[#444] block mb-2">
                      Telefon <span className="text-[#c8a96e]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+40 7__ ___ ___"
                      className="field"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#444] block mb-2">
                    Email <span className="text-[#c8a96e]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@exemplu.ro"
                    className="field"
                  />
                </div>

                {/* Product select */}
                <div className="relative">
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#444] block mb-2">
                    Tip produs
                  </label>
                  <select className="field pr-10 cursor-pointer" defaultValue="">
                    <option value="" disabled>Selectează un sistem</option>
                    <option>Ferestre aluminiu</option>
                    <option>Uși glisante</option>
                    <option>Sisteme PVC</option>
                    <option>Fațadă cortină</option>
                    <option>Balustrade sticlă</option>
                    <option>Altele</option>
                  </select>
                  {/* Custom arrow */}
                  <div className="absolute right-3 bottom-4 pointer-events-none text-[#555]">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] tracking-[0.28em] uppercase text-[#444] block mb-2">
                    Detalii proiect
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Descrieți pe scurt proiectul dumneavoastră (suprafață, etaj, cerințe speciale)..."
                    className="field"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-primary w-full gap-2.5 text-[11px]">
                  <Send size={14} />
                  Trimite Solicitarea
                </button>

                <p className="text-[10px] text-[#3a3a3a] text-center leading-relaxed">
                  Datele sunt protejate conform GDPR. Nu le transmitem către terți.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
