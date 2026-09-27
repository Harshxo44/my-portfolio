import { motion, useReducedMotion } from "framer-motion";
import { PROFILE, CERTIFICATIONS, RESUME_VARIANTS } from "@/data/profile";
import { Download, Eye, FileText, Award, CheckCircle2, FileSpreadsheet } from "lucide-react";

export function ResumeSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="resume" className="editorial-section resume-section">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <span className="editorial-index">06 / RESUME &amp; QUALIFICATIONS</span>
        <div className="section-heading">
          <h2>Resume &amp; <em>Certifications.</em></h2>
          <p>
            Official academic credentials, role-tailored resumes, and verified software engineering capabilities.
          </p>
        </div>
      </motion.div>

      <div className="resume-grid">
        {/* Main Resume Overview Card */}
        <div className="resume-main-card">
          <div className="resume-card-header">
            <div className="resume-icon-wrapper">
              <FileText size={28} />
            </div>
            <div>
              <h3>HARSH SHARMA</h3>
              <p className="resume-subtitle">Computer Science Engineering Student</p>
            </div>
          </div>

          <p className="resume-bio">
            Official engineering resume detailing Computer Science coursework at Parul University, AI/ML pipeline implementations, backend systems development, and cloud credentials.
          </p>

          <div className="resume-bullets">
            <div className="bullet-item">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>B.Tech Computer Science &amp; Engineering @ Parul University</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>AWS Certified Cloud Practitioner</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>IBM Java Developer &amp; Deep Learning Credentials</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={16} className="bullet-icon" />
              <span>Full-Stack &amp; AI Pipeline Engineering Experience</span>
            </div>
          </div>

          <div className="resume-actions-row">
            <a
              className="editorial-button editorial-button-dark"
              href={PROFILE.resumePdf}
              target="_blank"
              rel="noreferrer"
            >
              <Eye size={15} /> VIEW RESUME (PDF)
            </a>
            <a
              className="editorial-button"
              href={PROFILE.resumePdf}
              download="Harsh_Final_Resume.pdf"
            >
              <Download size={15} /> DOWNLOAD MAIN RESUME
            </a>
          </div>

          {/* Role-Specific Resume Downloads */}
          <div className="role-resumes-wrapper" style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
            <h4 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink)' }}>
              <FileSpreadsheet size={16} /> Specialized Role Resumes
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {RESUME_VARIANTS.slice(1).map((variant) => (
                <a
                  key={variant.filename}
                  href={variant.path}
                  download={variant.filename}
                  className="editorial-button"
                  style={{ fontSize: '12px', padding: '10px 14px', justifyContent: 'space-between', width: '100%' }}
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{variant.title}</span>
                  <Download size={13} style={{ flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="certifications-card">
          <div className="cert-header">
            <Award size={20} className="cert-header-icon" />
            <h3>VERIFIED CERTIFICATIONS</h3>
          </div>

          <div className="cert-list">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="cert-item">
                <div className="cert-details">
                  <strong className="cert-title">{cert.title}</strong>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
                {cert.pdf ? (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-verify-badge"
                  >
                    VERIFIED ↗
                  </a>
                ) : (
                  <span className="cert-badge">VERIFIED</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
