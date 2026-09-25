import { motion, useReducedMotion } from "framer-motion";
import { TUTORIALS } from "@/data/profile";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function TutorialsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="tutorials" className="editorial-section tutorials-section">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <span className="editorial-index">05 / TUTORIALS &amp; EXPERIMENTS</span>
        <div className="section-heading split-heading">
          <h2>Learn by <em>building.</em></h2>
          <p>
            Short, technical notes and walkthroughs distilled from active engineering problems: AI audio pipelines, system safety boundaries, and offline data sync.
          </p>
        </div>
      </motion.div>

      <div className="tutorial-grid">
        {TUTORIALS.map((tutorial) => (
          <article key={tutorial.title} className="tutorial-card">
            <div className="tutorial-card-body">
              <div className="tutorial-card-meta">
                <span>{tutorial.number}</span>
                <span>{tutorial.category}</span>
              </div>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.summary}</p>
              <div className="tutorial-topics">
                {tutorial.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
              <button className="editorial-text-button" type="button" disabled aria-disabled="true">
                <BookOpen size={14} /> READ ARTICLE <ArrowUpRight size={14} />
                <small className="coming-soon-tag">COMING SOON</small>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
