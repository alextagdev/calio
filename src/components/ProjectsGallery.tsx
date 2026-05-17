"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vilă Rezidențială cu Balustrade",
    category: "Rezidențial",
    location: "Ilfov",
    year: "2025",
    image: "/images/fatada-rezidentiala-balustrade-1.jpeg",
    tags: ["Balustrade sticlă", "Balcon", "Ferestre aluminiu"],
    description: "Fațadă completă cu balustrade din sticlă securizată pe balcoane și ferestre din aluminiu negru mat.",
  },
  {
    id: 2,
    title: "Balcon Modern cu Sticlă Panoramică",
    category: "Rezidențial Premium",
    location: "București",
    year: "2025",
    image: "/images/balustrada-sticla-balcon-1.jpeg",
    tags: ["Balustrade sticlă", "Balcon", "Cleme inox"],
    description: "Balustrade din sticlă VSG cu cleme inox 316L pe balconul unui duplex modern, fără profile vizibile.",
  },
  {
    id: 3,
    title: "Scări Plutitoare Duplex Interior",
    category: "Rezidențial Premium",
    location: "București",
    year: "2025",
    image: "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
    tags: ["Scări plutitoare", "Balustrade sticlă", "Interior"],
    description: "Sistem de balustrade din sticlă securizată pe scări plutitoare cu trepte din lemn, interior duplex modern.",
  },
  {
    id: 4,
    title: "Balustrade Scări Granit Negru",
    category: "Rezidențial Premium",
    location: "Ilfov",
    year: "2024",
    image: "/images/balustrada-sticla-scari-granit-1.jpeg",
    tags: ["Sticlă fumurie", "Granit negru", "Mână curentă"],
    description: "Balustrade din sticlă fumurie cu mână curentă neagră și ornamente aurii pe scări din granit negru lustruit.",
  },
  {
    id: 5,
    title: "Balustradă Exterioară Intrare Vilă",
    category: "Rezidențial",
    location: "Ilfov",
    year: "2025",
    image: "/images/balustrada-sticla-scari-exterioare-1.jpeg",
    tags: ["Exterior", "Sticlă", "Mână curentă neagră"],
    description: "Balustradă din sticlă securizată cu prindere punctuală și mână curentă neagră la intrarea unei vile.",
  },
  {
    id: 6,
    title: "Scări cu Balustrade Inox și Sticlă",
    category: "Rezidențial",
    location: "București",
    year: "2024",
    image: "/images/balustrada-sticla-scari-interior-2.jpeg",
    tags: ["Inox 316L", "Sticlă VSG", "Interior"],
    description: "Balustrade din sticlă securizată cu mână curentă din inox satinat pe scări cu trepte din marmură gri.",
  },
];

const categories = ["Toate", "Rezidențial", "Rezidențial Premium"];

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.09 }}
      className="group relative overflow-hidden cursor-pointer bg-[#111]"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
          style={{
            backgroundImage: `url(${project.image})`,
            transform: "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-end p-5">
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#c8a96e] border border-[#c8a96e]/70 px-4 py-2">
            Deschide →
          </span>
        </div>

        {/* Info overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#c8a96e]">
              {project.category}
            </span>
            <span className="text-[#444] text-xs">·</span>
            <span className="text-[10px] text-[#555]">{project.year}</span>
          </div>
          <h3 className="text-lg font-light text-white leading-snug">{project.title}</h3>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin size={10} className="text-[#555]" />
            <span className="text-[11px] text-[#555]">{project.location}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="px-5 py-3 flex flex-wrap gap-2 border-t border-[#1e1e1e]">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] tracking-[0.18em] uppercase text-[#555] border border-[#242424] px-2.5 py-1">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("Toate");
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const filtered =
    filter === "Toate"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="proiecte" className="py-28 bg-[#0a0a0a]">
      <div className="section-container">
        {/* Header */}
        <div ref={titleRef} className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="eyebrow">Referințe</span>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-[3.25rem] font-extralight text-[#f0f0f0] leading-[1.1]"
            >
              Proiectele <span className="text-gradient">noastre</span>
            </motion.h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 border font-medium ${
                  filter === cat
                    ? "border-[#c8a96e] text-[#c8a96e] bg-[#c8a96e]/08"
                    : "border-[#232323] text-[#555] hover:border-[#444] hover:text-[#ccc]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
              className="bg-[#111] max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selected.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-[#c8a96e] flex items-center justify-center transition-colors"
                >
                  <X size={16} className="text-white" />
                </button>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#c8a96e]">
                    {selected.category}
                  </span>
                  <span className="text-[#444]">·</span>
                  <span className="text-[10px] text-[#555]">{selected.location}</span>
                </div>
                <h3 className="text-2xl font-light text-[#f0f0f0] mb-3">{selected.title}</h3>
                <p className="text-sm text-[#5a5a5a] leading-relaxed mb-5">{selected.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-[0.18em] uppercase text-[#888] border border-[#272727] px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
