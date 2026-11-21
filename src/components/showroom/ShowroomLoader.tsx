"use client";

import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

export default function ShowroomLoader() {
  const { active, progress, item } = useProgress();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#120912]/95 p-6"
        >
          <div className="w-full max-w-xs rounded-2xl border border-[#F79B02]/35 bg-[#1C0F1C] p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-[#CE0058] px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-[#FFF5EB]">
                3D SHOWROOM
              </span>
              <span className="font-mono text-xs font-extrabold text-[#F79B02]">
                {Math.round(progress)}%
              </span>
            </div>
            <p className="mt-3 font-display text-sm font-extrabold text-[#FFF5EB]">
              Loading Poly Haven 3D Furniture...
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#271526]">
              <div
                className="h-full bg-[#DF5000] transition-all duration-200"
                style={{ width: `${Math.min(100, Math.max(8, progress))}%` }}
              />
            </div>
            {item && (
              <p className="mt-2 truncate font-mono text-[10px] text-[#D9C3B8]/70">
                {item}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
