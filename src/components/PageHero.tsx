"use client";

import { useState, useEffect } from "react";
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
  imagePosition?: string;
}

type ImgMode = "cover" | "contain" | "pending";

export default function PageHero({ title, subtitle, image, badge, breadcrumbs, imagePosition }: PageHeroProps) {
  const [mode, setMode] = useState<ImgMode>("pending");
  const [position, setPosition] = useState("center");

  useEffect(() => {
    setMode("pending");
    const img = new window.Image();
    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      const isPortrait = ratio < 1.3;
      const isTooSmall = img.naturalWidth < 1100;
      const m: ImgMode = isPortrait || isTooSmall ? "contain" : "cover";
      setMode(m);

      // For very wide landscape images (common problem on subpages),
      // default to a lower focal point so the main subject isn't cropped too aggressively.
      if (imagePosition) {
        setPosition(imagePosition);
      } else if (m === "cover" && ratio > 1.85) {
        setPosition("center 30%");
      } else {
        setPosition("center");
      }
    };
    img.onerror = () => {
      setMode("cover");
      setPosition(imagePosition || "center");
    };
    img.src = image;
  }, [image, imagePosition]);

  return (
    <section className="relative h-[66vh] min-h-[490px] w-full overflow-hidden flex items-end">

      {/* ── Blurred backdrop (visible in contain mode, hidden in cover) ── */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: position,
          filter: "blur(28px) brightness(0.28) saturate(0.7)",
          transform: "scale(1.12)",
          opacity: mode === "contain" ? 1 : 0,
        }}
      />

      {/* ── Main image layer ── */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: mode === "contain" ? "contain" : "cover",
          backgroundPosition: position,
          backgroundRepeat: "no-repeat",
          opacity: mode === "pending" ? 0 : 1,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 section-container pb-14 w-full">
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
