"use client";

 

import { motion } from "framer-motion";
import { Swords, Feather, Github, Instagram, Linkedin, Send, ArrowUp } from "lucide-react";
import { CIRCLES, QUOTE, SHOTS, TAGS, type Shot, type Tag } from "@/lib/gallery";
import { DoodleArrow, HandUnderline, Squiggle } from "./background";
import PhotoCard from "./photo-card";

/* ---------- shared reveal wrappers ---------- */

const rise = {
  hidden: { opacity: 0, y: 42 },
  show: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={rise}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- header ---------- */

export function Header() {
  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <a href="#top" className="group flex shrink-0 items-baseline gap-2">
          <span className="whitespace-nowrap font-hand text-xl font-bold leading-none text-ink transition-colors group-hover:text-stamp sm:text-[1.65rem]">
            Yosa Shiawase
          </span>
          <span className="stamp hidden px-1.5 py-0 text-[11px] font-bold leading-tight rotate-3 sm:inline-block">
            shut
          </span>
        </a>
        <nav aria-label="sections" className="flex items-center gap-3 sm:gap-7">
          {[
            ["the gallery", "#gallery"],
            ["the keeper", "#about"],
            ["summoning", "#summon"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="wavy-link whitespace-nowrap font-hand text-lg text-ink sm:text-xl"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

/* ---------- hero ---------- */

const letterVariants = {
  hidden: { opacity: 0, y: 90, rotate: 4 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 140, damping: 18, delay: 0.15 + i * 0.09 },
  }),
};

export function Hero() {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      aria-label="intro"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="font-hand text-2xl text-ink-soft"
      >
        the field sketchbook of
      </motion.p>

      <div className="relative mt-1">
        <h1
          aria-label="SHUT"
          className="font-body text-[clamp(5rem,19vw,12.5rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-ink"
        >
          {"SHUT".split("").map((ch, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              custom={i}
              initial="hidden"
              animate="show"
              className="inline-block"
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        {/* red stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 1.8, rotate: -26 }}
          animate={{ opacity: 1, scale: 1, rotate: -9 }}
          transition={{ type: "spring", stiffness: 200, damping: 11, delay: 0.85 }}
          className="stamp absolute -right-5 -top-9 px-3 py-1 text-lg font-bold md:-right-16 md:-top-7 md:text-xl"
        >
          27 frames
          <br />
          no filters
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-1 flex justify-center"
        >
          <HandUnderline width={340} delay={0.75} />
        </motion.div>
      </div>

      <div className="mt-6 max-w-2xl">
        {[QUOTE.line1, QUOTE.line2].map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 + i * 0.22 }}
            className="font-hand text-[1.7rem] leading-snug text-ink md:text-[1.95rem]"
          >
            {line}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-3 font-hand text-xl text-ink-faint"
        >
          {QUOTE.author}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.65 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-5"
      >
        <motion.button
          onClick={scrollToGallery}
          whileHover={{ scale: 1.05, rotate: -1.2, y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="cursor-pointer rounded-[16px_5px_14px_6px/6px_14px_5px_16px] bg-ink px-8 py-3 font-hand text-2xl text-paper shadow-[3px_4px_0_rgba(28,23,18,0.28)] transition-shadow hover:shadow-[5px_7px_0_rgba(178,58,46,0.45)]"
        >
          open the sketchbook
        </motion.button>
        <a
          href="#summon"
          className="wavy-link font-hand text-2xl text-ink-soft hover:text-stamp"
        >
          or summon me first
        </a>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.8 }}
        className="absolute bottom-7 flex flex-col items-center gap-1"
      >
        <span className="font-hand text-lg text-ink-faint -rotate-3">scroll, obviously</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleArrow width={30} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- gallery ---------- */

function SectionHead({
  overline,
  title,
  note,
}: {
  overline: string;
  title: string;
  note?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Reveal>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
          {overline}
        </p>
        <h2 className="mt-2 font-body text-5xl font-semibold text-ink md:text-6xl">
          {title}
        </h2>
        <div className="mt-1">
          <HandUnderline width={230} delay={0.2} />
        </div>
      </Reveal>
      {note && (
        <Reveal
          delay={0.25}
          className="pointer-events-none relative mt-5 flex justify-center md:absolute md:-top-9 md:right-10 md:mt-0 md:justify-end"
        >
          {note}
        </Reveal>
      )}
    </div>
  );
}

export function GallerySection({
  shots,
  activeTag,
  onTag,
  onOpen,
}: {
  shots: Shot[];
  activeTag: Tag | "ALL";
  onTag: (t: Tag | "ALL") => void;
  onOpen: (slug: string) => void;
}) {
  const filters: (Tag | "ALL")[] = ["ALL", ...TAGS];
  return (
    <section id="gallery" aria-label="gallery" className="relative scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          overline="№ 27 frames — sorted, titled, stamped"
          title="Field Notes"
          note={
            <p className="max-w-[240px] text-center font-hand text-xl leading-tight text-ink-soft -rotate-2">
              warning: content beyond this point may include random masterpieces.
            </p>
          }
        />

        {/* filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap gap-2.5"
          role="group"
          aria-label="filter by subject"
        >
          {filters.map((t) => {
            const active = activeTag === t;
            return (
              <motion.button
                key={t}
                onClick={() => onTag(t)}
                whileHover={{ y: -2, rotate: -0.8 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
                aria-pressed={active}
                className={`cursor-pointer rounded-[12px_4px_10px_5px/5px_12px_4px_14px] border px-4 py-1.5 font-hand text-lg leading-none transition-colors ${
                  active
                    ? "border-ink bg-ink text-paper shadow-[2px_3px_0_rgba(28,23,18,0.25)]"
                    : "border-ink/35 bg-paper text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {t.toLowerCase()}
                <span className="ml-1.5 font-mono text-[9px] opacity-60">
                  {t === "ALL" ? SHOTS.length : SHOTS.filter((s) => s.tag === t).length}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* masonry grid — remounts per filter so cards re-stagger */}
        <motion.div
          key={activeTag}
          initial="hidden"
          animate="show"
          className="mt-10 columns-1 gap-7 sm:columns-2 lg:columns-3"
        >
          {shots.map((shot, i) => (
            <PhotoCard key={shot.slug} shot={shot} index={i} onOpen={onOpen} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- about / the keeper ---------- */

const SKILLS: [string, number][] = [
  ["coding", 82],
  ["sketching", 74],
  ["analysis", 88],
  ["cybersecurity", 61],
];

function SkillMeter({ label, value, index }: { label: string; value: number; index: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-32 shrink-0 text-right font-hand text-[1.35rem] text-ink">{label}</span>
      <div className="relative h-3.5 flex-1 overflow-hidden rounded-full border border-ink/45 bg-paper-deep/70">
        <motion.div
          className="meter-fill h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, delay: 0.15 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="w-10 font-mono text-[11px] text-ink-faint">{value}%</span>
    </div>
  );
}

export function AboutSection() {
  const keeper = SHOTS.find((s) => s.slug === "both-eyes-open")!;
  return (
    <section id="about" aria-label="about" className="relative scroll-mt-24 px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        {/* portrait */}
        <Reveal className="md:col-span-5">
          <motion.figure
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="relative rotate-[-1.8deg] bg-paper p-3 pb-5 shadow-[0_1px_2px_rgba(28,23,18,0.10),0_10px_26px_rgba(28,23,18,0.12)]"
          >
            <div className="tape -top-2.5 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
            <img
              src={`/gallery/web/${keeper.slug}.jpg`}
              alt={keeper.title}
              className="w-full"
            />
            <figcaption className="mt-3 text-center font-hand text-xl text-ink-soft">
              the keeper, mid-shift — № 23
            </figcaption>
          </motion.figure>
        </Reveal>

        {/* bio */}
        <div className="md:col-span-7">
          <SectionHead overline="status window" title="The Keeper" />
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink">
              Yosa Shiawase — CSE (AI/ML) undergrad based in Greater Noida, India. Writes
              code, sketches everything else, and analyses whatever refuses to make sense
              on the first pass. Currently leveling into a cyber analyst.
            </p>
            <p className="mt-4 font-body text-lg italic leading-relaxed text-ink-soft">
              This sketchbook is the side door into that life: 27 stills pulled from the
              Shut repository — robins on peeling walls, stolen chocolate, rain-washed
              courtyards, unfinished buildings — each one titled and stamped instead of
              left with a camera filename.
            </p>
          </Reveal>

          {/* skill tree */}
          <Reveal delay={0.15} className="mt-10">
            <h3 className="flex items-center gap-2.5 font-hand text-[1.7rem] font-semibold text-ink">
              <Swords className="h-5 w-5 text-stamp" aria-hidden />
              skill tree
              <span className="font-mono text-[9px] font-normal uppercase tracking-[0.2em] text-ink-faint">
                self-assessed · still leveling
              </span>
            </h3>
            <div className="mt-5 space-y-4">
              {SKILLS.map(([label, value], i) => (
                <SkillMeter key={label} label={label} value={value} index={i} />
              ))}
            </div>
          </Reveal>

          {/* current quest */}
          <Reveal delay={0.2} className="mt-9">
            <div className="relative border-l-2 border-stamp/70 bg-paper/80 px-5 py-4">
              <p className="flex items-start gap-3 font-body text-[1.05rem] italic leading-relaxed text-ink-soft">
                <Feather className="mt-1 h-4 w-4 shrink-0 text-stamp" aria-hidden />
                <span>
                  <span className="font-mono text-[10px] uppercase not-italic tracking-[0.22em] text-stamp">
                    current quest —
                  </span>{" "}
                  Nirikshan v2: predictive cybercrime interception. Hawkes forecasting,
                  live ingest, QR forensics.
                </span>
              </p>
              <span className="stamp absolute -right-3 -top-4 rotate-[8deg] bg-paper px-2 py-0.5 text-xs font-bold">
                in progress
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- summoning circles ---------- */

const ICONS = {
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  telegram: Send,
} as const;

function SummonCircle({ label, handle, href, index }: { label: string; handle: string; href: string; index: number }) {
  const Icon = ICONS[label as keyof typeof ICONS] ?? Github;
  return (
    <Reveal delay={0.1 + index * 0.08}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="summon group mx-auto flex w-fit flex-col items-center gap-3"
        aria-label={`summon via ${label}: ${handle}`}
      >
        <motion.div
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 260, damping: 15 }}
          className="relative flex h-36 w-36 items-center justify-center"
        >
          <svg
            width="144"
            height="144"
            viewBox="0 0 144 144"
            fill="none"
            aria-hidden
            className="absolute inset-0 text-ink/40 transition-colors duration-300 group-hover:text-stamp"
          >
            <circle className="ring-a" cx="72" cy="72" r="66" stroke="currentColor" strokeWidth="1.6" strokeDasharray="11 8" />
            <circle className="ring-b" cx="72" cy="72" r="56" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2.5 7" />
          </svg>
          <Icon
            className="h-8 w-8 text-ink transition-all duration-300 group-hover:-translate-y-1 group-hover:text-stamp"
            aria-hidden
          />
        </motion.div>
        <div className="text-center">
          <div className="font-hand text-[1.45rem] leading-tight text-ink transition-colors duration-300 group-hover:text-stamp">
            {label}
          </div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-ink-faint">{handle}</div>
        </div>
      </a>
    </Reveal>
  );
}

export function SummonSection() {
  return (
    <section id="summon" aria-label="contact" className="relative scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHead overline="open a circle · say hi first" title="Summoning Circles" />
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {CIRCLES.map((c, i) => (
            <SummonCircle key={c.label} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-ink/15 bg-paper/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3.5 px-5 py-11 text-center">
        <Squiggle width={130} />
        <p className="font-hand text-[1.75rem] text-ink-soft">
          must. high-five — thanks for scrolling this far.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
          © 2026 yosa shiawase · every frame from the shut repo · committed in the dead of night
        </p>
        <a href="#top" className="wavy-link mt-1 flex items-center gap-1.5 font-hand text-xl text-ink-soft">
          <ArrowUp className="h-4 w-4 transition-transform duration-200 hover:-translate-y-1" aria-hidden />
          back to the top
        </a>
      </div>
    </footer>
  );
}
