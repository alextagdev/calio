"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    category: "Aluminiu",
    name: "Ferestre minimale",
    description:
      "Profile ultra-subtiri din aluminiu cu izolare termica superioara. Rama de maximum 18mm pentru un aspect pur si luminos.",
    image: "/images/tamplarie-aluminiu-usi-glisante.jpeg",
    features: ["Profil 18mm", "Tripan Low-E", "Uf = 0.8 W/m²K"],
    accent: "#c8a96e",
  },
  {
    id: 2,
    category: "Sticla",
    name: "Usi glisante floor-to-ceiling",
    description:
      "Sisteme glisante panoramice fara prag. Imbinare perfecta intre spatiile interioare si exterioare.",
    image: "/images/usi-glisante33.jpeg",
    features: ["Fara prag", "Deschidere 6m+", "Sticla securizata"],
    accent: "#8fb8d4",
  },
  {
    id: 3,
    category: "PVC",
    name: "Ferestre PVC premium",
    description:
      "Sisteme PVC cu 7 camere pentru izolatie termica si fonica maxima. Ideal pentru cladiri rezidentiale.",
    image: "/images/tamplarie-pcv.jpeg",
    features: ["7 camere", "Uw = 0.7 W/m²K", "Fonie 45dB"],
    accent: "#7ab87a",
  },
  {
    id: 4,
    category: "Fatade",
    name: "Fatada cortina",
    description:
      "Sisteme de fatada unitizata pentru cladiri comerciale si rezidentiale de inalta clasa.",
    image: "/images/prete-cortina.jpeg",
    features: ["Unitizata", "Structural glazing", "Certificare CE"],
    accent: "#c8a96e",
  },
  {
    id: 5,
    category: "Sticla",
    name: "Balustrade din sticla",
    description:
      "Balustrade din sticla laminata securizata pentru balcoane, scari interioare si terase.",
    image: "/images/balustrada.jpeg",
    features: ["VSG 8.8", "Fara montant", "Interior/Exterior"],
    accent: "#8fb8d4",
  },
  {
    id: 6,
    category: "Aluminiu",
    name: "Usi armonice",
    description:
      "Sisteme pliant-armonice din aluminiu pentru deschideri largi. Conexiune perfecta intre interior si exterior.",
    image: "/images/geamuri-armonice.jpeg",
    features: ["Pliant-armonic", "Deschidere totala", "Profil slim"],
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
          Solicita detalii
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
            <span className="eyebrow">Gama noastra</span>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-[3.25rem] font-extralight text-[#f5f5f0] leading-[1.1]"
            >
              Produse{" "}
              <span className="text-gradient">premium</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xs text-[#5a5a5a] text-sm leading-relaxed md:text-right"
          >
            Fiecare produs este conceput pentru performanta maxima si un design
            care rezista timpului.
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
