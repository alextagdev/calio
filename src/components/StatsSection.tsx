"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 15, suffix: "+", label: "Ani de experiență" },
  { value: 850, suffix: "+", label: "Proiecte finalizate" },
  { value: 98, suffix: "%", label: "Clienți mulțumiți" },
  { value: 12, suffix: "", label: "Parteneri europeni" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl xl:text-6xl font-extralight text-gradient block mb-2">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-24 overflow-hidden bg-[#0d0d0d]">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: `url("/images/balustrada-sticla-scari-plutitoare-1.jpeg")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-[#0d0d0d]" />

      <div ref={ref} className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="eyebrow" style={{ textAlign: "center" }}>Cifre care vorbesc</span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#f0f0f0]">
            Calitate dovedită
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center border border-[#222] p-8 xl:p-10 hover:border-[#c8a96e]/30 transition-colors duration-400 group"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#555] group-hover:text-[#888] transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
