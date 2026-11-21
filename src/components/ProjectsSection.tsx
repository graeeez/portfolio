"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  Github,
} from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/data/portfolio";

const ELEGANT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative bg-[#120910] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Clean Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: ELEGANT_EASE }}
          className="flex flex-col justify-between gap-4 border-b border-white/12 pb-8 sm:flex-row sm:items-end"
        >
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#F79B02]">
              Selected Works
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#FFF5EC] sm:text-5xl">
              Projects
            </h2>
          </div>

          <a
            href="https://github.com/graeeez/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#DAC4BA] transition-colors hover:text-[#F79B02]"
          >
            <Github className="h-4 w-4" />
            github.com/graeeez
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* Simple, Spacious Editorial Project List */}
        <div className="divide-y divide-white/10">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: ELEGANT_EASE }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group flex cursor-pointer flex-col justify-between gap-4 py-7 transition-all duration-300 hover:pl-3 focus:outline-none sm:flex-row sm:items-center"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-xs font-bold text-[#F79B02]">
                  0{idx + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-extrabold text-[#FFF5EC] transition-colors duration-200 group-hover:text-[#CE0058] sm:text-3xl">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-[#DAC4BA]/60">
                      {project.category} • {project.year}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-xl text-sm text-[#DAC4BA]">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Simple Actions */}
              <div className="flex shrink-0 items-center gap-3 pl-9 sm:pl-0">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#CE0058] px-4 py-2 text-xs font-bold text-[#FFF5EC] transition-colors hover:bg-[#DF5000]"
                >
                  Live Site
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} GitHub repository`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#DAC4BA] transition-colors hover:border-[#F79B02] hover:text-[#F79B02]"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Simple Live Website Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: ELEGANT_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/15 bg-[#1C0E18] p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project preview"
                className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#281422] text-[#FFF5EC] transition-colors hover:bg-[#CE0058]"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F79B02]">
                {selectedProject.category} • {selectedProject.year}
              </span>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-[#FFF5EC] sm:text-3xl">
                {selectedProject.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#DAC4BA]">
                {selectedProject.summary}
              </p>

              {/* Clean Live Website Preview Frame */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-white">
                <div className="flex items-center justify-between border-b border-white/10 bg-[#120910] px-3.5 py-2 font-mono text-[11px] text-[#DAC4BA]">
                  <span className="truncate">{selectedProject.displayUrl}</span>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-semibold text-[#F79B02] hover:underline"
                  >
                    Open ↗
                  </a>
                </div>
                <iframe
                  src={selectedProject.liveUrl}
                  title={`${selectedProject.title} live preview`}
                  className="h-64 w-full bg-white"
                  loading="lazy"
                />
              </div>

              {/* Stack + Direct Links */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/12 bg-[#281422] px-3 py-1 font-mono text-[11px] text-[#FFF5EC]/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#CE0058] px-4 py-2 text-xs font-bold text-[#FFF5EC] hover:bg-[#DF5000]"
                  >
                    Visit Website
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-[#FFF5EC] hover:border-[#F79B02] hover:text-[#F79B02]"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
