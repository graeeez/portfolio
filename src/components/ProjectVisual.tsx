"use client";

import {
  ShieldCheck,
  Waves,
  Ticket,
  BarChart3,
  UtensilsCrossed,
  CheckCircle2,
  Sparkles,
  Flame,
  Globe,
} from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";

interface ProjectVisualProps {
  theme: ProjectItem["visualTheme"];
  displayUrl?: string;
  compact?: boolean;
}

function BrowserChrome({ displayUrl }: { displayUrl?: string }) {
  if (!displayUrl) return null;
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-[#120912] px-3 py-1.5">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#CE0058]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#DF5000]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F79B02]" />
      </div>
      <div className="flex items-center gap-1 rounded-md bg-[#271526] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#FFF5EB]/90">
        <Globe className="h-2.5 w-2.5 text-[#F79B02]" />
        {displayUrl}
      </div>
      <span className="w-6" />
    </div>
  );
}

export default function ProjectVisual({
  theme,
  displayUrl,
  compact = false,
}: ProjectVisualProps) {
  const heightClass = compact ? "h-36" : "h-52";

  if (theme === "dormchef") {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/15">
        <BrowserChrome displayUrl={displayUrl} />
        <div
          className={`relative flex ${heightClass} w-full items-center justify-center overflow-hidden bg-[#DF5000] p-4 text-[#FFF5EB]`}
        >
          <div className="pointer-events-none absolute top-0 right-0 h-14 w-14 bg-[#CE0058]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-9 w-16 bg-[#F79B02]" />

          <div className="relative z-10 w-full max-w-[260px] rounded-xl border border-white/20 bg-[#1C0F1C] p-3.5 text-[#FFF5EB] shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 font-display text-xs font-extrabold text-[#FFF5EB]">
                <UtensilsCrossed className="h-3.5 w-3.5 text-[#F79B02]" /> DORMCHEF
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-[#CE0058] px-2 py-0.5 font-mono text-[9px] font-bold text-white">
                <Flame className="h-2.5 w-2.5" /> 10 MIN
              </span>
            </div>
            <p className="text-xs font-bold text-[#FFF5EB]">
              Garlic Rice Cooker Omelette
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {["₱45 Budget", "Rice Cooker", "3 Items"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-md bg-[#271526] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#F79B02]"
                >
                  <Sparkles className="h-2.5 w-2.5 text-[#DF5000]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "raite") {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/15">
        <BrowserChrome displayUrl={displayUrl} />
        <div
          className={`relative flex ${heightClass} w-full items-center justify-center overflow-hidden bg-[#CE0058] p-4 text-[#FFF5EB]`}
        >
          <div className="pointer-events-none absolute top-0 left-0 h-10 w-24 bg-[#F79B02]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-10 w-10 bg-[#455A23]" />

          <div className="relative z-10 w-full max-w-[260px] rounded-xl border border-white/20 bg-[#1C0F1C] p-3.5 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
            <div className="mb-2.5 flex items-center justify-between border-b border-dashed border-white/20 pb-2">
              <span className="inline-flex items-center gap-1.5 font-display text-xs font-extrabold text-[#FFF5EB]">
                <Ticket className="h-3.5 w-3.5 text-[#F79B02]" /> REGISTRATION
              </span>
              <span className="rounded-md bg-[#DF5000] px-2 py-0.5 font-mono text-[9px] font-bold text-white">
                PORTAL
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="block font-mono text-[9px] font-semibold uppercase text-[#D9C3B8]">
                  Delegate Pass
                </span>
                <span className="font-display text-xs font-extrabold text-[#FFF5EB]">
                  Confirmed &amp; Ready
                </span>
              </div>
              <CheckCircle2 className="h-6 w-6 text-[#F79B02]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "evaluate") {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/15">
        <BrowserChrome displayUrl={displayUrl} />
        <div
          className={`relative flex ${heightClass} w-full items-center justify-center overflow-hidden bg-[#F79B02] p-4 text-[#120912]`}
        >
          <div className="pointer-events-none absolute right-0 bottom-0 h-12 w-18 bg-[#BA0917]" />

          <div className="relative z-10 w-full max-w-[260px] rounded-xl border border-white/20 bg-[#1C0F1C] p-3.5 text-[#FFF5EB] shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 font-display text-xs font-extrabold text-[#FFF5EB]">
                <BarChart3 className="h-3.5 w-3.5 text-[#DF5000]" /> COFFEESHOP UI
              </span>
              <span className="rounded-md bg-[#CE0058] px-2 py-0.5 font-mono text-[9px] font-bold text-white">
                LIVE MENU
              </span>
            </div>
            <div className="flex h-14 items-end gap-1.5 px-1">
              {[48, 72, 60, 92, 84, 98].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-sm ${
                    i >= 4
                      ? "bg-[#CE0058]"
                      : i >= 2
                      ? "bg-[#DF5000]"
                      : "bg-[#F79B02]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "mapatunai") {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/15">
        <BrowserChrome displayUrl={displayUrl} />
        <div
          className={`relative flex ${heightClass} w-full items-center justify-center overflow-hidden bg-[#BA0917] p-4 text-[#FFF5EB]`}
        >
          <div className="pointer-events-none absolute top-0 right-0 h-14 w-14 bg-[#DF5000]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-7 w-20 bg-[#F79B02]" />

          <div className="relative z-10 w-full max-w-[260px] rounded-xl border border-white/20 bg-[#1C0F1C] p-3.5 text-[#FFF5EB] shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-md bg-[#F79B02] px-2 py-0.5 font-mono text-[10px] font-bold text-[#120912]">
                <ShieldCheck className="h-3 w-3" /> NEXT.JS BLOG
              </span>
              <span className="font-mono text-[10px] font-semibold text-[#D9C3B8]">
                EDITORIAL
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-4/5 rounded-sm bg-white/30" />
              <div className="h-2 w-3/5 rounded-sm bg-white/15" />
            </div>
            <div className="mt-3">
              <div className="mb-1 flex justify-between font-mono text-[10px] text-[#D9C3B8]">
                <span>Read Time</span>
                <span className="font-bold text-[#F79B02]">Fast SSR</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-sm bg-[#271526]">
                <div className="h-full w-[92%] bg-[#DF5000]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // swampwatch / personalities
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15">
      <BrowserChrome displayUrl={displayUrl} />
      <div
        className={`relative flex ${heightClass} w-full items-center justify-center overflow-hidden bg-[#455A23] p-4 text-[#FFF5EB]`}
      >
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 flex h-8 items-end">
          <div className="h-5 flex-1 bg-[#CE0058]" />
          <div className="h-8 flex-1 bg-[#DF5000]" />
          <div className="h-4 flex-1 bg-[#F79B02]" />
          <div className="h-6 flex-1 bg-[#BA0917]" />
        </div>

        <div className="relative z-10 w-full max-w-[260px] rounded-xl border border-white/20 bg-[#1C0F1C] p-3.5 text-[#FFF5EB] shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#F79B02]">
              <Waves className="h-3.5 w-3.5" /> PERSONALITIES
            </span>
            <span className="rounded-md bg-[#CE0058] px-2 py-0.5 font-mono text-[9px] font-bold text-white">
              LIVE
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center">
            {[
              { label: "UI", val: "Cards" },
              { label: "STACK", val: "React" },
              { label: "HOST", val: "Vercel" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-[#271526] px-1.5 py-2"
              >
                <span className="block font-mono text-[8px] font-bold text-[#D9C3B8]">
                  {s.label}
                </span>
                <span className="mt-0.5 block font-display text-xs font-extrabold text-[#FFF5EB]">
                  {s.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
