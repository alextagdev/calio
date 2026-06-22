"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vila rezidentiala cu balustrade",
    category: "Balustrade",
    location: "Ilfov",
    year: "2025",
    images: [
      "/images/fatada-rezidentiala-balustrade-1.jpeg",
      "/images/fatada-rezidentiala-balustrade-2.jpeg",
    ],
    tags: ["Balustrade sticla", "Balcon", "Ferestre aluminiu"],
    description: "Fatada completa cu balustrade din sticla securizata pe balcoane si ferestre din aluminiu negru mat.",
  },
  {
    id: 2,
    title: "Balcon modern cu sticla panoramica",
    category: "Balustrade",
    location: "Bucuresti",
    year: "2025",
    images: [
      "/images/balustrada-sticla-balcon-1.jpeg",
      "/images/balustrada-sticla-balcon-2.jpeg",
    ],
    tags: ["Balustrade sticla", "Balcon", "Cleme inox"],
    description: "Balustrade din sticla VSG cu cleme inox 316L pe balconul unui duplex modern, fara profile vizibile.",
  },
  {
    id: 3,
    title: "Scari plutitoare duplex interior",
    category: "Balustrade",
    location: "Bucuresti",
    year: "2025",
    images: [
      "/images/balustrada-sticla-scari-plutitoare-1.jpeg",
      "/images/balustrada-sticla-scari-plutitoare-2.jpeg",
      "/images/balustrada-sticla-scari-plutitoare-3.jpeg",
    ],
    tags: ["Scari plutitoare", "Balustrade sticla", "Interior"],
    description: "Sistem de balustrade din sticla securizata pe scari plutitoare cu trepte din lemn, interior duplex modern.",
  },
  {
    id: 4,
    title: "Balustrade scari granit negru",
    category: "Balustrade",
    location: "Ilfov",
    year: "2024",
    images: [
      "/images/balustrada-sticla-scari-granit-1.jpeg",
      "/images/balustrada-sticla-scari-granit-2.jpeg",
      "/images/balustrada-sticla-scari-granit-3.jpeg",
    ],
    tags: ["Sticla fumurie", "Granit negru", "Mana curenta"],
    description: "Balustrade din sticla fumurie cu mana curenta neagra si ornamente aurii pe scari din granit negru lustruit.",
  },
  {
    id: 5,
    title: "Balustrada exterioara intrare vila",
    category: "Balustrade",
    location: "Ilfov",
    year: "2025",
    images: [
      "/images/balustrada-sticla-scari-exterioare-1.jpeg",
    ],
    tags: ["Exterior", "Sticla", "Mana curenta neagra"],
    description: "Balustrada din sticla securizata cu prindere punctuala si mana curenta neagra la intrarea unei vile.",
  },
  {
    id: 6,
    title: "Scari cu balustrade inox si sticla",
    category: "Balustrade",
    location: "Bucuresti",
    year: "2024",
    images: [
      "/images/balustrada-sticla-scari-interior-1.jpeg",
      "/images/balustrada-sticla-scari-interior-2.jpeg",
      "/images/balustrada-sticla-scari-interior-3.jpeg",
      "/images/balustrada-sticla-scari-interior-4.jpeg",
    ],
    tags: ["Inox 316L", "Sticla VSG", "Interior"],
    description: "Balustrade din sticla securizata cu mana curenta din inox satinat pe scari cu trepte din marmura gri.",
  },
  {
    id: 7,
    title: "Fatada ventilata placare Bond",
    category: "Fatade ventilate",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/fatata-ventilata-placare-bond/WhatsApp%20Image%202026-05-20%20at%2020.19.46.jpeg",
      "/images/fatata-ventilata-placare-bond/poza2.jpeg",
      "/images/fatata-ventilata-placare-bond/poza3.jpeg",
      "/images/fatata-ventilata-placare-bond/poza4.jpeg",
      "/images/fatata-ventilata-placare-bond/poza5.jpeg",
    ],
    tags: ["Panouri Bond", "Fatada ventilata", "Aluminiu compozit"],
    description: "Sistem complet de fatada ventilata cu panouri compozite aluminiu Bond, profil ascuns si finisaj premium.",
  },
  {
    id: 8,
    title: "Inchideri terasa cu sticla pliabila",
    category: "Sticla securizata",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/inchideri-sticla-pliabila/WhatsApp%20Image%202026-05-20%20at%2013.19.18.jpeg",
      "/images/inchideri-sticla-pliabila/poza2.jpeg",
      "/images/inchideri-sticla-pliabila/poza3.jpeg",
      "/images/inchideri-sticla-pliabila/poza4.jpeg",
      "/images/inchideri-sticla-pliabila/poza5.jpeg",
      "/images/inchideri-sticla-pliabila/poza6.jpeg",
      "/images/inchideri-sticla-pliabila/poza7.jpeg",
      "/images/inchideri-sticla-pliabila/poza8.jpeg",
      "/images/inchideri-sticla-pliabila/poza9.jpeg",
      "/images/inchideri-sticla-pliabila/poza10.jpeg",
    ],
    tags: ["Sticla pliabila", "Terasa", "Sistem glisant"],
    description: "Sistem de inchidere cu panouri din sticla pliabila pentru terasa, deschidere totala, profil minim.",
  },
  {
    id: 9,
    title: "Paravane sticla dus si baie",
    category: "Sticla securizata",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/paravane-sticla-baie/WhatsApp%20Image%202026-05-20%20at%2013.17.32.jpeg",
      "/images/paravane-sticla-baie/paravan1.jpeg",
      "/images/paravane-sticla-baie/paravan2.jpeg",
      "/images/paravane-sticla-baie/paravan4.jpeg",
      "/images/paravane-sticla-baie/paravan5.jpeg",
      "/images/paravane-sticla-baie/paravan6.jpeg",
    ],
    tags: ["Paravan dus", "Sticla securizata", "Baie"],
    description: "Paravane din sticla securizata securit pentru spatii de dus si baie, personalizate dupa dimensiunile clientului.",
  },
  {
    id: 10,
    title: "Partitie din sticla pentru salon",
    category: "Sticla securizata",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/partitie-sticla-salon/WhatsApp%20Image%202026-05-20%20at%2013.18.08.jpeg",
      "/images/partitie-sticla-salon/poza2.jpeg",
      "/images/partitie-sticla-salon/poza3.jpeg",
      "/images/partitie-sticla-salon/poza4.jpeg",
    ],
    tags: ["Compartimentare", "Sticla", "Salon"],
    description: "Partitie fixa din sticla securizata cu profil negru mat, separare eleganta a spatiului in salon.",
  },
  {
    id: 11,
    title: "Cantina cu terasa exterioara",
    category: "Pergole & Terase",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/proiect-cantina-terasa-exterioara/WhatsApp%20Image%202026-05-20%20at%2013.21.25.jpeg",
      "/images/proiect-cantina-terasa-exterioara/poza2.jpeg",
      "/images/proiect-cantina-terasa-exterioara/poza3.jpeg",
      "/images/proiect-cantina-terasa-exterioara/poza4.jpeg",
      "/images/proiect-cantina-terasa-exterioara/poza5.jpeg",
      "/images/proiect-cantina-terasa-exterioara/poza6.jpeg",
      "/images/proiect-cantina-terasa-exterioara/poza7.jpeg",
      "/images/proiect-cantina-terasa-exterioara/poza8.jpeg",
      "/images/proiect-cantina-terasa-exterioara/poza9.jpeg",
    ],
    tags: ["Terasa exterioara", "Pergola", "Proiect comercial"],
    description: "Amenajare completa terasa exterioara pentru cantina, cu sisteme de acoperire si protectie solara.",
  },
  {
    id: 12,
    title: "Cortina de terasa din sticla",
    category: "Pereti cortina",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/proiecte-cortina-terasa-sticla/WhatsApp%20Image%202026-05-20%20at%2013.22.50.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza2.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza3.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza4.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza5.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza6.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza7.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza8.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza9.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza10.jpeg",
      "/images/proiecte-cortina-terasa-sticla/poza11.jpeg",
    ],
    tags: ["Perete cortina", "Sticla", "Terasa"],
    description: "Sistem perete cortina cu sticla pentru terasa comerciala, prindere punctuala si structura metalica vizibila.",
  },
  {
    id: 13,
    title: "Usi glisante aluminiu",
    category: "Tamplarie aluminiu",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/tamplarie-aluminiu-usi-glisante.jpeg",
      "/images/usi-glisant22.jpeg",
    ],
    tags: ["Usi glisante", "Aluminiu", "Floor-to-ceiling"],
    description: "Sistem de usi glisante din aluminiu cu ridicare, vitrare panoramica floor-to-ceiling, profil slim negru mat.",
  },
  {
    id: 14,
    title: "Usi armonice aluminiu",
    category: "Tamplarie aluminiu",
    location: "Ilfov",
    year: "2026",
    images: [
      "/images/geamuri-armonice.jpeg",
    ],
    tags: ["Usi armonice", "Aluminiu", "Pliabil"],
    description: "Sistem pliant-armonic din aluminiu pentru deschidere totala intre spatiul interior si terasa.",
  },
  {
    id: 15,
    title: "Fatada magazin sticla securizata",
    category: "Sticla securizata",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/fatada-magazin.jpeg",
    ],
    tags: ["Fatada magazin", "Sticla securizata", "Comercial"],
    description: "Vitrina comerciala din sticla securizata cu profil negru mat, vizibilitate maxima si impact vizual puternic.",
  },
  {
    id: 16,
    title: "Usi glisante sticla securizata",
    category: "Sticla securizata",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/usi-glisante33.jpeg",
    ],
    tags: ["Usi glisante", "Sticla", "Fara profil vizibil"],
    description: "Sistem de usi glisante din sticla securizata fara profil vertical vizibil, pentru spatii moderne si luminoase.",
  },
  {
    id: 17,
    title: "Fatada ventilata placare composit",
    category: "Fatade ventilate",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/fatada-ventilata.jpeg",
    ],
    tags: ["Fatada ventilata", "Placare exterioara", "Termoizolatie"],
    description: "Sistem de fatada ventilata cu placare composit, structura de sustinere din aluminiu si finisaj premium.",
  },
  {
    id: 18,
    title: "Perete cortina rezidential",
    category: "Pereti cortina",
    location: "Ilfov",
    year: "2026",
    images: [
      "/images/prete-cortina.jpeg",
    ],
    tags: ["Perete cortina", "Rezidential", "Sticla"],
    description: "Perete cortina din aluminiu si sticla pentru fatada unui imobil rezidential, vitrare completa pe mai multe niveluri.",
  },
  {
    id: 19,
    title: "Pergola cu terasa amenajata",
    category: "Pergole & Terase",
    location: "Ilfov",
    year: "2026",
    images: [
      "/images/pergole-si-terase.jpeg",
    ],
    tags: ["Pergola", "Terasa", "Exterior"],
    description: "Pergola bioclimatica cu lamele reglabile pentru terasa exterioara, protectie solara si integrare estetica cu fatada.",
  },
  {
    id: 20,
    title: "Balustrada sticla cu prindere punctuala",
    category: "Balustrade",
    location: "Bucuresti",
    year: "2026",
    images: [
      "/images/balustrada.jpeg",
    ],
    tags: ["Balustrade sticla", "Prindere punctuala", "Inox"],
    description: "Balustrada din sticla laminata securizata cu sistem de prindere punctuala din inox, aspect transparent si elegant.",
  },
];

