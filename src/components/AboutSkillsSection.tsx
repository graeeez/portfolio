"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Palette,
  Globe,
  ShieldCheck,
  Sparkles,
  Code2,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import {
  PROFILE,
  EDUCATION,
  TECHNICAL_SKILLS,
  CERTIFICATES,
} from "@/data/portfolio";

const ELEGANT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const DISCIPLINE_META = [
  {
    index: "01",
    color: "#CE0058",
    blurb: "Building fast, responsive, interactive web applications with modern React, Next.js, and 3D motion.",
  },
  {
    index: "02",
    color: "#DF5000",
    blurb: "Crafting cohesive visual identities, clean UI prototypes, and expressive editorial layouts.",
  },
  {
    index: "03",
    color: "#F79B02",
    blurb: "Telling memorable stories through short-film editing, photography, and bold visual infographics.",
  },
];

export default function AboutSkillsSection() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);
  const currentGroup = TECHNICAL_SKILLS[activeDiscipline];
  const currentMeta = DISCIPLINE_META[activeDiscipline];

  return (
    <>
      {/* ABOUT & EDUCATION — ASYMMETRIC EDITORIAL SPREAD */}
      <section id="about" className="relative bg-[#120910] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: ELEGANT_EASE }}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#CE0058]/50 bg-[#1C0E18] px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#F79B02]">
                <Sparkles className="h-3.5 w-3.5 text-[#CE0058]" />
                About Graciella
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#FFF5EC] sm:text-5xl">
                Creativity Meets <span className="text-[#DF5000]">Code</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {PROFILE.languages.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#1C0E18] px-3.5 py-1.5 font-mono text-[11px] font-semibold text-[#FFF5EC]"
                >
                  <Globe className="h-3 w-3 text-[#F79B02]" />
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Asymmetric Top Row */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: ELEGANT_EASE }}
              className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#1C0E18] p-7 sm:p-8 lg:col-span-8"
            >
              <p className="font-display text-xl font-bold leading-snug text-[#FFF5EC] sm:text-2xl">
                &ldquo;{PROFILE.summary}&rdquo;
              </p>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {PROFILE.softSkills.map((skill, idx) => (
                  <span
                    key={skill}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-transform duration-200 hover:-translate-y-0.5 ${
                      idx % 3 === 0
                        ? "bg-[#CE0058] text-[#FFF5EC]"
                        : idx % 3 === 1
                        ? "bg-[#DF5000] text-[#FFF5EC]"
                        : "border border-[#F79B02]/50 bg-[#281422] text-[#F79B02]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Vibrant Interests Vertical Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.08, ease: ELEGANT_EASE }}
              className="flex flex-col justify-between rounded-3xl bg-[#CE0058] p-7 text-[#FFF5EC] lg:col-span-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#FFF5EC]/80">
                  Creative Focus
                </span>
                <Palette className="h-5 w-5 text-[#F79B02]" />
              </div>

              <div className="my-6 space-y-2.5">
                {PROFILE.interests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center justify-between border-b border-white/20 pb-2 font-display text-lg font-extrabold"
                  >
                    <span>{interest}</span>
                    <Heart className="h-4 w-4 text-[#F79B02]" />
                  </div>
                ))}
              </div>

              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#FFF5EC]/80">
                Candaba, Pampanga • PH
              </span>
            </motion.div>
          </div>

          {/* Horizontal Editorial Education Ribbon */}
          <div className="mt-8 rounded-3xl border border-white/12 bg-[#1C0E18] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DF5000] text-[#FFF5EC]">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-extrabold text-[#FFF5EC]">
                Education Timeline
              </h3>
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
              {/* Connecting line on desktop */}
              <div className="pointer-events-none absolute top-3 right-6 left-6 hidden h-px bg-white/15 md:block" />
              {EDUCATION.map((edu) => (
                <div key={edu.period} className="relative pt-1">
                  <span
                    className={`relative z-10 inline-block rounded-full px-3 py-1 font-mono text-[10px] font-bold ${
                      edu.current
                        ? "bg-[#CE0058] text-[#FFF5EC]"
                        : "bg-[#281422] text-[#F79B02]"
                    }`}
                  >
                    {edu.period}
                  </span>
                  <h4 className="mt-3 font-display text-sm font-extrabold text-[#FFF5EC]">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-[#DF5000]">
                    {edu.school}
                  </p>
                  <p className="mt-1 text-[11px] text-[#DAC4BA]/70">
                    {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS (INTERACTIVE EDITORIAL SWITCHER) & CERTIFICATES (LEDGER) */}
      <section id="skills" className="relative bg-[#120910] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: ELEGANT_EASE }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DF5000]/50 bg-[#1C0E18] px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#F79B02]">
              <Code2 className="h-3.5 w-3.5 text-[#DF5000]" />
              Toolkit &amp; Credentials
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#FFF5EC] sm:text-5xl">
              Craft, Tools &amp;{" "}
              <span className="text-[#CE0058]">Certifications</span>
            </h2>
          </motion.div>

          {/* Creative Asymmetric Interactive Discipline Switcher */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Left: Interactive Discipline Selector Tabs */}
            <div className="flex flex-col gap-3 lg:col-span-5">
              {TECHNICAL_SKILLS.map((group, idx) => {
                const isSelected = activeDiscipline === idx;
                const meta = DISCIPLINE_META[idx];
                return (
                  <button
                    key={group.category}
                    type="button"
                    onClick={() => setActiveDiscipline(idx)}
                    className={`group flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-transparent text-[#FFF5EC] shadow-xl"
                        : "border-white/12 bg-[#1C0E18] text-[#DAC4BA] hover:border-white/30 hover:text-[#FFF5EC]"
                    }`}
                    style={
                      isSelected
                        ? { backgroundColor: meta.color }
                        : undefined
                    }
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-2xl font-extrabold ${
                          isSelected ? "text-[#FFF5EC]/90" : "text-[#F79B02]"
                        }`}
                      >
                        {meta.index}
                      </span>
                      <div>
                        <span className="block font-display text-lg font-extrabold">
                          {group.category}
                        </span>
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider ${
                            isSelected ? "text-[#FFF5EC]/80" : "text-[#DAC4BA]/60"
                          }`}
                        >
                          {group.items.length} Core Capabilities
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isSelected
                          ? "translate-x-0.5 -translate-y-0.5 text-[#FFF5EC]"
                          : "opacity-40 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Dynamic Staggered Skill Showcase Stage */}
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#1C0E18] p-7 sm:p-9 lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGroup.category}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: ELEGANT_EASE }}
                  className="flex h-full flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className="rounded-full px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#FFF5EC]"
                        style={{ backgroundColor: currentMeta.color }}
                      >
                        Discipline {currentMeta.index}
                      </span>
                      <span className="font-mono text-xs text-[#DAC4BA]/60">
                        NO PROGRESS BARS • HANDS-ON STACK
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-extrabold text-[#FFF5EC] sm:text-3xl">
                      {currentGroup.category}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#DAC4BA]">
                      {currentMeta.blurb}
                    </p>
                  </div>

                  {/* Oversized Staggered Pill Chips */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {currentGroup.items.map((item, idx) => (
                      <motion.span
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.05,
                          ease: ELEGANT_EASE,
                        }}
                        className="inline-flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#281422] px-5 py-3.5 font-display text-sm font-bold text-[#FFF5EC] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F79B02]"
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: currentMeta.color }}
                        />
                        {item.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Verified Certifications — Editorial Ledger Rows */}
          <div className="mt-14">
            <div className="mb-6 flex items-center justify-between border-b border-white/12 pb-3">
              <h3 className="flex items-center gap-2 font-display text-xl font-extrabold text-[#FFF5EC]">
                <ShieldCheck className="h-5 w-5 text-[#F79B02]" />
                Verified Certifications
              </h3>
              <span className="font-mono text-xs font-semibold text-[#DAC4BA]">
                06 CREDENTIALS
              </span>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
              {CERTIFICATES.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: ELEGANT_EASE }}
                  className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 transition-all duration-200 hover:border-[#CE0058] hover:pl-2"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs font-bold text-[#F79B02]">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-extrabold text-[#FFF5EC] transition-colors group-hover:text-[#CE0058]">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#DAC4BA]">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#455A23] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FFF5EC]">
                    {cert.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
