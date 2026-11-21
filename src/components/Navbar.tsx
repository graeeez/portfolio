"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Github, Linkedin, Sun, Moon } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "Showroom", href: "#showroom" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Honors", href: "#honors" },
  { label: "Contact", href: "#contact" },
];

const ELEGANT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLight, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Razor-thin Editorial Scroll Hairline */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-[2px] ${isLight ? "bg-[#1B0D18]/10" : "bg-white/[0.06]"
          }`}
      >
        <motion.div
          style={{ scaleX }}
          className="h-full origin-left bg-gradient-to-r from-[#CE0058] via-[#DF5000] to-[#F79B02]"
        />
      </div>

      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: ELEGANT_EASE }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
          ? isLight
            ? "border-b border-[#1B0D18]/10 bg-[#FAF4EE]/88 py-3.5 backdrop-blur-xl"
            : "border-b border-white/[0.08] bg-[#120912]/85 py-3.5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Editorial Wordmark */}
          <a
            href="#top"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#DF5000]/45 opacity-75 transition-transform duration-500 group-hover:scale-150" />
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${isLight ? "bg-[#DF5000]" : "bg-[#F79B02]"
                  }`}
              />
            </span>
            <div className="flex items-baseline gap-2.5">
              <span
                className={`font-display text-base font-bold tracking-tight transition-colors sm:text-xl ${isLight
                  ? "text-[#1B0D18] group-hover:text-[#CE0058]"
                  : "text-[#FFF5EC] group-hover:text-white"
                  }`}
              >
                Graciella Pastoral
              </span>
              <span
                className={`hidden font-serif text-base italic sm:inline sm:text-lg ${isLight ? "text-[#6E5863]" : "text-[#DAC4BA]/70"
                  }`}
              >
                / Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation — Understated Editorial Links */}
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative py-1 text-[13px] font-normal tracking-wide transition-colors duration-300 ${isLight
                  ? "text-[#5E4A54] hover:text-[#1B0D18]"
                  : "text-[#DAC4BA] hover:text-[#FFF5EC]"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 ${isLight ? "bg-[#CE0058]" : "bg-[#F79B02]"
                    }`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2.5 md:flex">
            {/* Sleek Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
              title={isLight ? "Switch to dark mode" : "Switch to light mode"}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${isLight
                ? "border-[#1B0D18]/15 bg-[#1B0D18]/[0.04] text-[#1B0D18] hover:border-[#CE0058] hover:text-[#CE0058]"
                : "border-white/15 bg-white/[0.04] text-[#F79B02] hover:border-[#F79B02] hover:bg-white/[0.08]"
                }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isLight ? "moon" : "sun"}
                  initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.22 }}
                  className="flex items-center justify-center"
                >
                  {isLight ? (
                    <Moon className="h-3.5 w-3.5" />
                  ) : (
                    <Sun className="h-3.5 w-3.5" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${isLight
                ? "text-[#5E4A54] hover:bg-[#1B0D18]/[0.06] hover:text-[#1B0D18]"
                : "text-[#DAC4BA]/80 hover:bg-white/[0.06] hover:text-[#FFF5EC]"
                }`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${isLight
                ? "text-[#5E4A54] hover:bg-[#1B0D18]/[0.06] hover:text-[#1B0D18]"
                : "text-[#DAC4BA]/80 hover:bg-white/[0.06] hover:text-[#FFF5EC]"
                }`}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className={`group relative ml-1 inline-flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${isLight
                ? "border-[#1B0D18]/20 bg-[#1B0D18] text-[#FAF4EE] hover:border-[#CE0058] hover:bg-[#CE0058]"
                : "border-[#FFF5EC]/20 bg-white/[0.04] text-[#FFF5EC] hover:border-[#F79B02]/70 hover:bg-[#FFF5EC] hover:text-[#120912]"
                }`}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${isLight
                ? "border-[#1B0D18]/15 bg-[#1B0D18]/[0.04] text-[#1B0D18]"
                : "border-white/15 bg-white/[0.04] text-[#F79B02]"
                }`}
            >
              {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${isLight
                ? "border-[#1B0D18]/15 bg-[#1B0D18]/[0.04] text-[#1B0D18] hover:border-[#CE0058]"
                : "border-white/15 bg-white/[0.04] text-[#FFF5EC] hover:border-[#F79B02]/60"
                }`}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: ELEGANT_EASE }}
              className={`mx-4 mt-3 overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl md:hidden ${isLight
                ? "border-[#1B0D18]/12 bg-[#FAF4EE]/98"
                : "border-white/10 bg-[#180C16]/95"
                }`}
            >
              <nav
                className={`flex flex-col divide-y ${isLight ? "divide-[#1B0D18]/10" : "divide-white/[0.06]"
                  }`}
              >
                {NAV_LINKS.map((item, idx) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3.5 text-sm font-medium transition-colors ${isLight
                      ? "text-[#1B0D18] hover:text-[#CE0058]"
                      : "text-[#FFF5EC] hover:text-[#F79B02]"
                      }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`font-mono text-[10px] ${isLight ? "text-[#6E5863]/70" : "text-[#DAC4BA]/50"
                        }`}
                    >
                      0{idx + 1}
                    </span>
                  </a>
                ))}
              </nav>
              <div className="mt-4 grid grid-cols-2 gap-2.5 pt-2">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 rounded-full border py-2.5 text-xs font-medium ${isLight
                    ? "border-[#1B0D18]/20 text-[#1B0D18]"
                    : "border-white/15 text-[#FFF5EC]"
                    }`}
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 rounded-full py-2.5 text-xs font-semibold ${isLight
                    ? "bg-[#1B0D18] text-[#FAF4EE]"
                    : "bg-[#FFF5EC] text-[#120912]"
                    }`}
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
