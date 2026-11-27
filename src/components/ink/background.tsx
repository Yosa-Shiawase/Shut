"use client";

/**
 * Ink-sketch background: fixed layers of hand-drawn SVG doodles.
 * - Layer parallax: each layer translates at a different rate on scroll.
 * - Constellation lines draw themselves in as you scroll deeper.
 * - Individual doodles float/rotate on a slow loop (separate from scroll).
 */

import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

const INK = "#1c1712";

function useLayerParallax(distance: number): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, distance]);
}

/* ---------- individual doodles ---------- */

type DoodleProps = { className?: string; delay?: number };

function Float({
  children,
  delay = 0,
  className,
}: DoodleProps & { children: React.ReactNode }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -7, 0], rotate: [0, 1.6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function MoonSketch() {
  return (
    <svg width="86" height="86" viewBox="0 0 86 86" fill="none" aria-hidden>
      <path
        d="M56 12c-14 2-26 14-26 30 0 17 13 30 29 31-3 1-7 1.6-11 1.6-18 0-32-14-32-31.6C16 26 30 12 48 12c3 0 6 .4 8 1.4Z"
        stroke={INK}
        strokeWidth="1.8"
        strokeLinejoin="round"
        opacity="0.65"
      />
      <circle cx="34" cy="30" r="4" stroke={INK} strokeWidth="1.4" opacity="0.5" />
      <circle cx="26" cy="44" r="2.4" stroke={INK} strokeWidth="1.3" opacity="0.45" />
      <path d="M42 60c3 1 6 1 9 .4" stroke={INK} strokeWidth="1.3" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

export function StarSparkle({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 1c.6 4 .8 6 1.2 7.4C13 10.6 15 11 21 11c-6 0-8 .4-8.8 2.6-.4 1.4-.6 3.4-1.2 7.4-.6-4-.8-6-1.2-7.4C9 11.4 7 11 1 11c6 0 8-.4 8.8-2.6C10.2 7 10.4 5 11 1Z"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.6"
      />
    </svg>
  );
}

export function AsteriskSketch({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" aria-hidden>
      <path
        d="M13 3v20M4.5 7.5l17 11M21.5 7.5l-17 11"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function SpiralSketch({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M32 32c2-2 5-1 5 2 0 4-5 5-8 3-4-3-4-9 0-12 5-4 13-3 16 3 4 7-1 15-9 16-9 1.4-17-5-18-13C16.7 21 25 12 35 13"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function CloudScribble({ width = 96 }: { width?: number }) {
  return (
    <svg width={width} height={width * 0.42} viewBox="0 0 96 40" fill="none" aria-hidden>
      <path
        d="M10 30c-5-1-7-6-3-10 2-2 4-2 6-2 0-6 6-10 12-8 3-6 12-8 17-3 6-4 14-2 15 5 6 0 10 4 9 9-1 4-5 6-9 6H14c-1.5 0-3 1-4 3Z"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function EyeDoodle({ width = 84 }: { width?: number }) {
  return (
    <svg width={width} height={width * 0.55} viewBox="0 0 84 46" fill="none" aria-hidden>
      <path
        d="M4 26c10-13 22-20 38-20s28 7 38 20c-10 11-22 16-38 16S14 37 4 26Z"
        stroke={INK}
        strokeWidth="1.7"
        opacity="0.6"
      />
      <circle cx="42" cy="25" r="9" stroke={INK} strokeWidth="1.5" opacity="0.55" />
      <circle cx="42" cy="25" r="3.4" fill={INK} opacity="0.55" />
      <path
        d="M30 4l-3-3M42 2v-3M54 4l3-3"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function PaperPlaneSketch({ width = 70 }: { width?: number }) {
  return (
    <svg width={width} height={width * 0.6} viewBox="0 0 70 42" fill="none" aria-hidden>
      <path
        d="M4 22 66 6 34 36l-4-12-26-2Z"
        stroke={INK}
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <path d="M30 24 66 6" stroke={INK} strokeWidth="1.3" opacity="0.45" />
      <path
        d="M2 36c6-2 12-2 16 0"
        stroke={INK}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function CupSketch({ width = 62 }: { width?: number }) {
  return (
    <svg width={width} height={width * 0.8} viewBox="0 0 62 50" fill="none" aria-hidden>
      <path
        d="M14 20h28v12c0 7-5 12-13 12h-2c-8 0-13-5-13-12V20Z"
        stroke={INK}
        strokeWidth="1.6"
        opacity="0.6"
      />
      <path
        d="M42 22c5-1 9 1 9 5s-4 6-9 5"
        stroke={INK}
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M22 14c0-3 3-3 3-6M30 14c0-3 3-3 3-6M38 14c0-3 3-3 3-6"
        stroke={INK}
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function HatchPatch({ width = 90 }: { width?: number }) {
  const n = 7;
  return (
    <svg width={width} height={width * 0.5} viewBox="0 0 90 45" fill="none" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <path
          key={i}
          d={`M${4 + i * 11} ${38 - (i % 3) * 2}l${8 + (i % 3) * 2} -${26 - (i % 2) * 4}`}
          stroke={INK}
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.35"
        />
      ))}
    </svg>
  );
}

export function SplatSketch({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden>
      <path
        d="M30 18c6-2 12 2 12 9 0 2 4 1 5 4 1 4-3 5-5 5-1 6-6 9-12 8-7-1-13-6-12-13-3-1-4-5-2-8 2-2 4-1 6-1 1-3 4-4 8-4Z"
        fill={INK}
        opacity="0.14"
      />
      <circle cx="47" cy="14" r="2" fill={INK} opacity="0.18" />
      <circle cx="12" cy="40" r="1.6" fill={INK} opacity="0.15" />
    </svg>
  );
}

export function Squiggle({ width = 110 }: { width?: number }) {
  return (
    <svg width={width} height={width * 0.16} viewBox="0 0 110 18" fill="none" aria-hidden>
      <path
        d="M3 10c8-8 14 6 22-1s14 7 22 0 14 6 22-1 14 6 22 0 12 2 16-1"
        stroke={INK}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function DoodleArrow({
  width = 64,
  rotate = 0,
}: {
  width?: number;
  rotate?: number;
}) {
  return (
    <svg
      width={width}
      height={width * 1.25}
      viewBox="0 0 64 80"
      fill="none"
      aria-hidden
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M30 4c-6 18-8 38-4 58 1 4 3 8 6 12"
        stroke={INK}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M20 62c3 5 7 9 12 12 4-3 8-7 10-12"
        stroke={INK}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}

/* hand-drawn underline that draws itself when scrolled into view */
export function HandUnderline({
  width = 240,
  color = INK,
  delay = 0.3,
}: {
  width?: number;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      width={width}
      height={width * 0.09}
      viewBox="0 0 240 22"
      fill="none"
      aria-hidden
      className="max-w-full"
    >
      <motion.path
        d="M4 14c30-8 62-10 118-8 40 1.4 76 5 114 6"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, delay, ease: "easeInOut" }}
      />
      <motion.path
        d="M36 19c26-4 52-5 92-3.4 34 1.4 62 3 84 2.4"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: delay + 0.35, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ---------- fixed background layers ---------- */

const FAR = [
  { el: <MoonSketch />, style: { top: "9%", left: "6%" } },
  { el: <CloudScribble />, style: { top: "16%", right: "10%" } },
  { el: <StarSparkle />, style: { top: "30%", left: "14%" } },
  { el: <StarSparkle size={16} />, style: { top: "7%", right: "24%" } },
  { el: <SpiralSketch />, style: { top: "55%", left: "4%" } },
  { el: <CloudScribble width={70} />, style: { top: "62%", right: "6%" } },
  { el: <AsteriskSketch />, style: { bottom: "18%", left: "10%" } },
  { el: <StarSparkle size={18} />, style: { bottom: "30%", right: "16%" } },
  { el: <SplatSketch />, style: { bottom: "10%", left: "24%" } },
  { el: <HatchPatch />, style: { top: "44%", right: "3%" } },
];

const MID = [
  { el: <PaperPlaneSketch />, style: { top: "22%", right: "7%" } },
  { el: <AsteriskSketch size={20} />, style: { top: "40%", left: "8%" } },
  { el: <Squiggle />, style: { top: "12%", left: "38%" } },
  { el: <StarSparkle size={20} />, style: { top: "70%", left: "18%" } },
  { el: <SplatSketch size={44} />, style: { top: "78%", right: "12%" } },
  { el: <SpiralSketch size={44} />, style: { bottom: "14%", right: "28%" } },
  { el: <StarSparkle size={14} />, style: { bottom: "6%", left: "40%" } },
];

const NEAR = [
  { el: <CupSketch />, style: { bottom: "9%", right: "7%" } },
  { el: <EyeDoodle />, style: { top: "84%", left: "5%" } },
  { el: <StarSparkle size={26} />, style: { top: "18%", left: "26%" } },
  { el: <HatchPatch width={70} />, style: { bottom: "24%", left: "30%" } },
];

/** constellation whose lines complete as you scroll */
function Constellation() {
  const { scrollYProgress } = useScroll();
  const line1 = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);
  const line2 = useTransform(scrollYProgress, [0.3, 0.65], [0, 1]);
  const line3 = useTransform(scrollYProgress, [0.55, 0.9], [0, 1]);
  return (
    <svg
      width="190"
      height="230"
      viewBox="0 0 190 230"
      fill="none"
      aria-hidden
      className="opacity-70"
    >
      {[
        [22, 40, 78, 96],
        [78, 96, 150, 78],
        [150, 78, 118, 168],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={INK}
          strokeWidth="1.2"
          strokeDasharray="3 4"
          style={{ pathLength: i === 0 ? line1 : i === 1 ? line2 : line3 }}
        />
      ))}
      {[
        [22, 40],
        [78, 96],
        [150, 78],
        [118, 168],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill={INK} opacity="0.5" />
      ))}
    </svg>
  );
}

export default function InkBackground() {
  const farY = useLayerParallax(-70);
  const midY = useLayerParallax(-190);
  const nearY = useLayerParallax(-380);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* far layer */}
      <motion.div style={{ y: farY }} className="absolute inset-0">
        {FAR.map((d, i) => (
          <div key={i} className="absolute" style={d.style}>
            <Float delay={(i % 5) * 0.9}>{d.el}</Float>
          </div>
        ))}
        <div className="absolute right-[30%] top-[34%]">
          <Float delay={0.4}>
            <Constellation />
          </Float>
        </div>
      </motion.div>

      {/* mid layer */}
      <motion.div style={{ y: midY }} className="absolute inset-0">
        {MID.map((d, i) => (
          <div key={i} className="absolute" style={d.style}>
            <Float delay={(i % 4) * 1.1}>{d.el}</Float>
          </div>
        ))}
      </motion.div>

      {/* near layer */}
      <motion.div style={{ y: nearY }} className="absolute inset-0">
        {NEAR.map((d, i) => (
          <div key={i} className="absolute" style={d.style}>
            <Float delay={(i % 3) * 1.3}>{d.el}</Float>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
