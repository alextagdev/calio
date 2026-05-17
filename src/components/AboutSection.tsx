"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Profiluri certificate CE și ISO 9001",
  "Garnituri EPDM rezistente UV",
  "Geam tripan cu gaz argon",
  "Feronerie Roto și Maco",
  "Vopsire RAL pulbere electrostatică",
  "Montaj echipă proprie certificată",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section id="despre" ref={ref} className="py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image */}
          <div className="relative h-[540px] order-2 lg:order-1 overflow-hidden">
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("/images/fatada-rezidentiala-balustrade-1.jpeg")`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 to-transparent" />
            </motion.div>

            {/* TL corner accent */}
            <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-[#c8a96e] z-10 pointer-events-none" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -right-4 xl:-right-8 bottom-14 glass p-6 max-w-[220px] z-10"
            >
              <span className="text-4xl font-extralight text-gradient block mb-1">2009</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#555]">
                Fondată în România
              </span>
              <div className="mt-3 pt-3 border-t border-[#272727]">
                <span className="text-[11px] text-[#777] leading-relaxed">
                  15+ ani de excelență în tâmplărie premium
                </span>
              </div>
            </motion.div>
          </div>

          {/* Text */}
          <motion.div style={{ y: textY }} className="order-1 lg:order-2">
            <span className="eyebrow">Despre noi</span>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-[3.25rem] font-extralight text-[#f0f0f0] leading-[1.1] mb-6"
            >
              Arhitectură fără{" "}
              <span className="text-gradient">compromisuri</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="text-[#5a5a5a] leading-relaxed mb-4 text-sm"
            >
              Calio s-a construit pe principiul că frumusețea și performanța nu sunt opuse —
              sunt complementare. Fiecare sistem pe care îl producem îmbină estetica
              minimalistă cu ingineria de precizie.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-[#5a5a5a] leading-relaxed mb-10 text-sm"
            >
              Lucrăm cu arhitecți, designeri de interior și constructori pentru a livra
              soluții personalizate — de la vilele private la clădirile comerciale de lux.
            </motion.p>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-[#c8a96e] flex-shrink-0" />
                  <span className="text-[13px] text-[#888]">{v}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="/contact" className="btn btn-primary">
                Lucrează cu noi
              </a>
              <a
                href="/proiecte"
                className="text-[11px] tracking-[0.2em] uppercase text-[#555] hover:text-[#c8a96e] transition-colors flex items-center gap-2"
              >
                Portofoliu →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
