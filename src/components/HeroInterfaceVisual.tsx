import { motion, useReducedMotion } from "framer-motion";

const asciiLines = [
  "          .-''''-.",
  "       .-'  .--.  '-.",
  "     .'   .'    '.   '.",
  "    /   .'  .--.  '.   \\",
  "   ;   /   /    \\   \\   ;",
  "   |  ;   |  ()  |   ;  |",
  "   ;   \\   \\ -- /   /   ;",
  "    \\   '.  '--'  .'   /",
  "     '.   '-.__.-'   .'",
  "       '-.________.-'",
];

export function HeroInterfaceVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-interface-visual" aria-hidden="true">
      <motion.div
        className="hero-artifact-panel"
        initial={reduceMotion ? false : { opacity: 0, x: -24 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.08 }}
      >
        <div className="artifact-topbar">
          <strong>HARSH / WORKBENCH</strong>
          <span>● ● ●</span>
        </div>
        <div className="artifact-visual">
          <div className="artifact-flower" />
          <div className="artifact-cassette cassette-dark">PLAY<br /><span>60</span></div>
          <div className="artifact-cassette cassette-red">REW<br /><span>∞</span></div>
          <div className="artifact-cassette cassette-cream">MIX<br /><span>01</span></div>
        </div>
        <div className="artifact-footer">
          <span>EVERY IDEA, MADE USEFUL.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-terminal-panel"
        initial={reduceMotion ? false : { opacity: 0, x: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.18 }}
      >
        <div className="terminal-corner terminal-corner-top" />
        <div className="terminal-copy">
          <span className="terminal-prompt">&gt; booting / personal.system</span>
          <div className="ascii-portrait">
            {asciiLines.map((line, index) => (
              <span key={`${line}-${index}`}>{line}</span>
            ))}
          </div>
          <span className="terminal-status">STATUS: CURIOUS / BUILDING / ONLINE</span>
        </div>
        <div className="terminal-corner terminal-corner-bottom" />
      </motion.div>
    </div>
  );
}
