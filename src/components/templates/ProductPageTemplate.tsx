"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import type { PageData } from "@/data/pages";

interface Props {
  data: PageData;
  breadcrumbs: { label: string; href?: string }[];
}

export default function ProductPageTemplate({ data, breadcrumbs }: Props) {
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true });
  const specsRef = useRef(null);
  const specsInView = useInView(specsRef, { once: true });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true });

  return (
    <>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        image={data.heroImage}
        badge={data.heroBadge}
        breadcrumbs={breadcrumbs}
      />

      {/* Intro */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-3">
              <p className="text-2xl md:text-3xl font-extralight text-[#d0d0d0] leading-relaxed mb-6">
                {data.intro}
              </p>
              <p className="text-[#5a5a5a] leading-relaxed text-sm md:text-base">
                {data.description}
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4">
              <Link href="/contact" className="btn btn-primary w-full justify-center">
                Solicită Ofertă
              </Link>
              <Link href="/contact" className="btn btn-outline w-full justify-center text-[11px]">
                Consultanță gratuită
              </Link>
              <p className="text-[10px] text-[#3a3a3a] text-center">Răspuns în maxim 24h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-20 bg-[#0d0d0d]">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="eyebrow">Caracteristici</span>
            <h2 className="text-3xl md:text-4xl font-extralight text-[#f0f0f0]">
              De ce să alegi <span className="text-gradient">{data.title}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="border border-[#1e1e1e] p-6 hover:border-[#c8a96e]/30 transition-colors duration-400 group"
              >
                <CheckCircle2 size={18} className="text-[#c8a96e] mb-4" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-[#d0d0d0] mb-2 group-hover:text-[#f0f0f0] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-[#4a4a4a] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section ref={specsRef} className="py-20 bg-[#0a0a0a]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Spec table */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={specsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">Specificații tehnice</span>
              <h2 className="text-3xl font-extralight text-[#f0f0f0] mb-8">
                Date tehnice
              </h2>
              <div className="divide-y divide-[#1a1a1a]">
                {data.specs.map((spec, i) => (
                  <div key={spec.label} className="flex items-center justify-between py-4">
                    <span className="text-[11px] tracking-[0.18em] uppercase text-[#4a4a4a]">
                      {spec.label}
                    </span>
                    <span className="text-sm font-light text-[#c8a96e]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={specsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0f0f0f] border border-[#1e1e1e] p-8"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] block mb-4">
                Solicită consultanță
              </span>
              <h3 className="text-2xl font-extralight text-[#f0f0f0] mb-4">
                Vrem să te ajutăm să alegi corect
              </h3>
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">
                Echipa noastră de specialiști este disponibilă pentru a vă oferi o consultanță gratuită
                și o ofertă personalizată pentru proiectul dumneavoastră.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#888]">
                  <CheckCircle2 size={14} className="text-[#c8a96e]" />
                  <span>Consultanță gratuită fără obligații</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#888]">
                  <CheckCircle2 size={14} className="text-[#c8a96e]" />
                  <span>Măsurători la fața locului incluse</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#888]">
                  <CheckCircle2 size={14} className="text-[#c8a96e]" />
                  <span>Ofertă în 24h de la solicitare</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#888]">
                  <CheckCircle2 size={14} className="text-[#c8a96e]" />
                  <span>Garanție până la 5 ani inclusiv</span>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center mt-7">
                Solicită Ofertă Gratuită
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleryRef} className="py-20 bg-[#0d0d0d]">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="eyebrow">Galerie</span>
            <h2 className="text-3xl font-extralight text-[#f0f0f0]">Imagini produs</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden group cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                style={{ minHeight: i === 0 ? "320px" : "160px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="section-container text-center">
          <span className="eyebrow" style={{ textAlign: "center" }}>Următorul pas</span>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#f0f0f0] mb-4">
            Pornești un proiect?
          </h2>
          <p className="text-[#4a4a4a] text-sm mb-8 max-w-md mx-auto">
            Contactează-ne astăzi pentru o consultanță gratuită și o ofertă personalizată.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Solicită Ofertă
            </Link>
            <Link href="/proiecte" className="btn btn-outline">
              Vezi Proiectele Noastre
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
