"use client";

 

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Shot } from "@/lib/gallery";

export default function Lightbox({
  shots,
  activeIndex,
  onClose,
  onNavigate,
}: {
  shots: Shot[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const open = activeIndex !== null;
  const shot = open ? shots[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (activeIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((activeIndex + 1) % shots.length);
      if (e.key === "ArrowLeft")
        onNavigate((activeIndex - 1 + shots.length) % shots.length);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, activeIndex, shots.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && shot && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={shot.title}
        >
          {/* ink backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#171310]/[0.93]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* photo (shared element with the grid card) */}
          <motion.div
            layoutId={`photo-${shot.slug}`}
            className="relative z-10 max-w-[min(92vw,980px)] overflow-hidden bg-paper p-2.5 shadow-2xl"
            transition={{ type: "spring", stiffness: 210, damping: 26 }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={shot.slug}
                src={`/gallery/web/${shot.slug}.jpg`}
                alt={shot.title}
                className="max-h-[62vh] w-auto max-w-full object-contain"
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              />
            </AnimatePresence>
          </motion.div>

          {/* caption */}
          <motion.div
            key={`cap-${shot.slug}`}
            className="relative z-10 mt-4 max-w-[min(92vw,820px)] text-center text-paper"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.12, duration: 0.3 }}
          >
            <div className="font-hand text-3xl font-semibold">{shot.title}</div>
            <p className="mx-auto mt-1.5 max-w-xl font-body text-[15px] italic leading-snug text-paper/75">
              {shot.description}
            </p>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/45">
              № {String(activeIndex + 1).padStart(2, "0")} / {shots.length} · {shot.tag} · originally: {shot.file}
            </div>
          </motion.div>

          {/* controls */}
          <div className="relative z-10 mt-5 flex items-center gap-6">
            <button
              onClick={() => onNavigate((activeIndex - 1 + shots.length) % shots.length)}
              aria-label="previous image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 text-paper/80 transition-all duration-200 hover:-translate-x-0.5 hover:border-paper/70 hover:bg-paper/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              aria-label="close viewer"
              className="flex h-11 items-center gap-2 rounded-full border border-paper/30 px-5 font-hand text-xl text-paper/85 transition-all duration-200 hover:border-paper/70 hover:bg-paper/10"
            >
              <X className="h-4 w-4" /> shut it
            </button>
            <button
              onClick={() => onNavigate((activeIndex + 1) % shots.length)}
              aria-label="next image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 text-paper/80 transition-all duration-200 hover:translate-x-0.5 hover:border-paper/70 hover:bg-paper/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
