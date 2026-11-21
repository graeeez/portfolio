"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import { PROFILE, PROJECTS } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const ELEGANT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FEATURED_CARDS = PROJECTS.slice(0, 5).map((p, idx) => ({
  id: p.id,
  index: `0${idx + 1}`,
  title: p.title,
  tag: p.category,
  year: p.year,
  liveUrl: p.liveUrl,
  displayUrl: p.displayUrl,
  accent:
    idx % 3 === 0 ? "#CE0058" : idx % 3 === 1 ? "#DF5000" : "#F79B02",
}));

export default function HeroSection() {
  const [carouselStart, setCarouselStart] = useState(0);
  const [activeGlow, setActiveGlow] = useState("#F79B02");
  const { isLight } = useTheme();
  const portraitRef = useRef<HTMLDivElement>(null);

  // Subtle interactive 3D tilt for the gallery portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 180,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 26,
  });

  const handlePortraitMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = portraitRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePortraitLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const visibleCards = [0, 1, 2].map(
    (offset) => FEATURED_CARDS[(carouselStart + offset) % FEATURED_CARDS.length]
  );

  const handlePrev = () => {
    setCarouselStart(
      (prev) => (prev - 1 + FEATURED_CARDS.length) % FEATURED_CARDS.length
    );
  };

  const handleNext = () => {
    setCarouselStart((prev) => (prev + 1) % FEATURED_CARDS.length);
  };

  return (
    <section
      id="top"
      className={`relative flex min-h-screen flex-col justify-between overflow-hidden pt-24 pb-8 transition-colors duration-500 ${
        isLight ? "bg-[#FAF4EE] text-[#1B0D18]" : "bg-[#120912] text-[#FFF5EC]"
      }`}
    >
      {/* Subtle Ambient Warmth Behind Composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{ opacity: isLight ? [0.16, 0.24, 0.16] : [0.22, 0.32, 0.22] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 right-[10%] h-[520px] w-[520px] rounded-full blur-[140px]"
          style={{
            background: `radial-gradient(circle, ${activeGlow}33 0%, rgba(206,0,88,0.12) 45%, transparent 72%)`,
          }}
        />
        <div
          className="absolute bottom-[-120px] left-[4%] h-[420px] w-[420px] rounded-full blur-[130px]"
          style={{
            background: isLight
              ? "radial-gradient(circle, rgba(247,155,2,0.16) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(223,80,0,0.16) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* 3D Sculptural Hanging Pendant Lamps & Volumetric Cones */}
      <HeroScene glowColor={activeGlow} isLight={isLight} />

      {/* Left Vertical Social Rail (Desktop XL) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="pointer-events-auto fixed top-1/2 left-5 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 2xl:flex"
      >
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className={`transition-colors ${
            isLight
              ? "text-[#5E4A54] hover:text-[#CE0058]"
              : "text-[#DAC4BA]/70 hover:text-[#F79B02]"
          }`}
        >
          <Linkedin className="h-3.5 w-3.5" />
        </a>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className={`transition-colors ${
            isLight
              ? "text-[#5E4A54] hover:text-[#CE0058]"
              : "text-[#DAC4BA]/70 hover:text-[#F79B02]"
          }`}
        >
          <Github className="h-3.5 w-3.5" />
        </a>
        <span
          className={`h-16 w-px ${isLight ? "bg-[#1B0D18]/15" : "bg-white/15"}`}
        />
        <span
          className={`font-mono text-[9px] tracking-[0.26em] [writing-mode:vertical-rl] rotate-180 ${
            isLight ? "text-[#5E4A54]/70" : "text-[#DAC4BA]/55"
          }`}
        >
          PORTFOLIO — 2026
        </span>
      </motion.div>

      {/* Main Editorial Split Stage */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-6 pb-8 sm:px-8 lg:pt-8">
        {/* Subtle Top Editorial Index Line */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: ELEGANT_EASE }}
          className={`mb-8 flex items-center justify-between border-b pb-3.5 lg:mb-10 ${
            isLight ? "border-[#1B0D18]/12" : "border-white/[0.08]"
          }`}
        >
          <span
            className={`font-mono text-[10px] tracking-[0.22em] uppercase ${
              isLight ? "text-[#5E4A54]" : "text-[#DAC4BA]/70"
            }`}
          >
            01 / Creative Front-End &amp; Visual Design
          </span>
          <span
            className={`hidden font-mono text-[10px] tracking-[0.22em] uppercase sm:inline ${
              isLight ? "text-[#5E4A54]/80" : "text-[#DAC4BA]/60"
            }`}
          >
            Candaba, Pampanga — Philippines
          </span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT COLUMN — Refined Editorial Typography */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: ELEGANT_EASE }}
              className="mb-5 flex items-center gap-3"
            >
              <span
                className={`h-px w-8 ${
                  isLight ? "bg-[#DF5000]" : "bg-[#F79B02]"
                }`}
              />
              <span
                className={`font-mono text-[11px] font-medium tracking-[0.2em] uppercase ${
                  isLight ? "text-[#DF5000]" : "text-[#F79B02]"
                }`}
              >
                Graciella E. Pastoral · BSIT &apos;26
              </span>
            </motion.div>

            {/* Masked Line-by-Line Editorial Headline */}
            <h1
              className={`font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-6xl lg:text-[4.5rem] ${
                isLight ? "text-[#1B0D18]" : "text-[#FFF5EC]"
              }`}
            >
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.2, ease: ELEGANT_EASE }}
                  className="block"
                >
                  Crafting
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.3, ease: ELEGANT_EASE }}
                  className={`block font-serif text-[3.3rem] font-normal italic leading-[0.98] tracking-normal sm:text-[4.6rem] lg:text-[5.4rem] ${
                    isLight ? "text-[#CE0058]" : "text-[#F79B02]"
                  }`}
                >
                  luminous
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.4, ease: ELEGANT_EASE }}
                  className="block"
                >
                  web{" "}
                  <span
                    className={
                      isLight ? "text-[#1B0D18]/90" : "text-[#FFF5EC]/90"
                    }
                  >
                    interfaces
                  </span>
                  <span className={isLight ? "text-[#DF5000]" : "text-[#CE0058]"}>
                    .
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.48, ease: ELEGANT_EASE }}
              className={`mt-6 max-w-lg text-sm font-light leading-[1.75] sm:text-[15px] ${
                isLight ? "text-[#5E4A54]" : "text-[#DAC4BA]"
              }`}
            >
              Fourth-year BSIT front-end developer &amp; visual designer at the{" "}
              <span
                className={`font-medium ${
                  isLight ? "text-[#1B0D18]" : "text-[#FFF5EC]"
                }`}
              >
                University of the Assumption
              </span>
              — pairing expressive color, quiet clarity, and tactile 3D craft to
              build memorable digital spaces.
            </motion.p>

            {/* Sleek Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.56, ease: ELEGANT_EASE }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <a
                href="#showroom"
                className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full py-3.5 pr-5 pl-6 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isLight
                    ? "bg-[#1B0D18] text-[#FAF4EE] hover:bg-[#CE0058]"
                    : "bg-[#FFF5EC] text-[#120912] hover:bg-[#F79B02]"
                }`}
              >
                <span>Enter 3D Showroom</span>
                <span
                  className={`relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full ${
                    isLight
                      ? "bg-[#FAF4EE] text-[#1B0D18]"
                      : "bg-[#120912] text-[#FFF5EC]"
                  }`}
                >
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5" />
                  <ArrowUpRight className="absolute h-3.5 w-3.5 -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                </span>
              </a>

              <a
                href="#projects"
                className={`group relative inline-flex items-center gap-2 py-2 text-xs font-medium tracking-wider uppercase transition-colors ${
                  isLight
                    ? "text-[#1B0D18]/85 hover:text-[#CE0058]"
                    : "text-[#FFF5EC]/85 hover:text-[#F79B02]"
                }`}
              >
                <span>Selected Works</span>
                <span
                  className={`font-mono text-[10px] ${
                    isLight ? "text-[#5E4A54]/75" : "text-[#DAC4BA]/60"
                  }`}
                >
                  (05)
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 transition-all duration-300 ${
                    isLight
                      ? "bg-[#1B0D18]/25 group-hover:bg-[#CE0058]"
                      : "bg-white/25 group-hover:bg-[#F79B02]"
                  }`}
                />
              </a>
            </motion.div>

            {/* Quiet Editorial Credentials Strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.66, ease: ELEGANT_EASE }}
              className={`mt-10 grid max-w-lg grid-cols-1 gap-5 border-t pt-5 sm:grid-cols-2 ${
                isLight ? "border-[#1B0D18]/12" : "border-white/[0.08]"
              }`}
            >
              <div>
                <p
                  className={`font-mono text-[10px] tracking-[0.18em] uppercase ${
                    isLight ? "text-[#5E4A54]/80" : "text-[#DAC4BA]/55"
                  }`}
                >
                  International Honor
                </p>
                <p
                  className={`mt-1 text-xs font-medium ${
                    isLight ? "text-[#1B0D18]" : "text-[#FFF5EC]"
                  }`}
                >
                  Best Presenter — INNOTECHBIZ &apos;26
                </p>
                <p
                  className={`mt-0.5 text-[11px] ${
                    isLight ? "text-[#5E4A54]" : "text-[#DAC4BA]/70"
                  }`}
                >
                  George Mason Univ., South Korea
                </p>
              </div>
              <div>
                <p
                  className={`font-mono text-[10px] tracking-[0.18em] uppercase ${
                    isLight ? "text-[#5E4A54]/80" : "text-[#DAC4BA]/55"
                  }`}
                >
                  Leadership &amp; Merit
                </p>
                <p
                  className={`mt-1 text-xs font-medium ${
                    isLight ? "text-[#1B0D18]" : "text-[#FFF5EC]"
                  }`}
                >
                  SSITE UA Director for Comms
                </p>
                <p
                  className={`mt-0.5 text-[11px] ${
                    isLight ? "text-[#5E4A54]" : "text-[#DAC4BA]/70"
                  }`}
                >
                  5× Academic Lister • 6 Interactive Rooms
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Commanding Square Gallery Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.25, ease: ELEGANT_EASE }}
            className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
          >
            <div
              ref={portraitRef}
              onMouseMove={handlePortraitMove}
              onMouseLeave={handlePortraitLeave}
              style={{ perspective: 1000 }}
              className="relative"
            >
              {/* Soft Studio Aura Halo Behind Square */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-2xl opacity-60 blur-2xl transition-colors duration-700"
                style={{
                  background: `radial-gradient(circle at 50% 35%, ${activeGlow}38, rgba(206,0,88,0.16) 55%, transparent 78%)`,
                }}
              />

              {/* Outer Architectural Hairline Offset Square Frame */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-3 -right-3 bottom-3 left-3 hidden rounded-xl border sm:block ${
                  isLight ? "border-[#1B0D18]/18" : "border-[#FFF5EC]/15"
                }`}
              />

              {/* Interactive Tilting Square Portrait Card */}
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className={`group relative aspect-square w-[320px] overflow-hidden rounded-xl border p-2.5 sm:w-[400px] lg:w-[440px] ${
                  isLight
                    ? "border-[#1B0D18]/15 bg-[#FFFFFF] shadow-[0_28px_70px_rgba(27,13,24,0.14)]"
                    : "border-[#FFF5EC]/20 bg-[#1B0D18] shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
                }`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#FAF6F2]">
                  {/* Studio Portrait Image */}
                  <motion.img
                    src="/images/graciella.jpg"
                    alt="Graciella E. Pastoral"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1.01 }}
                    transition={{ duration: 1.3, ease: ELEGANT_EASE }}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Warm Editorial Bottom Vignette Blending Blazer */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#120912]/88 via-[#120912]/32 to-transparent"
                  />

                  {/* Subtle Warm Lamp Reflection Top-Right */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#F79B02]/12 mix-blend-multiply"
                  />

                  {/* Minimal Editorial Caption Plate Tucked Inside Frame */}
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                    <div>
                      <p className="font-serif text-lg italic leading-none text-[#FFF5EC]">
                        Graciella Pastoral
                      </p>
                      <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-[#DAC4BA]/90 uppercase">
                        Front-End &amp; UI Craft
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#120912]/65 px-2.5 py-1 font-mono text-[9px] tracking-wider text-[#F79B02] backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F79B02]" />
                      AVAILABLE
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Dock — Sleek Editorial Project Index */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.6, ease: ELEGANT_EASE }}
        className="relative z-10 mx-auto mt-4 w-full max-w-7xl px-5 sm:px-8"
      >
        <div
          className={`grid grid-cols-1 items-end gap-8 border-t pt-6 lg:grid-cols-12 ${
            isLight ? "border-[#1B0D18]/12" : "border-white/[0.08]"
          }`}
        >
          {/* Bottom-Left Editorial Stat */}
          <div className="flex items-end justify-between lg:col-span-3 lg:block">
            <div>
              <div
                className={`flex items-baseline gap-1 font-serif text-5xl font-normal italic leading-none sm:text-6xl ${
                  isLight ? "text-[#1B0D18]" : "text-[#FFF5EC]"
                }`}
              >
                <span>15</span>
                <span className="font-display text-2xl font-light not-italic text-[#DF5000]">
                  +
                </span>
              </div>
              <p
                className={`mt-2 max-w-[200px] text-[11px] leading-relaxed ${
                  isLight ? "text-[#5E4A54]" : "text-[#DAC4BA]/75"
                }`}
              >
                Shipped web apps, visual systems &amp; 6× academic recognitions.
              </p>
            </div>

            {/* Mobile Carousel Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous featured project"
                className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                  isLight
                    ? "border-[#1B0D18]/20 text-[#1B0D18] hover:border-[#CE0058] hover:text-[#CE0058]"
                    : "border-white/15 text-[#FFF5EC] hover:border-[#F79B02] hover:text-[#F79B02]"
                }`}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next featured project"
                className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                  isLight
                    ? "border-[#1B0D18]/20 text-[#1B0D18] hover:border-[#CE0058] hover:text-[#CE0058]"
                    : "border-white/15 text-[#FFF5EC] hover:border-[#F79B02] hover:text-[#F79B02]"
                }`}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom-Right Sleek Project Index Rail */}
          <div className="lg:col-span-9">
            <div className="mb-3 hidden items-center justify-between lg:flex">
              <span
                className={`font-mono text-[10px] tracking-[0.22em] uppercase ${
                  isLight ? "text-[#5E4A54]/80" : "text-[#DAC4BA]/65"
                }`}
              >
                Featured Index — Hover to shift studio lighting
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous featured project"
                  className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                    isLight
                      ? "border-[#1B0D18]/18 bg-white/70 text-[#1B0D18] hover:border-[#CE0058] hover:text-[#CE0058]"
                      : "border-white/12 bg-white/[0.02] text-[#FFF5EC] hover:border-[#F79B02] hover:text-[#F79B02]"
                  }`}
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next featured project"
                  className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                    isLight
                      ? "border-[#1B0D18]/18 bg-white/70 text-[#1B0D18] hover:border-[#CE0058] hover:text-[#CE0058]"
                      : "border-white/12 bg-white/[0.02] text-[#FFF5EC] hover:border-[#F79B02] hover:text-[#F79B02]"
                  }`}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleCards.map((card) => (
                  <motion.a
                    key={card.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: ELEGANT_EASE }}
                    href={card.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveGlow(card.accent)}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border px-4 py-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${
                      isLight
                        ? "border-[#1B0D18]/12 bg-white/80 shadow-[0_8px_24px_rgba(27,13,24,0.04)] hover:border-[#1B0D18]/28 hover:bg-white"
                        : "border-white/[0.09] bg-white/[0.025] hover:border-white/25 hover:bg-white/[0.055]"
                    }`}
                  >
                    {/* Subtle Accent Top Line on Hover */}
                    <span
                      className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                      style={{ backgroundColor: card.accent }}
                    />

                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] tracking-[0.18em] uppercase ${
                          isLight ? "text-[#5E4A54]" : "text-[#DAC4BA]/60"
                        }`}
                      >
                        {card.index} · {card.tag}
                      </span>
                      <ArrowUpRight
                        className={`h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isLight
                            ? "text-[#5E4A54]/70 group-hover:text-[#1B0D18]"
                            : "text-[#DAC4BA]/50 group-hover:text-[#FFF5EC]"
                        }`}
                      />
                    </div>

                    <div className="mt-2.5 flex items-baseline justify-between gap-2">
                      <span
                        className={`truncate font-display text-[15px] font-semibold transition-colors ${
                          isLight
                            ? "text-[#1B0D18] group-hover:text-[#CE0058]"
                            : "text-[#FFF5EC] group-hover:text-white"
                        }`}
                      >
                        {card.title}
                      </span>
                      <span
                        className="h-2 w-2 shrink-0 rounded-full opacity-75 transition-transform duration-300 group-hover:scale-125 group-hover:opacity-100"
                        style={{ backgroundColor: card.accent }}
                      />
                    </div>

                    <span
                      className={`mt-1 truncate font-mono text-[10px] ${
                        isLight ? "text-[#5E4A54]/75" : "text-[#DAC4BA]/55"
                      }`}
                    >
                      {card.displayUrl}
                    </span>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
