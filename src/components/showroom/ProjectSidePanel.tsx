"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp, ExternalLink, Github, Globe, Home } from "lucide-react";
import type { ShowroomRoomConfig } from "@/data/showroomRooms";
import ProjectVisual from "@/components/ProjectVisual";

interface ProjectSidePanelProps {
  room: ShowroomRoomConfig | null;
  onPrevRoom: () => void;
  onNextRoom: () => void;
  isLastRoom: boolean;
}

const ELEGANT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProjectSidePanel({
  room,
  onPrevRoom,
  onNextRoom,
  isLastRoom,
}: ProjectSidePanelProps) {
  return (
    <AnimatePresence mode="wait">
      {room && (
        <motion.aside
          key={room.id}
          initial={{ x: 36, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 28, opacity: 0 }}
          transition={{ duration: 0.45, ease: ELEGANT_EASE }}
          className="pointer-events-auto absolute top-24 right-4 bottom-24 z-20 flex w-[calc(100%-2rem)] max-w-sm flex-col justify-between overflow-y-auto rounded-2xl border border-[#F79B02]/35 bg-[#1C0F1C]/92 p-5 shadow-2xl backdrop-blur-md sm:right-6 sm:p-6"
        >
          <div>
            {/* Top Catalog Header */}
            <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-[#DF5000] px-2.5 py-0.5 font-mono text-[10px] font-extrabold uppercase text-[#FFF5EB]">
                  {room.catalogNo}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F79B02]">
                  <Home className="h-3 w-3 text-[#CE0058]" />
                  {room.roomLabel}
                </span>
              </div>
            </div>

            {/* Project Title & Tagline */}
            <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-[#FFF5EB]">
              {room.title}
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#F7A8C9]">
              {room.tagline}
            </p>

            {/* Website Preview Card */}
            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#D9C3B8]">
                  Live Website Preview
                </span>
                <a
                  href={room.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#F79B02] hover:text-[#DF5000] hover:underline"
                >
                  <Globe className="h-3 w-3" />
                  {room.displayUrl}
                </a>
              </div>
              <ProjectVisual
                theme={room.visualTheme}
                displayUrl={room.displayUrl}
                compact
              />
            </div>

            {/* Description */}
            <p className="mt-4 text-xs leading-relaxed text-[#D9C3B8] sm:text-sm">
              {room.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-4">
              <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-[#D9C3B8]/80">
                Tech Stack
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {room.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/15 bg-[#271526] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#FFF5EB]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
            <div className="grid grid-cols-5 gap-2">
              <a
                href={room.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-3 flex items-center justify-center gap-1.5 rounded-xl bg-[#CE0058] px-3 py-3 text-xs font-extrabold text-[#FFF5EB] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF5000]"
              >
                View Project
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={room.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-[#271526] px-3 py-3 text-xs font-bold text-[#FFF5EB] transition-colors hover:border-[#F79B02] hover:text-[#F79B02]"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={onPrevRoom}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-[#120912] px-3 py-2 text-xs font-bold text-[#FFF5EB] transition-colors hover:border-[#F79B02] hover:text-[#F79B02]"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Previous
              </button>
              <button
                type="button"
                onClick={onNextRoom}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-[#271526] px-3 py-2 text-xs font-bold text-[#FFF5EB] transition-colors hover:bg-[#DF5000]"
              >
                {isLastRoom ? "Overview" : "Next Room"}
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
