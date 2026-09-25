import { motion, useReducedMotion } from "framer-motion";

interface DoodleProps {
  mouseX?: number;
  mouseY?: number;
}

export function HeroDoodles({ mouseX = 0, mouseY = 0 }: DoodleProps) {
  const reduceMotion = useReducedMotion();

  // Parallax offsets based on mouse offset (-1 to +1)
  const calcParallax = (factorX: number, factorY: number) => {
    if (reduceMotion) return { x: 0, y: 0 };
    return {
      x: mouseX * factorX,
      y: mouseY * factorY,
    };
  };

  return (
    <div className="hero-doodles-container" aria-hidden="true">
      <motion.div
        className="doodle-item doodle-car"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85, rotate: -8 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: -4, ...calcParallax(-10, 7) }}
        transition={{ opacity: { duration: 0.7, delay: 0.45 }, scale: { duration: 0.7, delay: 0.45 }, rotate: { duration: 0.7, delay: 0.45 }, x: { type: "spring", stiffness: 80, damping: 20 }, y: { type: "spring", stiffness: 80, damping: 20 } }}
        whileHover={reduceMotion ? undefined : { scale: 1.05, rotate: -2 }}
      >
        <svg viewBox="0 0 160 100" className="doodle-svg doodle-wide" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 68h118c6 0 9-4 7-8l-8-16c-2-4-5-6-10-6H62l-14-15H34c-4 0-7 3-8 7l-5 24c-1 7 2 14 9 14Z" />
          <path d="M58 38h60l-12-14H72Z" />
          <circle cx="48" cy="69" r="12" />
          <circle cx="118" cy="69" r="12" />
          <path d="M34 55h10M128 55h8M73 78h28" />
          <path d="M18 83c18 5 34 6 48 3M110 85c13 2 25 1 38-4" strokeDasharray="4 6" />
        </svg>
        <span className="doodle-label">ideas_on_the_move.doodle</span>
      </motion.div>

      <motion.div
        className="doodle-item doodle-headphones"
        initial={reduceMotion ? false : { opacity: 0, y: -12, rotate: 8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 5, ...calcParallax(8, -7) }}
        transition={{ opacity: { duration: 0.65, delay: 0.58 }, rotate: { duration: 0.65, delay: 0.58 }, x: { type: "spring", stiffness: 80, damping: 20 }, y: { type: "spring", stiffness: 80, damping: 20 } }}
        whileHover={reduceMotion ? undefined : { scale: 1.05, rotate: 2 }}
      >
        <svg viewBox="0 0 120 120" className="doodle-svg" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 68V55a40 40 0 0 1 80 0v13" />
          <path d="M20 68c-5 0-9 4-9 9v13c0 5 4 9 9 9h9V68Z" />
          <path d="M100 68c5 0 9 4 9 9v13c0 5-4 9-9 9h-9V68Z" />
          <path d="M29 99c5 8 13 12 23 12M91 99c-5 8-13 12-23 12" strokeDasharray="3 5" />
          <text x="35" y="44" fill="currentColor" stroke="none" fontSize="9" fontFamily="Courier New, monospace">PLAY</text>
        </svg>
        <span className="doodle-label">soundtrack_mode.doodle</span>
      </motion.div>

      <motion.div
        className="doodle-item doodle-game"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8, rotate: 10 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 7, ...calcParallax(12, 10) }}
        transition={{ opacity: { duration: 0.6, delay: 0.7 }, scale: { duration: 0.6, delay: 0.7 }, rotate: { duration: 0.6, delay: 0.7 }, x: { type: "spring", stiffness: 85, damping: 20 }, y: { type: "spring", stiffness: 85, damping: 20 } }}
        whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: 3 }}
      >
        <svg viewBox="0 0 140 90" className="doodle-svg doodle-wide" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M30 28h80c13 0 21 11 25 30l3 13c1 6-4 10-10 7L105 61H35L12 78c-6 3-11-1-10-7l3-13c4-19 12-30 25-30Z" />
          <path d="M29 43v20M19 53h20M92 48h.1M107 57h.1" />
          <circle cx="106" cy="48" r="4" /><circle cx="94" cy="58" r="4" />
          <path d="M54 25c6-7 25-7 32 0" strokeDasharray="3 5" />
        </svg>
        <span className="doodle-label">play_build_repeat.doodle</span>
      </motion.div>

      <motion.div
        className="doodle-item doodle-guitar"
        initial={reduceMotion ? false : { opacity: 0, y: 15, rotate: -12 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: -9, ...calcParallax(-8, -12) }}
        transition={{ opacity: { duration: 0.75, delay: 0.82 }, rotate: { duration: 0.75, delay: 0.82 }, x: { type: "spring", stiffness: 75, damping: 20 }, y: { type: "spring", stiffness: 75, damping: 20 } }}
        whileHover={reduceMotion ? undefined : { scale: 1.04, rotate: -5 }}
      >
        <svg viewBox="0 0 120 160" className="doodle-svg" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M58 19v73" />
          <path d="M52 19h12M49 34h18M51 49h14" />
          <path d="M58 83c-15-9-29 2-23 17 4 9 15 11 21 5 6 12 25 11 29-1 4-13-11-22-27-13Z" />
          <circle cx="59" cy="94" r="5" />
          <path d="M51 105c-4 18-9 30-20 42M64 106c5 18 10 29 21 41" strokeDasharray="4 5" />
        </svg>
        <span className="doodle-label">build_your_rhythm.doodle</span>
      </motion.div>

      <motion.div
        className="doodle-item doodle-notes"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, ...calcParallax(6, -6) }}
        transition={{ opacity: { duration: 0.6, delay: 0.95 }, y: { duration: 0.6, delay: 0.95 }, x: { type: "spring", stiffness: 75, damping: 20 } }}
      >
        <span className="music-note note-one">♪</span>
        <span className="music-note note-two">♫</span>
        <span className="music-note note-three">·</span>
      </motion.div>

      {/* 1. AI / ML Doodle - Neural Circuit & Connected Nodes */}
      <motion.div
        className="doodle-item doodle-ai"
        animate={calcParallax(12, 10)}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -4 }}
      >
        <svg viewBox="0 0 120 120" className="doodle-svg" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Handdrawn neural nodes */}
          <circle cx="35" cy="40" r="10" strokeDasharray="100" />
          <circle cx="85" cy="35" r="12" />
          <circle cx="60" cy="85" r="11" />
          <circle cx="25" cy="90" r="7" />
          <circle cx="95" cy="85" r="7" />
          {/* Connecting lines */}
          <path d="M 44 43 L 74 37" />
          <path d="M 39 49 L 54 76" />
          <path d="M 78 44 L 66 75" />
          <path d="M 32 90 L 50 87" />
          <path d="M 71 85 L 88 85" />
          {/* Handwritten annotation */}
          <text x="32" y="22" fill="currentColor" stroke="none" fontSize="9" fontFamily="Comic Sans MS, cursive" letterSpacing="0.05em">AI / ML</text>
        </svg>
        <span className="doodle-label">neural_nodes.doodle</span>
      </motion.div>

      {/* 2. Coding Doodle - Terminal & Debugging Notes */}
      <motion.div
        className="doodle-item doodle-coding"
        animate={calcParallax(-10, 14)}
        transition={{ type: "spring", stiffness: 90, damping: 22 }}
        whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 5 }}
      >
        <svg viewBox="0 0 130 110" className="doodle-svg" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Handdrawn terminal window */}
          <rect x="10" y="15" width="110" height="80" rx="6" />
          <line x1="10" y1="35" x2="120" y2="35" />
          <circle cx="25" cy="25" r="3" fill="currentColor" />
          <circle cx="36" cy="25" r="3" fill="currentColor" />
          <circle cx="47" cy="25" r="3" fill="currentColor" />
          {/* Code lines */}
          <path d="M 22 50 L 34 58 L 22 66" />
          <line x1="42" y1="66" x2="75" y2="66" />
          <line x1="22" y1="80" x2="95" y2="80" strokeDasharray="3 3" />
          <text x="75" y="27" fill="currentColor" stroke="none" fontSize="8" fontFamily="Courier New, monospace">sh.run()</text>
        </svg>
        <span className="doodle-label">terminal_core.doodle</span>
      </motion.div>

      {/* 3. Exploration Doodle - Compass & Map Path */}
      <motion.div
        className="doodle-item doodle-exploration"
        animate={calcParallax(15, -8)}
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
        whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -6 }}
      >
        <svg viewBox="0 0 110 110" className="doodle-svg" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="55" cy="55" r="40" />
          {/* Compass dial marks */}
          <line x1="55" y1="18" x2="55" y2="24" />
          <line x1="55" y1="86" x2="55" y2="92" />
          <line x1="18" y1="55" x2="24" y2="55" />
          <line x1="86" y1="55" x2="92" y2="55" />
          {/* Compass needle */}
          <polygon points="55,25 63,55 55,85 47,55" />
          <circle cx="55" cy="55" r="4" fill="currentColor" />
          <text x="49" y="14" fill="currentColor" stroke="none" fontSize="10" fontWeight="bold" fontFamily="Courier New, monospace">N</text>
        </svg>
        <span className="doodle-label">curiosity.doodle</span>
      </motion.div>

      {/* 4. Building Doodle - Architecture & System Blocks */}
      <motion.div
        className="doodle-item doodle-building"
        animate={calcParallax(-14, -12)}
        transition={{ type: "spring", stiffness: 95, damping: 20 }}
        whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 4 }}
      >
        <svg viewBox="0 0 120 110" className="doodle-svg" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* System block 1 */}
          <rect x="15" y="15" width="40" height="35" rx="4" />
          <text x="22" y="37" fill="currentColor" stroke="none" fontSize="9" fontFamily="Courier New, monospace">IN</text>
          {/* Arrow */}
          <path d="M 55 32 L 70 32" />
          <path d="M 65 27 L 72 32 L 65 37" />
          {/* System block 2 */}
          <rect x="72" y="15" width="40" height="35" rx="4" />
          <text x="77" y="37" fill="currentColor" stroke="none" fontSize="9" fontFamily="Courier New, monospace">API</text>
          {/* Down arrow */}
          <path d="M 92 50 L 92 65" />
          <path d="M 87 60 L 92 67 L 97 60" />
          {/* System block 3 */}
          <rect x="40" y="65" width="65" height="35" rx="4" />
          <text x="50" y="86" fill="currentColor" stroke="none" fontSize="9" fontFamily="Courier New, monospace">SYSTEM</text>
        </svg>
        <span className="doodle-label">architecture.doodle</span>
      </motion.div>

      {/* 5. Personal Doodle - Handwritten Notes & "learn -> build -> repeat" */}
      <motion.div
        className="doodle-item doodle-personal"
        animate={calcParallax(8, 16)}
        transition={{ type: "spring", stiffness: 105, damping: 19 }}
        whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: -3 }}
      >
        <div className="handwritten-note-card">
          <span className="note-pin" />
          <p className="note-text">learn → build → repeat</p>
          <span className="note-scribble">what&apos;s next?</span>
        </div>
      </motion.div>
    </div>
  );
}
