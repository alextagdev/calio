"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    category: "Aluminiu",
    name: "Ferestre Minimale",
    description:
      "Profiluri ultra-subțiri din aluminiu cu izolare termică superioară. Ramă de maximum 18mm pentru un aspect pur și luminos.",
    image: "/images/fatada-rezidentiala-balustrade-1.jpeg",
    features: ["Profil 18mm", "Tripan Low-E", "Uf = 0.8 W/m²K"],
    accent: "#c8a96e",
  },
  {
    id: 2,
    category: "Sticlă",
    name: "Uși Glisante Floor-to-Ceiling",
    description:
      "Sisteme glisante panoramice fără prag. Îmbinare perfectă între spațiile interioare și exterioare.",
    image: "/images/balustrada-sticla-balcon-1.jpeg",
    features: ["Fără prag", "Deschidere 6m+", "Sticlă securizată"],
    accent: "#8fb8d4",
  },
  {
    id: 3,
    category: "PVC",
    name: "Ferestre PVC Premium",
    description:
      "Sisteme PVC cu 7 camere pentru izolație termică și fonică maximă. Ideal pentru clădiri rezidențiale.",
    image: "/images/balustrada-sticla-scari-interior-3.jpeg",
    features: ["7 camere", "Uw = 0.7 W/m²K", "Fonoire 45dB"],
    accent: "#7ab87a",
  },
  {
    id: 4,
    category: "Fațade",
    name: "Fațadă Cortină",
    description:
      "Sisteme de fațadă unitizată pentru clădiri comerciale și rezidențiale de înaltă clasă.",
    image: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    features: ["Unitizată", "Structural glazing", "Certificare CE"],
    accent: "#c8a96e",
  },
  {
    id: 5,
    category: "Sticlă",
    name: "Balustrade din Sticlă",
    description:
      "Balustrade din sticlă laminată securizată pentru balcoane, scări interioare și terase.",
    image: "/images/balustrada-sticla-scari-exterioare-1.jpeg",
    features: ["VSG 8.8", "Fără montant", "Interior/Exterior"],
    accent: "#8fb8d4",
  },
  {
    id: 6,
    category: "Aluminiu",
    name: "Uși Pivotante",
    description:
      "Uși de intrare cu sistem pivot pentru o intrare spectaculoasă. Dimensiuni până la 1.2m x 3m.",
    image: "/images/fatada-rezidentiala-balustrade-2.jpeg",
    features: ["Pivot central", "până la 3m înălțime", "Control acces"],
    accent: "#7ab87a",
  },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative bg-[#111111] overflow-hidden hover-lift cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] tracking-[0.28em] uppercase px-3 py-1.5 font-medium"
            style={{
              background: `${product.accent}18`,
              color: product.accent,
              border: `1px solid ${product.accent}50`,
            }}
          >
            {product.category}
          </span>
        </div>

        {/* Arrow on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-9 h-9 flex items-center justify-center"
            style={{ background: product.accent }}
          >
            <ArrowUpRight size={16} className="text-black" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-light text-[#f0f0f0] mb-2 leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-[#636363] leading-relaxed mb-5 flex-1">
          {product.description}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((f) => (
            <span
              key={f}
              className="text-[10px] tracking-[0.18em] uppercase text-[#888] border border-[#272727] px-2.5 py-1"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href="/contact"
          className="flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300"
          style={{ color: product.accent }}
        >
          Solicită detalii
          <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-600"
        style={{ background: product.accent }}
      />
    </motion.div>
  );
}

export default function ProductsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="produse" className="py-28 bg-[#0a0a0a]">
      <div className="section-container">
        {/* Header */}
        <div ref={titleRef} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="eyebrow">Gama Noastră</span>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-[3.25rem] font-extralight text-[#f5f5f0] leading-[1.1]"
            >
              Produse{" "}
              <span className="text-gradient">Premium</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xs text-[#5a5a5a] text-sm leading-relaxed md:text-right"
          >
            Fiecare produs este conceput pentru performanță maximă și un design
            care rezistă timpului.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
