import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { HeroDoodles } from "./doodles/HeroDoodles";
import { HeroInterfaceVisual } from "./HeroInterfaceVisual";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize coordinates to range [-1, 1]
    const normX = (clientX / innerWidth) * 2 - 1;
    const normY = (clientY / innerHeight) * 2 - 1;
    setMousePos({ x: normX, y: normY });
  }, [reduceMotion]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section
      id="home"
      className="editorial-hero notebook-theme"
      onMouseMove={handleMouseMove}
    >
      <div className="hero-noise" aria-hidden="true" />
      <div className="paper-backdrop paper-backdrop-left" aria-hidden="true" />
      <div className="paper-backdrop paper-backdrop-right" aria-hidden="true" />

      {/* Notebook margin & grid lines */}
      <div className="notebook-lines-overlay" aria-hidden="true" />

      <div className="hero-copy">
        <span className="editorial-index">00 / PERSONAL SYSTEM</span>

        <motion.div
          className="hero-note"
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-note-pin" />
          <span className="hero-kicker">COMPUTER SCIENCE ENGINEERING STUDENT</span>
          <span className="hero-note-line">personal workbench &amp; system log</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          className="hero-headline"
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="headline-heavy">ideas</span>
          <br />
          <span className="headline-heavy">into</span>
          <br />
          <span className="headline-heavy">useful</span>
          <br />
          <span className="headline-serif">systems.</span>
        </motion.h1>

        {/* Personal Intro Copy */}
        <motion.div
          className="hero-description-block"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.25 }}
        >
          <p className="hero-description">
            {PROFILE.bioIntro}
          </p>
          <p className="hero-philosophy">
            {PROFILE.personalPhilosophy}
          </p>
        </motion.div>

        {/* Handwritten line */}
        <p className="handwritten-line">{PROFILE.handwrittenLine}</p>

        {/* CTA Actions */}
        <div className="hero-actions">
          <button
            className="editorial-button editorial-button-dark"
            onClick={() => scrollToSection("about")}
          >
            MEET HARSH <ArrowDown size={16} />
          </button>
          <a
            className="editorial-text-button"
            href={`mailto:${PROFILE.email}`}
          >
            LET&apos;S TALK <ArrowUpRight size={16} />
          </a>
          <button
            className="editorial-text-button"
            onClick={() => scrollToSection("projects")}
          >
            VIEW WORK →
          </button>
        </div>
      </div>

      <HeroInterfaceVisual />

      {/* Interactive Hand-Drawn Doodles with Cursor Parallax */}
      <HeroDoodles mouseX={mousePos.x} mouseY={mousePos.y} />
    </section>
  );
}
