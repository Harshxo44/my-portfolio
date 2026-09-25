import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CAPABILITY_MAP, CapabilityCategory } from "@/data/profile";
import { Sparkles, Check } from "lucide-react";

export function CapabilityMapSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("ai");
  const reduceMotion = useReducedMotion();

  const activeCategory = CAPABILITY_MAP.find((c) => c.id === activeCategoryId) || CAPABILITY_MAP[0];

  return (
    <section id="skills" className="editorial-section skills-section">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="editorial-index">02 / CAPABILITY MAP</span>
        <div className="section-heading split-heading">
          <h2>Interactive <em>Capability Map.</em></h2>
          <p>
            Technologies do not exist in isolation. Click any domain below to inspect the actual tools, frameworks, and pipelines applied in my work.
          </p>
        </div>
      </motion.div>

      <div className="capability-map-container">
        {/* Capability Diagram / Orbit System */}
        <div className="capability-diagram">
          <div className="capability-core">
            <span className="core-title">HARSH</span>
            <span className="core-sub">SYSTEMS &amp; AI</span>
          </div>

          {/* Node Category Buttons */}
          <div className="capability-nodes">
            {CAPABILITY_MAP.map((cat, idx) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  className={`capability-node node-${cat.id} ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveCategoryId(cat.id)}
                  aria-pressed={isActive}
                >
                  <span className="node-index">0{idx + 1}</span>
                  <span className="node-label">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Details & Technology List */}
        <div className="capability-detail-panel">
          <div className="panel-header">
            <span className="panel-tag">
              <Sparkles size={13} /> ACTIVE DOMAIN
            </span>
            <h3>{activeCategory.label} CAPABILITIES</h3>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="tech-grid"
            >
              {activeCategory.technologies.map((tech) => (
                <div key={tech} className="tech-badge">
                  <Check size={14} className="tech-check-icon" />
                  <span>{tech}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Summary table below panel */}
          <div className="all-capabilities-summary">
            <h4>TECHNICAL SUMMARY</h4>
            <div className="summary-rows">
              {CAPABILITY_MAP.map((cat) => (
                <div
                  key={cat.id}
                  className={`summary-row ${cat.id === activeCategoryId ? "is-highlighted" : ""}`}
                  onClick={() => setActiveCategoryId(cat.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveCategoryId(cat.id); }}
                >
                  <span className="summary-label">{cat.label}</span>
                  <span className="summary-techs">{cat.technologies.slice(0, 5).join(" • ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
