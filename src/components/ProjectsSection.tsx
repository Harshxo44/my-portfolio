import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Swaas – Health Prediction App",
      description:
        "A mobile application focused on health awareness and prediction. Built using Dart and Kotlin, designed to explore mobile development and real-world problem solving.",
      techStack: ["Dart", "Kotlin"],
      live: "",
      github: "https://github.com/Harshxo44/Swaas_FullApp",
    },
    {
      title: "PingMeNot – Anonymous Chat App",
      description:
        "A web-based anonymous chat application that allows users to communicate without revealing identity. Focused on frontend logic, UI flow, and real-time interaction concepts.",
      techStack: ["React", "JavaScript"],
      live: "",
      github: "https://github.com/Harshxo44/pingmenot-main",
    },
    {
      title: "E-Purse — Expense & Budget Tracker",
      description:
        "A finance dashboard web application built with React that allows users to track expenses, manage budgets, and analyze spending patterns through a clean and responsive interface.",
      techStack: ["React", "JavaScript", "CSS", "TypeScript"],
      live: "",
      github: "https://github.com/Harshxo44/E-Purse",
    },
    {
      title: "SyncBoard",
      description:
        "A real-time collaborative Kanban-style task management board where multiple users can create, organize, and move tasks with instant synchronization and drag-and-drop functionality.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
      live: "",
      github: "https://github.com/Harshxo44/syncboard",
    },
    {
      title: "Mini Game Project",
      description:
        "A small interactive game built for learning core programming concepts, logic building, and user interaction.",
      techStack: ["JavaScript"],
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
      className="min-h-screen flex items-center justify-center bg-[#0a0a0f] border-t border-red-500/20"
    >
      <div className="max-w-[1440px] w-full px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <span className="text-red-500 text-sm tracking-wider uppercase font-semibold">
            Projects
          </span>
          <h2 className="text-5xl text-white mt-2 font-bold">Featured Work</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1a1a1f] border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 shadow-xl shadow-red-500/10 hover:shadow-2xl"
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
                    className="px-2 py-1 bg-black border border-red-500/30 rounded text-xs text-gray-300"
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
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-red-500/40 text-red-400 rounded-full hover:bg-red-500/10 transition-all"
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
