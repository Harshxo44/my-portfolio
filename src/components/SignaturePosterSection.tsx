import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const posterStack = ["REACT", "NEXT.JS", "JAVA", "SPRING BOOT", "PYTHON", "AI", "ESP32", "OBD-II"];

export function SignaturePosterSection() {
  const reduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    });
  }, [reduceMotion]);

  return (
    <section className="poster-section" onMouseMove={handlePointerMove} aria-labelledby="poster-title">
      <div className="poster-intro">
        <span className="editorial-index">00.1 / SYSTEM IDENTITY</span>
        <p>Not a photograph. A visual index of the things I build, break, and keep learning.</p>
      </div>

      <motion.div
        className="identity-poster"
        data-cursor="EXPLORE"
        style={{ "--poster-x": `${pointer.x * 10}px`, "--poster-y": `${pointer.y * 10}px` } as React.CSSProperties}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="poster-grid" aria-hidden="true" />
        <div className="poster-scanline" aria-hidden="true" />
        <div className="poster-topline">
          <span>HARSH SHARMA / PERSONAL SYSTEM</span>
          <span>INDIA / 2026</span>
        </div>
        <div className="poster-copy">
          <span className="poster-kicker">COMPUTER SCIENCE ENGINEER</span>
          <h2 id="poster-title">
            <span>HARSH</span>
            <em>SHARMA</em>
          </h2>
          <p>BUILDING <strong>AI</strong> / WEB / SYSTEMS</p>
        </div>
        <div className="poster-orbit poster-orbit-one" aria-hidden="true" />
        <div className="poster-orbit poster-orbit-two" aria-hidden="true" />
        <div className="poster-stack" aria-label="Technology stack">
          {posterStack.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
        </div>
        <div className="poster-terminal">
          <span>&gt; boot personal.system</span>
          <span>status: ONLINE</span>
          <span>focus: AUTOMOTIVE / AI</span>
          <span>signal: <i>●</i> <i>●</i> <i>●</i></span>
        </div>
        <div className="poster-footer">
          <span>DRIVEMIND / SWAAS / RIDENEST</span>
          <span>BUILD / TEST / REPEAT</span>
        </div>
      </motion.div>
    </section>
  );
}
