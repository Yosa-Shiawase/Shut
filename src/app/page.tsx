"use client";

import { useCallback, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { SHOTS, type Tag } from "@/lib/gallery";
import InkBackground from "@/components/ink/background";
import Lightbox from "@/components/ink/lightbox";
import {
  AboutSection,
  Footer,
  GallerySection,
  Header,
  Hero,
  SummonSection,
} from "@/components/ink/sections";

export default function Home() {
  const [activeTag, setActiveTag] = useState<Tag | "ALL">("ALL");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeTag === "ALL" ? SHOTS : SHOTS.filter((s) => s.tag === activeTag)),
    [activeTag]
  );

  const openShot = useCallback(
    (slug: string) => {
      const idx = filtered.findIndex((s) => s.slug === slug);
      if (idx >= 0) setActiveIndex(idx);
    },
    [filtered]
  );

  const navigate = useCallback(
    (next: number) => setActiveIndex(next),
    []
  );

  const close = useCallback(() => setActiveIndex(null), []);

  const changeTag = useCallback((t: Tag | "ALL") => {
    setActiveTag(t);
    setActiveIndex(null);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-screen flex-col">
        {/* paper atmosphere */}
        <div className="paper-grain" aria-hidden />
        <div className="paper-vignette" aria-hidden />
        <InkBackground />

        <Header />

        <main className="relative z-10 flex-1">
          <Hero />
          <GallerySection
            shots={filtered}
            activeTag={activeTag}
            onTag={changeTag}
            onOpen={openShot}
          />
          <AboutSection />
          <SummonSection />
        </main>

        <Footer />

        <Lightbox
          shots={filtered}
          activeIndex={activeIndex}
          onClose={close}
          onNavigate={navigate}
        />
      </div>
    </MotionConfig>
  );
}
