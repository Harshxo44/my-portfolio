import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS, Project } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { ArrowUpRight, Plus, Eye } from "lucide-react";

export function ProjectsSection() {
  const [revealedProjectId, setRevealedProjectId] = useState<string | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  const handleCardClick = (project: Project) => {
    // If not revealed yet (e.g. mobile tap), reveal first
    if (revealedProjectId !== project.id) {
      setRevealedProjectId(project.id);
    } else {
      // If already revealed, open the case study modal
      setActiveModalProject(project);
    }
  };

  return (
    <section id="projects" className="editorial-section projects-section">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <span className="editorial-index">04 / SELECTED WORK</span>
        <div className="section-heading split-heading">
          <h2>Engineering &amp; <em>Systems Work.</em></h2>
          <p>
            Real applications built with intention. Hover or tap any project to reveal details, then open the complete system case study.
          </p>
        </div>
      </motion.div>

      <div className="project-list">
        {PROJECTS.map((project) => {
          const isRevealed = revealedProjectId === project.id;
          return (
            <motion.article
              key={project.id}
              layout
              className={`project-row ${isRevealed ? "is-revealed" : ""}`}
              onMouseEnter={() => setRevealedProjectId(project.id)}
            >
              <div
                className="project-trigger"
                onClick={() => handleCardClick(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(project);
                  }
                }}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-meta">{project.category}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-summary">{project.summary}</span>
                <button
                  className="project-toggle"
                  aria-label={`Open case study for ${project.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalProject(project);
                  }}
                >
                  <Plus size={20} className="toggle-icon" />
                </button>
              </div>

              {/* Revealed Content Drawer */}
              {isRevealed && (
                <motion.div
                  className="project-detail"
                  initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="project-detail-text">{project.tagline}</p>
                  
                  <div className="project-stack">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="stack-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions-row">
                    <button
                      className="editorial-button editorial-button-dark"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <Eye size={15} /> VIEW CASE STUDY
                    </button>
                    
                    <a
                      className="editorial-text-button"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GITHUB REPOSITORY <ArrowUpRight size={15} />
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.article>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
