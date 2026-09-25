import { motion, useReducedMotion } from "framer-motion";
import { PROFILE } from "@/data/profile";
import profilePhoto from "@/Assets/profile photo.jpg";
import photoOne from "@/Assets/1 image.jpg";
import photoTwo from "@/Assets/2.jpg";
import photoThree from "@/Assets/3.jpg";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="editorial-section about-section">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="editorial-index">01 / ABOUT HARSH</span>
      </motion.div>

      <div className="scrapbook-about">
        {/* Left Column: Personal Visual Notebook Card */}
        <motion.div
          className="scrapbook-left-card"
          initial={reduceMotion ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="scrapbook-illustration">
            <img
              className="profile-photo"
              src={profilePhoto}
              alt="Harsh Sharma looking toward the road at night"
            />
            <div className="profile-photo-wash" aria-hidden="true" />
            <div className="illustration-overlay">
              <span className="illustration-tag">PROFILE / HARSH SHARMA</span>
              <span className="illustration-word">CURIOUS</span>
              <span className="illustration-mark">✦</span>
            </div>
            <div className="illustration-inner">
              <p className="notebook-quote">
                &ldquo;Always looking for the next idea worth turning into something useful.&rdquo;
              </p>
            </div>
          </div>
          <p className="scrapbook-quote">
            A builder&apos;s mindset, a curious eye, and plenty of room for what&apos;s next.
          </p>
        </motion.div>

        {/* Right Column: Personal Philosophy and Focus */}
        <div className="scrapbook-content">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="blue-label">PERSONAL NOTEBOOK</div>
            <h2 className="scrapbook-title">
              &ldquo;I don&apos;t want to stop <em>exploring what&apos;s next.</em>&rdquo;
            </h2>

            <div className="about-copy-block">
              <p className="about-lead">
                {PROFILE.aboutDetails.split("\n\n")[0]}
              </p>
              <p className="about-body">
                {PROFILE.aboutDetails.split("\n\n")[1]}
              </p>
            </div>

            {/* Evidence & Status Blocks */}
            <div className="scrapbook-facts-grid">
              <div className="fact-card">
                <span className="fact-badge">NOW</span>
                <div className="fact-details">
                  <strong>Computer Science Engineering</strong>
                  <small>{PROFILE.institution}</small>
                </div>
              </div>

              <div className="fact-card">
                <span className="fact-badge">FOCUS</span>
                <div className="fact-details">
                  <strong>AI / ML / FULL-STACK / SYSTEMS</strong>
                  <small>Building reliable systems &amp; intelligent pipelines</small>
                </div>
              </div>

              <div className="fact-card">
                <span className="fact-badge">CURRENTLY BUILDING</span>
                <div className="fact-details">
                  <strong>DriveMind, EstateOps &amp; Selected Experiments</strong>
                  <small>Exploring voice, vision &amp; telemetry</small>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Snapshots row */}
          <div className="snapshot-row">
            <motion.div
              className="snapshot snapshot-one"
              whileHover={reduceMotion ? undefined : { y: -6, rotate: -2 }}
            >
              <div className="snapshot-frame snapshot-photo-frame">
                <img src={photoOne} alt="Harsh Sharma enjoying a rainy evening" />
                <span className="snapshot-number">01</span>
              </div>
              <span>finding ideas in unexpected places</span>
            </motion.div>

            <motion.div
              className="snapshot snapshot-two"
              whileHover={reduceMotion ? undefined : { y: -6, rotate: 3 }}
            >
              <div className="snapshot-frame snapshot-photo-frame">
                <img src={photoTwo} alt="Harsh Sharma smiling in a playful costume" />
                <span className="snapshot-number">02</span>
              </div>
              <span>keeping the work human and playful</span>
            </motion.div>

            <motion.div
              className="snapshot snapshot-three"
              whileHover={reduceMotion ? undefined : { y: -6, rotate: -3 }}
            >
              <div className="snapshot-frame snapshot-photo-frame">
                <img src={photoThree} alt="Harsh Sharma taking a quiet pause outdoors" />
                <span className="snapshot-number">03</span>
              </div>
              <span>taking the long way to the next idea</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
