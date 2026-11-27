"use client";

 

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Shot } from "@/lib/gallery";

/** deterministic pseudo-random tilt so SSR and client agree */
function tiltFor(i: number) {
  const table = [-1.4, 1.1, -0.7, 1.6, -1.1, 0.9, -1.8, 1.3, -0.5];
  return table[i % table.length];
}

const cardVariants = {
  hidden: { opacity: 0, y: 56, rotate: tiltFor(7) * 3, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: tiltFor(i),
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 17, delay: (i % 8) * 0.06 },
  }),
};

export default function PhotoCard({
  shot,
  index,
  onOpen,
}: {
  shot: Shot;
  index: number;
  onOpen: (slug: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 180, damping: 18 };
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), spring);
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), spring);
  const imgX = useTransform(mx, [0, 1], [-4, 4]);
  const imgY = useTransform(my, [0, 1], [-3, 3]);

  function onMove(e: React.MouseEvent) {
    if (!hoverRef.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <motion.article
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="relative mb-8 break-inside-avoid"
      style={{ transformStyle: "preserve-3d" }}
      id={`card-${shot.slug}`}
    >
      <motion.div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={`${shot.title} — open full view`}
        onMouseEnter={() => {
          hoverRef.current = true;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
          mx.set(0.5);
          my.set(0.5);
        }}
        onMouseMove={onMove}
        onClick={() => onOpen(shot.slug)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(shot.slug);
          }
        }}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
        whileHover={{ scale: 1.025, zIndex: 10 }}
        whileTap={{ scale: 0.985 }}
        className="group relative cursor-pointer bg-paper p-3 pb-4 shadow-[0_1px_2px_rgba(28,23,18,0.10),0_6px_16px_rgba(28,23,18,0.08)] outline-none ring-offset-4 transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(28,23,18,0.14),0_18px_38px_rgba(28,23,18,0.18)] focus-visible:ring-2 focus-visible:ring-stamp"
      >
        {/* tape pieces */}
        <div className="tape -top-2.5 left-5 z-10 -rotate-[5deg] transition-transform duration-300 group-hover:rotate-[3deg] group-hover:scale-110" />
        <div className="tape -top-2 right-6 z-10 rotate-[4deg] transition-transform duration-300 group-hover:-rotate-[2deg] group-hover:scale-110" />

        {/* photo */}
        <motion.div
          layoutId={`photo-${shot.slug}`}
          className="relative overflow-hidden bg-paper-deep"
          style={{ perspective: 600 }}
        >
          <motion.img
            src={`/gallery/web/${shot.slug}.jpg`}
            alt={shot.title}
            loading="lazy"
            className="block h-auto w-full transition-[filter] duration-500 group-hover:brightness-[1.03]"
            style={{ x: imgX, y: imgY, scale: 1.06 }}
          />
          {/* ink frame that fades in on hover */}
          <div className="pointer-events-none absolute inset-2 border border-ink/0 transition-colors duration-300 group-hover:border-ink/25" />
        </motion.div>

        {/* caption block */}
        <div className="mt-3 px-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-hand text-lg text-ink-faint">
              № {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">
              {shot.tag}
            </span>
          </div>
          <h3 className="mt-0.5 font-hand text-[1.55rem] font-semibold leading-tight text-ink">
            {shot.title}
          </h3>
          <p className="mt-1 font-body text-[15px] italic leading-snug text-ink-soft">
            {shot.description}
          </p>
        </div>

        {/* SEEN stamp on hover */}
        <div
          aria-hidden
          className="stamp pointer-events-none absolute right-3 top-3 z-20 px-2.5 py-0.5 text-sm font-bold rotate-[-16deg] scale-50 opacity-0 transition-[opacity,rotate,scale] duration-200 ease-out group-hover:rotate-[-7deg] group-hover:scale-100 group-hover:opacity-100"
        >
          seen
        </div>
      </motion.div>
    </motion.article>
  );
}
