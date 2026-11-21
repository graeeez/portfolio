"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Sparkles } from "lucide-react";
import { ACHIEVEMENTS, HONORS } from "@/data/portfolio";

const ELEGANT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HonorsSection() {
  const [featuredAward, ...otherAwards] = ACHIEVEMENTS;

  return (
    <section
      id="honors"
      className="relative overflow-hidden border-y border-white/10 bg-[#1C0E18] py-24 text-[#FFF5EC] sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: ELEGANT_EASE }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F79B02]/40 bg-[#281422] px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#F79B02]">
              <Trophy className="h-3.5 w-3.5 text-[#CE0058]" />
              Recognition &amp; Leadership
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#FFF5EC] sm:text-5xl">
              Awards &amp;{" "}
              <span className="text-[#DF5000]">Academic Honors</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#DAC4BA]">
            International presentation honors in South Korea, national
            hackathons, regional IT assemblies, and consistent Dean&apos;s &amp;
            President&apos;s Lists.
          </p>
        </motion.div>

        {/* Spotlight Banner for #1 International Honor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: ELEGANT_EASE }}
          className="mt-10 grid grid-cols-1 overflow-hidden rounded-3xl border border-white/15 bg-[#CE0058] lg:grid-cols-12"
        >
          <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5EC] px-3.5 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider text-[#CE0058]">
                <Sparkles className="h-3 w-3" />
                {featuredAward.highlight}
              </span>
              <span className="font-mono text-xs font-bold text-[#FFF5EC]/80">
                SPOTLIGHT HONOR
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight text-[#FFF5EC] sm:text-4xl">
              {featuredAward.title}
            </h3>
            <p className="mt-2 text-base font-medium text-[#FFF5EC]/90">
              {featuredAward.org}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center bg-[#DF5000] p-7 sm:p-9 lg:col-span-4 lg:items-end">
            <span className="font-display text-6xl font-extrabold tracking-tighter text-[#FFF5EC] sm:text-7xl">
              {featuredAward.year}
            </span>
            <span className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-[#FFF5EC]/90">
              South Korea
            </span>
          </div>
        </motion.div>

        {/* Editorial Horizontal Index List for Competitions & Leadership */}
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {otherAwards.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.04, ease: ELEGANT_EASE }}
              className="group flex flex-col justify-between gap-3 py-5 transition-all duration-200 hover:bg-[#281422]/60 hover:px-4 sm:flex-row sm:items-center"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-24 shrink-0 font-mono text-xs font-bold text-[#F79B02]">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-[#FFF5EC] transition-colors group-hover:text-[#F79B02]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#DAC4BA]">{item.org}</p>
                </div>
              </div>
              <span
                className={`w-fit shrink-0 rounded-full px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FFF5EC] ${
                  idx % 2 === 0 ? "bg-[#DF5000]" : "bg-[#CE0058]"
                }`}
              >
                {item.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Academic Honors Horizontal Ticket Strip */}
        <div className="mt-12">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F79B02] text-[#120910]">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold text-[#FFF5EC]">
                  Academic Honor Roll
                </h3>
                <p className="font-mono text-[11px] text-[#DAC4BA]">
                  University of the Assumption • 2023–2026
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {HONORS.map((h, i) => {
              const bgClass =
                i === 0
                  ? "bg-[#CE0058] text-[#FFF5EC]"
                  : i === 1
                  ? "bg-[#DF5000] text-[#FFF5EC]"
                  : i === 2
                  ? "bg-[#BA0917] text-[#FFF5EC]"
                  : i === 3
                  ? "bg-[#F79B02] text-[#120910]"
                  : "bg-[#281422] text-[#FFF5EC] border border-white/15";

              return (
                <motion.div
                  key={`${h.award}-${h.term}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: ELEGANT_EASE }}
                  className={`flex flex-col justify-between rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1 ${bgClass}`}
                >
                  <Star className="h-4 w-4 fill-current opacity-85" />
                  <div className="mt-4">
                    <span className="block font-display text-sm font-extrabold leading-tight">
                      {h.award}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] opacity-80">
                      {h.term}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
