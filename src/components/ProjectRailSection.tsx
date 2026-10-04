import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/data/projects";

export function ProjectRailSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="project-rail-section" aria-labelledby="project-rail-title">
      <div className="project-rail-heading">
        <span className="editorial-index">04.1 / PROJECT SIGNALS</span>
        <h2 id="project-rail-title">A few things I&apos;ve <em>put in motion.</em></h2>
        <p>Scroll sideways through the systems. Open the main project list below for the full case studies.</p>
      </div>
      <div className="project-rail" tabIndex={0} aria-label="Horizontal project gallery">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.id}
            href="#projects"
            data-cursor="VIEW"
            className={`rail-card rail-card-${(index % 4) + 1}`}
            whileHover={reduceMotion ? undefined : { y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="rail-card-visual">
              <span>{project.number}</span>
              <strong>{project.title.split(" ")[0]}</strong>
              <i>{project.isAi ? "AI /" : "SYSTEM /"} BUILD</i>
            </div>
            <div className="rail-card-meta">
              <span>{project.category}</span>
              <ArrowUpRight size={16} />
            </div>
            <p>{project.tagline}</p>
            <small><Github size={12} /> repository-backed work</small>
          </motion.a>
        ))}
        <a className="rail-card rail-card-external" href="https://github.com/Harshxo44/ride-nest" target="_blank" rel="noreferrer" data-cursor="OPEN">
          <div className="rail-card-visual"><span>05</span><strong>RIDENEST</strong><i>WEB / PRODUCT</i></div>
          <div className="rail-card-meta"><span>EXTERNAL REPOSITORY</span><ArrowUpRight size={16} /></div>
          <p>A real project repository in the wider build log.</p>
          <small><Github size={12} /> view on GitHub</small>
        </a>
      </div>
    </section>
  );
}
