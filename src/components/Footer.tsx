import { PROFILE } from "@/data/profile";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export function Footer() {
  const reduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="editorial-footer">
      <span className="footer-brand">
        HARSH SHARMA / AI · ML · FULL-STACK ENGINEERING · SYSTEMS
      </span>

      <div className="footer-links">
        <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
          <Github size={16} />
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
          <Linkedin size={16} />
        </a>
        <a href={PROFILE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Profile">
          <Instagram size={16} />
        </a>
        <a href={`mailto:${PROFILE.email}`} aria-label="Send Email">
          <Mail size={16} />
        </a>
      </div>

      <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll back to top">
        BACK TO TOP <ArrowUp size={15} />
      </button>
    </footer>
  );
}
