"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const systems = [
  {
    id: "aluminiu",
    label: "Aluminiu",
    title: "Precizie la\nnivel molecular",
    description:
      "Profilurile din aluminiu Calio sunt realizate prin extrudare de înaltă precizie, utilizând aliaje speciale tratate termic. Rezultatul: sisteme cu rezistență excepțională, toleranțe de ±0.1mm și durată de viață de peste 50 de ani.",
    specs: [
      { label: "Grosime ramă", value: "12–24 mm" },
      { label: "Rezistență vânt", value: "Clasa C5" },
      { label: "Permeabilitate aer", value: "Clasa 4" },
      { label: "Etanșeitate apă", value: "Clasa 9A" },
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=85",
    color: "#c8a96e",
  },
  {
    id: "sticla",
    label: "Sticlă",
    title: "Lumina care\ndefinește spațiul",
    description:
      "Sistemele noastre din sticlă folosesc panouri securizate VSG și ESG cu tratamente speciale. Fiecare geam este calculat structural pentru a rezista la sarcini seismice și vânturi puternice.",
    specs: [
      { label: "Tip sticlă", value: "VSG / ESG / Tripan" },
      { label: "Grosime max", value: "52 mm" },
      { label: "Factor solar", value: "g = 0.26" },
      { label: "Transmisie lum.", value: "TL = 72%" },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    color: "#8fb8d4",
  },
  {
    id: "pvc",
    label: "PVC",
    title: "Izolație care\nredefinește confortul",
    description:
      "Profilurile PVC premium cu 7 camere și ranforsare din oțel galvanizat oferă cea mai bună izolație termică din categorie. Certificare Passive House pentru construcții cu consum energetic aproape zero.",
    specs: [
      { label: "Nr. camere", value: "7 camere" },
      { label: "Valoare Uf", value: "0.79 W/m²K" },
      { label: "Izolare fonică", value: "45 dB" },
      { label: "Certificare", value: "Passive House" },
    ],
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=85",
    color: "#7ab87a",
  },
];

export default function SystemsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const sys = systems[active];

  return (
    <section id="sisteme" ref={ref} className="py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="eyebrow">Tehnologie</span>
          <h2 className="text-4xl md:text-[3.25rem] font-extralight text-[#f5f5f0] leading-[1.1]">
            Sisteme integrate pentru{" "}
            <span className="text-gradient">orice proiect</span>
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex gap-0 mb-14 border border-[#272727] w-fit">
          {systems.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase transition-all duration-300 font-medium ${
                i === active
                  ? "bg-[#c8a96e] text-black"
                  : "text-[#5a5a5a] hover:text-[#d0d0d0] hover:bg-white/[0.03]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={sys.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center"
        >
          {/* Text side */}
          <div>
            <h3
              className="text-3xl md:text-4xl xl:text-5xl font-extralight leading-tight text-[#f0f0f0] whitespace-pre-line mb-6"
            >
              {sys.title}
            </h3>
            <p className="text-[#5a5a5a] leading-relaxed mb-10 text-sm max-w-lg">
              {sys.description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {sys.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="border border-[#222] p-5 hover:border-[#333] transition-colors"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#555] block mb-1.5">
                    {spec.label}
                  </span>
                  <span className="text-xl font-light" style={{ color: sys.color }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <a href="/contact" className="btn btn-outline inline-flex text-[11px]">
              Solicită documentație tehnică
            </a>
          </div>

          {/* Image side */}
          <div className="relative h-[480px] xl:h-[560px] overflow-hidden">
            <motion.div
              key={sys.image}
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${sys.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />

            {/* Decorative corner */}
            <div
              className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
              style={{
                background: `linear-gradient(225deg, ${sys.color}30, transparent 70%)`,
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-20 h-0.5"
              style={{ background: sys.color }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
