"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBannerProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ParallaxBanner({
  image,
  title,
  subtitle,
  ctaText,
  ctaHref,
}: ParallaxBannerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["−12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-[55vh] min-h-[380px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax image */}
      <motion.div
        aria-hidden
        style={{
          y,
          position: "absolute",
          top: "-14%",
          bottom: "-14%",
          left: 0,
          right: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
          style={{ textAlign: "center" }}
        >
          {subtitle}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl xl:text-6xl font-extralight text-white leading-[1.1] max-w-4xl mx-auto whitespace-pre-line"
        >
          {title}
        </motion.h2>

        {ctaText && ctaHref && (
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            href={ctaHref}
            className="btn btn-outline inline-flex mt-10"
          >
            {ctaText}
          </motion.a>
        )}
      </div>
    </section>
  );
}