const categories = ["Toate", "Balustrade", "Tamplarie aluminiu", "Fatade ventilate", "Sticla securizata", "Pereti cortina", "Pergole & Terase"];

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
      <div className="relative h-72 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
          style={{ backgroundImage: `url(${project.images[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-end p-5">
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#c8a96e] border border-[#c8a96e]/70 px-4 py-2">
            {project.images.length > 1 ? `${project.images.length} foto →` : "Deschide →"}
          </span>
        </div>

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
  const [imgIdx, setImgIdx] = useState(0);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const filtered = filter === "Toate" ? projects : projects.filter((p) => p.category === filter);

  const openProject = (project: (typeof projects)[0]) => {
    setSelected(project);
    setImgIdx(0);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selected) return;
    setImgIdx((i) => (i - 1 + selected.images.length) % selected.images.length);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selected) return;
    setImgIdx((i) => (i + 1) % selected.images.length);
  };

  return (
    <section id="proiecte" className="py-28 bg-[#0a0a0a]">
      <div className="section-container">
        <div ref={titleRef} className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="eyebrow">Referinte</span>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl md:text-[3.25rem] font-extralight text-[#f0f0f0] leading-[1.1]"
            >
              Proiectele <span className="text-gradient">noastre</span>
            </motion.h2>
          </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => openProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

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
              <div className="relative h-64 md:h-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${selected.images[imgIdx]})` }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-[#c8a96e] flex items-center justify-center transition-colors z-10"
                >
                  <X size={16} className="text-white" />
                </button>

                {selected.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImg}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-[#c8a96e] flex items-center justify-center transition-colors z-10"
                    >
                      <ChevronLeft size={18} className="text-white" />
                    </button>
                    <button
                      onClick={nextImg}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-[#c8a96e] flex items-center justify-center transition-colors z-10"
                    >
                      <ChevronRight size={18} className="text-white" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] text-white/50 bg-black/40 px-3 py-1">
                      {imgIdx + 1} / {selected.images.length}
                    </div>
                  </>
                )}
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
