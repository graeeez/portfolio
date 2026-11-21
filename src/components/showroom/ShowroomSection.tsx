"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { SHOWROOM_ROOMS } from "@/data/showroomRooms";
import ProjectSidePanel from "./ProjectSidePanel";
import ShowroomLoader from "./ShowroomLoader";

const ShowroomCanvas = dynamic(() => import("./ShowroomCanvas"), {
  ssr: false,
});

const ELEGANT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// 7 Stops: 0 = Intro Overview, 1..6 = Rooms 01..06 along the horizontal gallery
const TOTAL_STOPS = SHOWROOM_ROOMS.length + 1;
const STOP_LABELS = [
  { id: "intro", label: "Overview", short: "00" },
  ...SHOWROOM_ROOMS.map((r, i) => ({
    id: r.id,
    label: r.title,
    short: `0${i + 1}`,
  })),
];

/**
 * Horizontal Scroll-Driven 3D Showroom Section
 * - Full-bleed sticky viewport glides horizontally left-to-right across all 6 rooms
 * - Driven smoothly by native scroll, trackpad, touch swipe, and ArrowLeft/Right/Up/Down keys
 * - Bottom horizontal progress bar with clickable room dots
 */
export default function ShowroomSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollProgressRef = useRef(0);

  const [progressUI, setProgressUI] = useState(0);
  const [activeStopIndex, setActiveStopIndex] = useState(0);
  const [focusedRoomIndex, setFocusedRoomIndex] = useState<number | null>(null);
  const [inShowroomView, setInShowroomView] = useState(false);

  const scrollToStop = useCallback((stopIdx: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(TOTAL_STOPS - 1, stopIdx));
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollableDistance = el.offsetHeight - window.innerHeight;
    const targetScrollY =
      sectionTop + (clamped / (TOTAL_STOPS - 1)) * Math.max(0, scrollableDistance);

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    let rafId = 0;

    const updateScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const raw = -rect.top / scrollable;
      const clamped = Math.max(0, Math.min(1, raw));
      scrollProgressRef.current = clamped;

      const isVisible = rect.top <= 40 && rect.bottom >= window.innerHeight - 40;
      setInShowroomView(isVisible);
      setProgressUI(clamped);

      const stopFloat = clamped * (TOTAL_STOPS - 1);
      const nearestStop = Math.round(stopFloat);
      setActiveStopIndex(nearestStop);

      if (nearestStop >= 1 && Math.abs(stopFloat - nearestStop) < 0.34) {
        setFocusedRoomIndex(nearestStop - 1);
      } else {
        setFocusedRoomIndex(null);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Keyboard navigation: ArrowRight/ArrowDown/PageDown & ArrowLeft/ArrowUp/PageUp
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!inShowroomView) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") {
        if (activeStopIndex < TOTAL_STOPS - 1) {
          e.preventDefault();
          scrollToStop(activeStopIndex + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        if (activeStopIndex > 0) {
          e.preventDefault();
          scrollToStop(activeStopIndex - 1);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [inShowroomView, activeStopIndex, scrollToStop]);

  const focusedRoom =
    focusedRoomIndex !== null ? SHOWROOM_ROOMS[focusedRoomIndex] : null;
  const showIntroOverlay = progressUI < 0.065;

  return (
    <section
      id="showroom"
      ref={sectionRef}
      className="relative h-[740vh] w-full bg-[#120912]"
    >
      {/* Full-Bleed Sticky 100vh Horizontal Showroom Viewport */}
      <div className="showroom-sticky-shell sticky top-0 h-screen w-full overflow-hidden border-y border-white/10 bg-[#120912]">
        <ShowroomCanvas
          scrollProgressRef={scrollProgressRef}
          activeStopIndex={activeStopIndex}
          onJumpToStop={scrollToStop}
        />

        <ShowroomLoader />

        {/* Intro View Overlay */}
        <AnimatePresence>
          {showIntroOverlay && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: ELEGANT_EASE }}
              className="pointer-events-none absolute inset-x-0 top-24 z-20 flex flex-col items-center px-4 text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F79B02]/40 bg-[#1C0F1C]/90 px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#F79B02] backdrop-blur-md">
                <Compass className="h-3.5 w-3.5 text-[#CE0058]" />
                Horizontal 3D Showroom • 6 Rooms
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#FFF5EB] sm:text-5xl">
                Summer Night{" "}
                <span className="text-[#DF5000]">Showroom</span>
              </h2>
              <p className="mt-2 max-w-md text-xs text-[#D9C3B8] sm:text-sm">
                Scroll to glide horizontally across six furnished rooms — each
                showcasing a live project from github.com/graeeez.
              </p>

              <motion.button
                type="button"
                onClick={() => scrollToStop(1)}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-auto mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#CE0058] px-5 py-2 text-xs font-bold text-[#FFF5EB] shadow-lg transition-colors hover:bg-[#DF5000]"
              >
                Scroll to explore
                <ArrowRight className="h-4 w-4 text-[#F79B02]" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Horizontal Progress Bar & Clickable Room Dots */}
        <nav
          aria-label="Showroom rooms progress"
          className="pointer-events-auto absolute right-4 bottom-5 left-4 z-20 mx-auto max-w-4xl sm:right-6 sm:left-6"
        >
          <div className="relative rounded-2xl border border-white/15 bg-[#1C0F1C]/90 px-4 py-3 backdrop-blur-md">
            {/* Horizontal Fill Track */}
            <div className="pointer-events-none absolute top-[21px] right-8 left-8 h-0.5 bg-white/15">
              <div
                className="h-full bg-[#F79B02] transition-all duration-150"
                style={{ width: `${progressUI * 100}%` }}
              />
            </div>

            <div className="relative z-10 flex items-center justify-between gap-2">
              {STOP_LABELS.map((stop, idx) => {
                const isCurrent = activeStopIndex === idx;
                const isPassed = progressUI * (TOTAL_STOPS - 1) >= idx - 0.15;
                return (
                  <button
                    key={stop.id}
                    type="button"
                    onClick={() => scrollToStop(idx)}
                    className="group flex flex-col items-center gap-1.5 focus:outline-none"
                  >
                    <span
                      className={`h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${isCurrent
                        ? "scale-125 border-[#F79B02] bg-[#CE0058]"
                        : isPassed
                          ? "border-[#F79B02] bg-[#F79B02]"
                          : "border-white/35 bg-[#120912] group-hover:border-[#DF5000]"
                        }`}
                    />
                    <span
                      className={`font-mono text-[10px] font-bold transition-colors ${isCurrent
                        ? "text-[#F79B02]"
                        : "text-[#D9C3B8]/70 group-hover:text-[#FFF5EB]"
                        }`}
                    >
                      <span className="md:hidden">{stop.short}</span>
                      <span className="hidden md:inline">{stop.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Room Project Info Side Panel */}
        <ProjectSidePanel
          room={focusedRoom}
          onPrevRoom={() => scrollToStop(Math.max(0, activeStopIndex - 1))}
          onNextRoom={() =>
            scrollToStop(
              activeStopIndex >= TOTAL_STOPS - 1 ? 0 : activeStopIndex + 1
            )
          }
          isLastRoom={activeStopIndex === TOTAL_STOPS - 1}
        />
      </div>
    </section>
  );
}
