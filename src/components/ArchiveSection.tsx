import { Download, FileText, Image as ImageIcon, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PROFILE, RESUME_VARIANTS, CERTIFICATIONS } from "@/data/profile";

export function ArchiveSection() {
  const reduceMotion = useReducedMotion();
  const files = [
    { label: "PRIMARY RESUME", name: "Harsh_Final_Resume.pdf", path: PROFILE.resumePdf, type: "PDF" },
    ...RESUME_VARIANTS.slice(1, 3).map((resume) => ({ label: resume.role.toUpperCase(), name: resume.filename, path: resume.path, type: resume.format })),
    ...CERTIFICATIONS.slice(0, 3).map((certificate) => ({ label: certificate.issuer.toUpperCase(), name: certificate.title, path: certificate.pdf || "#", type: "CERTIFICATE" })),
  ];

  return (
    <section id="archive" className="archive-section editorial-section" aria-labelledby="archive-title">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <span className="editorial-index">06.1 / FILE CABINET</span>
        <div className="section-heading split-heading">
          <h2 id="archive-title">Things worth <em>keeping.</em></h2>
          <p>Actual documents from the workbench. Open a PDF in a new tab or download a role-specific file.</p>
        </div>
      </motion.div>
      <div className="archive-grid">
        {files.map((file, index) => (
          <motion.a
            key={file.name}
            href={file.path}
            target={file.type === "PDF" || file.type === "CERTIFICATE" ? "_blank" : undefined}
            rel="noreferrer"
            download={file.type === "DOCX" ? file.name : undefined}
            className="archive-file"
            whileHover={reduceMotion ? undefined : { y: -5, rotate: index % 2 ? 1 : -1 }}
          >
            <div className="archive-file-top"><span>0{index + 1}</span><span>{file.type === "CERTIFICATE" ? <ImageIcon size={15} /> : <FileText size={15} />}</span></div>
            <span className="archive-file-label">{file.label}</span>
            <strong>{file.name}</strong>
            <span className="archive-file-action">{file.type === "DOCX" ? <><Download size={14} /> DOWNLOAD</> : <><ArrowUpRight size={14} /> VIEW</>}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
