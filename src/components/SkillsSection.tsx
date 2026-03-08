import { Code2, Database, Wrench, Layers } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend & UI/UX",
      icon: Code2,
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Figma",
        "Dart (Basic)",
        "Kotlin (Basic)",
      ],
    },
    {
      title: "Backend & Programming",
      icon: Layers,
      skills: ["Java", "Python (Basic)", "Node.js (Basic)", "Express", "C"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "AWS (Fundamentals)", "Netlify"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-[#030014]/50 border-t border-violet-500/20"
    >
      <div className="max-w-[1440px] w-full px-8 py-20 overflow-hidden">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <span className="text-violet-500 text-sm tracking-wider uppercase font-semibold">
            Skills & Expertise
          </span>
          <h2 className="text-5xl text-white mt-2 font-bold">
            {"Tech Stack".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-violet-500 transition-all duration-200 cursor-default"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Column Layout */}
        <motion.div 
          className="flex flex-col space-y-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-[#0a002a]/60 backdrop-blur-xl border border-violet-500/30 hover:border-violet-500/50 rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg shadow-violet-500/10 hover:shadow-xl flex flex-col md:flex-row md:items-center gap-4"
              >
                {/* Row header */}
                <div className="flex items-center gap-3 shrink-0 md:w-64">
                  <div className="p-2.5 rounded-xl bg-[#030014]/50 shadow-md group-hover:bg-violet-500/10 transition-colors">
                    <Icon className="w-5 h-5 text-violet-500" />
                  </div>
                  <h3 className="text-lg text-white font-medium">
                    {category.title}
                  </h3>
                </div>

                {/* Skills content area (horizontal wrap) */}
                <div className="flex flex-wrap gap-2 flex-grow">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      key={index}
                      className="flex items-center text-gray-300 bg-[#030014]/40 px-3 py-1.5 rounded-full border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/10 transition-colors text-sm"
                    >
                      <span>{skill as string}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
