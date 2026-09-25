import { Code2, Database, Wrench, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI / Machine Learning",
      icon: Cpu,
      skills: [
        { name: "XTTS-v2 & OpenVoice V2", detail: "DubAI Studio voice cloning" },
        { name: "Faster Whisper ASR", detail: "Multilingual transcription" },
        { name: "Demucs v4", detail: "Vocal stem separation" },
        { name: "TensorFlow & Keras", detail: "Transfer learning waste sorting" },
        { name: "PyTorch & OpenCV", detail: "Deep vision & audio features" },
        { name: "Pandas & Scikit-Learn", detail: "NYC TLC Taxi analytics" },
      ],
    },
    {
      title: "Backend & Systems",
      icon: Layers,
      skills: [
        { name: "Node.js & Express.js", detail: "DubAI & Swaas REST APIs" },
        { name: "Java & Spring Boot", detail: "Velora automotive backend" },
        { name: "Python 3.10+", detail: "AI audio & data pipelines" },
        { name: "REST API Architecture", detail: "Microservice routing & auth" },
        { name: "C++", detail: "Core CS Data Structures" },
      ],
    },
    {
      title: "Frontend Engineering",
      icon: Code2,
      skills: [
        { name: "React 18", detail: "Interactive web applications" },
        { name: "TypeScript", detail: "Typed application interfaces" },
        { name: "Tailwind CSS", detail: "Custom responsive styling" },
        { name: "Flutter & Dart", detail: "DriveLedger mobile fleet app" },
      ],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: [
        { name: "AWS Cloud", detail: "Certified Cloud Practitioner" },
        { name: "Firebase Firestore", detail: "DriveLedger & Swaas backend" },
        { name: "MongoDB", detail: "NoSQL document collections" },
        { name: "MySQL / H2", detail: "Relational persistence" },
      ],
    },
    {
      title: "Tools & Infrastructure",
      icon: Wrench,
      skills: [
        { name: "FFmpeg", detail: "Media processing & audio sync" },
        { name: "Git & GitHub", detail: "Certified version control" },
        { name: "Google Colab GPU", detail: "Cloud T4 acceleration" },
        { name: "Postman & Docker", detail: "API testing & containerization" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#030014]/60 border-t border-violet-500/20 text-gray-200"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="text-violet-400 text-xs sm:text-sm tracking-wider uppercase font-semibold">
            Skills & Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl text-white mt-2 font-bold tracking-tight">
            Tech Stack
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-[#0a002a]/60 backdrop-blur-xl border border-violet-500/30 hover:border-violet-500/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl shadow-violet-500/5 hover:shadow-violet-500/15"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-violet-500/20">
                  <div className="p-2.5 rounded-xl bg-[#030014]/60 border border-violet-500/30">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 bg-[#030014]/60 border border-violet-500/20 hover:border-violet-500/50 rounded-xl transition-all hover:bg-violet-500/10 group"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {skill.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5 font-sans">
                        → {skill.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
