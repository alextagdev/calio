"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  breadcrumbs?: Crumb[];
}

export default function PageHero({ title, subtitle, image, badge, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden flex items-end">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 section-container pb-14 w-full">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 mb-5 flex-wrap"
          >
            <Link href="/" className="text-[10px] tracking-[0.2em] uppercase text-[#555] hover:text-[#c8a96e] transition-colors">
              Acasă
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={10} className="text-[#333]" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-[10px] tracking-[0.2em] uppercase text-[#555] hover:text-[#c8a96e] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#888]">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {badge && (
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-7 h-px bg-[#c8a96e]" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e]">{badge}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl xl:text-6xl font-extralight text-white leading-tight mb-3"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-[#8a8a8a] text-sm md:text-base font-light max-w-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
