"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import type { CategoryData } from "@/data/pages";

interface Props {
  data: CategoryData;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function CategoryPageTemplate({ data, breadcrumbs }: Props) {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true });

  return (
    <>
      <PageHero
        title={data.title}
        subtitle={data.intro}
        image={data.heroImage}
        breadcrumbs={breadcrumbs}
      />

      {/* Description */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl font-extralight text-[#c0c0c0] leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section ref={gridRef} className="py-8 pb-28 bg-[#0a0a0a]">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.products.map((product, i) => (
              <motion.div
                key={product.href}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
              >
                <Link
                  href={product.href}
                  className="group block bg-[#111] hover-lift overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4 w-9 h-9 bg-[#c8a96e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={16} className="text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-light text-[#f0f0f0] mb-2 group-hover:text-[#c8a96e] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-[13px] text-[#4a4a4a] leading-relaxed mb-4">
                      {product.short}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-[0.15em] uppercase text-[#555] border border-[#222] px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-0.5 w-0 group-hover:w-full bg-[#c8a96e] transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d] border-t border-[#141414]">
        <div className="section-container flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extralight text-[#f0f0f0] mb-2">
              Nu ești sigur ce produs se potrivește?
            </h2>
            <p className="text-[#4a4a4a] text-sm">
              Consultanții noștri te ajută să alegi soluția optimă pentru proiectul tău.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Link href="/contact" className="btn btn-primary">Solicită Consultanță</Link>
            <Link href="/proiecte" className="btn btn-outline text-[11px]">Proiectele Noastre</Link>
          </div>
        </div>
      </section>
    </>
  );
}
