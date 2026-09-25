import { motion, useReducedMotion } from "framer-motion";
import { PROFILE } from "@/data/profile";
import { ArrowUpRight, Mail, Github, Linkedin, Instagram } from "lucide-react";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="editorial-contact">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <span className="editorial-index">07 / CONTACT</span>

        <h2 className="contact-heading">
          LET&apos;S BUILD <br />
          <em>SOMETHING.</em>
        </h2>

        <p className="contact-copy">
          Have an idea, a problem worth solving, or an interesting thing to build?
        </p>

        <div className="contact-actions">
          <a
            className="editorial-button editorial-button-dark contact-main-btn"
            href={`mailto:${PROFILE.email}`}
          >
            LET&apos;S TALK <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-links-grid">
          <a
            href={`mailto:${PROFILE.email}`}
            className="contact-link-card"
          >
            <Mail size={18} />
            <span>EMAIL</span>
            <small>{PROFILE.email}</small>
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="contact-link-card"
          >
            <Github size={18} />
            <span>GITHUB</span>
            <small>github.com/Harshxo44</small>
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-link-card"
          >
            <Linkedin size={18} />
            <span>LINKEDIN</span>
            <small>linkedin.com/in/harshxo44</small>
          </a>

          <a
            href={PROFILE.instagram}
            target="_blank"
            rel="noreferrer"
            className="contact-link-card"
          >
            <Instagram size={18} />
            <span>INSTAGRAM</span>
            <small>@harshh.ok</small>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
