import { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Lightbulb, BookOpen, Layers } from "lucide-react";

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="case-study-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <motion.div
          className="case-study-dialog"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="case-study-header">
            <div className="header-meta">
              <span className="case-study-number">{project.number}</span>
              <span className="case-study-category">{project.category}</span>
            </div>
            <button className="case-study-close-btn" onClick={onClose} aria-label="Close case study modal">
              <X size={20} />
            </button>
          </div>

          <h2 id="modal-title" className="case-study-title">{project.title}</h2>
          <p className="case-study-tagline">{project.tagline}</p>

          {/* Action Links */}
          <div className="case-study-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="editorial-button editorial-button-dark">
              <Github size={15} /> GITHUB REPOSITORY
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="editorial-text-button">
                LIVE DEMO <ExternalLink size={14} />
              </a>
            )}
          </div>

          <div className="case-study-body">
            {/* System Architecture Flow Diagram */}
            <div className="case-study-section case-study-arch">
              <h3><Cpu size={16} /> SYSTEM ARCHITECTURE FLOW</h3>
              <div className="arch-flow-grid">
                {project.archFlow.map((step, idx) => (
                  <div key={idx} className="arch-step-card">
                    <span className="arch-step-label">{step.label}</span>
                    <span className="arch-step-sub">{step.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1. The Problem */}
            <div className="case-study-section">
              <h3><AlertTriangle size={16} /> THE PROBLEM</h3>
              <p>{project.caseStudy.problem}</p>
            </div>

            {/* 2. The Idea */}
            <div className="case-study-section">
              <h3><Lightbulb size={16} /> THE IDEA</h3>
              <p>{project.caseStudy.idea}</p>
            </div>

            {/* 3. System Architecture Details */}
            <div className="case-study-section">
              <h3><Layers size={16} /> SYSTEM ARCHITECTURE</h3>
              <p>{project.caseStudy.architecture}</p>
            </div>

            {/* 4. Technologies Used */}
            <div className="case-study-section">
              <h3>TECHNOLOGY STACK</h3>
              <div className="tech-stack-pills">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            {/* 5. Implementation */}
            <div className="case-study-section">
              <h3>PERSONAL IMPLEMENTATION</h3>
              <p>{project.caseStudy.implementation}</p>
            </div>

            {/* 6. Technical Challenges */}
            <div className="case-study-section">
              <h3>CHALLENGES &amp; SOLUTIONS</h3>
              <p>{project.caseStudy.challenges}</p>
            </div>

            {/* 7. Real Results & Key Deliverables */}
            <div className="case-study-section">
              <h3>RESULTS &amp; DELIVERABLES</h3>
              <p className="mb-3">{project.caseStudy.result}</p>
              <div className="deliverables-grid">
                {project.caseStudy.keyHighlights.map((hl, i) => (
                  <div key={i} className="deliverable-item">
                    <CheckCircle2 size={15} className="deliverable-icon" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Personal Learnings */}
            <div className="case-study-section">
              <h3><BookOpen size={16} /> LEARNINGS</h3>
              <p>{project.caseStudy.learnings}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
