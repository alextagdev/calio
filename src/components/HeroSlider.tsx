"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/fatada-rezidentiala-balustrade-1.jpeg",
    title: "Ferestre din\nAluminiu",
    subtitle: "Precizie și eleganță pentru arhitectura modernă",
    tag: "Sisteme Aluminiu",
  },
  {
    id: 2,
    image: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    title: "Balustrade\ndin Sticlă",
    subtitle: "Eleganță și siguranță pentru scări, balcoane și terase",
    tag: "Balustrade Sticlă",
  },
  {
    id: 3,
    image: "/images/balustrada-sticla-scari-interior-3.jpeg",
    title: "Sisteme PVC\nPremium",
    subtitle: "Izolare termică și fonică de excepție",
    tag: "Sisteme PVC",
  },
  {
    id: 4,
    image: "/images/balustrada-sticla-scari-exterioare-1.jpeg",
    title: "Fațade\nCortină",
    subtitle: "Soluții integrate pentru clădiri contemporane",
    tag: "Fațade",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="section-container w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-3xl"
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="flex items-center gap-3 mb-7"
              >
                <span className="w-8 h-px bg-[#c8a96e]" />
                <span className="text-[11px] tracking-[0.38em] uppercase text-[#c8a96e]">
                  {slide.tag}
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="text-6xl md:text-7xl xl:text-[5.5rem] font-extralight leading-[1.04] tracking-tight text-white whitespace-pre-line mb-7">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-white/60 font-light max-w-md mb-10 leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="/tamplarie-aluminiu" className="btn btn-primary">
                  Descoperă
                </a>
                <a href="/proiecte" className="btn btn-outline">
                  Proiectele noastre
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-8 md:px-16 pb-8">
        {/* Slide counter */}
        <div className="flex items-center gap-2 text-xs text-white/30">
          <span className="text-[#c8a96e] tabular-nums">0{current + 1}</span>
          <span className="w-8 h-px bg-white/20" />
          <span className="tabular-nums">0{slides.length}</span>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? "w-6 h-1.5 bg-[#c8a96e] rounded-sm"
                  : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.35em] uppercase text-white/30">Scroll</span>
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-[#c8a96e]/50 origin-top"
          />
        </div>
      </div>
    </section>
  );
}
