"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { navItems, utilityLinks } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b border-[#ffffff06] transition-all duration-500 ${
          scrolled ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100 translate-y-0"
        }`}
        style={{ background: "rgba(6,6,6,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="section-container flex items-center justify-between h-9">
          {/* Left — contact info */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+40721000000"
              className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] text-[#4a4a4a] hover:text-[#c8a96e] transition-colors"
            >
              <Phone size={10} />
              +40 721 000 000
            </a>
            <span className="w-px h-3 bg-[#222]" />
            <a
              href="mailto:contact@calio.ro"
              className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] text-[#4a4a4a] hover:text-[#c8a96e] transition-colors"
            >
              <Mail size={10} />
              contact@calio.ro
            </a>
          </div>

          {/* Right — utility links */}
          <div className="flex items-center gap-1 ml-auto">
            {utilityLinks.map((link, i) => (
              <span key={link.label} className="flex items-center">
                {i > 0 && <span className="w-px h-3 bg-[#222] mx-2" />}
                <Link
                  href={link.href}
                  className="text-[10px] tracking-[0.2em] uppercase text-[#4a4a4a] hover:text-[#c8a96e] transition-colors duration-200 py-1"
                >
                  {link.label}
                </Link>
              </span>
            ))}
            <span className="w-px h-3 bg-[#222] mx-2" />
            <Link
              href="/contact"
              className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] hover:text-[#e8d5a3] transition-colors duration-200 py-1"
            >
              Solicită Ofertă →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main navbar ─────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "top-0 py-3.5 glass shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            : "top-9 py-4 bg-[#080808]/80 backdrop-blur-md border-b border-[#ffffff08]"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0 mr-8">
            <span className="text-xl font-light tracking-[0.35em] text-[#f5f5f0]">CALIO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] group-hover:scale-125 transition-transform duration-300" />
          </Link>

          {/* Desktop nav — product categories only */}
          <nav className="hidden xl:flex items-center gap-0 flex-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href ?? "#"}
                    className="flex items-center gap-1 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-[#7a7a7a] hover:text-[#f5f5f0] transition-colors duration-250 whitespace-nowrap"
                  >
                    {item.label}
                    <ChevronDown
                      size={9}
                      className={`transition-transform duration-300 mt-px ${openDropdown === item.label ? "rotate-180 text-[#c8a96e]" : ""}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 3 }}
                        transition={{ duration: 0.18 }}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                        className="absolute top-full left-0 min-w-[270px] bg-[#0c0c0c] border border-[#1e1e1e] shadow-[0_20px_60px_rgba(0,0,0,0.6)] pt-1.5 pb-2 z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col px-5 py-3 hover:bg-[#161616] transition-colors group/item border-b border-[#111] last:border-0"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className="text-[12px] text-[#c0c0c0] group-hover/item:text-[#c8a96e] transition-colors font-medium">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="text-[10px] text-[#3a3a3a] mt-0.5 leading-snug">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                        <div className="mx-5 mt-2 pt-2 border-t border-[#1a1a1a]">
                          <Link
                            href={item.href ?? "#"}
                            className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] hover:text-[#e8d5a3] transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            Vezi toate →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  className="px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-[#7a7a7a] hover:text-[#f5f5f0] transition-colors duration-250 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA — only visible when scrolled (top bar hidden) */}
          <Link
            href="/contact"
            className={`hidden xl:inline-flex btn btn-gold-outline text-[10px] h-9 px-5 flex-shrink-0 transition-all duration-500 ${
              scrolled ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none translate-x-2"
            }`}
          >
            Solicită Ofertă
          </Link>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden text-[#f5f5f0] p-1 ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile menu ─────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#080808] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a]">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <span className="text-xl font-light tracking-[0.35em] text-[#f5f5f0]">CALIO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
              </Link>
              <button onClick={() => setMenuOpen(false)} className="text-[#555] hover:text-[#f5f5f0] transition-colors">
                <X size={22} />
              </button>
            </div>

            <div className="px-6 py-4">
              {/* Product categories */}
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-[#141414]">
                  {item.children ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-4 text-[12px] tracking-[0.22em] uppercase text-[#c0c0c0] hover:text-[#c8a96e] transition-colors"
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180 text-[#c8a96e]" : "text-[#444]"}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-4 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block py-2 text-[13px] text-[#555] hover:text-[#c8a96e] transition-colors"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className="block py-4 text-[12px] tracking-[0.22em] uppercase text-[#c0c0c0] hover:text-[#c8a96e] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Separator */}
              <div className="my-2 border-b border-[#1e1e1e]" />

              {/* Utility links */}
              {utilityLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-3.5 text-[12px] tracking-[0.22em] uppercase text-[#555] hover:text-[#c8a96e] transition-colors border-b border-[#141414]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Contact info */}
              <div className="py-4 flex flex-col gap-3 border-b border-[#141414]">
                <a href="tel:+40721000000" className="flex items-center gap-2 text-[12px] text-[#444] hover:text-[#c8a96e] transition-colors">
                  <Phone size={12} /> +40 721 000 000
                </a>
                <a href="mailto:contact@calio.ro" className="flex items-center gap-2 text-[12px] text-[#444] hover:text-[#c8a96e] transition-colors">
                  <Mail size={12} /> contact@calio.ro
                </a>
              </div>

              <div className="pt-5">
                <Link
                  href="/contact"
                  className="btn btn-gold-outline w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Solicită Ofertă
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
