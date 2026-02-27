import { Download, FileText, Eye } from "lucide-react";

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0f] border-t border-red-500/20"
    >
      <div className="max-w-[1440px] w-full px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <span className="text-red-500 text-sm tracking-wider uppercase font-semibold">
            Resume
          </span>
          <h2 className="text-5xl text-white mt-2 font-bold">
            Resume & Certifications
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Card */}
          <div className="bg-black border border-red-500/20 rounded-2xl p-8 shadow-lg shadow-red-500/10">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-[#0a0a0f] border border-red-500/30 rounded-xl">
                <FileText className="w-12 h-12 text-red-500" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl text-white mb-2 font-semibold">
                  Harsh Sharma — Resume
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  View or download my resume to explore my education, technical
                  skills, certifications, projects, and hackathon experience.
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {[
                    "Computer Engineering Student",
                    "UI/UX & Frontend Developer",
                    "IBM Professional Java Certified",
                    "AWS & NVIDIA Learning Program",
                    "Hackathon Participant",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="text-red-500">✓</span>
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* View */}
                  <a
                    href="/Personal Portfolio Website UI/src/Resume/Pdf-resume.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-red-500/40 text-red-400 rounded-full hover:bg-red-500/10 transition-all duration-300 font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    View Resume
                  </a>

                  {/* Download */}
                  <a
                    href="/Personal Portfolio Website UI/src/Resume/Pdf-resume.docx"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all duration-300 shadow-lg shadow-red-500/30 font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
