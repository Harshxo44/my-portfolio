import { motion, useReducedMotion } from "framer-motion";
import { PROOF_IN_PRACTICE } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export function ProofSection() {
  const reduceMotion = useReducedMotion();

  const scrollToProject = (id: string) => {
    const el = document.getElementById("projects");
    el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section className="editorial-section proof-section">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="editorial-index">03 / EVIDENCE &amp; PROOF</span>
        <div className="section-heading">
          <h2>Proof in <em>practice.</em></h2>
          <p>
            Skills are proven by real working code, not arbitrary percentage bars. Below is direct evidence mapping capabilities to actual repositories.
          </p>
        </div>
      </motion.div>

      <div className="proof-grid">
        {PROOF_IN_PRACTICE.map((item) => (
          <div key={item.category} className="proof-card">
            <div className="proof-card-header">
              <span className="proof-category-tag">{item.category}</span>
            </div>
            <div className="proof-project-list">
              {item.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="proof-project-item"
                  onClick={() => scrollToProject(proj.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") scrollToProject(proj.id); }}
                >
                  <span className="proof-arrow">→</span>
                  <span className="proof-title">{proj.title}</span>
                  <ArrowUpRight size={14} className="proof-icon" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
