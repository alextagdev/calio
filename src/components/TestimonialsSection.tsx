"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alexandru Ionescu",
    role: "Arhitect, Studio IO",
    text: "Calio este partenerul perfect pentru proiectele de înaltă exigență. Toleranțele sunt impecabile, comunicarea este excelentă și livrarea este mereu la termen. Am lucrat cu ei pe 12 proiecte și nu m-au dezamăgit niciodată.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    project: "Vilă Snagov, 2024",
  },
  {
    id: 2,
    name: "Mihaela Popescu",
    role: "Developer imobiliar",
    text: "Am ales Calio pentru 3 proiecte rezidențiale premium. Calitatea produselor este comparabilă cu furnizori vest-europeni, dar cu o flexibilitate mult mai mare în personalizare și cu timp de răspuns rapid.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    project: "Complex rezidențial, 2023",
  },
  {
    id: 3,
    name: "Radu Dumitrescu",
    role: "Constructor general",
    text: "Cel mai bun furnizor de tâmplărie cu care am lucrat în România. Documentația tehnică este completă, montajul este rapid și rezultatul final arată exact ca în randări.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    project: "Sediu corporat, 2023",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-28 bg-[#0a0a0a]" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow" style={{ textAlign: "center" }}>Testimoniale</span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#f0f0f0]">
            Ce spun clienții noștri
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Large quote mark */}
          <div className="text-[120px] leading-none text-[#c8a96e]/10 font-serif text-center mb-4 select-none">
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl xl:text-2xl font-extralight text-[#c8c8c8] leading-relaxed mb-10">
                {t.text}
              </p>

              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-14 h-14 rounded-full bg-cover bg-center border border-[#272727] flex-shrink-0"
                  style={{ backgroundImage: `url(${t.image})` }}
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-[#f0f0f0]">{t.name}</p>
                  <p className="text-xs text-[#555] mt-0.5">{t.role}</p>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[#c8a96e] mt-1">{t.project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-12">
            <button
              onClick={prev}
              className="w-11 h-11 border border-[#272727] flex items-center justify-center text-[#555] hover:border-[#c8a96e] hover:text-[#c8a96e] transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current
                      ? "w-7 h-0.5 bg-[#c8a96e]"
                      : "w-2.5 h-0.5 bg-[#333] hover:bg-[#555]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 border border-[#272727] flex items-center justify-center text-[#555] hover:border-[#c8a96e] hover:text-[#c8a96e] transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
