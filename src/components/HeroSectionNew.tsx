import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSectionNew() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#030014]/50 relative overflow-hidden border-t border-violet-500/20">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-[5]" />

      <div className="max-w-[1440px] w-full px-8 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-violet-500/10 backdrop-blur-md border border-violet-500/30 rounded-full text-sm text-violet-400 font-medium">
              🎓 Student • Full-Stack & AI/ML Developer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl tracking-tight mb-6 font-bold"
          >
            <span className="text-white">
              {"Designing and building".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-violet-500 transition-all duration-200 cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <br />
            <span className="text-violet-500">
              {"meaningful digital experiences".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block hover:scale-110 hover:-translate-y-1 transition-all duration-200 cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
          >
            I’m a Computer Science Engineering student focused on building AI-powered systems,
            backend services, and full-stack web applications. Currently integrating intelligent
            pipelines and designing clean, scalable digital experiences.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            {/* Primary */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 32px rgba(239, 68, 68, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-violet-500/30 font-medium"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Secondary */}
            <motion.a
              href="/resume/harshresume.pdf"
              download
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(139, 92, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-white/20 text-gray-300 rounded-full transition-all duration-300 flex items-center gap-2 font-medium hover:text-white hover:border-violet-500/40 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
