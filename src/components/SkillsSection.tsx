import { Code2, Database, Wrench, Layers, Award } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend & UI/UX",
      icon: Code2,
      skills: [
        "React",
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
      skills: ["Java", "Python (Basic)", "Node.js (Basic)", "C"],
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
    {
      title: "Certifications",
      icon: Award,
      skills: [
        {
          name: "Introduction to Software Engineering - IBM",
          link: "/public/certification/INTROSOFT.pdf",
        },
        {
          name: "AI for Spring Development - IBM",
          link: "/public/certification/aiIBM.pdf",
        },
        {
          name: "AWS Cloud Foundations",
          link: "/public/certification/awscloud.pdf",
        },

        {
          name: "Cloud Native - IBM",
          link: "/public/certification/cloudnative.pdf",
        },
        {
          name: "Generative AI Elevate Software Dev - IBM",
          link: "/public/certification/GENAI.pdf",
        },
        { name: "Git and Hub", link: "/public/certification/GITGAT.pdf" },
        {
          name: "Design Patterns & Testing",
          link: "/public/certification/DESIGN.pdf",
        },
        { name: "HTML CSS JAVA", link: "/public/certification/FRONTEND.pdf" },
        {
          name: "Skill Building AI - IBM",
          link: "/public/certification/IBMSKILL.pdf",
        },
        {
          name: "Java Fundamentals - IBM",
          link: "/public/certification/JAVAFUND.pdf",
        },
        {
          name: "JD with Database",
          link: "/public/certification/JDDATA.pdf",
        },
        { name: "OOPJ - IBM", link: "/public/certification/OOPJ.pdf" },
        {
          name: "Spring Framework - IBM",
          link: "/public/certification/SPRINGFRAME.pdf",
        },
        {
          name: "Hackathon Certificate",
          link: "/public/certification/hackcert.pdf",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0f] border-t border-red-500/20"
    >
      <div className="max-w-[1440px] w-full px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <span className="text-red-500 text-sm tracking-wider uppercase font-semibold">
            Skills & Expertise
          </span>
          <h2 className="text-5xl text-white mt-2 font-bold">
            {"Tech Stack".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-red-500 transition-all duration-200 cursor-default"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-[#1a1a1f] backdrop-blur-xl border border-red-500/30 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 shadow-xl shadow-red-500/10 hover:shadow-2xl"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#0a0a0f] shadow-lg">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl text-white font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-red-500 text-sm">▸</span>

                      {typeof skill === "string" ? (
                        <span className="font-medium">{skill}</span>
                      ) : (
                        <a
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-white hover:underline transition"
                        >
                          {skill.name}
                        </a>
                      )}
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
