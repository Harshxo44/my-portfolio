import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "AI/ML Intern — CodSoft",
      description:
        "Developed machine learning solutions, worked on Python-based ML projects, and applied classification/regression algorithms to practical datasets during the internship.",
      techStack: ["Python", "Machine Learning", "Data Analysis"],
      live: "",
      github: "https://github.com/Harshxo44",
    },
    {
      title: "DubAI Studio — AI Video Dubbing Platform",
      description:
        "Architected an end-to-end AI-powered multilingual video dubbing pipeline supporting 10+ languages with automated transcription, translation, and voice cloning. Integrated Faster Whisper, XTTS-v2, OpenVoice V2, and Demucs.",
      techStack: [
        "Node.js",
        "Express.js",
        "Python",
        "FFmpeg",
        "XTTS-v2",
        "Whisper",
        "OpenVoice V2",
        "Demucs",
      ],
      live: "",
      github: "https://github.com/Harshxo44",
    },
    {
      title: "DriveLedger — Fleet Profit Management System",
      description:
        "Developed a cross-platform financial management application featuring role-based workflow architecture. Integrated real-time data synchronization using Firebase Cloud Firestore and designed interactive analytics dashboards.",
      techStack: ["Flutter", "Firebase", "Cloud Firestore", "Dart", "FL Chart"],
      live: "",
      github: "https://github.com/Harshxo44",
    },
    {
      title: "More Projects on GitHub",
      description:
        "Explore more of my projects, experiments, and learning work on my GitHub profile.",
      techStack: ["GitHub"],
      live: "https://github.com/Harshxo44",
      github: "https://github.com/Harshxo44",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-[#030014]/50 border-t border-violet-500/20"
    >
      <div className="max-w-[1440px] w-full px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <span className="text-violet-500 text-sm tracking-wider uppercase font-semibold">
            Projects
          </span>
          <h2 className="text-5xl text-white mt-2 font-bold">Featured Work</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0a002a]/60 border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-300 shadow-xl shadow-violet-500/10 hover:shadow-2xl"
            >
              <h3 className="text-xl text-white mb-3 font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#030014] border border-violet-500/30 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-500 transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-violet-500/40 text-violet-400 rounded-full hover:bg-violet-500/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
